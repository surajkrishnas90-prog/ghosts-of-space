import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import ExplorePage from './pages/ExplorePage.jsx';

const stars = Array.from({ length: 72 }, (_, i) => ({
  left: `${(i * 47 + 9) % 100}%`,
  top: `${(i * 71 + 13) % 100}%`,
  delay: `${(i % 9) * -0.7}s`,
  size: i % 11 === 0 ? 'star--bright' : '',
}));

export default function App() {
  const scene = useRef(null);
  const [routeHash, setRouteHash] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const syncRoute = () => setRouteHash(window.location.hash || '#home');
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  function exploreTheLost(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const startTransition = document.startViewTransition;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!startTransition || reducedMotion) return;

    event.preventDefault();
    const navigate = () => {
      window.history.pushState(null, '', '#moon');
      flushSync(() => setRouteHash('#moon'));
    };

    try {
      startTransition.call(document, navigate);
    } catch {
      navigate();
    }
  }

  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    if (routeHash === '#home') window.scrollTo(0, 0);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const moon = el.querySelector('model-viewer');
    if (moon && !reducedMotion) moon.setAttribute('auto-rotate', '');
    if (reducedMotion) return;
    const move = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty('--pointer-x', `${x}`);
      el.style.setProperty('--pointer-y', `${y}`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [routeHash]);

  if (routeHash === '#moon' || routeHash.startsWith('#moon-') || routeHash === '#mars' || routeHash.startsWith('#mars-') || routeHash === '#credits' || routeHash.startsWith('#artifact/')) {
    return <ExplorePage routeHash={routeHash} />;
  }

  return (
    <main className="hero" ref={scene} id="home">
      <div className="stars" aria-hidden="true">{stars.map((star, i) => <i key={i} className={`star ${star.size}`} style={{ left: star.left, top: star.top, animationDelay: star.delay }} />)}</div>
      <div className="nebula nebula--one" aria-hidden="true" />
      <div className="nebula nebula--two" aria-hidden="true" />
      <div className="horizon" aria-hidden="true" />
      <div className="lunar-foreground" aria-hidden="true"><span className="ridge ridge--back" /><span className="ridge ridge--front" /><i className="foreground-rock rock--one" /><i className="foreground-rock rock--two" /><i className="foreground-rock rock--three" /></div>
      <div className="planet-wrap" aria-hidden="true">
        <div className="planet-glow" />
        <model-viewer className="moon-model" src="/models/planets/moon_home.glb" alt="NASA lunar globe rendered in the night sky" loading="eager" reveal="auto" shadow-intensity="0" exposure="0.94" environment-image="neutral" camera-target="0m 0m 0m" disable-zoom disable-pan interaction-prompt="none" rotation-per-second="1deg" aria-hidden="true" />
        <div className="planet-shadow" />
      </div>

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Ghosts of Space home"><span className="wordmark-mark">G</span><span>GHOSTS <b>OF</b> SPACE</span></a>
        <div className="topbar-right"><span className="signal-dot" /> DIGITAL SPACE MUSEUM <span className="topbar-divider">/</span> LEVENTHREE</div>
      </header>

      <section className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> A MUSEUM OF THE UNRETURNED</p>
        <h1>GHOSTS<br /><span>OF SPACE</span></h1>
        <p className="tagline">The machines we left behind.<br className="desktop-break" /> The discoveries they made possible.</p>
        <p className="intro">Some machines still support science; others were shut down, lost contact, or left behind by design. Each holds a story of discovery, ingenuity, and the frontier ahead.</p>
        <a className="explore-button" href="#moon" onClick={exploreTheLost}><span>Explore the Lost</span><span className="button-arrow" aria-hidden="true">↗</span></a>
        <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO DISCOVER</div>
      </section>

      <aside className="planet-label" aria-label="Featured destination"><span className="label-index">01</span><span className="label-rule" /><span><small>FEATURED WORLD</small><b>THE MOON</b></span></aside>
      <div className="coordinates">0° 40′ 26.69″ N <span>·</span> 23° 28′ 22.69″ E</div>
      <footer className="hero-footer"><span>NASA SPACE APPS CHALLENGE 2026</span><span className="footer-center">DISCOVER WHAT REMAINS</span><span>AN EXPLORATION BY <b>LEVENTHREE</b></span></footer>
    </main>
  );
}

