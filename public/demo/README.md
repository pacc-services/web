# PACC Services — Three Mockups

Three bold static mockups using the existing pacc.services content and palette.

## Structure
```
/public/demo
  /mockup-a-hero      # Enhanced default layout with animated hero particles
  /mockup-b-split     # Alternating split-screen panels with per-section animations
  /mockup-c-radical   # Scroll-driven 3D story layout
  /shared/three-utils.js
  /shared/assets/
```

Each mockup folder contains `index.html`, `styles.css`, and `main.js`. Three.js is loaded from a CDN; no build step required.

### New visualization library

The `public/demo/shared/visualization-library.js` module exports 30 ready-to-use Three.js scenes (widgets, hero loops, and animated backgrounds).

- Import the helper inside a mockup script:

```js
import { visualizationLibrary, mountVisualization, listVisualizations } from '../shared/visualization-library.js'

// Show available presets
console.table(listVisualizations())

// Mount one into a container element
const cleanup = mountVisualization('aurora-sparks', document.querySelector('#canvas-mount'))
// Call cleanup() when the element is removed to dispose resources
```

Each preset ships with lighting, camera, and animation loops so creators only provide a container element.

## Running locally
Open any `index.html` in a browser or serve statically (e.g., `python -m http.server`) from the `public` directory:

```bash
cd public
python -m http.server 8080
```

Then visit:
- http://localhost:8080/demo/mockup-a-hero/
- http://localhost:8080/demo/mockup-b-split/
- http://localhost:8080/demo/mockup-c-radical/

## Design intent
- **Mockup A — Hero**: Polished single-column flow inspired by the current site with a neon particle hero and glassy stat tiles.
- **Mockup B — Split**: Alternating split layout with aggressive typography and a unique animation per pane.
- **Mockup C — Radical**: Scroll-driven storyboard that drives a single immersive 3D scene while chapters reveal the unchanged copy.
