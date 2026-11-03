# GHOSTS OF SPACE — Asset References and Research Register

Project setup, asset organization, and homepage implementation. Exploration pages remain pending approval.

## Usage and credit rules

- NASA says its content is generally usable for educational/informational purposes when used factually and without implying NASA endorsement. Acknowledge NASA as the source.
- Check each item: NASA-hosted pages can include third-party material with separate restrictions. Do not reuse an item marked with a third-party copyright unless permission is obtained.
- NASA insignia, logotype and seal have additional restrictions. GHOSTS OF SPACE / LEVENTHREE is the project identity; do not imply NASA sponsorship.
- NASA describes its 3D resources as free to download and use. Retain the source item's creator/data credits.
- Photographs below are authentic NASA/NASA-JPL records, not AI-generated. Their local copies were downloaded from NASA's official image archive and reduced/converted for web delivery. Their content was not composited or altered.

Primary guidance: https://www.nasa.gov/nasa-brand-center/images-and-media/
NASA image catalog: https://images.nasa.gov/
NASA 3D catalog: https://science.nasa.gov/3d-resources/

## LR-3 experiment visual assets

- `public/assets/bluemarble-2048.png` — 2048 × 1024 PNG, 1,511,379 bytes. NASA/Goddard Space Flight Center Scientific Visualization Studio, Blue Marble. Blue Marble Next Generation data courtesy of Reto Stockli (NASA/GSFC) and NASA Earth Observatory. Original source: https://svs.gsfc.nasa.gov/2915 (file: https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.png). NASA SVS lists the image at 2048 × 1024, about 1.4 MB. Used locally as the Earth sphere texture in the Apollo 11 lunar laser-ranging exhibit. NASA imagery usage guidance: https://www.nasa.gov/nasa-brand-center/images-and-media/ .
- Moon sphere: existing `public/models/planets/moon_home.glb`; original model and texture credits are listed in the planetary model entries below. Reused without replacement.
- Apollo 11 LR-3: CSS geometry in the exhibit is an illustrative reconstruction based on the documented array of corner-cube prisms and support panel. It is not NASA flight hardware and is not a sourced 3D asset.

## Proposed initial artifact collection (8 objects)

Mission date means the date of relevant landing/deployment unless specified. Local calendar dates in Apollo captions are retained; UTC may fall on the following day.

### Moon (4)

| Official equipment name / mission | Date | History, status, and challenge fit | Scientific significance | Official research source | Authentic NASA photograph (local file; catalog ID; credit) | Specific 3D model |
|---|---|---|---|---|---|---|
| Laser Ranging Retro-Reflector (LR-3), Early Apollo Scientific Experiments Package, Apollo 11 | Deployed July 20, 1969 local time (July 21 UTC) | Deliberately left on the Moon as a passive experiment. Unlike powered surface equipment, it remains usable for laser ranging. | Supports precise Earth–Moon distance measurements and studies of lunar orbit/interior. | https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html ; https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html | `public/images/artifacts/apollo-11-easep-retroreflector.jpg` — AS11-40-5948; NASA. Image shows Aldrin after EASEP deployment, with the reflector visible. | None confirmed for the reflector itself. Apollo Lunar Module model is contextual only. |
| Surveyor 3 robotic lunar lander, Surveyor 3 | Soft-landed April 19, 1967; examined by Apollo 12 in November 1969 | The lander remained on the Moon. Apollo 12 crew removed its TV camera, scoop, cable/tubing, and other parts and returned those pieces to Earth. The returned camera is not an abandoned lunar artifact. | Enabled study of how exposed hardware weathered on the Moon and provided a precision landing target for Apollo 12. | https://www.nasa.gov/history/55-years-ago-apollo-12-makes-a-pinpoint-landing-on-the-moon/ ; https://www.jpl.nasa.gov/blog/2012/1/surveyor-3-camera-returned-from-the-moon | `public/images/artifacts/surveyor-3-on-moon.jpg` — AS12-48-7121; NASA. Authentic Apollo 12 photograph of the Surveyor 3 craft on the lunar surface. | No official, web-ready Surveyor 3 model confirmed. |
| Lunar Roving Vehicle (LRV), Apollo 15 | First lunar use July 31, 1971; left parked after final traverse before lunar liftoff Aug. 2 | Deliberately left parked on the Moon; now inactive. It was not expected to return to Earth. | Expanded astronaut mobility and sample collection around Hadley–Apennine, supporting field geology and study of lunar crustal rocks. | https://www.nasa.gov/history/50-years-ago-first-apollo-astronauts-to-drive-on-the-moon-took-final-cruise/ ; https://science.nasa.gov/solar-system/moon/history-of-lunar-exploration/ | `public/images/artifacts/apollo-15-lrv-hadley-rille.jpg` — AS15-85-11451; NASA. Authentic image of Scott working beside the LRV at Hadley Rille. | No official, web-ready LRV model confirmed. Apollo Lunar Module model is contextual only. |
| Apollo Lunar Surface Experiments Package (ALSEP), Apollo 14 station and instruments | Deployed Feb. 5, 1971; NASA terminated operations Sept. 30, 1977 | Scientific equipment was deliberately left on the Moon. The powered experiments were shut down by NASA in 1977; the hardware remains at the site. | Seismic, particle, and lunar-environment experiments returned long-running data on Moon structure and surface processes. | https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19790014808.pdf ; https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/ | `public/images/artifacts/apollo-14-alsep-station.jpg` — AS14-67-9361 (archive metadata normalizes the catalog number as AS14-67-09361); NASA/JSC. Shows the central station and active seismic experiment hardware. | No official, web-ready Apollo 14 ALSEP model confirmed. |

### Mars (4)

| Official equipment name / mission | Date | History, status, and challenge fit | Scientific significance | Official research source | Authentic NASA photograph (local file; catalog ID; credit) | Specific 3D model |
|---|---|---|---|---|---|---|
| Mars Pathfinder lander, formally Carl Sagan Memorial Station, Mars Pathfinder | Landed July 4, 1997; final successful data cycle Sept. 27, 1997 | Remains on Mars and is inactive. Pathfinder stopped communicating; battery depletion and cold are suspected, not confirmed, causes. | Demonstrated a low-cost direct-entry and airbag landing system; returned imagery and measurements of Martian weather, atmosphere, rocks, and soil. | https://science.nasa.gov/mission/mars-pathfinder/ ; https://pds.nasa.gov/data/mpfr-m-apxs-5-ddr-v1.0/mprv_0001/document/mission.htm | `public/images/artifacts/pathfinder-sojourner-panorama.jpg` — PIA00662; NASA/JPL-Caltech (NASA/JPL image collection). Contextual Pathfinder landing-site panorama. | No specific Pathfinder lander model confirmed. |
| Sojourner rover (Microrover Flight Experiment), Mars Pathfinder | Landed July 4, 1997; deployed July 6; last mission communications Sept. 27 | Remains on Mars. NASA records indicate the rover was still functioning when the lander ceased communicating; its subsequent state/location is uncertain. | First wheeled vehicle to operate on Mars; demonstrated rover mobility and made direct rock/soil measurements with its APXS instrument. | https://www.nasa.gov/image-article/july-4-1997-sojourner-arrives-red-planet/ ; https://www-robotics.jpl.nasa.gov/what-we-do/flight-projects/pathfinder/ | `public/images/artifacts/pathfinder-sojourner-rover-touchdown.jpg` — PIA00623; NASA/JPL-Caltech. Pathfinder touchdown sequence/caption; use with the separate panorama for the deployed rover story. | No official, web-ready Sojourner model confirmed. |
| Phoenix Mars Lander, Phoenix | Landed May 25, 2008; final communication Nov. 2, 2008 | Remains on Mars and is inactive. The mission ended when the lander's solar-powered system could not sustain operations through the dark Martian winter. | Confirmed water ice in subsurface soil, detected perchlorate, and measured polar weather and soil chemistry. | https://science.nasa.gov/mission/mars-phoenix/ ; https://science.nasa.gov/about-us/science-strategy/accomplishments/year-2008/ | `public/images/artifacts/phoenix-lander.jpg` — PIA10701; NASA/JPL-Caltech/University of Arizona. Authentic enhanced-color HiRISE orbital photograph of Phoenix with solar panels deployed. NASA notes the spacecraft appears bluer than reality because of the filter combination. | No official downloadable Phoenix model confirmed. |
| InSight Mars Lander, InSight | Landed Nov. 26, 2018; mission ended Dec. 15, 2022 | Retired and inactive on Mars after dust reduced solar power and NASA could no longer contact it. | First mission dedicated to Mars' deep interior; seismic and heat-flow measurements constrained crust, mantle, core, marsquakes, and impacts. | https://science.nasa.gov/mission/insight/ ; https://science.nasa.gov/mission/insight/science/ | `public/images/artifacts/insight-final-selfie.jpg` — PIA25287; NASA/JPL-Caltech. Authentic final selfie taken Apr. 24, 2022. | NASA InSight mission page shows a 3D model, but no downloadable web-ready model confirmed. |

Selection note: All eight qualify as mission hardware left on the target body, but their stories differ. Apollo 11's reflector is a passive experiment still used in ranging; ALSEP instruments were shut down; Surveyor 3's lander remained while some parts were retrieved; the LRV was deliberately parked; Mars landers/rover are inactive or status-uncertain following communications/power loss. Do not call all of them “discarded equipment.”

## Downloaded NASA images

NASA Image and Video Library item IDs and direct source files:

| Local filename | Original NASA item page | Downloaded variant | Attribution / qualification |
|---|---|---|---|
| `public/images/artifacts/apollo-11-easep-retroreflector.jpg` | https://images.nasa.gov/details/as11-40-5948 | `https://images-assets.nasa.gov/image/as11-40-5948/as11-40-5948~medium.jpg` | NASA; content shows EASEP and LR-3 following deployment. |
| `public/images/artifacts/surveyor-3-on-moon.jpg` | https://images.nasa.gov/details/as12-48-7121 | `https://images-assets.nasa.gov/image/as12-48-7121/as12-48-7121~medium.jpg` | NASA; Surveyor 3 on Moon. |
| `public/images/artifacts/apollo-14-alsep-station.jpg` | https://science.nasa.gov/resource/apollo-14-mission-image-view-of-the-alsep-station/ | `https://images-assets.nasa.gov/image/as14-67-09361/as14-67-09361~medium.jpg` | NASA/JSC; ALSEP central station and experiment equipment. |
| `public/images/artifacts/apollo-15-lrv-hadley-rille.jpg` | https://www.nasa.gov/mission/apollo-15/ | `https://images-assets.nasa.gov/image/as15-85-11451/as15-85-11451~medium.jpg` | NASA; LRV at Hadley Rille. |
| `public/images/artifacts/pathfinder-sojourner-rover-touchdown.jpg` | https://photojournal.jpl.nasa.gov/catalog/PIA00623 | `https://images-assets.nasa.gov/image/PIA00623/PIA00623~medium.jpg` (NASA archive variant) | NASA/JPL-Caltech; documentary mission image. |
| `public/images/artifacts/pathfinder-sojourner-panorama.jpg` | https://science.nasa.gov/mission/mars-pathfinder/ | `https://images-assets.nasa.gov/image/PIA00662/PIA00662~medium.jpg` | NASA/JPL-Caltech; landing-site context panorama. |
| `public/images/artifacts/phoenix-lander.jpg` | https://science.nasa.gov/photojournal/color-image-of-phoenix-lander-on-mars-surface/ | `https://images-assets.nasa.gov/image/PIA10701/PIA10701~orig.jpg` | NASA/JPL-Caltech/University of Arizona; enhanced-color HiRISE orbital image. NASA notes the lander looks bluer than reality due to image filters. |
| `public/images/artifacts/insight-final-selfie.jpg` | https://photojournal.jpl.nasa.gov/catalog/PIA25287 | `https://images-assets.nasa.gov/image/PIA25287/PIA25287~medium.jpg` | NASA/JPL-Caltech; authentic lander selfie. |

Images were saved from NASA's medium-size variants where available (Phoenix PIA10701 had only original and thumbnail variants, so the original was used) and optimized locally to max 1800 pixels on the long edge, JPEG quality 86. Their scientific content was not changed. The original NASA item remains the canonical source for full-resolution versions and captions. The Sojourner touchdown photograph is only 471 × 285 pixels in NASA's available medium version, so reserve it for a small card/detail inset rather than a full-screen backdrop.

## Downloaded models and font

| Local file | Original source | Credits/license | Size and intended use |
|---|---|---|---|
| `public/models/planets/moon_small.glb` | https://svs.gsfc.nasa.gov/14959/ — `https://svs.gsfc.nasa.gov/vis/a010000/a014900/a014959/moon_small.glb` | Credit NASA Goddard Space Flight Center; data provider Ernie Wright (USRA); also list model page's other contributors when shown in product credits. | 13.80 MB. Detailed Moon with LRO data; lazy-load and provide static fallback. |
| `public/models/planets/moon_home.glb` + `moon_home_diffuse.jpg` | Derived locally from the NASA GSFC Moon GLB above; texture extracted and converted to a 2048px JPEG so the local browser loads it reliably. The original approved `moon_small.glb` is unchanged. | Same NASA GSFC / LRO / Ernie Wright (USRA) attribution as source model. Preserve source credit; derived copy does not change the source license or attribution conditions. | 1.63 MB GLB + 506 KB texture. Used for the homepage only; source image map reduced from 4096px to 2048px. |
| `public/models/planets/mars.glb` | https://science.nasa.gov/resource/planet-mars-3d-model/ — `https://assets.science.nasa.gov/content/dam/science/psd/mars/resources/gltf_files/24881_Mars_1_6792.glb` | NASA/JPL-Caltech. | 4.03 MB. Planet globe, not Mars surface equipment; lazy-load. |
| `public/models/spacecraft/apollo-lunar-module.glb` | https://science.nasa.gov/3d-resources/apollo-lunar-module/ — `https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/apollo-lunar-module/Apollo%20Lunar%20Module.glb` | NASA/Michael D. Carbajal. NASA 3D resource. | 716.84 KB. Context model only; not a model of the featured lunar experiments or LRV. |
| `public/fonts/SpaceGrotesk-Variable.ttf` | https://github.com/google/fonts/tree/main/ofl/spacegrotesk | Space Grotesk Project Authors. | 136.68 KB. Optional display font, self-hostable. |
| `public/fonts/SpaceGrotesk-OFL.txt` | https://github.com/google/fonts/blob/main/ofl/spacegrotesk/OFL.txt | SIL Open Font License 1.1; keep this file with the font if distributed. | License included. |

## Proposed folders

```text
ghosts-of-space/
├── index.html
├── package.json
├── README.md
├── ASSET-REFERENCES.md
├── public/
│   ├── images/{backgrounds,moon,mars,artifacts}/
│   ├── models/{planets,spacecraft}/
│   ├── audio/
│   ├── fonts/
│   └── icons/
└── src/{components,pages,data,assets,styles}/
```

The React + Vite setup has been extended with the approved cinematic homepage. Remaining pages have not started.

## Remaining asset gaps and next source

- **Moon landscape and homepage background:** source a selected lunar surface/landing-site photo from NASA Image Library, NASA Apollo galleries, or LRO/LROC mission pages. No generic/composited backdrop has been downloaded yet.
- **Mars landscape background:** source a Pathfinder/JPL panorama or NASA Mars rover image; panorama already available above for content use, but no dedicated section background copy yet.
- **Artifact-specific 3D models:** no official suitable web-ready models found/selected for LR-3, Surveyor 3, Apollo LRV, ALSEP, Pathfinder, Sojourner, Phoenix, or InSight. The Apollo Lunar Module is contextual only. Do not use a contextual model as if it depicts these objects.
- **InSight 3D:** the NASA mission page links a model; downloadable format/size and reuse metadata still need a direct check before adding it.
- **Audio:** optional. No audio downloaded. If used, choose an individual NASA sound with item-level credit, keep it user-triggered and off by default. Any non-NASA ambience needs a separate explicit license.
- **Icons:** no icon pack needed at setup stage; use CSS or inline SVG, or choose a license-documented pack if implementation later requires it.

## Performance and QA notes

- All eight photo files are valid JPEGs downloaded from NASA's official assets host; they were resized/compressed for web use.
- Image dimensions were checked from the actual local files. Sojourner PIA00623 is 471 × 285 px and Phoenix PIA10701 is 508 × 600 px; both are low-resolution sources and should be reserved for cards/insets rather than full-screen backgrounds.
- All three downloaded GLBs parse as valid GLB 2.0 files and contain embedded meshes. Local sizes: Moon 13,799,876 bytes; Mars 4,032,148 bytes; Apollo Lunar Module 716,840 bytes.
- Each image and model filename is recorded in this register and resolves to its expected local file.
- The approved NASA Moon GLB remains 13.8 MB; the homepage uses an optimized 1.63 MB derivative with a 506 KB external 2048px texture. The Apollo/Mars globe models are about 0.7/4.0 MB. The homepage model is rendered with the locally stored `model-viewer` runtime, and its auto-rotation is disabled for reduced-motion users.
- The separate 11.9 MB Mars Exploration Rover model was identified but omitted because it depicts Spirit/Opportunity rather than the chosen Pathfinder/Phoenix/InSight artifacts; do not ship irrelevant model bytes.
- The React + Vite homepage is implemented; Moon, Mars, artifact browsing, and timeline pages are not built yet. The exact direct dependencies are recorded in `package.json`.
- `work/vendor/model-viewer.min.js` is retained for the temporary preview gallery; the same local runtime is copied to `public/vendor/model-viewer.min.js` for the homepage. The included license notice is `work/vendor/MODEL-VIEWER-LICENSE.txt`.
