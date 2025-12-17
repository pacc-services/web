#!/usr/bin/env node

/**
 * Pre-render Article Pages with OG Meta Tags
 *
 * This script generates static HTML files for each article page with proper
 * OG meta tags for social media sharing. Since this is an SPA, crawlers can't
 * see the dynamically updated meta tags, so we create static versions.
 *
 * Usage: tsx scripts/prerender-articles.ts
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface ArticleMetadata {
  slug: string
  title: string
  description: string
  ogImage: string
  datePublished: string
  category: string
}

// Article metadata - keep this in sync with your articles
const articles: ArticleMetadata[] = [
  {
    slug: 'k2-hydrogen-facility-pittsburg',
    title:
      'K2 Pure Solutions Breaks Ground on Commercial Low-Carbon Hydrogen Facility in Pittsburg, California',
    description:
      'K2 Pure Solutions has initiated construction on a groundbreaking commercial low-carbon hydrogen production facility in Pittsburg, California, partnering with PACC to advance clean energy infrastructure.',
    ogImage: '/og-images/k2-hydrogen-facility-pittsburg.png',
    datePublished: '2025-12-17T08:00:00-08:00',
    category: 'Press Release',
  },
  {
    slug: 'vercel-web-analytics-guide',
    title: 'Getting Started with Vercel Web Analytics',
    description:
      'Learn how to enable Vercel Web Analytics on your project and start tracking visitors and page views. A comprehensive guide for Next.js, React, Vue, and other frameworks.',
    ogImage: '/og-images/vercel-web-analytics-guide.png',
    datePublished: '2025-12-17T08:00:00-08:00',
    category: 'Blog Post',
  },
  // Add more articles here as needed
]

function prerenderArticle(article: ArticleMetadata, baseUrl: string): void {
  console.log(`📝 Pre-rendering: ${article.slug}`)

  // Read the base index.html
  const indexPath = join(__dirname, '../dist/index.html')
  if (!existsSync(indexPath)) {
    console.error('❌ dist/index.html not found. Run `npm run build` first.')
    process.exit(1)
  }

  let html = readFileSync(indexPath, 'utf-8')

  // Replace meta tags with article-specific ones
  html = html
    // Title
    .replace(/<title>.*?<\/title>/, `<title>${article.title} | PACC</title>`)
    .replace(/<meta name="title" content=".*?">/, `<meta name="title" content="${article.title}">`)
    // Description
    .replace(
      /<meta name="description" content=".*?">/,
      `<meta name="description" content="${article.description}">`,
    )
    // Canonical URL
    .replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${baseUrl}/news/${article.slug}">`,
    )
    // OG Title
    .replace(
      /<meta property="og:title" content=".*?">/,
      `<meta property="og:title" content="${article.title}">`,
    )
    // OG Description
    .replace(
      /<meta property="og:description" content=".*?">/,
      `<meta property="og:description" content="${article.description}">`,
    )
    // OG URL
    .replace(
      /<meta property="og:url" content=".*?">/,
      `<meta property="og:url" content="${baseUrl}/news/${article.slug}">`,
    )
    // OG Image
    .replace(
      /<meta property="og:image" content=".*?">/,
      `<meta property="og:image" content="${baseUrl}${article.ogImage}">`,
    )
    .replace(
      /<meta property="og:image:secure_url" content=".*?">/,
      `<meta property="og:image:secure_url" content="${baseUrl}${article.ogImage}">`,
    )
    // OG Type - change to article
    .replace(
      /<meta property="og:type" content="website">/,
      `<meta property="og:type" content="article">`,
    )
    // Twitter Title
    .replace(
      /<meta name="twitter:title" content=".*?">/,
      `<meta name="twitter:title" content="${article.title}">`,
    )
    // Twitter Description
    .replace(
      /<meta name="twitter:description" content=".*?">/,
      `<meta name="twitter:description" content="${article.description}">`,
    )
    // Twitter Image
    .replace(
      /<meta name="twitter:image" content=".*?">/,
      `<meta name="twitter:image" content="${baseUrl}${article.ogImage}">`,
    )
    // Twitter URL
    .replace(
      /<meta name="twitter:url" content=".*?">/,
      `<meta name="twitter:url" content="${baseUrl}/news/${article.slug}">`,
    )

  // Add article-specific structured data
  const articleStructuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "${article.title}",
      "description": "${article.description}",
      "image": "${baseUrl}${article.ogImage}",
      "datePublished": "${article.datePublished}",
      "author": {
        "@type": "Organization",
        "name": "PACC"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PACC",
        "logo": {
          "@type": "ImageObject",
          "url": "${baseUrl}/logo_full_cropped.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${baseUrl}/news/${article.slug}"
      },
      "keywords": ["hydrogen", "energy transition", "${article.category}"]
    }
    </script>`

  html = html.replace('</head>', `${articleStructuredData}\n  </head>`)

  // Create output directory
  const outputDir = join(__dirname, '../dist/news', article.slug)
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  // Write the pre-rendered HTML
  const outputPath = join(outputDir, 'index.html')
  writeFileSync(outputPath, html)

  console.log(`✅ Pre-rendered: ${outputPath}`)
}

function prerenderAllArticles(): void {
  console.log('🚀 Pre-rendering article pages with OG meta tags...\n')

  // Read the base URL from dist/index.html (Vite has already replaced %VITE_VERCEL_URL%)
  const indexPath = join(__dirname, '../dist/index.html')
  const indexHtml = readFileSync(indexPath, 'utf-8')

  // Extract the base URL from the canonical link or og:url meta tag
  const baseUrlMatch = indexHtml.match(/content="(https:\/\/[^"]+)"/)
  const baseUrl = baseUrlMatch ? new URL(baseUrlMatch[1]).origin : 'https://pacc.services'

  console.log(`📍 Base URL: ${baseUrl}\n`)

  for (const article of articles) {
    try {
      prerenderArticle(article, baseUrl)
    } catch (error) {
      console.error(`❌ Failed to pre-render ${article.slug}:`, error)
    }
  }

  console.log(`\n🎉 Successfully pre-rendered ${articles.length} article page(s)!`)
  console.log('\n📌 Note: These pages will have proper OG tags for social media crawlers.')
  console.log('   The SPA will still handle routing client-side for regular users.\n')
}

// Run the pre-renderer
prerenderAllArticles()
