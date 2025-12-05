# PACC Services Mockup Rebuild Prompt

## Objective
Rebuild all 14 existing mockups in `/public/demo/mockup-01` through `/public/demo/mockup-14` AND create 11 new mockups (`mockup-15` through `mockup-25`) with the exact same content, color scheme, logo integration, founders, news, images, and working links as the main PACC website. All 25 mockups should feature awesome Three.js effects that are performance-optimized and use the correct brand color palette.

---

## Color Palette (MANDATORY - Must Use These Exact Colors)

The color scheme must be consistent across all mockups. You may use dark or light variations, but the base colors must remain the same:

### Primary Brand Colors:
- **Brand Blue (Primary)**: `#00497a`
- **Brand Blue Light**: `#0066a6`
- **Brand Blue Dark**: `#003355`
- **Brand Green (Accent)**: `#5cb85c`

### Supporting Colors:
- **Slate Gray (Text/Backgrounds)**: Use Tailwind's slate palette (slate-50, slate-100, slate-200, slate-600, slate-700, slate-900)
- **White**: `#ffffff`
- **Black**: `#000000`

### Usage Guidelines:
- Use brand blue and brand green for primary actions, headings, and accents
- Maintain gradient combinations: `from-brand to-brand-green`
- Text colors: slate-700 for body text, slate-900 for headings
- Backgrounds: white, slate-50, or gradients using brand colors
- You may create dark mode variations, but must use the same brand colors

---

## Logo Integration

### Logo Files:
- **Full Logo**: `/public/logo_full_cropped.png` or `/public/demo/shared/pacc-logo.png`
- **Full Logo (Alternative)**: `/src/assets/images/logo_full.png` or `/src/assets/images/logo_full_cropped.png`

### Logo Requirements:
- Logo must be prominently displayed in the header/navigation
- Logo should be integrated aesthetically and look professional
- Logo should link to home/hero section
- Maintain proper aspect ratio and sizing
- Use appropriate contrast (white logo on dark backgrounds, colored logo on light backgrounds)

---

## Navigation Structure (MUST WORK)

All navigation links must be functional and scroll to the correct sections:

```html
Navigation Items:
- Approach → #approach
- Market → #problem
- Solution → #solution (or #problem section)
- Leadership → #leadership
- News → #news
- Contact → #contact
- Demo → /demo (if applicable)
```

### Header Requirements:
- Fixed or sticky header
- Responsive mobile menu
- Smooth scroll behavior
- Active state indicators

---

## Content Sections (ALL COPY MUST BE PRESENT)

### 1. Hero Section

**Headline:**
```
The bridge between molecule producers and customers
```

**Mission Statement:**
```
Our mission is to become the trusted bridge between producers and customers of the energy transition—delivering scale, certainty, and value across dislocated markets.
```

**Subtitle:**
```
Hydrogen & specialty gases • Logistics • Market‑making
```

**Call-to-Action Buttons:**
- "Talk to Us" → links to #contact
- "How We Work" → links to #approach

**Impact Card Content:**
```
Our Impact

PACC accelerates the commercialization of molecules by unlocking new markets, reducing risks to producers, and delivering a reliable supply to customers.

• Producer‑first mindset and aligned incentives
• Structured offtake, credit support, and logistics optimization
• Trust and reliability through disciplined, scalable execution
```

**Background Image:**
- Use `/src/assets/images/golden_gate_bridge.jpg` or similar bridge imagery

---

### 2. Approach Section (#approach)

**Section Header:**
```
Our Approach

We de‑risk production, aggregate demand, and create structured pathways for molecules.
```

**Four Approach Cards:**

1. **De‑risk Production**
   - Description: "Commercial certainty via structured offtake, credit support, and long‑term agreements."

2. **Aggregate Demand**
   - Description: "Create liquidity and price transparency; build scalable customer funnels."

3. **Optimize Logistics**
   - Description: "Trailers, storage, pipelines—optimize midstream to lower delivered costs and improve reliability."

4. **Market‑Maker**
   - Description: "Act as trusted intermediary to take market risk so producers can focus on operations."

---

### 3. Market Problem Section (#problem)

**Section Title:**
```
Market Problem
```

**Problem List:**
1. **Stranded Molecules:** Producers lack offtake certainty—limiting investment and scale.
2. **Commercial Barriers:** Credit requirements, risk exposure, and illiquidity stall deals.
3. **High Delivered Costs:** Fragmented supply, complex logistics, unreliable delivery.
4. **No Market‑Maker:** Emerging markets lack a trusted intermediary to connect supply and demand.

**PACC Solution Card (#solution):**

**Title:**
```
PACC Solution
```

**Description:**
```
PACC connects producers and customers, turning stranded molecules into scalable markets.
```

**Solution Points:**
- Unlock value for producers through commercial certainty
- De‑risk transactions as a trusted intermediary
- Lower delivered costs by aggregating volumes and optimizing logistics
- Create liquidity and price transparency in emerging molecules

**Background Image:**
- Use `/src/assets/images/image45.png` (bridge image) as subtle background

---

### 4. Leadership Section (#leadership)

**Section Header:**
```
Leadership Team
```

**Founder 1: Andrew Carman**

- **Role:** CEO
- **Image:** `/data/exec-images/andrew.png` or `/public/demo/shared/andrew.png`
- **Bio:** "A senior energy executive with extensive experience in hydrogen, industrial gases, and clean fuels. At Uniper, executed the company's first global hydrogen deal, developed and implemented the North American hydrogen strategy, and built strategic relationships with leading players across the industry. Previously at Nikola, developed, led, and executed the hydrogen supply strategy to fuel the first commercial FCEV Class 8 trucks in North America, working across the full hydrogen value chain from production through distribution and dispensing. Spent over a decade at Linde in progressively senior commercial roles, ultimately leading the Western U.S. onsite business with full P&L responsibility exceeding $100 million."
- **LinkedIn:** https://www.linkedin.com/in/andrew-carman-mba-a086a5b

**Founder 2: Patrick Charette**

- **Role:** CCO
- **Image:** `/data/exec-images/patrick.png` or `/public/demo/shared/patrick.png`
- **Bio:** "An energy executive and entrepreneur with extensive leadership experience in hydrogen and industrial gases. As Head of Commercial at BayoTech Hydrogen, led all commercial activities, set strategy, and pioneered the launch of a hydrogen molecule trading and logistics company that integrated production, distribution, and third-party sourcing. At Nikola Corporation, expanded hydrogen fueling and infrastructure strategy while securing significant government and industry partnerships. Earlier leadership roles with Linde and Praxair built expertise in specialty gases and large-scale pipeline networks. A foundation as an airline captain instilled the operational discipline and decision-making under pressure that continue to shape an executive approach to scaling clean energy businesses."
- **LinkedIn:** https://www.linkedin.com/in/patrick-charette

---

### 5. News Section (#news)

**Section Header:**
```
News & Announcements

Stay updated with the latest developments from PACC
```

**All News Articles (Must Include All):**

1. **PACC Unveils Revolutionary Real-Time Tracking Feature for Hydrogen Trailers During Order Processing**
   - Date: January 15, 2025
   - Location: San Francisco, CA
   - Category: Press Release
   - Excerpt: "PACC today announced the launch of PACC Track, a groundbreaking real-time tracking system that provides unprecedented visibility into hydrogen trailer locations and status throughout the entire order processing lifecycle."
   - Image: Use PACC logo (`/src/assets/images/logo_full_cropped.png`)
   - Link: `/news/announcing-pacc-track`

2. **PACC Launches Revolutionary Hydrogen Market-Making Platform to Bridge Energy Transition Gap**
   - Date: December 4, 2024
   - Location: San Francisco, CA
   - Category: Press Release
   - Excerpt: "PACC, a pioneering hydrogen and specialty gases market-maker, today announced the official launch of its innovative platform designed to accelerate the energy transition by connecting molecule producers with enterprise customers at scale."
   - Image: Use PACC logo
   - Link: `/news/hydrogen-platform-launch`

3. **PACC Partners with GridStor to Expand Hydrogen Storage Solutions**
   - Date: November 12, 2024
   - Location: San Francisco, CA
   - Category: Partnership
   - Excerpt: "PACC today announced a strategic partnership with GridStor, a leading energy storage developer, to expand hydrogen storage solutions and enhance supply chain reliability for customers across North America."
   - Image: Use GridStor logo (`/src/assets/images/gridstor.png`) or PACC logo
   - Link: `/news/pacc-partners-with-gridstor`

4. **PACC Expands Operations to Texas, Establishing Regional Hub for Hydrogen Market-Making**
   - Date: October 8, 2024
   - Location: Houston, TX
   - Category: Press Release
   - Excerpt: "PACC today announced the expansion of its operations to Texas, establishing a regional hub in Houston to serve the rapidly growing hydrogen market in the Gulf Coast region, home to some of the nation's largest hydrogen production facilities."
   - Image: Use PACC logo
   - Link: `/news/pacc-expands-to-texas`

5. **PACC Processes Millionth Kilogram of Hydrogen, Demonstrating Market-Making Scale**
   - Date: September 20, 2024
   - Location: San Francisco, CA
   - Category: Milestone
   - Excerpt: "PACC today announced a significant milestone: processing its millionth kilogram of hydrogen, demonstrating the company's ability to scale market-making operations and serve enterprise customers at volume."
   - Image: Use PACC logo
   - Link: `/news/pacc-processes-millionth-kilogram`

6. **PACC Secures Series A Funding to Accelerate Hydrogen Market Infrastructure**
   - Date: August 15, 2024
   - Location: San Francisco, CA
   - Category: Funding
   - Excerpt: "PACC today announced the close of its Series A funding round, securing significant capital to accelerate the development of hydrogen market infrastructure and expand operations across North America."
   - Image: Use PACC logo
   - Link: `/news/pacc-secures-series-a`

7. **PACC Named Top Innovator in Energy Transition by Industry Leaders**
   - Date: July 10, 2024
   - Location: San Francisco, CA
   - Category: Recognition
   - Excerpt: "PACC has been recognized as a top innovator in the energy transition by leading industry organizations, highlighting the company's role in advancing hydrogen market infrastructure."
   - Image: Use PACC logo
   - Link: `/news/pacc-named-top-innovator`

**News Section Requirements:**
- Display at least the 5 most recent articles prominently
- Include "View All News" link/button that links to `/news`
- Each article card should be clickable and link to its respective article page
- Include article images where specified
- Show date, location, and category for each article

---

### 6. Contact Section (#contact)

**Section Header:**
```
Get in Touch

Let's discuss offtake, logistics, or partnership opportunities.
```

**Contact Information:**
```
Leadership — Executive Team — Contact Us
```

**Note:** Contact details may be simplified, but the section must be present and functional.

---

### 7. Footer

**Footer Content:**
```
© [Current Year] PACC. All rights reserved.
```

**Footer Requirements:**
- Include PACC logo
- Copyright notice
- Optional: Navigation links
- Clean, professional design

---

## Images to Use

### Required Images:
1. **Logo:** `/public/logo_full_cropped.png` or `/public/demo/shared/pacc-logo.png`
2. **Founders:**
   - Andrew: `/data/exec-images/andrew.png` or `/public/demo/shared/andrew.png`
   - Patrick: `/data/exec-images/patrick.png` or `/public/demo/shared/patrick.png`
3. **Hero Background:** `/src/assets/images/golden_gate_bridge.jpg`
4. **Bridge Image (for Market Problem section):** `/src/assets/images/image45.png`
5. **News Article Images:** Use PACC logo or relevant partner logos from `/src/assets/images/`

### Image Paths:
- Use relative paths from each mockup's directory
- Reference shared assets in `/public/demo/shared/` when possible
- Ensure all images load correctly

---

## Typography

**Font Family:**
- Primary: `Inter` (from Google Fonts)
- Fallback: `system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`

**Font Weights:**
- Headings: 700-900 (bold to black)
- Body: 400-500 (regular to medium)
- Accents: 600-700 (semibold to bold)

**Font Sizes:**
- Hero Title: 4xl to 7xl (responsive)
- Section Headings: 3xl to 4xl
- Body Text: base to lg
- Small Text: sm to xs

---

## Technical Requirements

### File Structure:
Each mockup should have:
- `index.html` - Main HTML file
- `styles.css` - All styles (or inline styles)
- `main.js` - JavaScript for interactivity (if needed)

### Functionality:
- All anchor links must work (smooth scroll to sections)
- Navigation must be functional
- Responsive design (mobile, tablet, desktop)
- All images must load
- No broken links

### Browser Compatibility:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Smooth scrolling
- Proper image loading

---

## Three.js Effects Review & Optimization

### Review Existing Mockups

Before rebuilding, review all existing mockups (`mockup-01` through `mockup-14`) and their Three.js implementations. Check and optimize:

#### Performance Requirements:
- **Frame Rate:** Maintain 60 FPS on modern devices, minimum 30 FPS on mid-range devices
- **Particle Counts:** Optimize particle systems (500-2000 particles max, use instancing where possible)
- **Geometry Complexity:** Use low-poly geometries, limit subdivisions
- **Texture Sizes:** Keep textures under 512x512 for particles, use canvas-generated textures
- **Render Optimization:**
  - Use `setPixelRatio(Math.min(window.devicePixelRatio, 2))` to cap pixel ratio
  - Implement frustum culling for off-screen objects
  - Use `requestAnimationFrame` efficiently (single render loop per page)
  - Dispose of geometries, materials, and textures when not needed
  - Pause animations when tab is not visible (use Page Visibility API)
- **Memory Management:** Clean up unused objects, dispose of resources properly
- **Mobile Performance:** Reduce particle counts and geometry complexity on mobile devices

#### Color Palette Compliance:
- **Verify all Three.js colors use brand palette:**
  - Primary Blue: `0x00497a` (not `0x00162f`, `0x030a12`, or other dark blues)
  - Brand Green: `0x5cb85c` (not `0x8ad78a` or other greens)
  - Light Blue: `0x0066a6` (for accents)
  - Dark Blue: `0x003355` (for depth)
- **Emissive Colors:** Should use brand colors, not random colors
- **Light Colors:** Point lights and ambient lights should complement brand palette
- **Fog Colors:** Should use brand dark blue (`0x003355` or `0x00162f`), not pure black
- **Material Colors:** All mesh materials must use brand colors

#### General Niceness & Quality:
- **Smooth Animations:** Use easing functions, avoid janky movements
- **Visual Cohesion:** Effects should feel intentional and polished, not random
- **Interaction:** Mouse/touch interactions should be responsive and smooth
- **Aesthetic Appeal:** Effects should enhance the design, not distract from content
- **Accessibility:** Ensure effects don't cause motion sickness (provide reduced motion option)
- **Loading States:** Handle Three.js initialization gracefully (show loading or fallback)

#### Common Issues to Fix:
1. **Color Mismatches:** Replace non-brand colors with correct brand colors
2. **Performance Issues:** Reduce particle counts, optimize geometries, improve render efficiency
3. **Janky Animations:** Smooth out rotation speeds, use proper easing
4. **Over-Complexity:** Simplify scenes that are too busy or distracting
5. **Inconsistent Styling:** Ensure Three.js scenes match the overall design aesthetic

---

## Design Flexibility

While maintaining the exact content and color scheme, you have creative freedom for:

1. **Layout Styles:**
   - Single column, multi-column, split-screen, grid layouts
   - Card-based, full-width, or contained designs
   - Vertical or horizontal scrolling

2. **Visual Effects:**
   - Animations, transitions, hover effects
   - 3D elements, parallax, particle effects
   - Glassmorphism, gradients, shadows
   - **Three.js effects must use brand colors and be performance-optimized**

3. **Dark/Light Themes:**
   - Some mockups can be dark, some light
   - Must use the same brand color palette
   - Ensure proper contrast and readability

4. **Creative Concepts:**
   - Bridge/molecule/energy-themed visuals
   - Abstract geometric patterns
   - Modern, minimalist, or bold designs
   - Unique navigation patterns

---

## Quality Checklist

Before finalizing each mockup, verify:

- [ ] All copy matches the main site exactly
- [ ] Color palette uses only the specified brand colors
- [ ] Logo is integrated and looks professional
- [ ] Both founders (Andrew and Patrick) are present with correct bios and images
- [ ] All 7 news articles are included (at least 5 prominently displayed)
- [ ] Three.js effects use correct brand colors (not random colors)
- [ ] Three.js performance is optimized (60 FPS on desktop, 30+ FPS on mobile)
- [ ] Three.js effects enhance the design without being distracting
- [ ] All navigation links work correctly
- [ ] All section anchors work (#approach, #problem, #leadership, #news, #contact)
- [ ] Images load correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Typography uses Inter font
- [ ] Footer includes copyright and logo
- [ ] No broken links or missing content
- [ ] Design is visually appealing and professional

---

## Mockup Locations

### Existing Mockups to Rebuild (14 total):
- `/public/demo/mockup-01/` - Review and optimize Three.js effects
- `/public/demo/mockup-02/` - Review and optimize Three.js effects
- `/public/demo/mockup-03/` - Review and optimize Three.js effects
- `/public/demo/mockup-04/` - Review and optimize Three.js effects
- `/public/demo/mockup-05/` - Review and optimize Three.js effects
- `/public/demo/mockup-06/` - Review and optimize Three.js effects
- `/public/demo/mockup-07/` - Review and optimize Three.js effects
- `/public/demo/mockup-08/` - Review and optimize Three.js effects
- `/public/demo/mockup-09/` - Review and optimize Three.js effects
- `/public/demo/mockup-10/` - Review and optimize Three.js effects
- `/public/demo/mockup-11/` - Review and optimize Three.js effects
- `/public/demo/mockup-12/` - Review and optimize Three.js effects
- `/public/demo/mockup-13/` - Review and optimize Three.js effects
- `/public/demo/mockup-14/` - Review and optimize Three.js effects

### New Mockups to Create (11 total):
- `/public/demo/mockup-15/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-16/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-17/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-18/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-19/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-20/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-21/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-22/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-23/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-24/` - **NEW** - Create with awesome Three.js effects
- `/public/demo/mockup-25/` - **NEW** - Create with awesome Three.js effects

**Total: 25 mockups** (14 existing + 11 new)

---

## Three.js Effects for New Mockups

The 11 new mockups (mockup-15 through mockup-25) should feature **totally awesome, cool Three.js effects**. Here are some creative ideas:

### Suggested Three.js Effect Concepts:

1. **Particle Systems:**
   - Hydrogen molecule particle fields
   - Flowing energy streams
   - Interactive particle clouds that respond to mouse/touch
   - Particle trails and connections

2. **3D Geometric Shapes:**
   - Animated torus knots, spheres, and complex geometries
   - Low-poly molecular structures
   - Bridge-inspired 3D structures
   - Rotating, pulsing geometric forms

3. **Interactive Elements:**
   - Mouse/touch-responsive 3D scenes
   - Scroll-driven animations
   - Parallax 3D effects
   - Interactive lighting that follows cursor

4. **Visual Effects:**
   - Neon grid overlays
   - Glowing wireframes
   - Volumetric lighting
   - Fog and atmospheric effects
   - Shader-based effects (if performance allows)

5. **Scene Compositions:**
   - Multi-layered 3D scenes
   - Depth-based animations
   - Camera movements tied to scroll
   - Section-specific 3D backgrounds

### Requirements for New Mockups:
- **Must use brand colors** (see Color Palette section)
- **Must be performance-optimized** (see Three.js Effects Review section)
- **Must be visually stunning** and enhance the design
- **Must not distract** from content readability
- **Each mockup should have unique Three.js effects** - no duplicates

### Three.js Implementation:
- Use Three.js from CDN: `https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js`
- Can extend `/public/demo/shared/three-utils.js` with new utility functions
- Each mockup should have its own `main.js` with unique Three.js scene
- Follow performance guidelines from the Review section above

---

## Notes

- Each mockup should be a unique, creative interpretation while maintaining all content and brand consistency
- The goal is to showcase different design approaches while keeping the core message and branding identical
- **The 11 new mockups should push creative boundaries with Three.js while maintaining performance**
- Test each mockup thoroughly before finalizing
- Ensure all paths are relative and work when served from the `/public/demo/` directory
- Review existing mockups first to understand current patterns, then create 11 completely new and unique designs

---

## Reference Files

For exact copy and structure, refer to:
- `/src/views/HomeView.vue` - Main page structure
- `/src/components/sections/*.vue` - Section components
- `/src/components/layout/AppHeader.vue` - Header/navigation
- `/src/components/layout/AppFooter.vue` - Footer
- `/src/data/articles/*.ts` - News article data
- `/src/styles/main.css` - Color variables and styles
- `/tailwind.config.js` - Brand color definitions

---

**End of Prompt**

