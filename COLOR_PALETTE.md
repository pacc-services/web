# Color Palette Documentation

This document describes the color palette used throughout the PACC website.

## Brand Colors

The site uses a primary brand color scheme centered around a deep blue with a complementary green accent.

### Primary Brand Colors

#### Brand (Primary Blue)
- **Hex**: `#00497a`
- **RGB**: `rgb(0, 73, 122)`
- **Usage**: Primary brand color used for buttons, links, headings, accents, and key UI elements
- **CSS Variable**: `--brand`
- **Tailwind Class**: `brand` or `bg-brand`, `text-brand`, `border-brand`

#### Brand Light
- **Hex**: `#0066a6`
- **RGB**: `rgb(0, 102, 166)`
- **Usage**: Lighter variant of the primary brand color for hover states and accents
- **CSS Variable**: `--brand-light`
- **Tailwind Class**: `brand-light`

#### Brand Dark
- **Hex**: `#003355`
- **RGB**: `rgb(0, 51, 85)`
- **Usage**: Darker variant for hover states on primary buttons and deep accents
- **CSS Variable**: `--brand-dark`
- **Tailwind Class**: `brand-dark`

#### Brand Green
- **Hex**: `#5cb85c`
- **RGB**: `rgb(92, 184, 92)`
- **Usage**: Accent color used in gradients, call-to-action elements, and complementary highlights
- **CSS Variable**: `--brand-green`
- **Tailwind Class**: `brand-green`

### Brand Gradients

The site uses several gradient combinations:

1. **Brand to Green Gradient** (135° diagonal)
   - From `#00497a` to `#5cb85c`
   - Used in: Background elements, hero sections, card highlights
   - CSS Class: `.brand-gradient`

2. **Brand Gradient Text**
   - `from-brand to-brand-green`
   - Used for: Section headings, highlighted text elements
   - Creates a gradient text effect using `bg-clip-text`

3. **Overlay Gradients**
   - `from-slate-900/90 via-brand/50 to-transparent`
   - Used for: Hero section overlays with background images

## Neutral Colors (Tailwind Slate Palette)

The site extensively uses Tailwind's default Slate color palette for text, backgrounds, and borders:

### Light Neutrals

- **Slate 50**: `#f8fafc` - Light backgrounds, subtle sections
- **Slate 100**: `#f1f5f9` - Hover states on light backgrounds
- **Slate 200**: `#e2e8f0` - Borders, dividers
- **Slate 300**: `#cbd5e1` - Form inputs, borders, inactive elements

### Medium Neutrals

- **Slate 500**: `#64748b` - Secondary text, metadata
- **Slate 600**: `#475569` - Body text, secondary content
- **Slate 700**: `#334155` - Primary body text, descriptions

### Dark Neutrals

- **Slate 800**: `#1e293b` - Dark text, hover states on dark backgrounds
- **Slate 900**: `#0f172a` - Very dark overlays, hero backgrounds

## Semantic Colors

### Text Colors

- **Primary Text**: `text-slate-900` (dark text on light backgrounds)
- **Secondary Text**: `text-slate-600` or `text-slate-700`
- **Tertiary/Metadata**: `text-slate-500`
- **White Text**: `text-white` or `text-white/90`, `text-white/70` (with opacity)

### Background Colors

- **Primary Background**: `bg-white`
- **Secondary Background**: `bg-slate-50`
- **Dark Background**: `bg-slate-900` (with opacity for overlays)

### Border Colors

- **Light Borders**: `border-slate-200` or `border-slate-300`
- **White Borders**: `border-white` or `border-white/30` (with opacity)

## Interactive States

### Focus States
- **Focus Ring**: `focus:ring-2 focus:ring-sky-500`
- **Focus Outline**: `outline: 2px solid var(--brand)`

### Hover States
- **Primary Button Hover**: `hover:bg-brand-dark`
- **Link Hover**: `hover:text-brand`
- **Card Hover**: Lifted shadow with `hover:shadow-xl`

### Selection
- **Text Selection Background**: `rgba(11, 77, 130, 0.2)` (20% opacity brand blue)
- **Text Selection Color**: `var(--brand-dark)`

## Opacity Variations

The site frequently uses opacity modifiers for transparency effects:

- **Brand with Opacity**:
  - `brand/5` - Very subtle backgrounds (5% opacity)
  - `brand/10` - Subtle backgrounds (10% opacity)
  - `brand/20` - Light overlays (20% opacity)
  - `brand/30` - Medium overlays (30% opacity)
  - `brand/50` - Prominent overlays (50% opacity)

- **White with Opacity**:
  - `white/10` - Subtle overlays
  - `white/30` - Medium transparency
  - `white/70` - High visibility with some transparency
  - `white/90` - Nearly opaque
  - `white/95` - Almost fully opaque (used in headers)

## Special Effects

### Glass Morphism
- **Class**: `.glass`
- **Implementation**: `bg-white/75 backdrop-blur-lg`
- Used for: Header, cards, overlay elements

### Shadows

- **Standard Shadow**: `shadow-lg`
- **Hover Shadow**: `shadow-xl` or `shadow-2xl`
- **Brand Glow**: `shadow-brand/20` (20% opacity brand color)
- **Custom Shadows**: Defined in component styles (e.g., `.subtle-shadow`, `.subtle-shadow-hover`)

## Color Usage Guidelines

### Primary Actions
- Use `bg-brand` for primary buttons
- Use `bg-brand-dark` for hover states
- Use `text-white` for text on brand backgrounds

### Secondary Actions
- Use `border-white` with `text-white` for secondary buttons on dark backgrounds
- Use `hover:bg-white hover:text-brand` for hover state

### Links
- Default: `text-brand`
- Hover: `hover:text-brand-green` or `hover:text-brand-dark`
- Visited states follow default link styling

### Background Sections
- Alternating `bg-white` and `bg-slate-50` for visual separation
- Gradient backgrounds: `bg-gradient-to-br from-slate-50 to-white`

### Text Hierarchy
- Headings: `text-slate-900` or gradient brand colors
- Body: `text-slate-700` or `text-slate-600`
- Meta/Secondary: `text-slate-500`

## Accessibility

- All color combinations meet WCAG contrast requirements
- Focus states are clearly visible with 2px outlines
- Text selection uses brand colors with sufficient contrast
- Interactive elements have clear hover and focus indicators

## Theme Color (Meta Tag)

- **Theme Color**: `#00497a` (brand primary)
- Used for: Browser theme color, mobile browser chrome

## Implementation Notes

### CSS Variables
All brand colors are defined as CSS variables in `src/styles/main.css`:
```css
:root {
  --brand: #00497a;
  --brand-light: #0066a6;
  --brand-dark: #003355;
  --brand-green: #5cb85c;
}
```

### Tailwind Configuration
Brand colors are extended in `tailwind.config.js` to be available as Tailwind utility classes:
```js
colors: {
  brand: {
    DEFAULT: '#00497a',
    light: '#0066a6',
    dark: '#003355',
    green: '#5cb85c',
  },
}
```

This allows usage like:
- `bg-brand` for `#00497a`
- `bg-brand-light` for `#0066a6`
- `bg-brand-dark` for `#003355`
- `bg-brand-green` for `#5cb85c`

## Color Palette Summary

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| Brand Primary | `#00497a` | `rgb(0, 73, 122)` | Primary brand color |
| Brand Light | `#0066a6` | `rgb(0, 102, 166)` | Lighter brand variant |
| Brand Dark | `#003355` | `rgb(0, 51, 85)` | Darker brand variant |
| Brand Green | `#5cb85c` | `rgb(92, 184, 92)` | Accent color |
| Slate 50 | `#f8fafc` | `rgb(248, 250, 252)` | Light backgrounds |
| Slate 900 | `#0f172a` | `rgb(15, 23, 42)` | Dark overlays |
| White | `#ffffff` | `rgb(255, 255, 255)` | Primary backgrounds |
| Sky 500 | `#0ea5e9` | `rgb(14, 165, 233)` | Focus rings |

---

*Last Updated: Based on current codebase analysis*
*Primary Colors Defined In: `src/styles/main.css` and `tailwind.config.js`*

