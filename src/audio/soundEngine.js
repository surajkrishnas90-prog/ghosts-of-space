const PROFILES = {
  home: { notes: [55, 82.41, 110, 164.81], air: 220, filter: 1900 },
  moon: { notes: [49, 73.42, 98, 146.83], air: 160, filter: 1050 },
  mars: { notes: [51.91, 77.78, 103.83, 155.56], air: 360, filter: 720 },
  apollo: { notes: [49, 73.42, 98, 146.83], air: 180, filter: 1300 },
  insight: { notes: [51.91, 77.78, 103.83, 155.56], air: 330, filter: 850 },
};

const smooth = (param, value, context, time = 0.55) => {
  param.cancelScheduledValues(context.currentTime);
  param.setTargetAtTime(value, context.currentTime, time);
};

function createNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate);
  const samples = buffer.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < samples.length; i += 1) {
    const white = Math.random() * 2 - 1;
    previous = (previous + 0.025 * white) / 1.025;
    samples[i] = previous * 3.5;
  }
  return buffer;
}

export class SpaceSoundEngine {
  context = null;
  master = null;
  music = null;
  effects = null;
  voices = [];
  airFilter = null;
  airGain = null;
  toneFilter = null;
  active = false;
  prefs = null;
  scene = 'home';
  suspendTimeout = null;

  async unlock() {
    if (!this.context) this.createGraph();
    if (this.context.state === 'suspended') await this.context.resume();
    this.active = true;
    this.update();
  }

  createGraph() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error('Web Audio is unavailable in this browser.');
    const context = new AudioContextClass();
    this.context = context;
    this.master = context.createGain();
    this.music = context.createGain();
    this.effects = context.createGain();
    this.master.gain.value = 0;
    this.music.gain.value = 0;
    this.effects.gain.value = 0;
    this.music.connect(this.master);
    this.effects.connect(this.master);
    this.master.connect(context.destination);

    const toneBus = context.createGain();
    toneBus.gain.value = 0.13;
    this.toneFilter = context.createBiquadFilter();
    this.toneFilter.type = 'lowpass';
    this.toneFilter.frequency.value = 1900;
    toneBus.connect(this.toneFilter).connect(this.music);
    const profile = PROFILES.home;
    profile.notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const level = context.createGain();
      oscillator.type = index === 0 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      level.gain.value = index === 0 ? 0.24 : 0.11 / index;
      oscillator.connect(level).connect(toneBus);
      oscillator.start();
      this.voices.push(oscillator);
    });

    const air = context.createBufferSource();
    air.buffer = createNoiseBuffer(context);
    air.loop = true;
    this.airFilter = context.createBiquadFilter();
    this.airFilter.type = 'lowpass';
    this.airFilter.frequency.value = profile.air;
    this.airGain = context.createGain();
    this.airGain.gain.value = 0.16;
    air.connect(this.airFilter).connect(this.airGain).connect(this.music);
    air.start();
    this.setScene(this.scene);
  }

  setScene(scene) {
    this.scene = PROFILES[scene] ? scene : 'home';
    if (!this.context) return;
    const profile = PROFILES[this.scene];
    this.voices.forEach((voice, index) => {
      if (profile.notes[index]) smooth(voice.frequency, profile.notes[index], this.context, 0.8);
    });
    smooth(this.airFilter.frequency, profile.air, this.context, 1.1);
    smooth(this.toneFilter.frequency, profile.filter, this.context, 1.1);
  }

  setPreferences(prefs) {
    this.prefs = prefs;
    this.update();
  }

  update() {
    if (!this.context || !this.prefs) return;
    const enabled = this.active && this.prefs.master && !this.prefs.muted;
    window.clearTimeout(this.suspendTimeout);
    smooth(this.master.gain, enabled ? this.prefs.masterVolume : 0, this.context, 0.18);
    smooth(this.music.gain, enabled && this.prefs.music ? this.prefs.musicVolume : 0, this.context, 0.35);
    smooth(this.effects.gain, enabled && this.prefs.effects ? this.prefs.effectsVolume : 0, this.context, 0.08);
    // Keep the engine quiet between chapters without creating overlapping tracks.
    if (this.airGain) smooth(this.airGain.gain, this.scene === 'mars' || this.scene === 'insight' ? 0.18 : 0.12, this.context, 0.8);
    if (!enabled && this.context.state !== 'suspended') {
      this.suspendTimeout = window.setTimeout(() => {
        if (!this.active || !this.prefs?.master || this.prefs.muted) this.context?.suspend();
      }, 320);
    }
  }

  playEffect(name) {
    if (!this.context || !this.active || !this.prefs?.master || !this.prefs.effects || this.prefs.muted) return;
    const context = this.context;
    const start = context.currentTime + 0.015;
    const tone = (frequency, endFrequency, duration, volume, type = 'sine', delay = 0) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, start + delay);
      if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + delay + duration);
      gain.gain.setValueAtTime(0.0001, start + delay);
      gain.gain.exponentialRampToValueAtTime(volume, start + delay + Math.min(0.045, duration / 3));
      gain.gain.exponentialRampToValueAtTime(0.0001, start + delay + duration);
      oscillator.connect(gain).connect(this.effects);
      oscillator.start(start + delay);
      oscillator.stop(start + delay + duration + 0.02);
    };
    const sweep = (duration, volume = 0.12, low = 900, high = 180) => {
      const buffer = createNoiseBuffer(context);
      const source = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      source.buffer = buffer;
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(low, start);
      filter.frequency.exponentialRampToValueAtTime(high, start + duration);
      filter.Q.value = 0.7;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.linearRampToValueAtTime(volume, start + duration * 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      source.connect(filter).connect(gain).connect(this.effects);
      source.start(start);
      source.stop(start + duration + 0.02);
    };

    switch (name) {
      case 'transition':
      case 'world-transition':
        sweep(0.72, 0.075, 520, 115);
        tone(185, 92, 0.68, 0.035, 'sine');
        tone(660, 495, 0.28, 0.018, 'sine', 0.08);
        break;
      case 'artifact-open':
        tone(520, 780, 0.24, 0.022, 'sine');
        tone(780, 1040, 0.24, 0.012, 'sine', 0.06);
        break;
      case 'artifact-close':
        tone(680, 390, 0.2, 0.015, 'sine');
        break;
      case 'laser':
        tone(1220, 360, 0.46, 0.07, 'sine');
        tone(480, 260, 0.32, 0.025, 'triangle', 0.38);
        sweep(0.52, 0.035, 2100, 600);
        break;
      case 'insight':
        tone(62, 34, 1.25, 0.09, 'triangle');
        tone(118, 64, 0.85, 0.035, 'sine', 0.12);
        sweep(1.1, 0.05, 280, 75);
        break;
      default:
        break;
    }
  }
}

export const soundEngine = new SpaceSoundEngine();

export function requestAudioEffect(name) {
  window.dispatchEvent(new CustomEvent('ghosts-audio-effect', { detail: { name } }));
}

export function requestAudioScene(scene) {
  window.dispatchEvent(new CustomEvent('ghosts-audio-scene', { detail: { scene } }));
}
