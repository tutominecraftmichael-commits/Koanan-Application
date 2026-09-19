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
  public playMinecraftAdvancementSound() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;

    // 1. Deep Sub-Bass Impact (Netherite heavy resonance)
    try {
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(75, now);
      subOsc.frequency.exponentialRampToValueAtTime(35, now + 1.2);

      subGain.gain.setValueAtTime(0.001, now);
      subGain.gain.linearRampToValueAtTime(0.3, now + 0.04);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 1.5);
    } catch {
      // Safe fail
    }

    // 2. Rising Triumphant Brass Fanfare (C4, E4, G4, C5, E5 -> Glorious Climax Chord)
    const hornNotes = [
      { f: 261.63, delay: 0.00, dur: 0.32, gain: 0.18 }, // C4
      { f: 329.63, delay: 0.16, dur: 0.32, gain: 0.20 }, // E4
      { f: 392.00, delay: 0.32, dur: 0.36, gain: 0.22 }, // G4
      { f: 523.25, delay: 0.48, dur: 0.45, gain: 0.24 }, // C5
      { f: 659.25, delay: 0.64, dur: 0.55, gain: 0.26 }, // E5
      // Climax chord sustained at 0.85s:
      { f: 261.63, delay: 0.85, dur: 2.5, gain: 0.22 },  // C4 (Bass foundation)
      { f: 523.25, delay: 0.85, dur: 2.5, gain: 0.24 },  // C5 (Root)
      { f: 659.25, delay: 0.85, dur: 2.5, gain: 0.22 },  // E5 (Major third)
      { f: 783.99, delay: 0.85, dur: 2.6, gain: 0.25 },  // G5 (Fifth)
      { f: 1046.50, delay: 0.85, dur: 2.8, gain: 0.28 }, // C6 (High octave triumph)
      { f: 1318.51, delay: 0.85, dur: 2.6, gain: 0.22 }, // E6 (Top glow)
    ];

    hornNotes.forEach(({ f, delay, dur, gain: targetGain }) => {
      try {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(f, now + delay);

        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(f * 1.004, now + delay); // subtle warm chorus detune

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(f * 4, now + delay);
        filter.frequency.exponentialRampToValueAtTime(f * 1.8, now + delay + dur);

        noteGain.gain.setValueAtTime(0.0001, now + delay);
        noteGain.gain.linearRampToValueAtTime(targetGain, now + delay + 0.035);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc1.start(now + delay);
        osc2.start(now + delay);
        osc1.stop(now + delay + dur + 0.05);
        osc2.stop(now + delay + dur + 0.05);
      } catch {
        // Safe fail
      }
    });

    // 3. Shimmering Minecraft Diamond & Netherite Star Sparkles
    const sparkleNotes = [
      { f: 1046.50, delay: 0.95, dur: 0.9 }, // C6
      { f: 1318.51, delay: 1.05, dur: 0.9 }, // E6
      { f: 1567.98, delay: 1.15, dur: 1.0 }, // G6
      { f: 2093.00, delay: 1.25, dur: 1.4 }, // C7
      { f: 2637.02, delay: 1.35, dur: 1.5 }, // E7
      { f: 2093.00, delay: 1.50, dur: 1.6 }, // C7
    ];

    sparkleNotes.forEach(({ f, delay, dur }) => {
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + delay);

        gain.gain.setValueAtTime(0.0001, now + delay);
        gain.gain.linearRampToValueAtTime(0.14, now + delay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + dur + 0.05);
      } catch {
        // Safe fail
      }
    });
  }
}

export const soundFX = new SoundFX();
