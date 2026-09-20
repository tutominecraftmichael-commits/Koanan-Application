/**
 * Native Web Audio API Sound Synthesizer
 * Zero external audio files, zero latency, runs seamlessly on mobile (iOS Safari & Android Chrome).
 */

class SoundFX {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch {
      // AudioContext unavailable or restricted
    }
    return this.ctx;
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
    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

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

        // Warm harmonic sine with overtone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + d);

        // Attack & decay envelope
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
  }

  /**
   * Sparkling victory celebration sound
   */
  public playCelebrationFanfare() {
    this.playStreakIgniteChime();
  }

  /**
   * Subtle pleasant pop for checkboxes and pill taps
   */
  public playCheckmarkPop() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
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
   * Alert or notification ping for soft warnings (e.g. anti-cheat)
   */
  public playNotificationPing() {
    this.playCheckmarkPop();
  }

  /**
   * Subtle ascending tick sound during progress bar climb (0-98%)
   */
  public playTensionTick(pitchRatio = 0.5) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
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
    const ctx = this.getContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
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
  /**
   * Triumphant Victory Fanfare
   * Rich, exciting, orchestral brass fanfare with automatic node disposal to guarantee zero memory overhead or browser crashes.
   */
  public playMinecraftAdvancementSound() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

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
  }
}

export const soundFX = new SoundFX();
