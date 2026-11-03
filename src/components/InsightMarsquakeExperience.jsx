import '../styles/insight-marsquake.css';

const seismogram = 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/4/6/46331_E1-PIA24761-Seismogram_from_Mars.jpg?crop=faces%2Cfocalpoint&fit=clip&h=831&w=2687';

function MarsInterior() {
  return <div className="insight-interior" role="img" aria-label="Illustrative cross-section of Mars. Animated concentric wave rings pass through the crust, mantle and core; this is not recorded seismic data.">
    <div className="insight-planet"><span className="insight-crust"/><span className="insight-mantle"/><span className="insight-core"/><i className="insight-wave insight-wave--one"/><i className="insight-wave insight-wave--two"/><i className="insight-wave insight-wave--three"/><b className="insight-quake-source"/></div>
    <div className="insight-label insight-label--crust">CRUST</div><div className="insight-label insight-label--mantle">MANTLE</div><div className="insight-label insight-label--core">CORE</div>
    <div className="insight-source-label">ILLUSTRATIVE SIMULATION – NOT RECORDED SEISMIC DATA</div>
  </div>;
}

export default function InsightMarsquakeExperience() {
  return <div className="insight-experience">
    <section className="insight-seis" aria-labelledby="insight-seis-title">
      <p className="explore-eyebrow">THE INSTRUMENT · SEIS</p><h3 id="insight-seis-title">Listening beneath the surface</h3>
      <p>SEIS (Seismic Experiment for Interior Structure) measured ground motion on Mars. Its protected instruments recorded vibrations from marsquakes, impacts and environmental sources.</p>
      <div className="insight-seis-grid"><article><span>VBB</span><h4>Very Broad Band</h4><p>A three-axis seismometer built to detect a broad range of low-frequency ground motion.</p></article><article><span>SP</span><h4>Short Period</h4><p>A three-axis seismometer designed to capture higher-frequency motion.</p></article><article><span>SHIELD</span><h4>Wind and Thermal Shield</h4><p>A dome-shaped cover protected SEIS from wind and temperature variations at the surface.</p></article></div>
      <p className="insight-note">SEIS sensed motion transmitted through the ground. Scientists compare seismic records with environmental data to distinguish marsquakes from wind and lander-related noise.</p>
    </section>
    <section className="insight-archive" aria-labelledby="insight-archive-title">
      <p className="explore-eyebrow">ARCHIVAL RECORD · SOL 235</p><h3 id="insight-archive-title">S0235b · A signal from Mars</h3>
      <p>Catalogue event S0235b occurred on 26 July 2019 at 12:16:15 UTC during mission sol 235. NASA’s resource captions the archival seismogram as 25 July 2019; the dates differ at the sol-to-UTC boundary.</p>
      <figure><img src={seismogram} alt="NASA archival seismogram showing a marsquake detected by InSight on mission sol 235" loading="lazy" decoding="async"/><figcaption>Archival seismogram · NASA/JPL-Caltech · NASA captions the event July 25, 2019. <a href="https://science.nasa.gov/resource/seismogram-from-mars/" target="_blank" rel="noreferrer">Open NASA source ↗</a></figcaption></figure>
      <p className="insight-data-limit">This is NASA’s archival seismogram image, not an interactive waveform. Matching raw PDS waveform integration remains future work; no sample values or amplitude units are inferred here.</p>
    </section>
    <section className="insight-simulation" aria-labelledby="insight-simulation-title"><p className="explore-eyebrow">CONCEPTUAL MODEL</p><h3 id="insight-simulation-title">Waves through a planet</h3><p>Seismic energy can travel through the crust and deeper interior. The layered geometry and wave motion below are explanatory illustrations, not a reconstruction of S0235b.</p><MarsInterior/></section>
  </div>;
}
