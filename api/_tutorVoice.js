/**
 * Voix de KONAN (mode « Je ne comprends pas ») : un petit garçon de 10 ans, joyeux, qui articule bien
 * (choix du fondateur, 2026-11-22). Synthèse vocale Gemini côté serveur.
 *
 * 1. speakableText : le texte affiché (gras **, listes, formules $…$ en LaTeX) devient une phrase à dire
 *    (« $\frac{a}{b}$ » → « a sur b », « $x^2$ » → « x au carré »…).
 * 2. synthesizeSpeech : Gemini TTS, puis WAV ramené à 16 kHz mono (≈ 32 Ko par seconde au lieu de 48)
 *    pour ménager le forfait Internet des élèves.
 */
export const VOICE_MODELS = ['gemini-3.8-flash-tts', 'gemini-3.8-flash-lite-tts'];
export const VOICE_NAME = process.env.KONAN_VOICE_NAME || 'Puck';
/**
 * Voix rendue plus enfantine par traitement du son (childVoice), si on le demande. Après écoute (2026-11-22),
 * le fondateur garde la voix Puck D'ORIGINE : 1 par défaut (aucun traitement). 1.2 à 1.4 = plus enfantin.
 * Réglable sur Vercel : KONAN_VOICE_PITCH.
 */
export function voicePitch(env = process.env) {
  const n = Number.parseFloat(String(env.KONAN_VOICE_PITCH || ''));
  return Number.isFinite(n) && n >= 1 && n <= 1.6 ? n : 1;
}
/**
 * Consigne de jeu SÉPARÉE du texte à lire (« notes du metteur en scène » puis « TRANSCRIPT ») : sans cette
 * séparation, la voix lisait parfois la consigne elle-même à voix haute (vu le 2026-11-22).
 */
export function voicePrompt(text) {
  // 2026-11-23 : AUCUNE consigne, le texte seul. Mesuré sur la même phrase : avec des « notes » de mise en scène,
  // la voix répétait la phrase deux fois ou ajoutait de longs silences (18 à 45 s au lieu de 9 s : « KONE parle
  // mal »), ou lisait la consigne ; texte seul = lu une fois, durée normale, et 2 fois plus vite à fabriquer.
  // La voix Puck est déjà joyeuse ; le français est imposé par languageCode fr-FR.
  return String(text || '');
}

/** Ancienne consigne (gardée pour mémoire, NE PLUS UTILISER : provoque répétitions et silences). */
export function voicePromptWithNotes(text) {
  return [
    "DIRECTOR'S NOTES (never read these notes aloud)",
    // Choix du fondateur (2026-11-22) : Puck, mais plus enfantin, « comme un petit garçon ivoirien de 9 ans »
    'Voice: a cheerful, playful 9-year-old Ivorian boy from Abidjan, a real child\'s voice: light, high-pitched, bubbly, smiling.',
    'Accent: natural French from Côte d\'Ivoire (Abidjan), friendly and lively, but every word stays easy to understand.',
    'Delivery: very clear articulation, natural pace (not too fast, not too slow), warm and encouraging, like a kid proud to explain to a friend.',
    'Read ONLY the transcript below, exactly as written, nothing else.',
    '',
    'TRANSCRIPT:',
    text,
  ].join('\n');
}
// Qualité du son envoyé : celle d'origine de Gemini (24 kHz). Le fondateur trouvait que KONE « parlait mal »
// avec l'ancienne réduction à 16 kHz (filtre simple) : la voix n'est plus abîmée (2026-11-23).
const OUT_RATE = 16000; // utilisé seulement si KONAN_VOICE_RATE le demande
function outRate(sourceRate) {
  const n = Number.parseInt(String(process.env.KONAN_VOICE_RATE || ''), 10);
  return Number.isFinite(n) && n >= 8000 && n < sourceRate ? n : sourceRate;
}
const MAX_CHARS = 1500;

const GREEK = {
  alpha: 'alpha', beta: 'bêta', gamma: 'gamma', delta: 'delta', Delta: 'delta', epsilon: 'epsilon', varepsilon: 'epsilon',
  theta: 'thêta', lambda: 'lambda', mu: 'mu', pi: 'pi', rho: 'rhô', sigma: 'sigma', Sigma: 'sigma', tau: 'tau',
  phi: 'phi', varphi: 'phi', omega: 'oméga', Omega: 'oméga',
};

/** Lit un groupe {…} à partir de s[i] === '{' ; renvoie [contenu, index après la accolade fermante]. */
function readGroup(s, i) {
  if (s[i] !== '{') {
    // Argument d'un seul caractère (ex. \frac12, x^2)
    return [s[i] || '', i + 1];
  }
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') {
      depth--;
      if (depth === 0) return [s.slice(i + 1, j), j + 1];
    }
  }
  return [s.slice(i + 1), s.length];
}

/** Formule LaTeX → mots français à dire. */
export function latexToFrench(src) {
  let s = String(src || '');
  // Commandes à deux arguments ou à un argument, de l'intérieur vers l'extérieur
  const replaceCmd = (cmd, render) => {
    let k;
    while ((k = s.indexOf(cmd)) >= 0) {
      let i = k + cmd.length;
      const args = [];
      for (let n = 0; n < render.length; n++) {
        while (s[i] === ' ') i++;
        const [arg, next] = readGroup(s, i);
        args.push(latexToFrench(arg));
        i = next;
      }
      s = `${s.slice(0, k)} ${render(...args)} ${s.slice(i)}`;
    }
  };
  // « x au carré plus 1, le tout sur 2 » quand le numérateur est une somme (sinon on ne sait pas ce qui est divisé)
  const frac = (a, b) => (/ (plus|moins) /.test(` ${a} `) ? `${a}, le tout sur ${b}` : `${a} sur ${b}`);
  replaceCmd('\\dfrac', frac);
  replaceCmd('\\tfrac', frac);
  replaceCmd('\\frac', frac);
  replaceCmd('\\sqrt', (a) => `racine carrée de ${a}`);
  replaceCmd('\\overrightarrow', (a) => `vecteur ${a}`);
  replaceCmd('\\vec', (a) => `vecteur ${a}`);
  replaceCmd('\\text', (a) => a);
  replaceCmd('\\mathrm', (a) => a);
  replaceCmd('\\mathbf', (a) => a);
  replaceCmd('\\mathbb', (a) => a);
  replaceCmd('\\operatorname', (a) => a);
  s = s
    .replace(/\\lim_\{([^}]*)\}/g, (_m, sub) => ` la limite, quand ${latexToFrench(sub)}, de `)
    .replace(/\\left|\\right|\\displaystyle|\\,|\\;|\\!|\\quad|\\qquad/g, ' ')
    .replace(/\^\{?\s*2\s*\}?/g, ' au carré ')
    .replace(/\^\{?\s*3\s*\}?/g, ' au cube ')
    .replace(/\^\{([^}]*)\}/g, (_m, e) => ` puissance ${latexToFrench(e)} `)
    .replace(/\^(\S)/g, ' puissance $1 ')
    .replace(/_\{([^}]*)\}/g, ' $1 ')
    .replace(/_(\S)/g, ' $1 ')
    .replace(/\\(?:to|rightarrow|longrightarrow)/g, ' tend vers ')
    .replace(/\+\s*\\infty/g, ' plus l’infini ')
    .replace(/-\s*\\infty/g, ' moins l’infini ')
    .replace(/\\infty/g, ' l’infini ')
    .replace(/\\(?:times|cdot)/g, ' fois ')
    .replace(/\\div/g, ' divisé par ')
    .replace(/\\(?:leq|le)\b/g, ' inférieur ou égal à ')
    .replace(/\\(?:geq|ge)\b/g, ' supérieur ou égal à ')
    .replace(/\\neq/g, ' différent de ')
    .replace(/\\approx/g, ' environ égal à ')
    .replace(/\\in\b/g, ' appartient à ')
    .replace(/\\cup/g, ' union ')
    .replace(/\\cap/g, ' inter ')
    .replace(/\\pm/g, ' plus ou moins ')
    .replace(/\\(?:Rightarrow|implies)/g, ' donc ')
    .replace(/\\(?:Leftrightarrow|iff)/g, ' équivaut à ')
    .replace(/\\([A-Za-z]+)/g, (_m, name) => (GREEK[name] ? ` ${GREEK[name]} ` : ' '))
    // f(x) → « f de x » (une lettre seule collée à la parenthèse ; « de (2x+1) » n'est pas touché)
    .replace(/(^|[^A-Za-zÀ-ÿ])([A-Za-z])\(\s*([^()]+?)\s*\)/g, '$1$2 de $3')
    .replace(/[()]/g, ' ')
    .replace(/<=|≤/g, ' inférieur ou égal à ')
    .replace(/>=|≥/g, ' supérieur ou égal à ')
    .replace(/</g, ' inférieur à ')
    .replace(/>/g, ' supérieur à ')
    .replace(/=/g, ' égale ')
    .replace(/\+/g, ' plus ')
    .replace(/(^|[\s(])[-−]\s*(?=\d|[a-z])/gi, '$1 moins ')
    .replace(/\s[-−]\s/g, ' moins ')
    .replace(/\//g, ' sur ')
    .replace(/[{}\\$]/g, ' ');
  return s.replace(/\s+/g, ' ').trim();
}

/** Texte affiché par KONAN → texte à dire (sans gras, puces, émojis ni code LaTeX). */
export function speakableText(raw) {
  let t = String(raw || '').slice(0, 4000);
  // Formules entre $…$ ou $$…$$
  t = t.replace(/\$\$([\s\S]+?)\$\$/g, (_m, f) => ` ${latexToFrench(f)} `);
  t = t.replace(/\$([^$\n]+?)\$/g, (_m, f) => ` ${latexToFrench(f)} `);
  t = t
    .replace(/\*\*|__/g, '')
    .replace(/^\s*[-•*]\s+/gm, '')
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, '')
    .replace(/→/g, ' donne ')
    .replace(/×/g, ' fois ')
    .replace(/÷/g, ' divisé par ')
    .replace(/√/g, ' racine de ')
    .replace(/²/g, ' au carré')
    .replace(/³/g, ' au cube')
    .replace(/∞/g, ' l’infini')
    .replace(/≠/g, ' différent de ')
    .replace(/≈/g, ' environ ')
    .replace(/≤/g, ' inférieur ou égal à ')
    .replace(/≥/g, ' supérieur ou égal à ')
    .replace(/\bKONAN\b/g, 'Konan')
    .replace(/\bKONE\b/g, 'Koné') // prononcé « Ko-né »
    .replace(/[\\{}$*_#`]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .trim();
  return t.slice(0, MAX_CHARS);
}

/** Lit un WAV PCM 16 bits mono (ou du PCM brut) → { pcm: Int16Array, rate }. */
export function readPcm(buf, mimeType = '') {
  if (buf.length >= 12 && buf.toString('latin1', 0, 4) === 'RIFF' && buf.toString('latin1', 8, 12) === 'WAVE') {
    let off = 12;
    let rate = 24000;
    let channels = 1;
    while (off + 8 <= buf.length) {
      const id = buf.toString('latin1', off, off + 4);
      const size = buf.readUInt32LE(off + 4);
      if (id === 'fmt ') {
        channels = buf.readUInt16LE(off + 10);
        rate = buf.readUInt32LE(off + 12);
      } else if (id === 'data') {
        const end = Math.min(buf.length, off + 8 + size);
        const data = buf.subarray(off + 8, end - ((end - off - 8) % 2));
        let pcm = new Int16Array(data.buffer.slice(data.byteOffset, data.byteOffset + data.length));
        if (channels === 2) pcm = pcm.filter((_v, i) => i % 2 === 0);
        return { pcm, rate };
      }
      off += 8 + size + (size % 2);
    }
    throw new Error('BAD_WAV');
  }
  const rate = Number((/rate=(\d+)/.exec(mimeType) || [])[1]) || 24000;
  const even = buf.subarray(0, buf.length - (buf.length % 2));
  return { pcm: new Int16Array(even.buffer.slice(even.byteOffset, even.byteOffset + even.length)), rate };
}

/** Ré-échantillonnage simple (moyenne puis interpolation linéaire) vers `outRate`. */
export function resample(pcm, rate, outRate = OUT_RATE) {
  if (rate === outRate || !pcm.length) return pcm;
  const ratio = rate / outRate;
  const out = new Int16Array(Math.floor(pcm.length / ratio));
  for (let i = 0; i < out.length; i++) {
    const pos = i * ratio;
    const j = Math.floor(pos);
    const frac = pos - j;
    // petit filtre : moyenne de 3 échantillons voisins (évite les sifflements en descendant de fréquence)
    const at = (k) => (pcm[Math.max(0, k - 1)] + pcm[k] * 2 + pcm[Math.min(pcm.length - 1, k + 1)]) / 4;
    const a = at(j);
    const b = at(Math.min(pcm.length - 1, j + 1));
    out[i] = Math.max(-32768, Math.min(32767, Math.round(a + (b - a) * frac)));
  }
  return out;
}

/**
 * Allonge le son SANS changer la hauteur (WSOLA : morceaux de 30 ms recollés là où ils se ressemblent le plus).
 * `stretch` > 1 = plus long. Calculs allégés (un échantillon sur deux) : ~0,1 s pour une minute de voix.
 */
export function timeStretch(pcm, rate, stretch) {
  if (!pcm.length || Math.abs(stretch - 1) < 0.01) return pcm;
  const N = Math.max(64, Math.round(rate * 0.03) & ~1); // fenêtre de 30 ms
  const Hs = N / 2; // pas de sortie
  const Ha = Hs / stretch; // pas d'entrée
  const tol = Math.round(N / 4);
  const win = new Float32Array(N).map((_x, i) => 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (N - 1)));
  const outLen = Math.floor(pcm.length * stretch) + N;
  const out = new Float32Array(outLen);
  const norm = new Float32Array(outLen);
  let prev = 0; // début du morceau précédemment recopié
  for (let k = 0; k * Hs + N < outLen; k++) {
    const nominal = Math.round(k * Ha);
    if (nominal + N + tol >= pcm.length) break;
    let best = nominal;
    if (k > 0) {
      // Le morceau qui prolonge le mieux le précédent (corrélation maximale)
      const natural = prev + Hs;
      let bestScore = -Infinity;
      for (let d = -tol; d <= tol; d += 2) {
        const cand = nominal + d;
        if (cand < 0 || cand + N >= pcm.length) continue;
        let score = 0;
        for (let i = 0; i < Hs; i += 2) score += pcm[natural + i] * pcm[cand + i];
        if (score > bestScore) { bestScore = score; best = cand; }
      }
    }
    const o = k * Hs;
    for (let i = 0; i < N; i++) {
      out[o + i] += pcm[best + i] * win[i];
      norm[o + i] += win[i];
    }
    prev = best;
  }
  let end = outLen;
  while (end > 0 && norm[end - 1] === 0) end--;
  const res = new Int16Array(end);
  for (let i = 0; i < end; i++) res[i] = Math.max(-32768, Math.min(32767, Math.round(norm[i] > 1e-3 ? out[i] / norm[i] : 0)));
  return res;
}

/**
 * Voix plus aiguë (et timbre d'enfant) sans parler plus vite : on allonge le son de `factor`,
 * puis on le « rejoue » `factor` fois plus vite. factor 1.3 ≈ +4,5 demi-tons.
 */
export function childVoice(pcm, rate, factor) {
  if (!factor || Math.abs(factor - 1) < 0.01) return pcm;
  return resample(timeStretch(pcm, rate, factor), rate * factor, rate);
}

export function wavFromPcm(pcm, rate) {
  const data = Buffer.from(pcm.buffer, pcm.byteOffset, pcm.byteLength);
  const h = Buffer.alloc(44);
  h.write('RIFF', 0, 'latin1'); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8, 'latin1'); h.write('fmt ', 12, 'latin1');
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(rate, 24);
  h.writeUInt32LE(rate * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36, 'latin1'); h.writeUInt32LE(data.length, 40);
  return Buffer.concat([h, data]);
}

/** Texte à dire → { base64 (WAV 16 kHz), mimeType, seconds }. Modèle principal puis modèle « lite ». */
export async function synthesizeSpeech(apiKey, text, { voice = VOICE_NAME, totalMs = 50_000 } = {}) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  const started = Date.now();
  let lastErr;
  for (const model of VOICE_MODELS) {
    const left = totalMs - (Date.now() - started);
    if (left < 10_000) break;
    try {
      const r = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ text: voicePrompt(text) }] }],
        config: {
          responseModalities: ['AUDIO'],
          // Français imposé : sans lui, une voix pouvait prendre un accent étranger sur certains mots
          speechConfig: { languageCode: 'fr-FR', voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } },
          httpOptions: { timeout: Math.max(10_000, left - 2_000) },
        },
      });
      const part = r.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
      if (!part) { lastErr = new Error('NO_AUDIO'); continue; }
      const { pcm, rate } = readPcm(Buffer.from(part.inlineData.data, 'base64'), part.inlineData.mimeType || '');
      if (pcm.length < rate / 4) { lastErr = new Error('AUDIO_TOO_SHORT'); continue; }
      const target = outRate(rate);
      const voiced = childVoice(pcm, rate, voicePitch());
      const out = target === rate ? voiced : resample(voiced, rate, target);
      return { base64: wavFromPcm(out, target).toString('base64'), mimeType: 'audio/wav', seconds: Math.round(out.length / target) };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('VOICE_UNAVAILABLE');
}
