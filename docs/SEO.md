# PACC Website - SEO & Open Graph Implementation

## Overview

This document outlines the SEO and Open Graph (OG) implementation for the PACC website, ensuring optimal visibility and sharing on search engines and social media platforms.

## Open Graph Image

### Current Implementation

**Location:** `/public/og-image.png`

**Specifications:**
- **Dimensions:** 1200 × 630 pixels (1.91:1 aspect ratio)
- **Format:** PNG
- **File Size:** ~76 KB
- **Content:** PACC logo with tagline "Market-Maker" and "Hydrogen & Energy Transition"
- **Background Color:** PACC Blue (#00497a)
- **Accent Color:** PACC Green (#5cb85c)

**Supported Platforms:**
- ✅ Facebook
- ✅ LinkedIn
- ✅ Twitter/X
- ✅ WhatsApp
- ✅ Slack
- ✅ Discord
- ✅ Other platforms supporting Open Graph

### Regenerating the OG Image

To update or regenerate the OG image:

```bash
npm run generate:og
```

See `scripts/README.md` for more details on OG image generation.

## Meta Tags Implementation

### Primary Meta Tags

Located in `/index.html`:

```html
<title>PACC – Market‑Maker | Hydrogen & Energy Transition</title>
<meta name="title" content="PACC – Market‑Maker | Hydrogen & Energy Transition">
<meta name="description" content="...">
<meta name="keywords" content="hydrogen, energy transition, molecules, ...">
<meta name="robots" content="index, follow, max-image-preview:large, ...">
<link rel="canonical" href="%VITE_VERCEL_URL%">
```

### Open Graph Tags

**Homepage:**
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://pacc.services">
<meta property="og:title" content="PACC – Market‑Maker | Hydrogen & Energy Transition">
<meta property="og:description" content="Building the trusted bridge...">
<meta property="og:image" content="https://pacc.services/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="PACC - Market Maker for Hydrogen & Energy Transition">
```

**Article Pages:**
Dynamic meta tags are set via the `useMetaTags` composable:
- `og:type` = "article"
- `og:url` = article-specific URL
- `og:title` = article title
- `og:description` = article excerpt
- `og:image` = article-specific or default OG image

### Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://pacc.services/og-image.png">
<meta name="twitter:image:alt" content="...">
```

## Structured Data (JSON-LD)

### Organization Schema

Located in `/index.html`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PACC",
  "url": "https://pacc.services",
  "logo": "https://pacc.services/logo_full_cropped.png",
  "description": "...",
  "email": "pat@pacc.services",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Patrick Larkin"
  },
  "foundingDate": "2024",
  "industry": "Energy",
  "keywords": "hydrogen, energy transition, ...",
  "slogan": "Market-Maker for Hydrogen & Energy Transition"
}
```

### WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PACC",
  "url": "https://pacc.services",
  "description": "Building the trusted bridge...",
  "publisher": {
    "@type": "Organization",
    "name": "PACC"
  }
}
```

## Dynamic Meta Tags

### Implementation

Dynamic meta tags are managed via the `useMetaTags` composable (`/src/composables/useMetaTags.ts`).

**Key Features:**
- **Environment-aware URL detection:** Automatically detects production, preview, or localhost environments
- **Dynamic OG image URLs:** Ensures correct URLs for all environments
- **Page-specific meta tags:** Different meta tags for home, news, and article pages
- **Canonical URL management:** Automatic canonical URL updates per page
- **Meta tag reset:** Restores default meta tags when navigating away from specific pages

**Usage Example:**

```typescript
import { useMetaTags } from '@/composables/useMetaTags'

const { setArticleMetaTags, resetMetaTags, getBaseUrl } = useMetaTags()

// Set article meta tags
setArticleMetaTags(
  'Article Title',
  'Article description...',
  'https://pacc.services/article-og-image.png',
  'article-slug'
)

// Reset to defaults
resetMetaTags()
```

### Per-Page Implementation

**HomeView.vue:**
```typescript
onMounted(() => {
  initializeMetaTags()
})
```

**NewsView.vue:**
```typescript
onMounted(() => {
  setArticleMetaTags(
    'PACC News & Updates',
    'Latest developments and announcements from PACC...'
  )
})
```

**ArticleView.vue:**
```typescript
onMounted(() => {
  if (article.value) {
    setArticleMetaTags(
      article.value.title,
      article.value.excerpt,
      imageUrl,
      article.value.slug
    )
  }
})

onUnmounted(() => {
  resetMetaTags()
})
```

## Sitemap

**Location:** `/public/sitemap.xml`

**Current Routes:**
- Homepage: `https://pacc.services/`
- News Page: `https://pacc.services/news`
- Article: `https://pacc.services/news/k2-hydrogen-facility-pittsburg`

**Update Frequency:**
- Homepage: Weekly
- News Page: Weekly
- Articles: Monthly

**Sitemap Submission:**
The sitemap is referenced in `/public/robots.txt`:
```
Sitemap: https://pacc.services/sitemap.xml
```

### Adding New Articles to Sitemap

When adding new articles, update the sitemap:

```xml
<url>
  <loc>https://pacc.services/news/[article-slug]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## Robots.txt

**Location:** `/public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://pacc.services/sitemap.xml
```

## Favicons

Multiple favicon formats for broad compatibility:

- **favicon.ico** (multi-resolution ICO)
- **favicon-16x16.png** (16×16px PNG)
- **favicon-32x32.png** (32×32px PNG)
- **apple-touch-icon-180x180.png** (180×180px for iOS)

## Best Practices

### Meta Tag Guidelines

1. **Title Tags:**
   - Homepage: 60 characters or less
   - Article pages: Include " | PACC" suffix
   - Format: `[Page Title] | PACC`

2. **Meta Descriptions:**
   - 150-160 characters optimal
   - Include primary keywords naturally
   - Compelling call-to-action when appropriate

3. **OG Images:**
   - Always 1200×630px
   - File size under 1MB (ideally < 300KB)
   - Include branding (logo or text)
   - High contrast for readability

4. **Canonical URLs:**
   - Always use absolute URLs
   - Update dynamically per page
   - No trailing slashes on homepage

### SEO Checklist

- [x] OG image with PACC logo (1200×630px)
- [x] Primary meta tags (title, description, keywords)
- [x] Open Graph tags for all pages
- [x] Twitter Card tags
- [x] JSON-LD structured data (Organization, WebSite)
- [x] Canonical URLs on all pages
- [x] Sitemap.xml with all routes
- [x] Robots.txt with sitemap reference
- [x] Favicon in multiple formats
- [x] Dynamic meta tags for article pages
- [x] Mobile-optimized viewport settings
- [x] Theme color for PWA

### Future Enhancements

1. **Article-Specific OG Images:**
   - Generate unique OG images per article
   - Include article title and featured image
   - Automated generation in build process

2. **Article Schema:**
   - Add JSON-LD Article schema to article pages
   - Include author, publish date, modified date
   - Add breadcrumb schema

3. **Video Schema:**
   - If adding videos, include Video schema
   - Provide thumbnails and descriptions

4. **FAQ Schema:**
   - Add FAQ schema if applicable
   - Improve rich snippet visibility

5. **Review Schema:**
   - If adding testimonials/reviews
   - Include ratings and review count

## Testing

### OG Tag Testing Tools

1. **Facebook Sharing Debugger:**
   - URL: https://developers.facebook.com/tools/debug/
   - Clear cache after updating OG tags

2. **LinkedIn Post Inspector:**
   - URL: https://www.linkedin.com/post-inspector/
   - Refresh cache if needed

3. **Twitter Card Validator:**
   - URL: https://cards-dev.twitter.com/validator
   - Check card preview

4. **Open Graph Preview:**
   - URL: https://www.opengraph.xyz/
   - Test multiple social platforms

### Structured Data Testing

1. **Google Rich Results Test:**
   - URL: https://search.google.com/test/rich-results
   - Validate JSON-LD markup

2. **Schema.org Validator:**
   - URL: https://validator.schema.org/
   - Check schema compliance

### Performance Testing

1. **Google PageSpeed Insights:**
   - URL: https://pagespeed.web.dev/
   - Check Core Web Vitals

2. **Lighthouse (Chrome DevTools):**
   - Run SEO audit
   - Check accessibility

## Monitoring

### Key Metrics to Track

1. **Search Console:**
   - Impressions and clicks
   - Average position
   - Coverage issues
   - Mobile usability

2. **Social Media Analytics:**
   - Click-through rates on shared links
   - Engagement on posts with OG images

3. **Analytics:**
   - Organic traffic trends
   - Referral traffic from social media
   - Bounce rate and time on page

## Contact

For questions about SEO implementation:
- **Technical:** Review this document and `/src/composables/useMetaTags.ts`
- **Content:** Update article data in `/src/data/articles/`
- **OG Images:** See `/scripts/README.md`

