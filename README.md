# AR Image to 3D

An augmented reality web app that detects an image target and overlays an interactive 3D model on top of it.

## Tech Stack

- [MindAR](https://hiukim.github.io/mind-ar-js-doc/) — image tracking
- [A-Frame](https://aframe.io/) — 3D/WebXR rendering
- Vanilla JS + HTML/CSS

## Project Structure

```
LAB10/
├── public/
│   ├── model/
│   │   └── model.glb        # 3D model
│   ├── aframe.min.js        # A-Frame library
│   ├── mindar-image-aframe.prod.js  # MindAR library
│   ├── targets.mind         # Compiled image target
│   └── index.html           # Main app
├── server.js                # Local dev server
└── package.json
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the server**
   ```bash
   node server.js
   ```

3. **Open in browser**
   ```
   https://localhost:3000
   ```
   > HTTPS is required for camera access.

4. **Use the app**
   - Point your camera at the image target
   - The 3D model appears on top of it
   - Use **Rotate 45°** to spin the model
   - Use the **reset** button to return to 0°

## Replacing Assets

| Asset | How to replace |
|---|---|
| 3D model | Swap `public/model/model.glb` with your own GLB file |
| Image target | Recompile `targets.mind` using the [MindAR compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile) |

## Project images
1.
<img width="1919" height="921" alt="image" src="https://github.com/user-attachments/assets/9af9591e-4464-48e1-8657-22bd3d3cb610" />

2.
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/04181adf-af96-48e4-a24d-84cf8070942d" />


3.
<img width="999" height="928" alt="image" src="https://github.com/user-attachments/assets/1de61d72-1269-4f85-91a7-bca84db523ba" />

4.
<img width="1919" height="922" alt="Screenshot 2026-03-10 030822" src="https://github.com/user-attachments/assets/00d947ee-6dca-4f57-8497-8c5cf4f11934" />

<div align="center">

### ⭐ Star this repository if you find it helpful!

</div>

