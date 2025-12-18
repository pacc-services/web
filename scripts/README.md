# PACC Scripts

This directory contains utility scripts for maintaining the PACC website.

## OG Image Generation

### generate-og-image.ts

Generates the main Open Graph image (1200x630px) with the PACC logo using Playwright.

**Usage:**
```bash
npm run generate:og
```

Or directly:
```bash
tsx scripts/generate-og-image.ts
```

**Features:**
- Uses the official PACC logo from `src/assets/images/logo_full.png`
- Creates a 1200x630px image (optimal for social media)
- Renders at 2× resolution for high quality
- Outputs to `public/og-image.png`
- Brand colors: PACC Blue (#00497a) and PACC Green (#5cb85c)

**Requirements:**
- @playwright/test (already in devDependencies)

---

### generate-article-og-images.ts

Generates article-specific OG images using manually configured article data.

**Usage:**
```bash
npm run generate:og:articles
```

**Features:**
- Creates custom OG images for each article
- Uses article's main image as background
- Overlays PACC branding, title, and category badge
- Outputs to `public/og-images/{article-slug}.png`
- 1200x630px at 2× resolution

**Configuration:**
Edit the `articles` array in the script to add new articles:

```typescript
const articles: ArticleConfig[] = [
  {
    slug: 'k2-hydrogen-facility-pittsburg',
    title: 'K2 Pure Solutions Breaks Ground...',
    imagePath: 'news/k2-pittsburg-hydrogen/aerial-view-k2-production.png',
    category: 'Press Release',
  },
  // Add more articles here
]
```

---

### generate-article-og-images-auto.ts

**🚧 Experimental** - Automatically generates OG images by reading article data from source files.

**Usage:**
```bash
npm run generate:og:articles:auto
```

**Features:**
- Automatically loads articles from `src/data/articles/`
- No manual configuration needed (uses knownMappings for image imports)
- Generates OG images for all articles with a `mainImage`

**Note:** Currently requires manual mapping in `knownMappings` for articles with imported images. Future enhancement will parse imports automatically.

---

### Generate All OG Images

Generate both the main OG image and all article OG images:

```bash
npm run generate:og:all
```

This runs automatically during `prebuild` to ensure all OG images are up-to-date before deployment.

---

## Build Integration

OG images are automatically generated during the build process via the `prebuild` script:

```bash
npm run build
# Automatically runs: npm run generate:og:all
# Then runs: vue-tsc -b && vite build
```

This ensures:
1. Main OG image (`/og-image.png`) is always current
2. All article OG images are generated before build
3. Images are available in `public/og-images/` for deployment
4. Social media previews work correctly on first deploy

**To skip auto-generation during development:**
```bash
vue-tsc -b && vite build  # Manual build without prebuild
```

---

## Article OG Image Setup

### For New Articles

1. **Add main image to article data:**

```typescript
// src/data/articles/my-article.ts
export const myArticle: Article = {
  header: {
    mainImage: {
      src: myImage,  // Imported image
      alt: 'Description',
    },
  },
  seo: {
    ogImage: '/og-images/my-article-slug.png',  // Must match slug
  },
}
```

2. **Add to OG generation script:**

Edit `scripts/generate-article-og-images.ts` and add to the `articles` array:

```typescript
{
  slug: 'my-article-slug',
  title: 'Article Title',
  imagePath: 'news/my-article/hero-image.png',  // Relative to src/assets/images
  category: 'Press Release',
}
```

3. **Generate OG image:**

```bash
npm run generate:og:articles
```

4. **Verify output:**

Check `public/og-images/my-article-slug.png` was created.

---

## OG Image Structure

### Main OG Image (`og-image.png`)
- Used for: Homepage, general pages without custom OG
- Contains: PACC logo, tagline, brand colors
- Size: ~76KB

### Article OG Images (`og-images/{slug}.png`)
- Used for: Individual article pages (`/news/{slug}`)
- Contains: Article main image, PACC logo, title, category badge
- Size: ~2-3MB (high quality for social sharing)
- Background: Article's hero image with brand overlay

---

## Testing OG Images

### Local Testing

1. Start dev server: `npm run dev`
2. Open article: `http://localhost:5173/news/k2-hydrogen-facility-pittsburg`
3. View page source and check `<meta property="og:image">` tag

### Social Media Debuggers

Test how OG images appear on social platforms:

- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/

Paste article URL (must be deployed) to see preview.

---

## Troubleshooting

### OG Image Not Showing

1. **Check file exists:** `ls public/og-images/article-slug.png`
2. **Verify meta tags:** View page source, check `og:image` URL
3. **Clear social cache:** Use platform debuggers to refresh
4. **Check URL format:** Must be absolute URL (`https://pacc.services/og-images/...`)

### Image Path Not Found

```bash
❌ Article image not found: /path/to/image.png
```

**Solution:** Verify `imagePath` in script matches actual file location relative to `src/assets/images/`.

### Build Fails on OG Generation

OG generation happens in `prebuild`. If it fails:

1. Check all article images exist
2. Verify @playwright/test is installed: `npm install`
3. Install Playwright browsers: `npx playwright install`
4. Run generation manually to see detailed errors: `npm run generate:og:articles`

---

## og-image-template.html

An interactive HTML tool for manually creating or previewing OG images in the browser.

**Usage:**
1. Open `scripts/og-image-template.html` in a web browser
2. Click "Load PACC Logo" to upload the logo
3. Preview the image in the browser
4. Click "Download Image" to save as `og-image.png`

**Features:**
- Visual preview of the OG image
- Can load any logo file for testing
- No external dependencies required
- Useful for quick previewing before running the automated script

---

## Maintenance

### Updating Brand Colors

1. Update colors in all generation scripts:
   - `generate-og-image.ts`
   - `generate-article-og-images.ts`
   - `generate-article-og-images-auto.ts`

2. Regenerate all images:
```bash
npm run generate:og:all
```

3. Commit updated images

### Updating Logo

1. Replace logo: `src/assets/images/logo_full.png`
2. Regenerate: `npm run generate:og:all`
3. Commit changes

---

## Notes

- OG images should be < 5MB for best performance
- Recommended dimensions: 1200x630px (1.91:1 aspect ratio)
- Images at 2× resolution (2400x1260px rendered) for retina displays
- Supports Facebook, Twitter, LinkedIn, and other platforms
- Generated images are committed to repo for consistent deployment
- Public folder is automatically copied during Vite build
