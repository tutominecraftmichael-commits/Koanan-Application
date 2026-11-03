/**
 * Native Web Audio API Sound Synthesizer
 * Zero external audio files, zero latency, runs seamlessly on mobile (iOS Safari & Android Chrome).
 */

class SoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (this.ctx && this.ctx.state !== 'closed') return this.ctx;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch {
      // AudioContext unavailable or restricted
      this.ctx = null;
    }
    return this.ctx;
  }

  private safelyResume(ctx: AudioContext): void {
    if (ctx && ctx.state === 'suspended') {
      try {
        const p = ctx.resume();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {});
        }
      } catch {
        // Safe fail
      }
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Sparkling victory arpeggio: C5 (523.25Hz), E5 (659.25Hz), G5 (783.99Hz), C6 (1046.50Hz)
   * Plays with gentle sine waves and warm reverb-like exponential decay.
   */
  public playStreakIgniteChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const notes = [
        { f: 523.25, d: 0.00, dur: 0.7 }, // C5
        { f: 659.25, d: 0.08, dur: 0.7 }, // E5
        { f: 783.99, d: 0.16, dur: 0.75 }, // G5
        { f: 1046.50, d: 0.24, dur: 1.1 }, // C6 (sparkling high note)
        { f: 1318.51, d: 0.32, dur: 1.2 }, // E6 (crystalline top shine)
      ];

      const now = ctx.currentTime;

      notes.forEach(({ f, d, dur }) => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + d);

          gain.gain.setValueAtTime(0.0001, now + d);
          gain.gain.linearRampToValueAtTime(0.18, now + d + 0.025);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + d + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + d);
          osc.stop(now + d + dur + 0.05);
        } catch {
          // Safe fail
        }
      });
    } catch {
      // Safe fail
    }
  }

  /**
   * Sparkling victory celebration sound
   */
  public playCelebrationFanfare() {
    this.playStreakIgniteChime();
  }

  /**
   * Triumphant orchestral brass fanfare for PRO celebration
   */
  public playVictoryCelebration() {
    this.playMinecraftAdvancementSound();
  }

  /**
   * Sparkling success chime for actions like PRO activation & Google Agenda sync
   */
  public playSuccessChime() {
    this.playStreakIgniteChime();
  }

  /**
   * Subtle pleasant pop for checkboxes and pill taps
   */
  public playCheckmarkPop() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Safe fail
    }
  }

  /**
   * Clic doux sur un élément interactif
   */
  public playClick() {
    this.playCheckmarkPop();
  }

  /**
   * Une note « clochette » : fondamentale + harmoniques douces, attaque rapide, extinction exponentielle.
   * `glideTo` fait glisser la hauteur pendant la note (utile pour le son d'erreur qui « retombe »).
   */
  private bellTone(
    ctx: AudioContext,
    dest: AudioNode,
    o: { freq: number; start: number; dur: number; gain: number; type?: OscillatorType; partials?: number[]; glideTo?: number },
  ) {
    const partials = o.partials ?? [1];
    partials.forEach((amp, k) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = k === 0 ? (o.type ?? 'sine') : 'sine';
      const f = o.freq * (k + 1);
      osc.frequency.setValueAtTime(f, o.start);
      if (o.glideTo) osc.frequency.exponentialRampToValueAtTime(o.glideTo * (k + 1), o.start + o.dur * 0.8);
      // Les harmoniques s'éteignent plus vite que la fondamentale : timbre de clochette
      const d = o.dur / (1 + k * 0.9);
      g.gain.setValueAtTime(0.0001, o.start);
      g.gain.linearRampToValueAtTime(o.gain * amp, o.start + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, o.start + d);
      osc.connect(g);
      g.connect(dest);
      osc.onended = () => { try { osc.disconnect(); g.disconnect(); } catch { /* déjà déconnecté */ } };
      osc.start(o.start);
      osc.stop(o.start + d + 0.05);
    });
  }

  /** Chaîne de sortie commune : filtre doux + compresseur, pour un son propre et sans saturation. */
  private outputChain(ctx: AudioContext, cutoff: number, volume: number): AudioNode {
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = cutoff;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    const master = ctx.createGain();
    master.gain.value = volume;
    lowpass.connect(comp);
    comp.connect(master);
    master.connect(ctx.destination);
    window.setTimeout(() => { try { lowpass.disconnect(); comp.disconnect(); master.disconnect(); } catch { /* déjà déconnecté */ } }, 1500);
    return lowpass;
  }

  /**
   * Bonne réponse : deux notes cristallines qui montent (sol puis do aigus), comme une petite cloche joyeuse,
   * avec un léger scintillement final. Court (~0,6 s) pour ne pas ralentir l'enchaînement des questions.
   */
  public playCorrect() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);
      const out = this.outputChain(ctx, 7000, 0.9);
      const now = ctx.currentTime + 0.01;
      this.bellTone(ctx, out, { freq: 783.99, start: now, dur: 0.22, gain: 0.2, partials: [1, 0.35, 0.12] }); // sol 5
      this.bellTone(ctx, out, { freq: 1046.5, start: now + 0.1, dur: 0.55, gain: 0.22, partials: [1, 0.3, 0.1] }); // do 6
      this.bellTone(ctx, out, { freq: 1567.98, start: now + 0.14, dur: 0.3, gain: 0.05 }); // sol 6, scintillement discret
    } catch {
      // Safe fail
    }
  }

  /**
   * Mauvaise réponse : deux notes graves et feutrées qui descendent en glissant (« bonk-bonk »).
   * On comprend tout de suite que c'est raté, sans son agressif ni décourageant.
   */
  public playWrong() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);
      const out = this.outputChain(ctx, 1400, 0.95);
      const now = ctx.currentTime + 0.01;
      this.bellTone(ctx, out, { freq: 329.63, start: now, dur: 0.16, gain: 0.2, type: 'triangle', partials: [1, 0.25] }); // mi 4
      this.bellTone(ctx, out, { freq: 246.94, glideTo: 207.65, start: now + 0.13, dur: 0.38, gain: 0.22, type: 'triangle', partials: [1, 0.3] }); // si 3 qui retombe
    } catch {
      // Safe fail
    }
  }

  /**
   * Jingle de victoire sobre en fin de leçon validée à 100%
   */
  public playVictoryJingle() {
    this.playStreakIgniteChime();
  }

  /**
   * Célébration complète en fin de séance validée
   */
  public playGrandCheer() {
    this.playMinecraftAdvancementSound();
  }

  /**
   * Alert or notification ping for soft warnings (e.g. anti-cheat)
   */
  public playNotificationPing() {
    this.playCheckmarkPop();
  }

  /**
   * Punchy, energetic alarm sound for the exact study start time alert
   */
  public playStudyAlertAlarm() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const beeps = [
        { f: 880, d: 0.0, dur: 0.12 },
        { f: 1174.66, d: 0.15, dur: 0.18 },
        { f: 880, d: 0.38, dur: 0.12 },
        { f: 1318.51, d: 0.52, dur: 0.35 }
      ];

      const now = ctx.currentTime;
      beeps.forEach(({ f, d, dur }) => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + d);
          gain.gain.setValueAtTime(0.0001, now + d);
          gain.gain.linearRampToValueAtTime(0.25, now + d + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + d + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + d);
          osc.stop(now + d + dur + 0.05);
        } catch {
          // Safe fail
        }
      });
    } catch {
      // Safe fail
    }
  }

  /**
   * Subtle ascending tick sound during progress bar climb (0-98%)
   */
  public playTensionTick(pitchRatio = 0.5) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;
      const freq = 320 + pitchRatio * 440; // Rises from ~320Hz to ~760Hz

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.3, now + 0.04);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Safe fail
    }
  }

  /**
   * Low dramatic heartbeat thud when reaching 98% suspense threshold
   */
  public playSuspenseHeartbeat() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const now = ctx.currentTime;
      [0, 0.22].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(85, now + delay);
        osc.frequency.exponentialRampToValueAtTime(45, now + delay + 0.12);

        gain.gain.setValueAtTime(0.2, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.16);
      });
    } catch {
      // Safe fail
    }
  }

  /**
   * Minecraft Challenge Complete Fanfare ("Full Netherite" Advancement Sound)
   * Exciting, polyphonic, orchestral brass progression with rising fanfare + crystalline high sparkles.
   */
  public playMinecraftAdvancementSound() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      this.safelyResume(ctx);

      const now = ctx.currentTime;

      // 1. Warm brass lead melody: C4 -> E4 -> G4 -> C5 -> sustained triumph chord
      const melody = [
        { f: 261.63, delay: 0.00, dur: 0.18 }, // C4
        { f: 329.63, delay: 0.16, dur: 0.18 }, // E4
        { f: 392.00, delay: 0.32, dur: 0.22 }, // G4
        { f: 523.25, delay: 0.48, dur: 0.28 }, // C5
        { f: 659.25, delay: 0.70, dur: 1.60 }, // E5 (triumph)
      ];

      melody.forEach(({ f, delay, dur }) => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + delay);

          gain.gain.setValueAtTime(0.001, now + delay);
          gain.gain.linearRampToValueAtTime(0.22, now + delay + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.onended = () => {
            try {
              osc.disconnect();
              gain.disconnect();
            } catch {}
          };

          osc.start(now + delay);
          osc.stop(now + delay + dur + 0.05);
        } catch {
          // Safe fail
        }
      });

      // 2. Triumphant harmony chord sustained at 0.70s (Root C5 + G5 + C6)
      const chord = [
        { f: 523.25, dur: 1.8 }, // C5
        { f: 783.99, dur: 1.8 }, // G5
        { f: 1046.50, dur: 1.8 }, // C6
      ];

      chord.forEach(({ f, dur }) => {
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + 0.70);

          gain.gain.setValueAtTime(0.001, now + 0.70);
          gain.gain.linearRampToValueAtTime(0.14, now + 0.75);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.70 + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.onended = () => {
            try {
              osc.disconnect();
              gain.disconnect();
            } catch {}
          };

          osc.start(now + 0.70);
          osc.stop(now + 0.70 + dur + 0.05);
        } catch {
          // Safe fail
        }
      });
    } catch {
      // Safe fail
    }
  }
}

export const soundFX = new SoundFX();
