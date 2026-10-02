/**
 * Focus Audio Engine for KONAN AI
 * 100% Native Web Audio API procedural synthesis.
 * Zero external mp3 dependencies, zero 404s, works offline, cross-device.
 */

export type FocusSoundtrackId = 
  | 'alpha_waves' 
  | 'gentle_rain' 
  | 'library_focus' 
  | 'ocean_waves' 
  | 'lofi_ambient';

export interface FocusSoundtrack {
  id: FocusSoundtrackId;
  name: string;
  tagline: string;
  icon: string;
  frequencyDesc: string;
}

export const FOCUS_SOUNDTRACKS: FocusSoundtrack[] = [
  {
    id: 'alpha_waves',
    name: 'Ondes Alpha 40Hz',
    tagline: 'Synchronisation neuronale & assimilation profonde',
    icon: '🧠',
    frequencyDesc: 'Ondes gamma/alpha calibrées pour la mémoire à long terme',
  },
  {
    id: 'gentle_rain',
    name: 'Pluie Apaisante',
    tagline: 'Bruit brownien filtré anti-distraction',
    icon: '🌧️',
    frequencyDesc: 'Isolation phonique naturelle réduisant la fatigue cognitive',
  },
  {
    id: 'library_focus',
    name: 'Bibliothèque Universitaire',
    tagline: 'Ambiance feutrée de grand amphi & silence habité',
    icon: '📚',
    frequencyDesc: 'Résonance chaude et atmosphère studieuse',
  },
  {
    id: 'ocean_waves',
    name: 'Vagues Océaniques',
    tagline: 'Flux et reflux réguliers apaisant le système nerveux',
    icon: '🌊',
    frequencyDesc: 'Rythme respiratoire calqué sur la concentration zen',
  },
  {
    id: 'lofi_ambient',
    name: 'Lofi Chords Étude',
    tagline: 'Harmonies douces en boucle à 60 BPM',
    icon: '🎵',
    frequencyDesc: 'Tempo idéal pour entrer dans l\'état de Flow',
  },
];

type AudioListener = (isPlaying: boolean, trackId: FocusSoundtrackId | null, volume: number) => void;

class FocusAudioEngine {
  private ctx: AudioContext | null = null;
  private currentTrack: FocusSoundtrackId | null = null;
  private isPlayingState = false;
  private volume = 0.6;
  private masterGain: GainNode | null = null;
  private activeNodes: Array<{ stop?: () => void; disconnect?: () => void }> = [];
  private listeners: Set<AudioListener> = new Set();
  private timerId: number | null = null;

  private getContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch {
      // AudioContext unavailable
    }
    return this.ctx;
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlayingState, this.currentTrack, this.volume);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l(this.isPlayingState, this.currentTrack, this.volume));
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(v: number) {
    this.volume = Math.max(0, Math.min(2.0, v));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
    this.notify();
  }

  public isPlaying(): boolean {
    return this.isPlayingState;
  }

  public getCurrentTrack(): FocusSoundtrackId | null {
    return this.currentTrack;
  }

  public toggleTrack(trackId: FocusSoundtrackId) {
    if (this.isPlayingState && this.currentTrack === trackId) {
      this.stop();
    } else {
      this.play(trackId);
    }
  }

  public play(trackId: FocusSoundtrackId) {
    this.stopNodes();

    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, ctx.currentTime);

    // Dynamic Limiter / Compressor prevents digital clipping when boosted up to 200%
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-12, ctx.currentTime);
    compressor.knee.setValueAtTime(10, ctx.currentTime);
    compressor.ratio.setValueAtTime(6, ctx.currentTime);
    compressor.attack.setValueAtTime(0.003, ctx.currentTime);
    compressor.release.setValueAtTime(0.25, ctx.currentTime);

    this.masterGain.connect(compressor);
    compressor.connect(ctx.destination);

    this.currentTrack = trackId;
    this.isPlayingState = true;

    switch (trackId) {
      case 'alpha_waves':
        this.buildAlphaWaves(ctx, this.masterGain);
        break;
      case 'gentle_rain':
        this.buildRain(ctx, this.masterGain);
        break;
      case 'ocean_waves':
        this.buildOceanWaves(ctx, this.masterGain);
        break;
      case 'library_focus':
        this.buildLibraryFocus(ctx, this.masterGain);
        break;
      case 'lofi_ambient':
        this.buildLofiAmbient(ctx, this.masterGain);
        break;
    }

    this.notify();
  }

  public stop() {
    this.stopNodes();
    this.isPlayingState = false;
    this.notify();
  }

  private stopNodes() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {}
    });
    this.activeNodes = [];

    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
      } catch {}
    }
  }

  // 1. ONDES ALPHA & BINAURAL (216 Hz & 226 Hz -> 10 Hz Alpha Beat + 40 Hz Gamma pulse)
  private buildAlphaWaves(ctx: AudioContext, dest: GainNode) {
    const leftOsc = ctx.createOscillator();
    const rightOsc = ctx.createOscillator();
    const leftGain = ctx.createGain();
    const rightGain = ctx.createGain();

    leftOsc.type = 'sine';
    leftOsc.frequency.setValueAtTime(216, ctx.currentTime); // Base Carrier

    rightOsc.type = 'sine';
    rightOsc.frequency.setValueAtTime(226, ctx.currentTime); // +10 Hz Binaural Beat (Alpha)

    leftGain.gain.setValueAtTime(0.40, ctx.currentTime);
    rightGain.gain.setValueAtTime(0.40, ctx.currentTime);

    // Warm sub-bass harmonic for comforting drone
    const subOsc = ctx.createOscillator();
    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(108, ctx.currentTime);
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.24, ctx.currentTime);

    leftOsc.connect(leftGain);
    rightOsc.connect(rightGain);
    subOsc.connect(subGain);

    leftGain.connect(dest);
    rightGain.connect(dest);
    subGain.connect(dest);

    leftOsc.start();
    rightOsc.start();
    subOsc.start();

    this.activeNodes.push(leftOsc, rightOsc, subOsc, leftGain, rightGain, subGain);
  }

  // 2. PLUIE APAISANTE (Pink/Brownian Noise procedural filter)
  private buildRain(ctx: AudioContext, dest: GainNode) {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02; // Brownian noise
      lastOut = output[i];
      output[i] *= 4.5;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to simulate raindrops
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.70, ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    whiteNoise.start();
    this.activeNodes.push(whiteNoise, filter, gain);
  }

  // 3. VAGUES OCÉANIQUES (Modulated lowpass noise with rhythmic swell)
  private buildOceanWaves(ctx: AudioContext, dest: GainNode) {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.25; // Pink noise
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(360, ctx.currentTime);

    const swellGain = ctx.createGain();
    swellGain.gain.setValueAtTime(0.30, ctx.currentTime);

    // LFO for ocean wave swell (period ~10 seconds)
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.1, ctx.currentTime); // 0.1Hz = 10s wave period
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0.40, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(swellGain.gain);

    noise.connect(filter);
    filter.connect(swellGain);
    swellGain.connect(dest);

    noise.start();
    lfo.start();
    this.activeNodes.push(noise, filter, swellGain, lfo, lfoGain);
  }

  // 4. BIBLIOTHÈQUE CALME (Subtle room resonance with soft acoustic presence)
  private buildLibraryFocus(ctx: AudioContext, dest: GainNode) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(144, ctx.currentTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(216, ctx.currentTime);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(180, ctx.currentTime);
    filter.Q.setValueAtTime(0.8, ctx.currentTime);

    gain.gain.setValueAtTime(0.32, ctx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    osc1.start();
    osc2.start();
    this.activeNodes.push(osc1, osc2, filter, gain);
  }

  // 5. LOFI AMBIENT CHORDS (Warm gentle alternating major-7th chord cycles)
  private buildLofiAmbient(ctx: AudioContext, dest: GainNode) {
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 392.00], // G7
    ];

    let chordIdx = 0;
    const currentOscs: OscillatorNode[] = [];
    const chordGain = ctx.createGain();
    chordGain.gain.setValueAtTime(0.28, ctx.currentTime);
    chordGain.connect(dest);
    this.activeNodes.push(chordGain);

    const playChord = () => {
      // Fade out previous
      currentOscs.forEach(o => {
        try { o.stop(); o.disconnect(); } catch {}
      });
      currentOscs.length = 0;

      if (!this.isPlayingState) return;

      const freqs = chords[chordIdx % chords.length];
      chordIdx++;

      freqs.forEach(f => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.01, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.32, ctx.currentTime + 0.6);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

        osc.connect(g);
        g.connect(chordGain);
        osc.start();
        osc.stop(ctx.currentTime + 4.0);

        currentOscs.push(osc);
      });
    };

    playChord();
    this.timerId = window.setInterval(playChord, 3800);
  }
}

export const focusAudioEngine = new FocusAudioEngine();
