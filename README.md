# Hosnatul Ferdous — 3D Portfolio

Responsive personal portfolio with an interactive Three.js hero scene.

## Files
- `index.html` — content and sections
- `style.css` — layout, responsive styling, visual effects
- `script.js` — Three.js scene and interactions
- `assets/profile.jpg` — supplied portrait
- `assets/Hosnatul_Ferdous_CV.pdf` — CV used by the download button

## Preview locally
This site uses JavaScript modules, so serve it through a local web server rather than double-clicking `index.html`.
- VS Code: open the folder, install Live Server, right-click `index.html` → Open with Live Server.
- Or run `python -m http.server 8000` from this folder and open `http://localhost:8000`.
Three.js is loaded from jsDelivr CDN, so internet access is required for the 3D scene.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Open https://github.com/hosnatulferdous/my-portfolio
3. Upload `index.html`, `style.css`, `script.js`, and the entire `assets` folder to the repository root.
4. Replace old same-named files if prompted and commit changes to `main`.
5. Go to Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
6. After deployment, visit https://hosnatulferdous.github.io/my-portfolio/

## Before publishing
- Add your actual LinkedIn URL to the `linkedinUrl` variable in `script.js`.
- The CV PDF contains contact information; a public repository makes it accessible to anyone. Remove personal details you do not want public.
- Project cards are labeled as concepts/proposed directions. Update status only when accurate.
- No build step is required for GitHub Pages.
