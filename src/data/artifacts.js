export const worlds = {
  moon: {
    id: 'moon',
    number: '01',
    name: 'The Moon',
    eyebrow: 'EARTH’S NEAREST ARCHIVE',
    title: 'A surface shaped by silence.',
    introduction: 'Experiments, landers and vehicles remain across the lunar landscape. Some were left there by design; each records a different chapter of exploration.',
    coordinates: 'HADLEY–APENNINE · MARE TRANQUILLITATIS · OCEANUS PROCELLARUM',
    model: '/models/planets/moon_home.glb',
    modelAlt: 'Rotating NASA Lunar Reconnaissance Orbiter based Moon globe',
    artifacts: ['apollo-11-reflector', 'surveyor-3', 'apollo-15-lrv', 'apollo-14-alsep'],
    timeline: [
      { date: '19 APR 1967', title: 'Surveyor 3 lands', detail: 'The robotic lander touches down in Oceanus Procellarum.', source: 'NASA: Apollo 12 makes a pinpoint landing', url: 'https://www.nasa.gov/history/55-years-ago-apollo-12-makes-a-pinpoint-landing-on-the-moon/' },
      { date: '20 JUL 1969 · LOCAL', title: 'Apollo 11 deploys the LR-3', detail: 'The passive laser retroreflector is placed on the lunar surface.', source: 'Apollo 11 Preliminary Science Report', url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html' },
      { date: '05 FEB 1971', title: 'Apollo 14 deploys ALSEP', detail: 'The science station begins a long-running series of surface measurements.', source: 'NASA: Apollo 14 ALSEP image and mission context', url: 'https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/' },
      { date: '31 JUL 1971', title: 'Apollo 15 drives the LRV', detail: 'The Lunar Roving Vehicle extends the crew’s range at Hadley–Apennine.', source: 'NASA: First Apollo astronauts to drive on the Moon', url: 'https://www.nasa.gov/history/50-years-ago-first-apollo-astronauts-to-drive-on-the-moon-took-final-cruise/' },
      { date: '30 SEP 1977', title: 'ALSEP operations end', detail: 'NASA terminates the powered lunar experiment network; its hardware remains at the sites.', source: 'ALSEP termination report (NTRS)', url: 'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19790014808.pdf' },
    ],
  },
  mars: {
    id: 'mars',
    number: '02',
    name: 'Mars',
    eyebrow: 'THE RED PLANET ARCHIVE',
    title: 'Signals from another world.',
    introduction: 'A lander lost in winter, a rover whose final location is uncertain, and missions that fell silent after changing what we know about Mars.',
    coordinates: 'ARES VALLIS · VASTITAS BOREALIS · ELysium Planitia'.toUpperCase(),
    model: '/models/planets/mars.glb',
    modelAlt: 'Rotating NASA Mars globe',
    artifacts: ['mars-pathfinder', 'sojourner', 'phoenix', 'insight'],
    timeline: [
      { date: '04 JUL 1997', title: 'Pathfinder lands at Ares Vallis', detail: 'The Carl Sagan Memorial Station begins operations on the Martian surface.', source: 'NASA Mars Pathfinder mission', url: 'https://science.nasa.gov/mission/mars-pathfinder/' },
      { date: '06 JUL 1997', title: 'Sojourner rolls onto Mars', detail: 'The Microrover Flight Experiment begins exploring rocks and soil near the lander.', source: 'NASA: Sojourner arrives on the Red Planet', url: 'https://www.nasa.gov/image-article/july-4-1997-sojourner-arrives-red-planet/' },
      { date: '27 SEP 1997', title: 'Pathfinder’s final successful data cycle', detail: 'Communication ends; battery depletion and cold are suspected, not confirmed, causes.', source: 'Mars Pathfinder mission report (PDS)', url: 'https://pds.nasa.gov/data/mpfr-m-apxs-5-ddr-v1.0/mprv_0001/document/mission.htm' },
      { date: '25 MAY 2008', title: 'Phoenix reaches the north', detail: 'The lander confirms water ice in subsurface soil and studies the polar environment.', source: 'NASA Mars Phoenix mission', url: 'https://science.nasa.gov/mission/mars-phoenix/' },
      { date: '26 NOV 2018', title: 'InSight lands on Elysium Planitia', detail: 'A mission dedicated to studying the planet’s deep interior begins.', source: 'NASA InSight mission', url: 'https://science.nasa.gov/mission/insight/' },
      { date: '15 DEC 2022', title: 'InSight mission concludes', detail: 'After dust reduced its solar power, NASA ends the mission when contact cannot be restored.', source: 'NASA InSight science and mission updates', url: 'https://science.nasa.gov/mission/insight/science/' },
    ],
  },
};

export const artifacts = {
  'apollo-11-reflector': {
    id: 'apollo-11-reflector', world: 'moon', name: 'Laser Ranging Retro-Reflector (LR-3)', mission: 'Apollo 11 · Early Apollo Scientific Experiments Package', date: 'Deployed 20 July 1969 local time (21 July UTC)', location: 'Mare Tranquillitatis, the Moon', status: 'Passive experiment · still used for ranging', statusKind: 'active',
    image: '/images/artifacts/apollo-11-easep-retroreflector.jpg', imageAlt: 'Apollo 11 astronaut beside the Early Apollo Scientific Experiments Package and laser retroreflector on the Moon', credit: 'NASA · AS11-40-5948',
    summary: 'A compact array of corner-cube prisms left on the Moon as a passive scientific instrument.', purpose: 'Return pulses from Earth-based lasers to precisely measure the Earth–Moon distance.', fate: 'The array has no power supply or moving parts. It remains on the lunar surface and is still used for lunar laser ranging.', significance: 'Its measurements support studies of lunar orbit, internal structure and the Earth–Moon system over decades.', sources: [{ label: 'Apollo 11 Preliminary Science Report', url: 'https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html' }, { label: 'ILRS Apollo 11 mission page', url: 'https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html' }],
  },
  'surveyor-3': {
    id: 'surveyor-3', world: 'moon', name: 'Surveyor 3 Robotic Lunar Lander', mission: 'Surveyor 3 · Apollo 12 site visit', date: 'Landed 19 April 1967 · visited November 1969', location: 'Oceanus Procellarum, the Moon', status: 'Lander remains · selected components were returned', statusKind: 'mixed',
    image: '/images/artifacts/surveyor-3-on-moon.jpg', imageAlt: 'Surveyor 3 spacecraft standing on the lunar surface, photographed by Apollo 12 astronauts', credit: 'NASA · AS12-48-7121',
    summary: 'A robotic lander that soft-landed on the Moon and was later visited by the Apollo 12 crew.', purpose: 'Demonstrate precision lunar soft-landing and examine the surface with cameras and a soil-mechanics scoop.', fate: 'The lander remains on the Moon. Apollo 12 astronauts removed its television camera, scoop and other parts and returned those pieces to Earth; those returned components are not lunar artifacts.', significance: 'Surveyor 3 helped characterize the landing site and provided a rare opportunity to examine hardware after prolonged exposure to the lunar environment.', sources: [{ label: 'NASA: Apollo 12 makes a pinpoint landing', url: 'https://www.nasa.gov/history/55-years-ago-apollo-12-makes-a-pinpoint-landing-on-the-moon/' }, { label: 'JPL: Surveyor 3 camera returned from the Moon', url: 'https://www.jpl.nasa.gov/blog/2012/1/surveyor-3-camera-returned-from-the-moon' }],
  },
  'apollo-15-lrv': {
    id: 'apollo-15-lrv', world: 'moon', name: 'Lunar Roving Vehicle (LRV)', mission: 'Apollo 15', date: 'First lunar use 31 July 1971 · parked before lunar liftoff 2 August', location: 'Hadley–Apennine region, the Moon', status: 'Deliberately parked · inactive', statusKind: 'inactive',
    image: '/images/artifacts/apollo-15-lrv-hadley-rille.jpg', imageAlt: 'Apollo 15 astronaut David Scott working beside the Lunar Roving Vehicle at Hadley Rille', credit: 'NASA · AS15-85-11451',
    summary: 'An electrically powered, battery-operated vehicle that carried astronauts and equipment across the lunar surface.', purpose: 'Extend crew mobility, allow geological fieldwork and transport lunar samples over greater distances.', fate: 'The rover was deliberately parked after the final traverse before the crew returned to lunar orbit. It was not designed to return to Earth.', significance: 'The LRV greatly expanded the Apollo 15 crew’s exploration range and helped them collect and contextualize samples from the Hadley–Apennine region.', sources: [{ label: 'NASA: First Apollo astronauts to drive on the Moon', url: 'https://www.nasa.gov/history/50-years-ago-first-apollo-astronauts-to-drive-on-the-moon-took-final-cruise/' }, { label: 'NASA: History of lunar exploration', url: 'https://science.nasa.gov/solar-system/moon/history-of-lunar-exploration/' }],
  },
  'apollo-14-alsep': {
    id: 'apollo-14-alsep', world: 'moon', name: 'Apollo Lunar Surface Experiments Package (ALSEP)', mission: 'Apollo 14 · central station and instruments', date: 'Deployed 5 February 1971 · operations ended 30 September 1977', location: 'Fra Mauro, the Moon', status: 'Operations terminated · hardware remains', statusKind: 'inactive',
    image: '/images/artifacts/apollo-14-alsep-station.jpg', imageAlt: 'Apollo 14 ALSEP central station and deployed lunar surface experiments', credit: 'NASA/JSC · AS14-67-09361',
    summary: 'A powered central station connecting scientific instruments deployed near the Apollo 14 landing site.', purpose: 'Transmit long-term measurements of seismic activity, particles and the lunar environment to Earth.', fate: 'The instruments and station were deliberately left on the Moon. NASA terminated operations for the Apollo-era ALSEP network in September 1977.', significance: 'Long-running measurements helped scientists investigate the Moon’s internal structure and surface environment.', sources: [{ label: 'NASA: Apollo 14 ALSEP station', url: 'https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/' }, { label: 'ALSEP termination report (NTRS)', url: 'https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19790014808.pdf' }],
  },
  'mars-pathfinder': {
    id: 'mars-pathfinder', world: 'mars', name: 'Mars Pathfinder Lander · Carl Sagan Memorial Station', mission: 'Mars Pathfinder', date: 'Landed 4 July 1997 · last successful data cycle 27 September 1997', location: 'Ares Vallis, Mars', status: 'Inactive · cause of communication loss unconfirmed', statusKind: 'uncertain',
    image: '/images/artifacts/pathfinder-sojourner-panorama.jpg', imageAlt: 'NASA panorama of the Mars Pathfinder landing site at Ares Vallis', credit: 'NASA/JPL-Caltech · PIA00662',
    summary: 'The stationary landing platform that delivered Sojourner to the Martian surface.', purpose: 'Demonstrate a lower-cost Mars landing approach and provide a base for surface imaging, weather observations and rover operations.', fate: 'Pathfinder remains on Mars and is inactive. Communication stopped after its final successful data cycle. Battery depletion and cold are suspected causes, not confirmed findings.', significance: 'The mission demonstrated direct-entry airbag landing and returned surface images and measurements of Martian weather, rocks and soil.', sources: [{ label: 'NASA Mars Pathfinder mission', url: 'https://science.nasa.gov/mission/mars-pathfinder/' }, { label: 'Mars Pathfinder mission report (PDS)', url: 'https://pds.nasa.gov/data/mpfr-m-apxs-5-ddr-v1.0/mprv_0001/document/mission.htm' }],
  },
  sojourner: {
    id: 'sojourner', world: 'mars', name: 'Sojourner Rover (Microrover Flight Experiment)', mission: 'Mars Pathfinder', date: 'Landed 4 July 1997 · deployed 6 July · last contact 27 September', location: 'Ares Vallis, Mars', status: 'Later state and location uncertain', statusKind: 'uncertain',
    image: '/images/artifacts/pathfinder-sojourner-rover-touchdown.jpg', imageAlt: 'NASA/JPL image documenting the Mars Pathfinder Sojourner rover touchdown sequence', credit: 'NASA/JPL-Caltech · PIA00623',
    summary: 'A small mobile rover carried to Mars by the Pathfinder lander.', purpose: 'Demonstrate robotic surface mobility and use its camera and Alpha Proton X-ray Spectrometer to examine nearby rocks and soil.', fate: 'NASA records indicate Sojourner was functioning when communication with Pathfinder ended. Its later condition and precise location are unknown.', significance: 'Sojourner became the first wheeled vehicle to operate on Mars and proved that a rover could perform useful surface science there.', sources: [{ label: 'NASA: Sojourner arrives on the Red Planet', url: 'https://www.nasa.gov/image-article/july-4-1997-sojourner-arrives-red-planet/' }, { label: 'JPL Robotics: Mars Pathfinder', url: 'https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/' }],
  },
  phoenix: {
    id: 'phoenix', world: 'mars', name: 'Phoenix Mars Lander', mission: 'Phoenix', date: 'Landed 25 May 2008 · final communication 2 November 2008', location: 'Vastitas Borealis, Mars', status: 'Inactive · mission ended after Martian winter', statusKind: 'inactive',
    image: '/images/artifacts/phoenix-lander.jpg', imageAlt: 'Enhanced-color HiRISE orbital image of the Phoenix Mars Lander with solar panels deployed', credit: 'NASA/JPL-Caltech/University of Arizona · PIA10701 · enhanced color',
    summary: 'A stationary lander sent to study soil and water ice in the Martian arctic.', purpose: 'Use a robotic arm, ovens and instruments to sample soil and characterize polar weather and chemistry.', fate: 'Phoenix remains on Mars and is inactive. Its solar-powered system could not sustain operations through the dark Martian winter. This local orbital image uses enhanced color; NASA notes the lander appears bluer than reality.', significance: 'Phoenix confirmed water ice in subsurface soil, detected perchlorate and made measurements of the polar environment.', sources: [{ label: 'NASA Mars Phoenix mission', url: 'https://science.nasa.gov/mission/mars-phoenix/' }, { label: 'NASA science accomplishments, 2008', url: 'https://science.nasa.gov/about-us/science-strategy/accomplishments/year-2008/' }],
  },
  insight: {
    id: 'insight', world: 'mars', name: 'InSight Mars Lander', mission: 'Interior Exploration using Seismic Investigations, Geodesy and Heat Transport (InSight)', date: 'Landed 26 November 2018 · mission ended 15 December 2022', location: 'Elysium Planitia, Mars', status: 'Retired · no contact after solar power declined', statusKind: 'inactive',
    image: '/images/artifacts/insight-final-selfie.jpg', imageAlt: 'InSight’s final Mars selfie showing dust accumulated on the lander and its solar panels', credit: 'NASA/JPL-Caltech · PIA25287',
    summary: 'A stationary geophysical lander designed to study the deep interior of Mars.', purpose: 'Measure marsquakes and heat flow to understand the planet’s crust, mantle and core.', fate: 'Dust accumulation reduced solar power. NASA ended the mission after the lander stopped responding and contact could not be restored; it remains inactive on Mars.', significance: 'Seismic and heat-flow measurements provided the first detailed constraints on the interior structure of Mars and recorded marsquakes and impacts.', sources: [{ label: 'NASA InSight mission', url: 'https://science.nasa.gov/mission/insight/' }, { label: 'NASA InSight science', url: 'https://science.nasa.gov/mission/insight/science/' }],
  },
};
