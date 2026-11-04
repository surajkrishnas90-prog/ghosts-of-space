import { useEffect, useRef, useState } from 'react';
import { soundEngine } from '../audio/soundEngine.js';
import '../styles/audio-controller.css';

const STORAGE_KEY = 'ghosts:audio-settings';
const DEFAULTS = { master: false, music: true, effects: true, muted: false, masterVolume: 0.42, musicVolume: 0.24, effectsVolume: 0.22 };

function readPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved && typeof saved === 'object' ? { ...DEFAULTS, ...saved, master: Boolean(saved.master) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

export default function AudioController({ scene = 'home' }) {
  const [prefs, setPrefs] = useState(readPreferences);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const toggleRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch { /* Storage may be disabled. */ }
    soundEngine.setPreferences(prefs);
  }, [prefs]);

  useEffect(() => {
    soundEngine.setScene(scene);
  }, [scene]);

  useEffect(() => {
    const onEffect = (event) => soundEngine.playEffect(event.detail?.name);
    const onScene = (event) => soundEngine.setScene(event.detail?.scene);
    window.addEventListener('ghosts-audio-effect', onEffect);
    window.addEventListener('ghosts-audio-scene', onScene);
    return () => {
      window.removeEventListener('ghosts-audio-effect', onEffect);
      window.removeEventListener('ghosts-audio-scene', onScene);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener('keydown', closeOnEscape, true);
    return () => window.removeEventListener('keydown', closeOnEscape, true);
  }, [open]);

  async function startAudio() {
    setError('');
    try {
      await soundEngine.unlock();
      setActive(true);
      return true;
    } catch {
      setError('Audio is unavailable in this browser. The museum remains fully usable in silence.');
      return false;
    }
  }

  async function toggleMaster(event) {
    const enabled = event.currentTarget.checked;
    if (!enabled) {
      setPrefs((value) => ({ ...value, master: false }));
      return;
    }
    if (!await startAudio()) return;
    setPrefs((value) => ({ ...value, master: true, muted: false }));
  }

  async function toggleMute() {
    if (!prefs.muted) {
      setPrefs((value) => ({ ...value, muted: true }));
      return;
    }
    if (prefs.master && !await startAudio()) return;
    setPrefs((value) => ({ ...value, muted: false }));
  }

  function update(key, value) {
    setPrefs((current) => ({ ...current, [key]: value }));
  }

  const playing = active && prefs.master && !prefs.muted;
  return (
    <div className="audio-dock" data-audio-playing={playing ? 'true' : 'false'}>
      {open && <section className="audio-panel" aria-labelledby="audio-panel-title">
        <div className="audio-panel__heading"><div><p className="audio-kicker">GHOSTS OF SPACE</p><h2 id="audio-panel-title">Audio controls</h2></div><button type="button" className="audio-panel__close" onClick={() => setOpen(false)} aria-label="Close audio controls">×</button></div>
        <p className="audio-description">Original synthesized sound design · no planetary recordings</p>
        <label className="audio-switch"><span>Master audio</span><input type="checkbox" role="switch" checked={prefs.master} onChange={toggleMaster} aria-label="Master audio"/><i aria-hidden="true" /></label>
        {prefs.master && !active && <button className="audio-start" type="button" onClick={startAudio}>Start audio in this session <span aria-hidden="true">→</span></button>}
        <label className="audio-switch"><span>Ambient soundscape</span><input type="checkbox" role="switch" checked={prefs.music} onChange={(event) => update('music', event.target.checked)} aria-label="Ambient soundscape"/><i aria-hidden="true" /></label>
        <label className="audio-switch"><span>Interaction effects</span><input type="checkbox" role="switch" checked={prefs.effects} onChange={(event) => update('effects', event.target.checked)} aria-label="Interaction effects"/><i aria-hidden="true" /></label>
        <label className="audio-range"><span>Master volume <output>{Math.round(prefs.masterVolume * 100)}%</output></span><input type="range" min="0" max="1" step="0.01" value={prefs.masterVolume} onChange={(event) => update('masterVolume', Number(event.target.value))} aria-label="Master volume" /></label>
        <label className="audio-range"><span>Music volume <output>{Math.round(prefs.musicVolume * 100)}%</output></span><input type="range" min="0" max="1" step="0.01" value={prefs.musicVolume} onChange={(event) => update('musicVolume', Number(event.target.value))} aria-label="Music volume" /></label>
        <label className="audio-range"><span>Effects volume <output>{Math.round(prefs.effectsVolume * 100)}%</output></span><input type="range" min="0" max="1" step="0.01" value={prefs.effectsVolume} onChange={(event) => update('effectsVolume', Number(event.target.value))} aria-label="Effects volume" /></label>
        <div className="audio-panel__footer"><span role="status">{error || (playing ? 'SOUND ON' : 'SILENT')}</span><button type="button" onClick={toggleMute} aria-pressed={prefs.muted}>{prefs.muted ? 'Unmute' : 'Mute'}</button></div>
      </section>}
      <button ref={toggleRef} className="audio-dock__toggle" type="button" aria-label={open ? 'Close audio controls' : 'Open audio controls'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 9.5a4 4 0 0 1 0 5M18.5 7a7.5 7.5 0 0 1 0 10" className={playing ? '' : 'is-muted'}/></svg>
        <span>{playing ? 'AUDIO ON' : 'AUDIO OFF'}</span>
      </button>
    </div>
  );
}
