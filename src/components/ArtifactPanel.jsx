import { useEffect, useRef } from 'react';
import LaserRangingExperiment from './LaserRangingExperiment.jsx';
import InsightMarsquakeExperience from './InsightMarsquakeExperience.jsx';

function CreditedImage({ artifact, eager = false }) {
  const imageRef = useRef(null);

  function handleImageError() {
    imageRef.current?.classList.add('artifact-image--missing');
  }

  return (
    <figure className="artifact-figure">
      <div className="artifact-image-frame" ref={imageRef}>
        <img src={artifact.image} alt={artifact.imageAlt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={handleImageError} />
        <span className="image-fallback" aria-hidden="true">IMAGE UNAVAILABLE · SEE NASA SOURCE</span>
      </div>
      <figcaption>{artifact.credit}</figcaption>
    </figure>
  );
}

export function ArtifactCard({ artifact, number }) {
  return (
    <article className="artifact-card">
      <a className="artifact-card__image" href={`#artifact/${artifact.id}`} data-artifact-trigger={artifact.id} aria-label={`Explore ${artifact.name}`}>
        <CreditedImage artifact={artifact} />
        <span className="artifact-card__open" aria-hidden="true">↗</span>
      </a>
      <div className="artifact-card__body">
        <p className="artifact-card__index">{number} <span>/</span> {artifact.world.toUpperCase()}</p>
        <div className="artifact-card__meta"><span>{artifact.mission}</span><span>{artifact.date.split(' · ')[0]}</span></div>
        <h3><a href={`#artifact/${artifact.id}`} data-artifact-trigger={artifact.id}>{artifact.name}</a></h3>
        <p className={`status status--${artifact.statusKind}`}><i aria-hidden="true" />{artifact.status}</p>
        <p className="artifact-card__summary">{artifact.summary}</p>
        <a className="text-link" href={`#artifact/${artifact.id}`} data-artifact-trigger={artifact.id}>Explore artifact <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}

export default function ArtifactPanel({ artifact, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const returnFocus = document.querySelector(`[data-artifact-trigger="${artifact.id}"]`);
    document.body.style.overflow = 'hidden';
    // Wait until the triggering link's fragment navigation has settled before moving focus.
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const focusable = Array.from(document.querySelectorAll('.artifact-dialog button, .artifact-dialog a[href]'))
        .filter((element) => !element.hasAttribute('disabled'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleKeyDown);
      window.requestAnimationFrame(() => returnFocus?.focus());
    };
  }, [artifact.id, onClose]);

  return (
    <div className="artifact-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <article className="artifact-dialog" role="dialog" aria-modal="true" aria-labelledby="artifact-title">
        <button className="artifact-dialog__close" type="button" onClick={onClose} ref={closeRef} aria-label="Close artifact details">×</button>
        <div className="artifact-dialog__image"><CreditedImage artifact={artifact} eager /></div>
        <div className="artifact-dialog__content">
          <p className="explore-eyebrow">{artifact.world === 'moon' ? 'LUNAR ARCHIVE' : 'MARTIAN ARCHIVE'} · {artifact.location}</p>
          <h2 id="artifact-title">{artifact.name}</h2>
          <p className="artifact-dialog__mission">{artifact.mission}<span>{artifact.date}</span></p>
          <p className={`status status--${artifact.statusKind}`}><i aria-hidden="true" />{artifact.status}</p>
          <p className="artifact-dialog__summary">{artifact.summary}</p>
          <div className="artifact-facts">
            <section><h3>Original purpose</h3><p>{artifact.purpose}</p></section>
            <section><h3>What happened</h3><p>{artifact.fate}</p></section>
            <section><h3>Scientific legacy</h3><p>{artifact.significance}</p></section>
          </div>
          {artifact.id === 'apollo-11-reflector' && <LaserRangingExperiment />}
          {artifact.id === 'insight' && <InsightMarsquakeExperience />}
          <section className="source-list" aria-labelledby="source-heading">
            <h3 id="source-heading">NASA research & sources</h3>
            <ul>{artifact.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul>
          </section>
        </div>
      </article>
    </div>
  );
}
