# Logendra Piratheep — Cinematic Portfolio

## Run on Windows
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Right-click `index.html` and select **Open with Live Server** (or double-click the file in Windows Explorer).
4. No npm install is needed. The site is plain HTML/CSS/JavaScript.

## What's included
- Original cinematic sunset image on the home page with camera/lighting reveal; no walking avatar.
- Quote positioned on the right.
- About page with your supplied silhouette and original photo; moving the pointer reveals the original inside a feathered circular spotlight. On touch screens, touch the image. Keyboard focus reveals the center.
- Skills, project cards, timeline, software section and contact based on the supplied CV.
- Downloadable copy of your CV in `assets/`.

## Customize
- `index.html`: text and content
- `styles.css`: design and animation
- `script.js`: photo reveal and progress bar
- `assets/`: images and resume

## Notes
- The software section currently reflects software skills/projects documented in the uploaded CV. You can add your newer React/TypeScript work later.
- Google Fonts are loaded over the internet; fallback fonts are available offline.
- The photo reveal overlays the two supplied images at the same frame size. Their framing is similar but not pixel-identical, so slight visual alignment differences are expected.
- Contact uses a mailto link, not a backend contact form.


Version 3: Added CV certifications, all listed organizations, languages, and sports under the Beyond the Classroom section.


V5 mobile photo reveal:
- On a touchscreen, touch and drag over the About photo to reveal the daylight image with a soft-edged circular mask. Lift your finger to hide it.
- The image intentionally captures touch gestures; scroll the page from beside the image.
- Tap REVEAL FULL PHOTO to toggle the complete image, useful on phones and for accessibility.
- On desktop, the cursor hover effect is preserved.

## Version 6 updates
- Software section now features LiveLingo API, peer-to-peer vehicle rental app/API, video editor and FleetFlow logistics/business website. Descriptions reflect development concepts/prototypes, not verified public deployments.
- New FREELANCE section and HIRE ME button open an email draft to logendrapiratheep@gmail.com. Email client must be configured on the visitor's device.
- Navigation links to Software and Freelance. Existing animations and photo reveal remain unchanged.
