# Article System Documentation

## Overview

The PACC article system provides a comprehensive, type-safe structure for managing news articles, press releases, and other content. It's designed to be CMS-ready and supports rich content blocks.

## Table of Contents

1. [Article Structure](#article-structure)
2. [Content Blocks](#content-blocks)
3. [Creating New Articles](#creating-new-articles)
4. [Backward Compatibility](#backward-compatibility)
5. [Future CMS Integration](#future-cms-integration)

---

## Article Structure

### Main Article Interface

```typescript
interface Article {
  slug: string              // URL identifier
  meta: ArticleMetadata     // Metadata (title, date, location, etc.)
  header: ArticleHeader     // Display info (logos, main image, excerpt)
  content: ArticleContent[] // Main content blocks
  seo: ArticleSEO          // SEO and social media data
}
```

### Article Metadata

```typescript
interface ArticleMetadata {
  title: string           // Full article title
  date: string           // Display date (e.g., "December 17, 2025")
  datePublished: string  // ISO 8601 format
  location: string       // Article location (e.g., "Pittsburg, CA")
  category: ArticleCategory
  author?: string        // Optional author
  tags?: string[]        // Optional tags for filtering
}
```

**Available Categories:**
- `'Press Release'`
- `'Partnership Announcement'`
- `'Company News'`
- `'Industry Update'`
- `'Event'`
- `'Blog Post'`

### Article Header

The header contains information displayed in cards, carousels, and previews:

```typescript
interface ArticleHeader {
  logos?: LogoImage[]        // Partner logos (typically [PACC, Partner])
  mainImage?: ArticleImage   // Main hero image
  excerpt: string            // Short summary (1-2 sentences)
  subtitle?: string          // Optional subtitle
}
```

**Logo Display:**
- Logos are shown in carousel cards and news listing
- Typically 2 logos: PACC on left, partner on right
- Exchange icon displayed between logos

**Main Image:**
- Displayed at top of full article view
- Used as fallback in news listing if no logos provided
- Automatically included in OG image generation

---

## Content Blocks

Articles are built from content blocks. Each block has a specific type and purpose.

### Paragraph Block

```typescript
{
  type: 'paragraph',
  text: string,
  align?: 'left' | 'center' | 'right'
}
```

Standard text paragraph.

### Heading Block

```typescript
{
  type: 'heading',
  level: 2 | 3 | 4 | 5 | 6,
  text: string,
  style?: 'normal' | 'italic' | 'bold',
  align?: 'left' | 'center' | 'right'
}
```

Section headings (h2-h6).

### List Block

```typescript
{
  type: 'list',
  listStyle: 'bullet' | 'numbered',
  items: ListItem[]
}

interface ListItem {
  title?: string,  // Optional bold title
  text: string     // Main text
}
```

Bullet or numbered lists. Items can have optional bold titles.

**Example:**
```typescript
{
  type: 'list',
  listStyle: 'bullet',
  items: [
    {
      title: 'Facility Expansion:',
      text: 'K2 Pure is expanding its state-of-the-art chlor-alkali plant...'
    }
  ]
}
```

### Image Block

```typescript
{
  type: 'image',
  src: string,
  alt: string,
  caption?: string,
  credit?: string,
  size?: 'small' | 'medium' | 'large' | 'full',
  align?: 'left' | 'center' | 'right'
}
```

Inline images with optional captions and credits.

### Quote Block

```typescript
{
  type: 'quote',
  text: string,
  author?: string,
  authorTitle?: string,
  organization?: string
}
```

Highlighted quotes with attribution.

**Example:**
```typescript
{
  type: 'quote',
  text: "Breaking ground marks more than a construction milestone...",
  author: 'Howard Brodie',
  authorTitle: 'CEO',
  organization: 'K2 Pure Solutions'
}
```

### Callout Block

```typescript
{
  type: 'callout',
  variant: 'info' | 'success' | 'warning' | 'note',
  title?: string,
  text: string
}
```

Highlighted information boxes for important details.

**Example:**
```typescript
{
  type: 'callout',
  variant: 'success',
  title: 'Environmental Impact',
  text: 'Using the U.S. Department of Energy\'s GREET model...'
}
```

### Divider Block

```typescript
{
  type: 'divider',
  style?: 'solid' | 'dashed' | 'dotted'
}
```

Visual separator between sections.

---

## Creating New Articles

### Step 1: Create Article File

Create a new file in `src/data/articles/`:

```typescript
// src/data/articles/my-article.ts
import type { Article } from '@/types/article'
import myImage from '@/assets/images/news/my-article/hero.png'
import logo1 from '@/assets/images/news/my-article/logo1.png'
import logo2 from '@/assets/images/news/my-article/logo2.png'

export const myArticle: Article = {
  slug: 'my-article-slug',

  meta: {
    title: 'Article Title',
    date: 'December 17, 2025',
    datePublished: '2025-12-17T08:00:00-08:00',
    location: 'City, State',
    category: 'Press Release',
    tags: ['tag1', 'tag2'],
  },

  header: {
    logos: [
      { src: logo1, alt: 'Organization 1', name: 'Org 1' },
      { src: logo2, alt: 'Organization 2', name: 'Org 2' },
    ],
    mainImage: {
      src: myImage,
      alt: 'Article image description',
      caption: 'Optional caption',
    },
    excerpt: 'Short summary for cards and previews.',
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Main Heading',
    },
    {
      type: 'paragraph',
      text: 'Article content goes here...',
    },
    // ... more content blocks
  ],

  seo: {
    ogImage: '/og-images/my-article-slug.png',
    metaDescription: 'SEO-optimized description',
    keywords: ['keyword1', 'keyword2'],
  },
}
```

### Step 2: Add to Index

Update `src/data/articles/index.ts`:

```typescript
import { myArticle } from './my-article'

export function getAllArticles() {
  return [
    myArticle,
    // ... other articles
  ]
}

export function getArticleBySlug(slug: string) {
  const articles = getAllArticles()
  return articles.find((article) => article.slug === slug)
}
```

### Step 3: Generate OG Image

Add article to `scripts/generate-article-og-images.ts`:

```typescript
const articles: ArticleConfig[] = [
  {
    slug: 'my-article-slug',
    title: 'Article Title',
    imagePath: 'news/my-article/hero.png',  // Relative to src/assets/images/
    category: 'Press Release',
  },
  // ... other articles
]
```

Run generation:
```bash
npm run generate:og:articles
```

**Important:** The OG image will be automatically generated during build (`npm run build`), but you should generate and commit it to the repository so it's available immediately on deploy.

**Build-Time Generation:**
- OG images are generated automatically via the `prebuild` script
- This happens before every `npm run build`
- Ensures all article OG images are up-to-date
- Images are saved to `public/og-images/{article-slug}.png`
- Public folder is copied to dist during build

### Step 4: Add Article Assets

Place images in organized folders:
```
src/assets/images/news/my-article/
  ├── hero.png        (main image)
  ├── logo1.png       (org 1 logo)
  └── logo2.png       (org 2 logo)
```

---

## Backward Compatibility

The system supports both legacy and new article formats through adapter utilities.

### Using Adapter Functions

```typescript
import {
  getArticleLogos,
  getArticleMainImage,
  getArticleExcerpt,
  getArticleMetadata,
  getArticleSEO
} from '@/utils/articleAdapter'

// Works with both legacy and new formats
const logos = getArticleLogos(article)
const mainImage = getArticleMainImage(article)
const excerpt = getArticleExcerpt(article)
const meta = getArticleMetadata(article)
const seo = getArticleSEO(article)
```

### Migrating Legacy Articles

To convert a legacy article to the new format:

```typescript
import { adaptLegacyArticle } from '@/utils/articleAdapter'
import { legacyArticle } from './old-article'

const newArticle = adaptLegacyArticle(legacyArticle)
```

---

## Future CMS Integration

The article system is designed for easy backend integration.

### JSON Schema

Each article can be represented as JSON:

```json
{
  "slug": "article-slug",
  "meta": {
    "title": "Article Title",
    "date": "December 17, 2025",
    "datePublished": "2025-12-17T08:00:00-08:00",
    "location": "City, State",
    "category": "Press Release",
    "tags": ["tag1", "tag2"]
  },
  "header": {
    "logos": [
      {
        "src": "/uploads/logo1.png",
        "alt": "Logo 1",
        "name": "Organization 1"
      }
    ],
    "mainImage": {
      "src": "/uploads/hero.png",
      "alt": "Main image"
    },
    "excerpt": "Short summary"
  },
  "content": [
    {
      "type": "paragraph",
      "text": "Content goes here"
    }
  ],
  "seo": {
    "ogImage": "/og-images/article-slug.png",
    "metaDescription": "SEO description",
    "keywords": ["keyword1"]
  }
}
```

### API Endpoints (Future)

Planned endpoints for CMS:

```
GET    /api/articles           - List all articles
GET    /api/articles/:slug     - Get single article
POST   /api/articles           - Create article
PUT    /api/articles/:slug     - Update article
DELETE /api/articles/:slug     - Delete article
POST   /api/articles/:slug/og  - Generate OG image
```

### Content Editor Requirements

The CMS editor should support:

1. **Rich Text Editing** - For paragraphs and text content
2. **Block-Based Editing** - Add/remove/reorder content blocks
3. **Image Upload** - With automatic optimization
4. **Logo Management** - Multi-logo support with preview
5. **SEO Tools** - Meta description, keywords, OG image preview
6. **Preview Mode** - Live preview before publishing
7. **Draft/Publish States** - Content versioning
8. **Tag Management** - Autocomplete tag selection

### Validation

TypeScript provides compile-time validation. For runtime validation in a CMS, use:

- Zod schemas for input validation
- Image size/format requirements
- Required field enforcement
- Character limits for excerpts/descriptions

---

## Best Practices

1. **Keep Excerpts Short** - 1-2 sentences, ~150 characters
2. **Use High-Quality Images** - At least 1200px wide for main images
3. **Optimize Images** - Compress before adding to project
4. **Write Descriptive Alt Text** - For accessibility
5. **Use Proper Heading Hierarchy** - h2 → h3 → h4 (don't skip levels)
6. **Tag Consistently** - Use lowercase, hyphenated tags
7. **Test OG Images** - Preview in Facebook/Twitter debuggers
8. **Include Dates** - Always use ISO 8601 for `datePublished`

---

## File Structure

```
src/
├── types/
│   └── article.ts              # Type definitions
├── data/
│   └── articles/
│       ├── index.ts            # Article registry
│       ├── my-article.ts       # Individual article
│       └── ...
├── utils/
│   └── articleAdapter.ts       # Compatibility utilities
├── views/
│   ├── ArticleView.vue         # Full article view
│   └── NewsView.vue            # Article listing
└── components/
    └── sections/
        └── NewsSection.vue     # Carousel preview
```

---

## Examples

See `src/data/articles/k2-hydrogen-facility-v2.ts` for a complete example using all content block types.

