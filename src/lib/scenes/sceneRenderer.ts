/**
 * Dessin des scènes illustrées de KONAN (style plat, arrondi, couleurs franches, personnages originaux).
 * Entrée : une SceneSpec validée. Sortie : un SVG (texte) de 520 x 300.
 * Aucune dépendance : le même code sert dans l'application et dans les scripts d'aperçu.
 */
import type { CostumeId, HeldId, MoodId, PoseId, PropId, SceneCharacter, SceneSpec, SettingId, SkinId } from './sceneTypes';

const W = 520;
const H = 300;
const INK = '#2B2118';
const n1 = (v: number) => Math.round(v * 10) / 10;

const SKIN_COLORS: Record<SkinId, string> = { fonce: '#5A3A22', brun: '#7B4A2A', moyen: '#9C6337', clair: '#C68B59', tres_clair: '#EFC6A0' };

const limb = (pts: [number, number][], color: string, w = 9) =>
  `<polyline points="${pts.map(([a, b]) => `${n1(a)},${n1(b)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

// ---------------------------------------------------------------------------
// Costumes
// ---------------------------------------------------------------------------
type Body = 'chemise' | 'robe' | 'toge' | 'manteau' | 'blouse' | 'boubou';
type Head = 'couronne' | 'laurier' | 'nemes' | 'casque_colonial' | 'chapeau_paille' | 'kufi' | 'foulard' | 'turban' | 'haut_de_forme'
  | 'casque_chantier' | 'chapeau_explorateur' | 'tricorne' | 'perruque' | 'aucun';
interface Look {
  body: Body; top: string; bottom?: string; head?: Head; headColor?: string; hair?: 'court' | 'touffe' | 'chauve' | 'long';
  beard?: boolean; glasses?: boolean; tie?: string; jabot?: boolean; sash?: string; stetho?: boolean; pattern?: string;
  skin: SkinId; held?: HeldId;
}

const LOOKS: Record<CostumeId, Look> = {
  eleve_garcon: { body: 'chemise', top: '#C8A86B', bottom: '#5B4A2E', hair: 'court', skin: 'brun' },
  eleve_fille: { body: 'robe', top: '#2F6FD0', hair: 'touffe', skin: 'moyen' },
  enseignant: { body: 'chemise', top: '#F8FAFC', bottom: '#334155', hair: 'court', glasses: true, tie: '#1D4ED8', skin: 'brun', held: 'livre' },
  villageois: { body: 'chemise', top: '#D97706', bottom: '#57534E', hair: 'court', skin: 'fonce', pattern: '#FDE68A' },
  villageoise: { body: 'robe', top: '#DB2777', head: 'foulard', headColor: '#F59E0B', skin: 'brun', pattern: '#FDE68A' },
  enfant: { body: 'chemise', top: '#22C55E', bottom: '#1E3A8A', hair: 'court', skin: 'moyen' },
  paysan: { body: 'chemise', top: '#65A30D', bottom: '#78350F', head: 'chapeau_paille', skin: 'fonce', held: 'houe' },
  pecheur: { body: 'chemise', top: '#0EA5E9', bottom: '#334155', head: 'chapeau_paille', skin: 'brun' },
  ouvrier: { body: 'chemise', top: '#F97316', bottom: '#1E3A8A', head: 'casque_chantier', headColor: '#FACC15', skin: 'brun' },
  commercante: { body: 'robe', top: '#7C3AED', head: 'foulard', headColor: '#22C55E', skin: 'fonce', pattern: '#F0ABFC' },
  philosophe_antique: { body: 'toge', top: '#F8FAFC', sash: '#2563EB', hair: 'court', beard: true, skin: 'clair', held: 'parchemin' },
  philosophe_lumieres: { body: 'manteau', top: '#1E3A8A', bottom: '#F1F5F9', head: 'perruque', jabot: true, skin: 'tres_clair', held: 'plume' },
  savant: { body: 'blouse', top: '#F8FAFC', bottom: '#475569', hair: 'touffe', glasses: true, skin: 'brun', held: 'eprouvette' },
  medecin: { body: 'blouse', top: '#F8FAFC', bottom: '#0F766E', hair: 'court', stetho: true, skin: 'moyen' },
  ecrivain: { body: 'manteau', top: '#7C2D12', bottom: '#292524', hair: 'court', glasses: true, skin: 'brun', held: 'livre' },
  roi_africain: { body: 'boubou', top: '#CA8A04', head: 'couronne', headColor: '#FACC15', beard: true, skin: 'fonce', pattern: '#7C2D12', held: 'baton' },
  reine_africaine: { body: 'robe', top: '#B91C1C', head: 'couronne', headColor: '#FACC15', skin: 'brun', pattern: '#FDE047' },
  chef_traditionnel: { body: 'boubou', top: '#15803D', head: 'kufi', headColor: '#CA8A04', beard: true, skin: 'fonce', pattern: '#FDE047', held: 'baton' },
  griot: { body: 'boubou', top: '#0E7490', head: 'kufi', headColor: '#F8FAFC', skin: 'brun', pattern: '#FDE68A' },
  pharaon: { body: 'toge', top: '#F8FAFC', sash: '#CA8A04', head: 'nemes', skin: 'moyen', held: 'baton' },
  citoyen_grec: { body: 'toge', top: '#F1F5F9', sash: '#B91C1C', hair: 'court', beard: true, skin: 'clair' },
  soldat_colonial: { body: 'chemise', top: '#A3A26B', bottom: '#6B6A3F', head: 'casque_colonial', headColor: '#E7E0C0', skin: 'tres_clair' },
  colon_europeen: { body: 'manteau', top: '#334155', bottom: '#F8FAFC', head: 'haut_de_forme', headColor: '#1F2937', skin: 'tres_clair' },
  marin_europeen: { body: 'chemise', top: '#1E3A8A', bottom: '#F8FAFC', head: 'tricorne', headColor: '#1F2937', skin: 'tres_clair' },
  marchand_arabe: { body: 'robe', top: '#E2E8F0', head: 'turban', headColor: '#F8FAFC', beard: true, skin: 'clair' },
  captif: { body: 'chemise', top: '#A16207', bottom: '#78350F', hair: 'court', skin: 'fonce' },
  juge: { body: 'robe', top: '#111827', jabot: true, hair: 'court', glasses: true, skin: 'brun' },
  homme_politique: { body: 'manteau', top: '#1F2937', bottom: '#1F2937', tie: '#DC2626', hair: 'court', skin: 'brun' },
  femme_politique: { body: 'robe', top: '#0F766E', head: 'foulard', headColor: '#F97316', skin: 'brun' },
  explorateur: { body: 'chemise', top: '#C2A878', bottom: '#78716C', head: 'chapeau_explorateur', headColor: '#A8956B', skin: 'tres_clair' },
  religieux: { body: 'robe', top: '#F8FAFC', head: 'kufi', headColor: '#F8FAFC', beard: true, skin: 'brun' },
  medecin_traditionnel: { body: 'boubou', top: '#78350F', head: 'kufi', headColor: '#DC2626', skin: 'fonce', pattern: '#FCD34D', held: 'baton' },
};

// ---------------------------------------------------------------------------
// Personnage (repère local : pieds en (0,0), tourné vers la droite)
// ---------------------------------------------------------------------------
const ARMS: Record<PoseId | 'lie', [[number, number][], [number, number][]]> = {
  debout: [[[-12, -82], [-17, -64], [-16, -52]], [[12, -82], [17, -64], [16, -52]]],
  triste: [[[-12, -82], [-15, -64], [-13, -50]], [[12, -82], [14, -64], [12, -50]]],
  marche: [[[-12, -82], [-20, -66], [-18, -56]], [[12, -82], [20, -68], [24, -58]]],
  court: [[[-12, -82], [-26, -74], [-30, -62]], [[12, -82], [24, -86], [32, -96]]],
  joie: [[[-12, -82], [-24, -98], [-26, -116]], [[12, -82], [24, -98], [26, -116]]],
  montre: [[[-12, -82], [-16, -64], [-15, -52]], [[12, -82], [28, -88], [40, -94]]],
  reflechit: [[[-12, -82], [-14, -64], [-4, -62]], [[12, -82], [18, -86], [9, -97]]],
  lit: [[[-12, -82], [-2, -70], [10, -72]], [[12, -82], [20, -72], [24, -74]]],
  parle: [[[-12, -82], [-16, -64], [-15, -52]], [[12, -82], [24, -76], [30, -84]]],
  ecrit: [[[-12, -82], [-2, -70], [10, -70]], [[12, -82], [22, -70], [26, -68]]],
  salue: [[[-12, -82], [-16, -64], [-15, -52]], [[12, -82], [26, -98], [30, -118]]],
  lie: [[[-12, -82], [-6, -66], [8, -62]], [[12, -82], [16, -68], [10, -62]]],
};

function legsFor(pose: PoseId): [number, number][][] {
  if (pose === 'court') return [[[0, -48], [14, -26], [26, -6]], [[0, -48], [-12, -28], [-24, -18]]];
  if (pose === 'marche') return [[[0, -48], [6, -24], [12, 0]], [[0, -48], [-5, -24], [-11, 0]]];
  return [[[0, -48], [-6, -24], [-7, 0]], [[0, -48], [6, -24], [7, 0]]];
}

function heldItem(item: HeldId, hx: number, hy: number): string {
  switch (item) {
    case 'livre': return `<rect x="${hx - 2}" y="${hy - 12}" width="16" height="12" rx="2" fill="#B91C1C"/><rect x="${hx}" y="${hy - 10}" width="12" height="8" rx="1" fill="#FEF3C7"/>`;
    case 'parchemin': return `<rect x="${hx - 3}" y="${hy - 14}" width="12" height="16" rx="2" fill="#FDE68A"/><rect x="${hx - 5}" y="${hy - 16}" width="16" height="4" rx="2" fill="#D97706"/>`;
    case 'baton': return `<line x1="${hx}" y1="${hy - 30}" x2="${hx}" y2="${hy + 60}" stroke="#78350F" stroke-width="4" stroke-linecap="round"/><circle cx="${hx}" cy="${hy - 32}" r="5" fill="#CA8A04"/>`;
    case 'lance': return `<line x1="${hx}" y1="${hy - 50}" x2="${hx}" y2="${hy + 58}" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/><path d="M${hx - 5},${hy - 48} L${hx},${hy - 64} L${hx + 5},${hy - 48} Z" fill="#94A3B8"/>`;
    case 'plume': return `<path d="M${hx},${hy} Q${hx + 10},${hy - 14} ${hx + 6},${hy - 24} Q${hx - 2},${hy - 12} ${hx},${hy} Z" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>`;
    case 'torche': return `<line x1="${hx}" y1="${hy}" x2="${hx + 4}" y2="${hy - 24}" stroke="#78350F" stroke-width="4" stroke-linecap="round"/><path d="M${hx + 4},${hy - 22} q-8,-10 0,-22 q8,12 0,22 Z" fill="#F97316"/>`;
    case 'drapeau': return `<line x1="${hx}" y1="${hy + 30}" x2="${hx}" y2="${hy - 46}" stroke="#57534E" stroke-width="3" stroke-linecap="round"/><rect x="${hx}" y="${hy - 46}" width="11" height="20" fill="#F77F00"/><rect x="${hx + 11}" y="${hy - 46}" width="11" height="20" fill="#FFFFFF"/><rect x="${hx + 22}" y="${hy - 46}" width="11" height="20" fill="#009E60"/>`;
    case 'houe': return `<line x1="${hx}" y1="${hy - 20}" x2="${hx}" y2="${hy + 40}" stroke="#78350F" stroke-width="3.5" stroke-linecap="round"/><path d="M${hx - 2},${hy + 38} L${hx + 14},${hy + 44} L${hx + 12},${hy + 50} L${hx - 2},${hy + 44} Z" fill="#64748B"/>`;
    case 'loupe': return `<line x1="${hx}" y1="${hy}" x2="${hx + 8}" y2="${hy - 10}" stroke="#78350F" stroke-width="3" stroke-linecap="round"/><circle cx="${hx + 13}" cy="${hy - 16}" r="8" fill="#BAE6FD" fill-opacity="0.7" stroke="#334155" stroke-width="2.5"/>`;
    case 'eprouvette': return `<rect x="${hx - 2}" y="${hy - 22}" width="7" height="22" rx="3.5" fill="#E0F2FE" stroke="#64748B" stroke-width="1.5"/><rect x="${hx - 1}" y="${hy - 10}" width="5" height="9" rx="2.5" fill="#22C55E"/>`;
    case 'micro': return `<rect x="${hx - 1.5}" y="${hy - 10}" width="3" height="12" fill="#334155"/><circle cx="${hx}" cy="${hy - 13}" r="4.5" fill="#1F2937"/>`;
    default: return '';
  }
}

function headwear(head: Head, color: string): string {
  switch (head) {
    case 'couronne': return `<path d="M-15,-122 L-15,-136 L-8,-128 L0,-140 L8,-128 L15,-136 L15,-122 Z" fill="${color}"/><circle cx="0" cy="-131" r="2.2" fill="#DC2626"/>`;
    case 'laurier': return `<path d="M-17,-114 Q-18,-130 0,-131 Q18,-130 17,-114" stroke="#16A34A" stroke-width="4" fill="none"/>`;
    case 'nemes': return `<path d="M-18,-108 Q-20,-132 0,-133 Q20,-132 18,-108 L22,-84 L14,-84 L12,-104 L-12,-104 L-14,-84 L-22,-84 Z" fill="#FACC15"/><path d="M-16,-118 L16,-118 M-18,-110 L18,-110 M-19,-100 L-15,-100 M15,-100 L19,-100" stroke="#1D4ED8" stroke-width="2.5"/>`;
    case 'casque_colonial': return `<ellipse cx="0" cy="-118" rx="25" ry="5" fill="${color}"/><path d="M-16,-118 Q-15,-138 0,-138 Q15,-138 16,-118 Z" fill="${color}"/>`;
    case 'chapeau_paille': return `<ellipse cx="0" cy="-118" rx="27" ry="6" fill="#EAB308"/><path d="M-13,-118 Q-12,-134 0,-134 Q12,-134 13,-118 Z" fill="#CA8A04"/>`;
    case 'kufi': return `<path d="M-15,-118 Q-14,-133 0,-133 Q14,-133 15,-118 Z" fill="${color}"/>`;
    case 'foulard': return `<path d="M-18,-110 Q-18,-134 0,-135 Q18,-134 18,-112 Q8,-117 -2,-117 Q-12,-116 -18,-110 Z" fill="${color}"/><circle cx="-14" cy="-130" r="6" fill="${color}"/>`;
    case 'turban': return `<path d="M-19,-109 Q-20,-134 0,-134 Q20,-134 19,-109 Q9,-117 -1,-116 Q-12,-116 -19,-109 Z" fill="${color}"/><path d="M-19,-117 Q0,-124 19,-118" stroke="#CBD5E1" stroke-width="2" fill="none"/>`;
    case 'haut_de_forme': return `<rect x="-22" y="-120" width="44" height="6" rx="3" fill="${color}"/><rect x="-13" y="-144" width="26" height="26" rx="4" fill="${color}"/>`;
    case 'casque_chantier': return `<path d="M-17,-114 Q-16,-134 0,-134 Q16,-134 17,-114 Z" fill="${color}"/><rect x="-21" y="-116" width="42" height="5" rx="2.5" fill="${color}"/>`;
    case 'chapeau_explorateur': return `<ellipse cx="0" cy="-118" rx="25" ry="5" fill="${color}"/><path d="M-14,-118 Q-13,-136 0,-136 Q13,-136 14,-118 Z" fill="${color}"/><rect x="-14" y="-123" width="28" height="4" fill="#57534E"/>`;
    case 'tricorne': return `<path d="M-24,-116 Q0,-128 24,-116 Q14,-140 0,-138 Q-14,-140 -24,-116 Z" fill="${color}"/>`;
    // Perruque poudrée (partie arrière, dessinée avant la tête) : boucles sur les côtés
    case 'perruque': return `<ellipse cx="-2" cy="-110" rx="22" ry="21" fill="#F1F5F9"/>${[[-20, -98], [-21, -108], [17, -98], [19, -107], [-16, -90], [14, -90]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="#E2E8F0"/>`).join('')}`;
    default: return '';
  }
}

function hairFor(look: Look): string {
  const c = '#1F1611';
  if (look.head && look.head !== 'aucun' && look.head !== 'laurier') return '';
  if (look.hair === 'touffe') return `<circle cx="-4" cy="-124" r="13" fill="${c}"/><circle cx="-14" cy="-114" r="9" fill="${c}"/><circle cx="8" cy="-125" r="9" fill="${c}"/>`;
  if (look.hair === 'chauve') return '';
  return `<path d="M-17,-110 Q-16,-127 0,-127 Q15,-127 17,-112 Q9,-120 -2,-119 Q-12,-118 -17,-110 Z" fill="${c}"/>`;
}

const MOUTHS: Record<MoodId, string> = {
  content: `<path d="M2,-101 Q8,-94 14,-101 Z" fill="#7F1D1D"/>`,
  triste: `<path d="M3,-98 Q8,-102 13,-98" stroke="${INK}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`,
  neutre: `<path d="M4,-100 L12,-100" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/>`,
  determine: `<path d="M4,-100 Q8,-101 12,-99" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  surpris: `<ellipse cx="8" cy="-99" rx="2.6" ry="3.2" fill="#7F1D1D"/>`,
};

export interface DrawnCharacter { svg: string; hands: [number, number]; headTop: [number, number] }

export function drawCharacter(c: SceneCharacter, x: number, y: number, face: 1 | -1, scale: number): DrawnCharacter {
  const look = LOOKS[c.costume];
  const skin = SKIN_COLORS[c.skin ?? look.skin];
  const s = scale * (c.child ? 0.72 : 1);
  const pose: PoseId = c.pose;
  const parts: string[] = [];
  const longBody = look.body === 'robe' || look.body === 'toge' || look.body === 'boubou';

  // Jambes + chaussures
  const legs = legsFor(pose);
  const legColor = longBody ? skin : look.bottom ?? '#334155';
  for (const leg of legs) parts.push(limb(leg, legColor, longBody ? 7 : 10));
  for (const leg of legs) {
    const [fx, fy] = leg[leg.length - 1];
    parts.push(`<ellipse cx="${n1(fx + 3)}" cy="${n1(fy + 1)}" rx="7" ry="3.6" fill="${INK}"/>`);
  }

  // Corps
  const dots = (x0: number, y0: number, x1: number, y1: number) => {
    if (!look.pattern) return '';
    let out = '';
    for (let yy = y0; yy <= y1; yy += 9) for (let xx = x0 + ((yy / 9) % 2) * 4; xx <= x1; xx += 9) out += `<circle cx="${xx}" cy="${yy}" r="1.8" fill="${look.pattern}"/>`;
    return out;
  };
  if (look.body === 'robe' || look.body === 'toge') {
    parts.push(`<path d="M-15,-88 Q0,-94 15,-88 L22,-30 Q0,-24 -22,-30 Z" fill="${look.top}"/>`);
    parts.push(dots(-14, -80, 14, -36));
    if (look.sash) parts.push(`<path d="M-14,-86 L16,-40" stroke="${look.sash}" stroke-width="6" stroke-linecap="round"/>`);
  } else if (look.body === 'boubou') {
    parts.push(`<path d="M-16,-88 Q0,-95 16,-88 L30,-16 Q0,-10 -30,-16 Z" fill="${look.top}"/>`);
    parts.push(dots(-20, -76, 20, -24));
  } else {
    if (look.body === 'manteau' || look.body === 'blouse') {
      parts.push(`<path d="M-17,-87 Q0,-94 17,-87 L19,-30 L-19,-30 Z" fill="${look.top}"/>`);
      if (look.body === 'blouse') parts.push(`<path d="M0,-88 L0,-30" stroke="#CBD5E1" stroke-width="1.5"/><path d="M-6,-88 L0,-74 L6,-88 Z" fill="#93C5FD"/>`);
      else parts.push(`<path d="M-6,-88 L0,-70 L6,-88 Z" fill="#F8FAFC"/>`);
    } else {
      parts.push(`<path d="M-15,-86 Q0,-93 15,-86 L16,-50 Q0,-45 -16,-50 Z" fill="${look.top}"/>`);
      parts.push(dots(-12, -80, 12, -54));
    }
  }
  if (look.tie) parts.push(`<path d="M-2.5,-86 L2.5,-86 L4,-66 L0,-61 L-4,-66 Z" fill="${look.tie}"/>`);
  if (look.jabot) parts.push(`<path d="M-5,-88 L5,-88 L3,-76 L-3,-76 Z" fill="#F8FAFC"/>`);
  if (look.stetho) parts.push(`<path d="M-8,-88 Q-10,-68 0,-66 Q10,-68 8,-88" stroke="#334155" stroke-width="2" fill="none"/><circle cx="0" cy="-65" r="3" fill="#94A3B8"/>`);

  // Bras arrière
  const [backArm, frontArm] = ARMS[c.bound ? 'lie' : pose];
  const sleeve = look.body === 'boubou' ? 12 : 8;
  parts.push(limb(backArm, look.top, sleeve));
  parts.push(`<circle cx="${backArm[2][0]}" cy="${backArm[2][1]}" r="4.6" fill="${skin}"/>`);

  // Tête
  parts.push(`<rect x="-4.5" y="-94" width="9" height="9" rx="3" fill="${skin}"/>`);
  if (look.head === 'perruque') parts.push(headwear('perruque', ''));
  parts.push(`<circle cx="0" cy="-108" r="17" fill="${skin}"/><circle cx="-11" cy="-106" r="4" fill="${skin}"/>`);
  parts.push(hairFor(look));
  if (look.head === 'perruque') parts.push(`<path d="M-17,-110 Q-16,-129 0,-129 Q15,-129 17,-112 Q9,-121 -2,-120 Q-12,-119 -17,-110 Z" fill="#F1F5F9"/>`);
  if (look.beard) parts.push(`<path d="M-9,-102 Q2,-80 15,-100 Q10,-93 3,-93 Q-4,-93 -9,-102 Z" fill="${look.body === 'toge' && look.head !== 'nemes' ? '#64748B' : '#1F1611'}"/>`);
  if (look.head && look.head !== 'perruque') parts.push(headwear(look.head, look.headColor ?? '#1F2937'));
  if (look.head === 'laurier' || (c.costume === 'philosophe_antique')) parts.push(headwear('laurier', ''));

  // Visage
  const mood = c.mood;
  parts.push(`<circle cx="3" cy="-110" r="2.3" fill="${INK}"/><circle cx="11" cy="-110" r="2.3" fill="${INK}"/>`);
  const brow = mood === 'triste' ? 'M0,-117 L5,-115 M9,-115 L14,-117' : mood === 'determine' ? 'M0,-116 L6,-114 M8,-114 L14,-116' : 'M0,-116 Q3,-118 6,-116 M8,-116 Q11,-118 14,-116';
  parts.push(`<path d="${brow}" stroke="${INK}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`);
  if (look.glasses) parts.push(`<circle cx="3" cy="-110" r="4.6" fill="none" stroke="${INK}" stroke-width="1.5"/><circle cx="12" cy="-110" r="4.6" fill="none" stroke="${INK}" stroke-width="1.5"/><path d="M7.6,-110 L7.4,-110" stroke="${INK}" stroke-width="1.5"/>`);
  parts.push(MOUTHS[mood]);

  // Bras avant + objet tenu
  parts.push(limb(frontArm, look.top, sleeve));
  const [hx, hy] = frontArm[2];
  const held = c.holding ?? (c.bound ? undefined : look.held);
  if (held) parts.push(heldItem(held, hx, hy));
  parts.push(`<circle cx="${hx}" cy="${hy}" r="4.6" fill="${skin}"/>`);

  const sx = s * face;
  return {
    svg: `<g transform="translate(${n1(x)},${n1(y)}) scale(${n1(sx * 100) / 100},${n1(s * 100) / 100})">${parts.join('')}</g>`,
    hands: [x + 9 * sx, y - 62 * s],
    headTop: [x + 4 * sx, y - 140 * s],
  };
}

// ---------------------------------------------------------------------------
// Décors
// ---------------------------------------------------------------------------
const sunSvg = (x: number, y: number, rad = 26, c = '#FCD34D') => `<circle cx="${x}" cy="${y}" r="${rad + 10}" fill="${c}" fill-opacity="0.35"/><circle cx="${x}" cy="${y}" r="${rad}" fill="${c}"/>`;
const cloudSvg = (x: number, y: number, k = 1, c = '#FFFFFF') => `<g transform="translate(${x},${y}) scale(${k})" fill="${c}"><ellipse cx="0" cy="0" rx="26" ry="12"/><ellipse cx="18" cy="-8" rx="18" ry="13"/><ellipse cx="-14" cy="-6" rx="14" ry="10"/></g>`;
const treeSvg = (x: number, y: number, k = 1, c = '#16A34A') => `<g transform="translate(${x},${y}) scale(${k})"><rect x="-6" y="-60" width="12" height="60" rx="4" fill="#92400E"/><circle cx="0" cy="-78" r="32" fill="${c}"/><circle cx="-24" cy="-62" r="20" fill="${c}"/><circle cx="24" cy="-62" r="20" fill="${c}"/></g>`;
const hutSvg = (x: number, y: number, k = 1) => `<g transform="translate(${x},${y}) scale(${k})"><rect x="-26" y="-40" width="52" height="40" rx="6" fill="#C2884D"/><path d="M-36,-36 L0,-74 L36,-36 Z" fill="#A16207"/><path d="M-8,0 L-8,-22 Q0,-30 8,-22 L8,0 Z" fill="#78350F"/></g>`;
const columnsSvg = (x: number, y: number, k = 1) => `<g transform="translate(${x},${y}) scale(${k})"><path d="M-70,-120 L0,-150 L70,-120 Z" fill="#E2E8F0"/><rect x="-74" y="-122" width="148" height="8" fill="#CBD5E1"/>${[-56, -20, 16, 52].map((cx) => `<rect x="${cx}" y="-114" width="12" height="108" fill="#F1F5F9"/>`).join('')}<rect x="-78" y="-8" width="156" height="8" fill="#CBD5E1"/></g>`;

interface Decor { back: string; ground: number }

/** Décors d'intérieur : pas de soleil dans le ciel. */
const INDOOR: ReadonlySet<SettingId> = new Set(['salle_classe', 'laboratoire', 'tribunal', 'bureau']);

function decor(setting: SettingId, time: 'jour' | 'soir' | 'nuit'): Decor {
  const sky = time === 'nuit' ? '#1E2A4A' : time === 'soir' ? '#FCC89B' : '#BFE7FB';
  const night = time === 'nuit';
  const stars = night ? [40, 120, 210, 300, 380, 470].map((x, i) => `<circle cx="${x}" cy="${30 + (i % 3) * 18}" r="1.8" fill="#FEF9C3"/>`).join('') + `<circle cx="440" cy="56" r="20" fill="#FEF3C7"/><circle cx="450" cy="50" r="18" fill="${sky}"/>` : '';
  const sun = night ? stars : time === 'soir' ? sunSvg(440, 120, 30, '#FB923C') : sunSvg(450, 56, 24) + cloudSvg(110, 56, 0.85);
  const outdoor = (groundColor: string, extra = '') => `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}${extra}<path d="M0,200 Q140,178 280,196 T520,190 L520,300 L0,300 Z" fill="${groundColor}"/>`;
  switch (setting) {
    case 'savane':
      return { ground: 262, back: outdoor('#E9C46A', '') + `<path d="M0,232 Q260,214 520,234 L520,300 L0,300 Z" fill="#D4A94F"/><g transform="translate(460,206)"><rect x="-4" y="-46" width="8" height="46" fill="#7C2D12"/><ellipse cx="0" cy="-50" rx="44" ry="11" fill="#4D7C0F"/></g>` };
    case 'village':
      return { ground: 262, back: outdoor('#D9B27C') + hutSvg(70, 206, 0.9) + hutSvg(450, 204, 0.85) + `<path d="M0,236 Q260,222 520,238 L520,300 L0,300 Z" fill="#C79A63"/>` };
    case 'foret':
      return { ground: 264, back: outdoor('#4ADE80') + treeSvg(50, 212, 1) + treeSvg(130, 206, 0.8, '#15803D') + treeSvg(400, 208, 0.9, '#15803D') + treeSvg(480, 214, 1.05) + `<path d="M0,238 Q260,222 520,240 L520,300 L0,300 Z" fill="#22C55E"/>` };
    case 'desert':
      return { ground: 262, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}<path d="M0,190 Q120,150 250,185 T520,170 L520,300 L0,300 Z" fill="#F4C27A"/><path d="M0,230 Q150,200 300,228 T520,220 L520,300 L0,300 Z" fill="#EDB15E"/>` };
    case 'cote_mer':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}<rect x="0" y="150" width="${W}" height="150" fill="#38BDF8"/>${[40, 130, 230, 330, 430].map((x, i) => `<path d="M${x},${170 + (i % 2) * 16} q8,-6 16,0 t16,0" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="2.4" fill="none" stroke-linecap="round"/>`).join('')}<path d="M0,300 Q40,226 200,226 Q380,226 520,212 L520,300 Z" fill="#FCD9A0"/>` };
    case 'fleuve':
      return { ground: 266, back: outdoor('#4ADE80') + `<path d="M0,214 Q160,196 300,212 T520,206 L520,236 Q360,240 260,236 T0,246 Z" fill="#38BDF8"/>` };
    case 'ville':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}${[[10, 120, '#94A3B8'], [70, 90, '#64748B'], [140, 130, '#CBD5E1'], [330, 100, '#94A3B8'], [400, 140, '#64748B'], [460, 110, '#CBD5E1']].map(([x, h, c]) => `<rect x="${x}" y="${210 - (h as number)}" width="56" height="${h}" fill="${c}"/>`).join('')}<rect x="0" y="208" width="${W}" height="92" fill="#A8A29E"/><rect x="0" y="238" width="${W}" height="4" fill="#F8FAFC" fill-opacity="0.6"/>` };
    case 'salle_classe':
      return { ground: 272, back: `<rect width="${W}" height="${H}" fill="#F5EBDD"/><rect x="120" y="40" width="280" height="120" rx="6" fill="#14532D" stroke="#92400E" stroke-width="8"/><path d="M150,80 L260,80 M150,104 L330,104 M150,128 L230,128" stroke="#F8FAFC" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round"/><rect x="0" y="210" width="${W}" height="90" fill="#D6A770"/>` };
    case 'agora':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}` + columnsSvg(260, 214, 1.1) + `<rect x="0" y="210" width="${W}" height="90" fill="#E7E5E4"/>` };
    case 'laboratoire':
      return { ground: 272, back: `<rect width="${W}" height="${H}" fill="#E0F2FE"/><rect x="40" y="130" width="440" height="16" fill="#94A3B8"/>${[80, 140, 380, 430].map((x, i) => `<rect x="${x}" y="${96 - (i % 2) * 8}" width="16" height="${34 + (i % 2) * 8}" rx="5" fill="#F8FAFC" stroke="#64748B" stroke-width="2"/><rect x="${x + 2}" y="114" width="12" height="14" rx="3" fill="${['#22C55E', '#F43F5E', '#3B82F6', '#F59E0B'][i]}"/>`).join('')}<rect x="0" y="210" width="${W}" height="90" fill="#CBD5E1"/>` };
    case 'palais':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}<rect x="90" y="96" width="340" height="114" fill="#D6A770"/><path d="M80,100 L260,44 L440,100 Z" fill="#B45309"/>${[120, 190, 300, 370].map((x) => `<rect x="${x}" y="110" width="22" height="100" fill="#F5E6C8"/>`).join('')}<path d="M236,210 L236,150 Q260,128 284,150 L284,210 Z" fill="#7C2D12"/><rect x="0" y="208" width="${W}" height="92" fill="#E9C46A"/><rect x="230" y="208" width="60" height="92" fill="#B91C1C"/>` };
    case 'plantation':
      return { ground: 266, back: outdoor('#4ADE80') + `<rect x="380" y="150" width="70" height="44" fill="#F5F5F4"/><path d="M372,152 L415,124 L458,152 Z" fill="#B91C1C"/>${[30, 70, 110, 150, 190].map((x) => `<path d="M${x},212 l0,-28 m-7,10 l7,-7 l7,7" stroke="#65A30D" stroke-width="3" fill="none" stroke-linecap="round"/>`).join('')}` };
    case 'champ':
      return { ground: 266, back: outdoor('#86EFAC') + [0, 1, 2, 3].map((i) => `<path d="M0,${214 + i * 18} Q260,${204 + i * 18} 520,${216 + i * 18}" stroke="#15803D" stroke-width="5" fill="none" stroke-dasharray="10 8"/>`).join('') };
    case 'tribunal':
      return { ground: 272, back: `<rect width="${W}" height="${H}" fill="#E7D3B0"/><rect x="150" y="120" width="220" height="70" fill="#92400E"/><g transform="translate(260,74)"><line x1="0" y1="-30" x2="0" y2="24" stroke="#CA8A04" stroke-width="4"/><line x1="-34" y1="-20" x2="34" y2="-20" stroke="#CA8A04" stroke-width="4"/><path d="M-44,0 L-24,0 L-34,-20 Z M24,0 L44,0 L34,-20 Z" fill="#FACC15"/></g><rect x="0" y="210" width="${W}" height="90" fill="#B45309"/>` };
    case 'bureau':
      return { ground: 272, back: `<rect width="${W}" height="${H}" fill="#EDE9FE"/><rect x="330" y="50" width="130" height="90" rx="6" fill="#BFE7FB" stroke="#F8FAFC" stroke-width="8"/><rect x="40" y="150" width="200" height="14" rx="4" fill="#92400E"/><rect x="60" y="164" width="12" height="46" fill="#78350F"/><rect x="208" y="164" width="12" height="46" fill="#78350F"/><rect x="0" y="210" width="${W}" height="90" fill="#C4B5FD"/>` };
    case 'marche':
      return { ground: 266, back: outdoor('#E7C9A0') + [60, 200, 340, 470].map((x, i) => `<rect x="${x - 50}" y="160" width="100" height="40" fill="#A16207"/><path d="M${x - 58},162 L${x + 58},162 L${x + 48},132 L${x - 48},132 Z" fill="${['#F43F5E', '#22C55E', '#F59E0B', '#3B82F6'][i]}"/>`).join('') };
    case 'montagne':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${sky}"/>${sun}<path d="M-20,210 L120,70 L250,210 Z" fill="#94A3B8"/><path d="M180,210 L340,50 L520,210 Z" fill="#64748B"/><path d="M310,80 L340,50 L370,80 Q340,90 310,80 Z" fill="#F8FAFC"/><path d="M0,206 Q260,190 520,206 L520,300 L0,300 Z" fill="#84CC16"/>` };
    case 'usine':
      return { ground: 266, back: `<rect width="${W}" height="${H}" fill="${night ? sky : '#CBD5E1'}"/>${cloudSvg(150, 50, 1, '#94A3B8')}<rect x="60" y="130" width="300" height="80" fill="#78716C"/><path d="M60,130 L110,100 L110,130 L160,100 L160,130 L210,100 L210,130 Z" fill="#57534E"/><rect x="300" y="60" width="22" height="80" fill="#57534E"/><rect x="340" y="80" width="22" height="60" fill="#57534E"/><rect x="0" y="208" width="${W}" height="92" fill="#A8A29E"/>` };
    default:
      return { ground: 262, back: outdoor('#86EFAC') };
  }
}

// ---------------------------------------------------------------------------
// Objets
// ---------------------------------------------------------------------------
const pastille = (inner: string) => `<circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>${inner}`;

function propSvg(kind: PropId): { svg: string; floating?: boolean; sky?: boolean } {
  switch (kind) {
    // Livre ouvert posé sur un petit pupitre (jamais par terre)
    case 'livre_ouvert': return { svg: `<rect x="-6" y="-46" width="12" height="46" fill="#92400E"/><rect x="-22" y="-4" width="44" height="6" rx="3" fill="#78350F"/><path d="M-34,-48 L34,-48 L30,-40 L-30,-40 Z" fill="#B45309"/><path d="M-30,-50 L0,-56 L30,-50 L30,-78 L0,-84 L-30,-78 Z" fill="#F8FAFC" stroke="#B91C1C" stroke-width="3"/><line x1="0" y1="-84" x2="0" y2="-56" stroke="#CBD5E1" stroke-width="2"/><path d="M-24,-74 L-6,-77 M-24,-66 L-6,-69 M6,-77 L24,-74 M6,-69 L24,-66" stroke="#94A3B8" stroke-width="1.6"/>` };
    case 'globe': return { svg: `<rect x="-3" y="-20" width="6" height="20" fill="#78350F"/><rect x="-16" y="-4" width="32" height="6" rx="3" fill="#78350F"/><circle cx="0" cy="-42" r="24" fill="#38BDF8"/><path d="M-14,-52 q8,-6 14,2 t10,10 q-8,6 -14,0 Z M2,-32 q8,-2 10,6 q-6,4 -10,-6 Z" fill="#22C55E"/>` };
    case 'microscope': return { svg: `<rect x="-22" y="-6" width="44" height="8" rx="3" fill="#334155"/><path d="M8,-6 L8,-40 Q8,-50 -4,-56" stroke="#334155" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="-14" y="-74" width="12" height="28" rx="4" fill="#64748B" transform="rotate(-25 -8 -60)"/><rect x="-16" y="-24" width="26" height="5" fill="#94A3B8"/>` };
    case 'plante': return { svg: `<path d="M-16,0 L-12,-22 L12,-22 L16,0 Z" fill="#C2410C"/><path d="M0,-22 Q-2,-50 0,-62" stroke="#15803D" stroke-width="3" fill="none"/><ellipse cx="-12" cy="-44" rx="12" ry="6" fill="#22C55E" transform="rotate(-30 -12 -44)"/><ellipse cx="12" cy="-50" rx="12" ry="6" fill="#22C55E" transform="rotate(30 12 -50)"/>` };
    case 'arbre': return { svg: treeSvg(0, 0, 0.9) };
    case 'palmier': return { svg: `<path d="M0,0 Q-6,-50 6,-98" stroke="#92400E" stroke-width="9" fill="none" stroke-linecap="round"/>${[-36, -16, 16, 36].map((dx) => `<ellipse cx="${6 + dx * 0.6}" cy="-98" rx="30" ry="8" fill="#16A34A" transform="rotate(${dx > 0 ? 20 : -20} ${6 + dx * 0.6} -98)"/>`).join('')}` };
    case 'case': return { svg: hutSvg(0, 0, 1) };
    case 'pyramide': return { svg: `<path d="M-70,0 L0,-90 L70,0 Z" fill="#E9C46A"/><path d="M0,-90 L70,0 L20,0 Z" fill="#D4A94F"/>` };
    case 'colonnes': return { svg: columnsSvg(0, 0, 0.7) };
    case 'navire': return { svg: `<path d="M-60,-14 L60,-14 L48,8 L-50,8 Z" fill="#7C2D12"/><rect x="-4" y="-96" width="5" height="82" fill="#78350F"/><path d="M-40,-86 Q-10,-70 -40,-22 L-6,-22 L-6,-90 Z" fill="#F8FAFC"/><path d="M4,-92 Q36,-76 4,-24 L36,-24 Z" fill="#E2E8F0"/>` };
    case 'pirogue': return { svg: `<path d="M-50,-10 Q0,6 50,-10 Q40,4 0,6 Q-40,4 -50,-10 Z" fill="#92400E"/><line x1="20" y1="-40" x2="10" y2="4" stroke="#78350F" stroke-width="3"/>` };
    case 'chameau': return { svg: `<g transform="scale(0.9)">${[-26, -12, 14, 28].map((lx) => limb([[lx, -40], [lx, 0]], '#C2884D', 8)).join('')}<ellipse cx="0" cy="-48" rx="38" ry="18" fill="#C2884D"/><ellipse cx="-4" cy="-64" rx="18" ry="14" fill="#C2884D"/><path d="M30,-52 Q44,-62 44,-84 L54,-86 Q56,-60 38,-44 Z" fill="#C2884D"/><ellipse cx="54" cy="-88" rx="12" ry="7" fill="#C2884D"/><circle cx="57" cy="-90" r="1.8" fill="${INK}"/></g>` };
    case 'vache': return { svg: `${[-24, -10, 12, 26].map((lx) => limb([[lx, -26], [lx, 0]], '#F5F5F4', 7)).join('')}<ellipse cx="0" cy="-34" rx="34" ry="16" fill="#F5F5F4"/><circle cx="-10" cy="-38" r="7" fill="#57534E"/><circle cx="12" cy="-30" r="5" fill="#57534E"/><ellipse cx="38" cy="-42" rx="12" ry="10" fill="#F5F5F4"/><path d="M34,-52 l-4,-8 M44,-52 l4,-8" stroke="#A8A29E" stroke-width="3" stroke-linecap="round"/><circle cx="41" cy="-44" r="1.8" fill="${INK}"/>` };
    case 'poisson': return { svg: pastille(`<ellipse cx="-4" cy="0" rx="18" ry="10" fill="#F97316"/><path d="M12,0 L26,-10 L26,10 Z" fill="#F97316"/><circle cx="-13" cy="-3" r="2.3" fill="${INK}"/>`), floating: true };
    case 'cacao': return { svg: `<ellipse cx="0" cy="-26" rx="14" ry="24" fill="#C2410C"/><path d="M0,-50 L0,-2 M-7,-46 Q-10,-26 -7,-6 M7,-46 Q10,-26 7,-6" stroke="#9A3412" stroke-width="2" fill="none"/>` };
    case 'tableau': return { svg: `<rect x="-40" y="-90" width="80" height="56" rx="4" fill="#14532D" stroke="#92400E" stroke-width="5"/><path d="M-26,-70 L20,-70 M-26,-54 L6,-54" stroke="#F8FAFC" stroke-width="3" stroke-linecap="round"/><line x1="-30" y1="-34" x2="-38" y2="0" stroke="#92400E" stroke-width="4"/><line x1="30" y1="-34" x2="38" y2="0" stroke="#92400E" stroke-width="4"/>` };
    case 'urne': return { svg: `<rect x="-24" y="-40" width="48" height="40" rx="4" fill="#E0F2FE" stroke="#0369A1" stroke-width="3"/><rect x="-12" y="-44" width="24" height="5" fill="#0369A1"/><rect x="-6" y="-58" width="12" height="16" fill="#F8FAFC" stroke="#94A3B8"/>` };
    case 'drapeau_ci': return { svg: `<line x1="0" y1="0" x2="0" y2="-110" stroke="#57534E" stroke-width="4" stroke-linecap="round"/><rect x="0" y="-108" width="18" height="36" fill="#F77F00"/><rect x="18" y="-108" width="18" height="36" fill="#FFFFFF"/><rect x="36" y="-108" width="18" height="36" fill="#009E60"/>` };
    case 'balance': return { svg: `<line x1="0" y1="0" x2="0" y2="-80" stroke="#CA8A04" stroke-width="5"/><line x1="-38" y1="-70" x2="38" y2="-70" stroke="#CA8A04" stroke-width="4"/><path d="M-50,-44 L-26,-44 L-38,-70 Z M26,-44 L50,-44 L38,-70 Z" fill="#FACC15"/><rect x="-16" y="-4" width="32" height="6" rx="3" fill="#CA8A04"/>` };
    case 'ampoule': return { svg: pastille(`<circle cx="0" cy="-6" r="14" fill="#FDE047"/><rect x="-7" y="6" width="14" height="10" rx="2" fill="#94A3B8"/>`), floating: true };
    case 'coeur': return { svg: pastille(`<path d="M0,16 C-26,-2 -18,-24 0,-12 C18,-24 26,-2 0,16 Z" fill="#EF4444"/>`), floating: true };
    case 'cellule': return { svg: pastille(`<ellipse cx="0" cy="0" rx="24" ry="18" fill="#BBF7D0" stroke="#16A34A" stroke-width="3"/><circle cx="4" cy="-2" r="7" fill="#7C3AED"/><circle cx="-12" cy="6" r="2.5" fill="#16A34A"/><circle cx="14" cy="8" r="2" fill="#16A34A"/>`), floating: true };
    case 'cerveau': return { svg: pastille(`<path d="M-20,4 Q-26,-14 -10,-20 Q0,-28 12,-20 Q26,-16 22,0 Q24,14 8,16 Q0,22 -10,16 Q-24,16 -20,4 Z" fill="#F9A8D4"/><path d="M0,-20 L0,14 M-12,-6 Q-6,0 -12,8 M12,-8 Q6,0 12,6" stroke="#DB2777" stroke-width="2" fill="none"/>`), floating: true };
    case 'adn': return { svg: pastille(`<path d="M-10,-24 Q14,-12 -10,0 Q14,12 -10,24" stroke="#3B82F6" stroke-width="3.5" fill="none"/><path d="M10,-24 Q-14,-12 10,0 Q-14,12 10,24" stroke="#F43F5E" stroke-width="3.5" fill="none"/>`), floating: true };
    case 'atome': return { svg: pastille(`<circle cx="0" cy="0" r="5" fill="#F43F5E"/>${[0, 60, 120].map((a) => `<ellipse cx="0" cy="0" rx="24" ry="9" fill="none" stroke="#3B82F6" stroke-width="2" transform="rotate(${a})"/>`).join('')}`), floating: true };
    case 'fiole': return { svg: `<path d="M-6,-50 L6,-50 L6,-30 L20,0 L-20,0 L-6,-30 Z" fill="#E0F2FE" stroke="#64748B" stroke-width="2"/><path d="M-14,-12 L14,-12 L20,0 L-20,0 Z" fill="#A855F7"/>` };
    case 'soleil': return { svg: sunSvg(0, 0, 32), sky: true };
    case 'pluie': return { svg: cloudSvg(0, 0, 1.3, '#94A3B8') + [-20, 0, 20].map((dx) => `<path d="M${dx},14 l-4,12" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>`).join(''), sky: true };
    case 'usine': return { svg: `<rect x="-50" y="-50" width="100" height="50" fill="#78716C"/><rect x="20" y="-90" width="16" height="44" fill="#57534E"/>${cloudSvg(40, -104, 0.6, '#94A3B8')}` };
    case 'chaines_brisees': return { svg: [[-18, -8, 20], [-8, -5, -10], [10, -10, 15], [20, -6, -20]].map(([cx, cy, rot]) => `<ellipse cx="${cx}" cy="${cy}" rx="7" ry="4.5" fill="none" stroke="#94A3B8" stroke-width="3" transform="rotate(${rot} ${cx} ${cy})"/>`).join('') + `<path d="M-1,-16 L2,-10 M1,-2 L-2,2" stroke="#FCD34D" stroke-width="2.5" stroke-linecap="round"/>` };
    case 'carte': return { svg: `<path d="M-36,-60 L-12,-66 L12,-60 L36,-66 L36,-10 L12,-4 L-12,-10 L-36,-4 Z" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/><path d="M-22,-46 q10,-8 18,0 t16,4 q-6,12 -18,10 q-10,-2 -16,-14 Z" fill="#86EFAC"/>` };
    case 'fort': return { svg: `<rect x="-40" y="-56" width="80" height="56" fill="#E7D3B0"/>${[-40, -24, -8, 8, 24].map((cx) => `<rect x="${cx}" y="-66" width="10" height="12" fill="#E7D3B0"/>`).join('')}<path d="M-12,0 L-12,-24 Q0,-36 12,-24 L12,0 Z" fill="#7C2D12"/>` };
    case 'feu': return { svg: `<path d="M-20,0 L20,-8 M-20,-8 L20,0" stroke="#78350F" stroke-width="6" stroke-linecap="round"/><path d="M0,-6 q-18,-18 -2,-44 q6,16 14,10 q8,18 -12,34 Z" fill="#F97316"/><path d="M0,-8 q-8,-10 0,-24 q8,14 0,24 Z" fill="#FDE047"/>` };
    case 'panier': return { svg: `<path d="M-24,-26 L24,-26 L18,0 L-18,0 Z" fill="#CA8A04"/><path d="M-20,-14 L20,-14" stroke="#A16207" stroke-width="2"/><circle cx="-8" cy="-30" r="7" fill="#F97316"/><circle cx="6" cy="-32" r="7" fill="#22C55E"/>` };
    case 'ordinateur': return { svg: `<rect x="-30" y="-56" width="60" height="40" rx="4" fill="#1F2937"/><rect x="-26" y="-52" width="52" height="32" rx="2" fill="#38BDF8"/><rect x="-36" y="-14" width="72" height="8" rx="3" fill="#94A3B8"/>` };
    case 'telephone': return { svg: pastille(`<rect x="-12" y="-22" width="24" height="44" rx="5" fill="#1F2937"/><rect x="-9" y="-17" width="18" height="32" rx="2" fill="#38BDF8"/>`), floating: true };
    case 'montagne': return { svg: `<path d="M-70,0 L0,-90 L70,0 Z" fill="#94A3B8"/><path d="M-16,-70 L0,-90 L16,-70 Q0,-64 -16,-70 Z" fill="#F8FAFC"/>` };
    case 'horloge': return { svg: pastille(`<circle cx="0" cy="0" r="22" fill="#FEF3C7" stroke="#334155" stroke-width="3"/><path d="M0,0 L0,-14 M0,0 L10,6" stroke="#334155" stroke-width="3" stroke-linecap="round"/>`), floating: true };
    case 'pieces': return { svg: [0, 1, 2, 3].map((i) => `<ellipse cx="0" cy="${-6 - i * 7}" rx="16" ry="6" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>`).join('') };
    case 'graphique': return { svg: pastille(`<path d="M-20,18 L-20,-18 M-20,18 L22,18" stroke="#334155" stroke-width="2.5"/><path d="M-16,10 L-6,0 L4,4 L18,-14" stroke="#22C55E" stroke-width="3.5" fill="none" stroke-linecap="round"/>`), floating: true };
    default: return { svg: '' };
  }
}

// ---------------------------------------------------------------------------
// Scène complète
// ---------------------------------------------------------------------------
function wrapText(text: string, max = 24): string[] {
  const words = text.split(' ');
  const lines: string[] = [''];
  for (const w of words) {
    const cur = lines[lines.length - 1];
    if ((cur + ' ' + w).trim().length > max && cur) lines.push(w);
    else lines[lines.length - 1] = (cur + ' ' + w).trim();
  }
  return lines.slice(0, 2);
}

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderScene(spec: SceneSpec, opts: { id?: string; label?: string } = {}): string {
  const clipId = `scn-${(opts.id || 'x').replace(/[^A-Za-z0-9]/g, '').slice(-12)}`;
  const time = spec.time ?? 'jour';
  const { back, ground } = decor(spec.setting, time);
  const parts: string[] = [back];

  // Positions des personnages (de gauche à droite), connues avant de poser les objets au sol
  const chars = spec.characters.slice(0, 4);
  const slots: Record<number, number[]> = { 1: [260], 2: [190, 330], 3: [140, 260, 380], 4: [110, 210, 310, 410] };
  const xs = slots[chars.length] ?? [];

  // Un objet posé au sol ne doit jamais se retrouver sous les pieds d'un personnage
  const placeX = { gauche: 80, centre: 260, droite: 440, fond: 0 } as const;
  const usedGround: number[] = [];
  const freeGroundX = (wanted: number): number => {
    const candidates = [wanted, 60, 460, 200, 320, 130, 390, 260];
    const ok = (x: number) => xs.every((cx) => Math.abs(cx - x) >= 62) && usedGround.every((ux) => Math.abs(ux - x) >= 70);
    const best = candidates.filter(ok).sort((a, b) => Math.abs(a - wanted) - Math.abs(b - wanted))[0];
    return best ?? wanted;
  };
  let fondIndex = 0;
  for (const p of spec.props ?? []) {
    const drawn = propSvg(p.kind);
    if (!drawn.svg) continue;
    if (drawn.sky) { parts.push(`<g transform="translate(${p.place === 'gauche' ? 90 : 260},64)">${drawn.svg}</g>`); continue; }
    if (drawn.floating) {
      // Pastille d'idée en l'air, du côté opposé à la bulle de parole pour ne jamais être cachée
      const speakerX = spec.bubble ? xs[spec.bubble.from] ?? 260 : null;
      const wanted = p.place === 'gauche' ? 70 : p.place === 'droite' ? 450 : p.place === 'centre' ? 260 : speakerX !== null ? (speakerX <= 260 ? 450 : 70) : 150 + (fondIndex++ % 2) * 220;
      // Ni sous la bulle de parole, ni sur le soleil (ou la lune) du décor
      const hasSun = !INDOOR.has(spec.setting);
      const blocked = (x: number) => (speakerX !== null && Math.abs(x - speakerX) < 150) || (hasSun && Math.abs(x - 445) < 90);
      const fx = [wanted, 70, 260, 450, 160, 360].find((x) => !blocked(x)) ?? 70;
      parts.push(`<g transform="translate(${fx},74)">${drawn.svg}</g>`);
      continue;
    }
    if (p.place === 'fond') {
      const x = 130 + (fondIndex++ % 3) * 130;
      parts.push(`<g transform="translate(${x},${ground - 48}) scale(0.7)">${drawn.svg}</g>`);
    } else {
      const x = freeGroundX(placeX[p.place]);
      usedGround.push(x);
      parts.push(`<g transform="translate(${x},${ground})">${drawn.svg}</g>`);
    }
  }

  // Personnages, répartis de gauche à droite
  const drawn = chars.map((c, i) => {
    const x = xs[i];
    const face: 1 | -1 = c.facing === 'gauche' ? -1 : c.facing === 'droite' ? 1 : x > 260 ? -1 : 1;
    const y = ground + (i % 2) * 4;
    return { c, x, y, d: drawCharacter(c, x, y, face, chars.length <= 2 ? 1 : 0.88) };
  });
  for (const { x, y } of drawn) parts.push(`<ellipse cx="${x}" cy="${y + 2}" rx="20" ry="4" fill="#000" fill-opacity="0.12"/>`);
  for (const { d } of drawn) parts.push(d.svg);

  // Captifs liés : une corde relie leurs mains
  const bound = drawn.filter((v) => v.c.bound);
  if (bound.length >= 2) {
    let d = `M${n1(bound[0].d.hands[0])},${n1(bound[0].d.hands[1])}`;
    for (let i = 1; i < bound.length; i++) {
      const [x0, y0] = bound[i - 1].d.hands;
      const [x1, y1] = bound[i].d.hands;
      d += ` Q${n1((x0 + x1) / 2)},${n1(Math.max(y0, y1) + 14)} ${n1(x1)},${n1(y1)}`;
    }
    parts.push(`<path d="${d}" stroke="#A16207" stroke-width="3" fill="none" stroke-linecap="round"/>`);
  }

  // Pancarte
  if (spec.sign) {
    const w = Math.max(70, spec.sign.length * 9 + 24);
    parts.push(`<g transform="translate(260,40)"><rect x="${-w / 2}" y="-18" width="${w}" height="34" rx="8" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/><text x="0" y="5" text-anchor="middle" font-size="15" font-weight="800" fill="#92400E" font-family="system-ui, sans-serif">${esc(spec.sign)}</text></g>`);
  }

  // Bulle de parole
  if (spec.bubble && drawn[spec.bubble.from]) {
    const lines = wrapText(spec.bubble.text);
    const w = Math.min(230, Math.max(...lines.map((l) => l.length)) * 7 + 24);
    const h = lines.length * 16 + 14;
    const [hx, hy] = drawn[spec.bubble.from].d.headTop;
    const bx = Math.min(W - w - 8, Math.max(8, hx - w / 2));
    const by = Math.max(8, hy - h - 16);
    const tailX = Math.min(bx + w - 14, Math.max(bx + 14, hx));
    parts.push(`<g><rect x="${n1(bx)}" y="${n1(by)}" width="${n1(w)}" height="${h}" rx="12" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>` +
      `<path d="M${n1(tailX - 7)},${n1(by + h - 1)} L${n1(hx)},${n1(hy - 4)} L${n1(tailX + 7)},${n1(by + h - 1)} Z" fill="#FFFFFF"/>` +
      lines.map((l, i) => `<text x="${n1(bx + w / 2)}" y="${n1(by + 21 + i * 16)}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1E293B" font-family="system-ui, sans-serif">${esc(l)}</text>`).join('') + `</g>`);
  }

  const label = esc(opts.label ?? 'Illustration');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:520px;height:auto;border-radius:18px" role="img" aria-label="${label}">` +
    `<defs><clipPath id="${clipId}"><rect width="${W}" height="${H}" rx="18"/></clipPath></defs><g clip-path="url(#${clipId})">${parts.join('')}</g></svg>`;
}
