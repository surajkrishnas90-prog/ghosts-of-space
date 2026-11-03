# GHOSTS OF SPACE

**Team:** LEVENTHREE  
**Challenge:** Abandoned but Not Forgotten — Storytelling about NASA's Discarded Equipment on the Moon and Mars  
**Tagline:** “The machines we left behind. The discoveries they made possible.”

## Current project stage

This project contains the React + Vite GHOSTS OF SPACE museum: the cinematic homepage, Moon and Mars exploration chapters, artifact detail panels, mission timelines, source credits, and the Apollo 11 laser-ranging and InSight Marsquake experiences. NASA photographs and 3D assets are organized locally and documented in `ASSET-REFERENCES.md`.

The approved visual direction is a cinematic 2.5D space museum with selective 3D effects. Scientific accuracy, legibility, responsive behavior, reduced-motion support, and performance take priority over visual effects.

## Requirements

- Windows 10 or 11
- Node.js **20.19+** or **22.12+** (the current Vite release requirement); Node.js 24 is also suitable
- npm, installed with Node.js
- A current web browser
- A code editor such as Visual Studio Code (recommended)

No API keys, database, backend service, or paid account are needed for the current static-site setup.

## Install and run locally

1. Open PowerShell in this project folder:

   ```powershell
   Set-Location "C:\Users\acer\Documents\Codex\2026-11-03\files-pasted-by-the-user-project"
   ```

2. Install the pinned project dependencies (first run only, or after dependency changes):

   ```powershell
   npm install
   ```

3. Start the local development server:

   ```powershell
   npm run dev
   ```

4. Open the `Local` URL printed in the terminal, usually `http://localhost:5173/`. Keep the terminal open while using the site. Press **Ctrl+C** in that terminal to stop the server.

If port 5173 is already in use, Vite prints the alternate port it selected; open that printed URL.

## Inspect the collected assets

With the Vite development server running, open:

```text
http://localhost:5173/work/asset-preview.html
```

The preview uses the actual local photographs and GLB files. Drag the models to rotate them; use the wheel or pinch to zoom. It lists image resolutions, filenames, credits, source links, model file sizes, and any detected low-resolution or missing files. It is a temporary inspection page, not the museum website.

You can also serve the project folder with Python instead of Vite:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8765/work/asset-preview.html`. Run that command from the project root so the preview's relative paths resolve.

## Available npm commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite's local development server |
| `npm run build` | Create a production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally after a build |

There is no test suite configured yet.

## Production build and Vercel

Create the production site locally with:

```powershell
npm run build
```

Vite writes the static site to `dist/`. The included `vercel.json` specifies `npm run build` and `dist` as the output directory. Vercel can import the project as a Vite application. The site uses hash navigation (`/#moon`, `/#mars`, and `/#artifact/...`), so those routes work without server-side route rewrites.

The project is prepared for GitHub and Vercel, but this local setup does not publish, push, create a remote repository, or connect an account.

## Project structure

```text
ghosts-of-space/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── ASSET-REFERENCES.md
├── public/
│   ├── images/
│   │   ├── artifacts/       # Eight optimized NASA image files
│   │   ├── backgrounds/     # Reserved for selected section backgrounds
│   │   ├── moon/            # Reserved for Moon section assets
│   │   └── mars/            # Reserved for Mars section assets
│   ├── models/
│   │   ├── planets/         # NASA Moon/Mars models and optimized homepage Moon
│   │   └── spacecraft/      # Apollo Lunar Module GLB
│   ├── fonts/               # Space Grotesk variable font and OFL license
│   ├── icons/               # Reserved; no icon package needed yet
│   └── audio/               # Reserved; audio remains optional
├── src/
│   ├── App.jsx              # Cinematic GHOSTS OF SPACE homepage
│   ├── main.jsx             # React entry point
│   ├── components/          # Accessible artifact detail panel and cards
│   ├── pages/               # Moon and Mars exploration chapters
│   ├── data/                # NASA-sourced artifact and timeline records
│   ├── assets/              # Reserved for source assets imported by code
│   └── styles/              # Homepage and exploration experience styles
└── work/
    ├── asset-preview.html   # Temporary preview gallery
    └── vendor/              # Local 3D viewer runtime and its license
```

## Asset credits, accuracy, and usage

See [ASSET-REFERENCES.md](./ASSET-REFERENCES.md) for the full artifact research register, item-level NASA source URLs, asset IDs, credits, use notes, file locations, and remaining gaps.

The photographs are authentic NASA/NASA-JPL records; the Phoenix image is an enhanced-color orbital photograph and NASA notes that the lander appears bluer than reality because of the filter combination. The Moon and Mars globes are contextual planet models. The homepage uses a locally optimized derivative of the NASA Moon GLB so its texture loads efficiently and reliably; the original approved GLB remains intact. The Apollo Lunar Module is a contextual spacecraft model, not a model of the selected reflector, ALSEP, lunar rover, or Surveyor 3 hardware. The source distinction must remain clear in any later interface.

NASA content is generally usable for factual educational/informational purposes subject to NASA's [media usage guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/). Check each asset for third-party restrictions and credit the stated source. Do not imply NASA endorsement or use NASA insignia as project branding. The Space Grotesk font is distributed with its SIL Open Font License file. The `model-viewer` runtime and license notice are included locally under `work/vendor/`; its runtime is also served from `public/vendor/` for the homepage.

## Deployment

The project is uploaded to the GitHub repository and configured for Vercel with `vercel.json` (`npm run build` and `dist`). Hash-based routes do not require server rewrites. The site has not been deployed on Vercel.

## Current verification notes

- Eight local JPEGs decode successfully; dimensions and sizes are listed in the asset preview and source register.
- Three local GLB files have valid GLB 2.0 headers and embedded model meshes.
- `npm install` completed for the pinned dependencies; npm reported 0 vulnerabilities.
- `npm run build` completed successfully with Vite 8.3.5.
- Homepage visually checked at 1250 × 708, 768 × 900, and 390 × 700 CSS viewport sizes. Its Explore control opens the Moon collection, and the exploration exit returns to the homepage.
- Moon and Mars chapters each include four artifact cards, accessible keyboard-dismissible detail panels, image credits, mission timelines, and official source links. All eight cards and their detail panels were checked. Panel close restores the originating card scroll position.
- Exploration layouts checked at 390 px mobile (one card column), 768 px tablet (two columns), and 1280 px desktop (four columns). Planet models expose bounded orbit controls and touch/mouse guidance; the Moon-to-Mars transmission is a working link, and a final credits section follows the Mars chapter.
- The homepage's derived Moon model is 1.63 MB with a 506 KB local diffuse texture; both it and the local viewer runtime return HTTP 200.
- The preview HTML, its local 3D viewer runtime, all eight image URLs, and all three model URLs returned HTTP 200 through the Vite server. The preview page and representative local files also returned HTTP 200 through the Python server.
- Two NASA image variants are small: Sojourner touchdown (471 × 285 px) and Phoenix from orbit (508 × 600 px). They are identified in the gallery and should not be used as full-screen backgrounds.
- No artifact-specific 3D models were confirmed for the eight proposed artifacts. The three included GLBs are planetary/context models.
- No dependencies other than React, React DOM, Vite, and the Vite React plugin are installed.



