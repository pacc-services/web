# PACC Scripts

This directory contains utility scripts for maintaining the PACC website.

## OG Image Generation

### generate-og-image.mjs

Generates the main Open Graph image (1200x630px) with the PACC logo using Playwright.

**Usage:**
```bash
npm run generate:og
```

Or directly:
```bash
node scripts/generate-og-image.mjs
```

**Features:**
- Uses the official PACC logo from `src/assets/images/logo_full.png`
- Creates a 1200x630px image (optimal for social media)
- Renders at 2× resolution for high quality
- Outputs to `public/og-image.png`
- Brand colors: PACC Blue (#00497a) and PACC Green (#5cb85c)

**Requirements:**
- @playwright/test (already in devDependencies)

### og-image-template.html

An interactive HTML tool for manually creating or previewing OG images in the browser.

**Usage:**
1. Open `scripts/og-image-template.html` in a web browser
2. Click "Load PACC Logo" to upload the logo (or it generates text-only version)
3. Preview the image in the browser
4. Click "Download Image" to save as `og-image.png`

**Features:**
- Visual preview of the OG image
- Can load any logo file for testing
- No external dependencies required
- Useful for quick previewing before running the automated script

## Future Enhancements

### Article-Specific OG Images

To generate article-specific OG images, you can extend `generate-og-image.mjs`:

```javascript
// Example: Generate OG image for a specific article
const articleTitle = "K2 Hydrogen Facility";
const articleDate = "December 17, 2025";
// Update the HTML template in the script to include article-specific content
```

## Maintenance

When updating brand colors or logos:

1. Update the brand colors in the scripts
2. Replace logo files in `src/assets/images/`
3. Run `node scripts/generate-og-image.mjs` to regenerate OG images
4. Commit the new OG image to the repository

## Notes

- OG images should be optimized to < 1MB for best social media performance
- Current OG image is ~76KB (excellent!)
- Recommended dimensions: 1200x630px (1.91:1 aspect ratio)
- Supports Facebook, Twitter, LinkedIn, and other platforms

