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
}

export const soundFX = new SoundFX();
