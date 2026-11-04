import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArtifactPanel, { ArtifactCard } from '../components/ArtifactPanel.jsx';
import { artifacts, worlds } from '../data/artifacts.js';
import { requestAudioEffect, requestAudioScene } from '../audio/soundEngine.js';

function WorldNavigation({ activeWorld }) {
  return (
    <nav className="world-navigation" aria-label="Choose a world">
      <a href="#moon" aria-current={activeWorld === 'moon' ? 'page' : undefined} className={activeWorld === 'moon' ? 'is-active' : ''}><span>01</span> Moon</a>
      <a href="#mars" aria-current={activeWorld === 'mars' ? 'page' : undefined} className={activeWorld === 'mars' ? 'is-active' : ''}><span>02</span> Mars</a>
    </nav>
  );
}

function WorldChapter({ world, motionAllowed }) {
  const chapterRef = useRef(null);

  useEffect(() => {
    if (!motionAllowed || !('IntersectionObserver' in window)) return undefined;
    const chapter = chapterRef.current;
    if (!chapter) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    chapter.classList.add('has-scroll-observer');
    chapter.querySelectorAll('[data-scroll-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [motionAllowed, world.id]);

  return (
    <section className={`world-chapter world-chapter--${world.id}`} id={world.id} aria-labelledby={`${world.id}-title`} ref={chapterRef}>
      <div className="world-atmosphere" aria-hidden="true" />
      <div className="world-chapter__hero">
        <div className="world-chapter__copy" data-scroll-reveal>
          <p className="explore-eyebrow"><span className="eyebrow-line" />{world.eyebrow}</p>
          <p className="world-chapter__number">DESTINATION {world.number} <span>·</span> {world.coordinates}</p>
          <h1 id={`${world.id}-title`}>{world.title}</h1>
          <p className="world-chapter__intro">{world.introduction}</p>
          <a className="world-chapter__scroll" href={`#${world.id}-collection`}><span aria-hidden="true">↓</span> ENTER THE COLLECTION</a>
        </div>
        <div className="world-chapter__planet" aria-label={`${world.name} globe`}>
          <span className="world-chapter__planet-glow" aria-hidden="true" />
          <model-viewer src={world.model} alt={`${world.modelAlt}. Drag to rotate; scroll or pinch to zoom.`} loading="lazy" reveal="auto" shadow-intensity="0.3" exposure={world.id === 'moon' ? '0.88' : '0.78'} environment-image="neutral" camera-controls touch-action="pan-y" interaction-prompt="auto" interaction-prompt-style="basic" interaction-prompt-threshold="2500" auto-rotate-delay="1800" rotation-per-second="0.55deg" min-camera-orbit="auto auto 85%" max-camera-orbit="auto auto 250%" {...(motionAllowed ? { 'auto-rotate': '' } : {})} />
          <span className="world-chapter__planet-credit">NASA PLANETARY MODEL · CONTEXT ONLY</span>
        </div>
      </div>

      <div className="world-chapter__content" id={`${world.id}-collection`}>
        <div className="section-heading">
          <div><p className="explore-eyebrow">THE FIELD NOTES · {world.number}</p><h2>Artifacts on {world.name}</h2></div>
          <p>Four objects. Four different endings.<br />Select an artifact to uncover its story.</p>
        </div>
        <div className="artifact-grid">
          {world.artifacts.map((id, index) => <div className="artifact-reveal" data-scroll-reveal style={{ '--reveal-index': index }} key={id}><ArtifactCard artifact={artifacts[id]} number={String(index + 1).padStart(2, '0')} /></div>)}
        </div>

        <section className="mission-timeline" aria-labelledby={`${world.id}-timeline-title`}>
          <div className="section-heading section-heading--timeline">
            <div><p className="explore-eyebrow">A CHRONOLOGY OF EXPLORATION</p><h2 id={`${world.id}-timeline-title`}>Mission timeline</h2></div>
            <p>{world.id === 'moon' ? <>Dates follow NASA mission records.<br />Apollo dates are local unless marked UTC.</> : <>Dates identify landing, deployment,<br />communication, or mission-end events.</>}</p>
          </div>
          <ol className="timeline-list" data-scroll-reveal>
            {world.timeline.map((event, index) => <li className="timeline-event" data-scroll-reveal style={{ '--reveal-index': index }} key={`${event.date}-${event.title}`}>
              <time>{event.date}</time><span className="timeline-marker" aria-hidden="true" />
              <div><h3>{event.title}</h3><p>{event.detail}</p><a href={event.url} target="_blank" rel="noreferrer">{event.source}<span aria-hidden="true"> ↗</span></a></div>
            </li>)}
          </ol>
        </section>
      </div>
      {world.id === 'moon' ? (
        <div className="world-chapter__end world-chapter__end--transition" data-scroll-reveal>
          <span aria-hidden="true" />
          <a href="#mars">LUNAR TRANSMISSION COMPLETE <b>·</b> CONTINUE TO MARS <span aria-hidden="true">↓</span></a>
          <span aria-hidden="true" />
        </div>
      ) : <div className="world-chapter__end" aria-hidden="true"><span /> END OF MARS TRANSMISSION <span /></div>}
    </section>
  );
}

function CreditsSection() {
  const imageCredits = Object.values(artifacts);
  const references = [...Object.values(artifacts).flatMap((artifact) => artifact.sources), ...Object.values(worlds).flatMap((world) => world.timeline.map(({ source: label, url }) => ({ label, url }))),
    { label: 'Moon globe · NASA GSFC / Ernie Wright (USRA)', url: 'https://svs.gsfc.nasa.gov/14959/' },
    { label: 'Mars globe · NASA/JPL-Caltech', url: 'https://science.nasa.gov/resource/planet-mars-3d-model/' }]
    .filter((source, index, list) => list.findIndex((candidate) => candidate.url === source.url) === index);

  return (
    <section className="source-credits" aria-labelledby="credits-title" id="credits">
      <div className="source-credits__heading">
        <p className="explore-eyebrow">ARCHIVE RECORD · CREDITS & REFERENCES</p>
        <h2 id="credits-title">Every signal has a source.</h2>
        <p>NASA mission records and image archives support the stories in this exhibit. Planetary models are used as context; they do not represent artifact-scale objects.</p>
      </div>
      <div className="source-credits__columns">
        <section aria-labelledby="image-credit-title">
          <h3 id="image-credit-title">Photographs & image credits</h3>
          <ul>{imageCredits.map((artifact) => <li key={artifact.id}><span>{artifact.name}</span><small>{artifact.credit}</small></li>)}</ul>
        </section>
        <section aria-labelledby="research-source-title">
          <h3 id="research-source-title">Research & mission sources</h3>
          <ul>{references.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul>
        </section>
      </div>
      <p className="source-credits__note">NASA imagery and research are credited to their stated source. GHOSTS OF SPACE is an independent educational project and is not endorsed by NASA.</p>
    </section>
  );
}

export default function ExplorePage({ routeHash }) {
  const pendingWorldRef = useRef(null);
  const [visibleWorld, setVisibleWorld] = useState(null);
  const parsedId = routeHash.startsWith('#artifact/') ? routeHash.slice('#artifact/'.length) : null;
  const selectedArtifact = parsedId ? artifacts[parsedId] : null;
  const routeWorld = routeHash.startsWith('#mars') || routeHash === '#credits' ? 'mars' : 'moon';
  const activeWorld = selectedArtifact?.world ?? visibleWorld ?? routeWorld;
  const motionAllowed = useMemo(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const closePanel = useCallback(() => {
    requestAudioEffect('artifact-close');
    window.location.hash = `#${selectedArtifact?.world ?? activeWorld}`;
  }, [activeWorld, selectedArtifact?.world]);

  useEffect(() => {
    const destination = selectedArtifact?.world ?? routeWorld;
    pendingWorldRef.current = destination;
    setVisibleWorld(destination);
  }, [routeHash, routeWorld, selectedArtifact?.world]);

  useEffect(() => {
    const audioScene = selectedArtifact?.id === 'apollo-11-reflector' ? 'apollo'
      : selectedArtifact?.id === 'insight' ? 'insight'
        : selectedArtifact?.world ?? visibleWorld ?? routeWorld;
    requestAudioScene(audioScene);
  }, [selectedArtifact?.id, selectedArtifact?.world, visibleWorld, routeWorld]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const chapters = document.querySelectorAll('.world-chapter');
    let observer;
    const updateActiveWorld = () => {
      const viewportCenter = window.innerHeight / 2;
      const activeChapter = [...chapters].find((chapter) => {
        const bounds = chapter.getBoundingClientRect();
        return bounds.top <= viewportCenter && bounds.bottom > viewportCenter;
      });
      if (!activeChapter) return;
      if (pendingWorldRef.current && activeChapter.id !== pendingWorldRef.current) return;
      pendingWorldRef.current = null;
      setVisibleWorld(activeChapter.id);
    };
    const observeChapters = () => {
      observer?.disconnect();
      const bandInset = Math.round(window.innerHeight * 0.45);
      observer = new IntersectionObserver(updateActiveWorld, {
        threshold: 0,
        rootMargin: `-${bandInset}px 0px -${bandInset}px 0px`,
      });
      chapters.forEach((chapter) => observer.observe(chapter));
      updateActiveWorld();
    };

    observeChapters();
    window.addEventListener('resize', observeChapters, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', observeChapters);
    };
  }, []);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('ghosts:artifact-return-scroll');
    window.requestAnimationFrame(() => {
      if (savedPosition !== null) {
        window.scrollTo(0, Number(savedPosition));
        if (!routeHash.startsWith('#artifact/')) sessionStorage.removeItem('ghosts:artifact-return-scroll');
      } else {
        const initialWorld = selectedArtifact?.world ?? activeWorld;
        const initialTarget = routeHash.startsWith('#artifact/') ? initialWorld : routeHash.slice(1);
        (document.getElementById(initialTarget) ?? document.getElementById(initialWorld))?.scrollIntoView({ block: 'start', behavior: motionAllowed ? 'smooth' : 'auto' });
      }
    });
    // Resolve hash targets after React renders; restore card position around a detail panel.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeHash]);

  function rememberArtifactScroll(event) {
    if (event.target.closest('[data-artifact-trigger]')) {
      sessionStorage.setItem('ghosts:artifact-return-scroll', String(window.scrollY));
      requestAudioEffect('artifact-open');
      return;
    }
    const worldLink = event.target.closest('a[href="#moon"], a[href="#mars"]');
    if (worldLink) requestAudioEffect('world-transition');
  }

  return (
    <main className="explore-page" onClick={rememberArtifactScroll}>
      <header className="explore-topbar">
        <a className="explore-wordmark" href="#home" aria-label="Return to GHOSTS OF SPACE homepage"><span className="wordmark-mark">G</span><span>GHOSTS <b>OF</b> SPACE</span></a>
        <WorldNavigation activeWorld={activeWorld} />
        <a href="#home" className="explore-home-link">EXIT EXPLORATION <span aria-hidden="true">↗</span></a>
      </header>
      <div className="explore-progress" aria-hidden="true"><span className="explore-progress__moon" /><span className="explore-progress__mars" /></div>
      {Object.values(worlds).map((world) => <WorldChapter key={world.id} world={world} motionAllowed={motionAllowed} />)}
      <CreditsSection />
      <footer className="explore-footer"><span>GHOSTS OF SPACE <b>·</b> LEVENTHREE</span><a href="#home">RETURN TO THE ORBITAL VIEW ↑</a><span>NASA SOURCES LINKED THROUGHOUT</span></footer>
      {selectedArtifact && <ArtifactPanel artifact={selectedArtifact} onClose={closePanel} />}
    </main>
  );
}
