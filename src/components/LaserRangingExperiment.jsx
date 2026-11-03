import { useState } from 'react';
import '../styles/laser-ranging.css';

const C = 299792458;
const MIN = 356500;
const MAX = 406700;
const format = (value, digits = 6) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

function Reflector() {
  return <span className="lr-reflector" aria-hidden="true"><span className="lr-reflector__panel">{Array.from({ length: 16 }, (_, i) => <i key={i} />)}</span><span className="lr-reflector__leg lr-reflector__leg--left" /><span className="lr-reflector__leg lr-reflector__leg--right" /><span className="lr-reflector__foot" /></span>;
}

export default function LaserRangingExperiment() {
  const [distance, setDistance] = useState(384400);
  const [running, setRunning] = useState(false);
  const [run, setRun] = useState(0);
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const oneWay = distance * 1000 / C;
  const roundTrip = 2 * distance * 1000 / C;

  function start() {
    setRun((v) => v + 1);
    setRunning(true);
    if (!reduced) window.setTimeout(() => setRunning(false), 2600);
    else setRunning(false);
  }

  function reset() { setRunning(false); setRun((v) => v + 1); setDistance(384400); }

  return <section className="lr-experiment" aria-labelledby="lr-experiment-title">
    <header className="lr-head"><p className="explore-eyebrow">PASSIVE EXPERIMENT · LIGHT-TIME DEMONSTRATION</p><h3 id="lr-experiment-title">A pulse across the distance</h3><p>Earth and Moon are shown at illustrative scale. The reflector marker is an illustrative reconstruction, not NASA flight hardware.</p></header>
    <div className={`lr-scene ${running ? 'is-running' : ''} ${reduced ? 'is-reduced' : ''}`} key={run}>
      <div className="lr-stars" aria-hidden="true" />
      <div className="lr-earth"><span className="lr-earth-glow" /><span className="lr-earth-sphere" role="img" aria-label="NASA Blue Marble Earth texture" /><small>EARTH · OBSERVATORY</small></div>
      <div className="lr-beam" aria-hidden="true"><i className="lr-pulse lr-pulse--out" /><i className="lr-pulse lr-pulse--back" /></div>
      <div className="lr-moon"><span className="lr-moon-glow" /><model-viewer src="/models/planets/moon_home.glb" alt="Illustrative Moon globe with Apollo 11 reflector location marked" loading="lazy" reveal="auto" interaction-prompt="none" disable-zoom disable-pan camera-controls="false" exposure="0.78" shadow-intensity="0" /><span className="lr-site"><Reflector /><small>LR-3 SITE</small></span><small className="lr-moon-label">MOON</small></div>
      <span className="lr-distance-line" aria-hidden="true" />
      <span className="lr-scale-note">DISTANCE ILLUSTRATIVE · PLANETS NOT TO SCALE</span>
    </div>
    <div className="lr-controls"><label htmlFor="lr-distance">Earth–Moon distance <output htmlFor="lr-distance">{format(distance, 0)} km</output></label><input id="lr-distance" type="range" min={MIN} max={MAX} step="100" value={distance} onChange={(e) => setDistance(Number(e.target.value))} /><div className="lr-range"><span>{format(MIN, 0)} km</span><span>{format(MAX, 0)} km</span></div>
      <div className="lr-readouts" aria-live="polite"><div><small>ONE-WAY LIGHT TIME</small><strong>{format(oneWay)} s</strong></div><div><small>ROUND-TRIP LIGHT TIME</small><strong>{format(roundTrip)} s</strong></div></div>
      <div className="lr-actions"><button type="button" onClick={start}>Start experiment <span aria-hidden="true">→</span></button><button type="button" className="lr-reset" onClick={reset}>Reset</button></div>
    </div>
    <div className="lr-explain"><h4>How lunar laser ranging works</h4><p>A retroreflector returns light toward its source. Apollo 11 astronauts deployed an array of corner-cube prisms so observatories on Earth could target it with short laser pulses.</p><p>Stations measure the pulse’s round-trip travel time and use the speed of light to determine Earth–Moon range. Continued observations help scientists study lunar motion, the Earth–Moon system and gravitational physics.</p><p className="lr-caveat">This model calculates ideal light-travel time from the selected distance. Real observations account for the full observing geometry and instrumental effects; the animation is accelerated and is not a measurement.</p><a href="https://ilrs.cddis.eosdis.nasa.gov/missions/satellite_missions/current_missions/ap11_reflector.html" target="_blank" rel="noreferrer">NASA/ILRS · Apollo 11 reflector <span aria-hidden="true">↗</span></a> <a href="https://science.nasa.gov/solar-system/moon/moon-facts/" target="_blank" rel="noreferrer">NASA · Moon exploration <span aria-hidden="true">↗</span></a></div>
  </section>;
}
