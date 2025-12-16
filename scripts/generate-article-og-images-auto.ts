#!/usr/bin/env node

/**
 * Generate Article-Specific OG Images Automatically
 *
 * This script automatically reads article data and generates OG images
 * for all articles that have a mainImage defined in their header.
 *
 * Requirements: @playwright/test (already in devDependencies)
 * Usage: tsx scripts/generate-article-og-images-auto.ts
 */

import { chromium } from '@playwright/test'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// OG Image dimensions
const WIDTH = 1200
const HEIGHT = 630

// Brand colors
const BRAND_GREEN = '#5cb85c'
const WHITE = '#ffffff'

interface ArticleOGConfig {
  slug: string
  title: string
  imagePath: string
  category: string
}

/**
 * Extract image path from imported module
 * This handles Vite's import of images which returns an object with default property
 */
function resolveImagePath(imageSrc: string | { default?: string }): string | null {
  if (typeof imageSrc === 'string') {
    // If it's already a string path, try to extract the actual file path
    // Vite imports look like: /src/assets/images/...
    if (imageSrc.startsWith('/src/')) {
      return imageSrc.replace('/src/', '')
    }
    return imageSrc
  }
  if (typeof imageSrc === 'object' && imageSrc?.default) {
    return resolveImagePath(imageSrc.default)
  }
  return null
}

/**
 * Load articles dynamically and extract OG image configuration
 */
async function loadArticles(): Promise<ArticleOGConfig[]> {
  const articlesModule = await import('../src/data/articles/index.ts')
  const articles = articlesModule.getAllArticles()

  const configs: ArticleOGConfig[] = []

  for (const article of articles) {
    // Support both new and legacy formats
    const meta = 'meta' in article ? article.meta : article
    const header = 'header' in article ? article.header : { mainImage: { src: article.image } }
    const mainImage = header?.mainImage?.src

    if (mainImage) {
      // Try to resolve the image path
      // For the K2 article, the image is imported, so we need to map it manually
      let imagePath: string | null = null

      // Check if we have a manually configured mapping
      const knownMappings: Record<string, string> = {
        'k2-hydrogen-facility-pittsburg':
          'news/k2-pittsburg-hydrogen/aerial-view-k2-production.png',
      }

      if (knownMappings[article.slug]) {
        imagePath = knownMappings[article.slug]
      } else {
        imagePath = resolveImagePath(mainImage)
      }

      if (imagePath) {
        configs.push({
          slug: article.slug,
          title: meta.title,
          imagePath: imagePath,
          category: meta.category,
        })
      } else {
        console.warn(
          `⚠️  Could not resolve image path for article: ${article.slug}. Add to knownMappings if needed.`,
        )
      }
    } else {
      console.log(`ℹ️  Article ${article.slug} has no main image, skipping OG generation`)
    }
  }

  return configs
}

async function generateArticleOGImage(article: ArticleOGConfig): Promise<void> {
  console.log(`🎨 Generating OG image for: ${article.title.substring(0, 50)}...`)

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2, // 2x for better quality
  })
  const page = await context.newPage()

  // Read the article's main image
  const articleImagePath = join(__dirname, '../src/assets/images', article.imagePath)
  if (!existsSync(articleImagePath)) {
    console.error(`❌ Article image not found: ${articleImagePath}`)
    await browser.close()
    return
  }
  const articleImageBase64 = readFileSync(articleImagePath).toString('base64')
  const imageExt = article.imagePath.split('.').pop()

  // Read the PACC logo
  const logoPath = join(__dirname, '../src/assets/images/logo_full.png')
  const logoBase64 = readFileSync(logoPath).toString('base64')

  // Create HTML content with article image and PACC branding
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          width: ${WIDTH}px;
          height: ${HEIGHT}px;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 73, 122, 0.85) 0%,
            rgba(0, 73, 122, 0.75) 40%,
            rgba(0, 73, 122, 0.85) 100%
          );
        }
        .content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 80px;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .logo {
          max-width: 280px;
          max-height: 80px;
          width: auto;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
        }
        .category-badge {
          background: ${BRAND_GREEN};
          color: ${WHITE};
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .title-container {
          flex: 1;
          display: flex;
          align-items: center;
        }
        .title {
          color: ${WHITE};
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-text {
          color: ${WHITE};
          font-size: 24px;
          font-weight: 500;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .footer-logo {
          max-width: 200px;
          max-height: 50px;
          width: auto;
          height: auto;
          opacity: 0.9;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
        }
      </style>
    </head>
    <body>
      <img src="data:image/${imageExt};base64,${articleImageBase64}" alt="Article Image" class="background-image" />
      <div class="overlay"></div>
      <div class="content">
        <div class="header">
          <img src="data:image/png;base64,${logoBase64}" alt="PACC Logo" class="logo" />
          <div class="category-badge">${article.category}</div>
        </div>
        <div class="title-container">
          <h1 class="title">${article.title}</h1>
        </div>
        <div class="footer">
          <div class="footer-text">pacc.services</div>
          <img src="data:image/png;base64,${logoBase64}" alt="PACC Logo" class="footer-logo" />
        </div>
      </div>
    </body>
    </html>
  `

  await page.setContent(html)

  // Wait for images to load
  await page.waitForLoadState('networkidle')

  // Take screenshot
  const screenshot = await page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width: WIDTH,
      height: HEIGHT,
    },
  })

  // Ensure output directory exists
  const outputDir = join(__dirname, '../public/og-images')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  // Save to public/og-images folder
  const outputPath = join(outputDir, `${article.slug}.png`)
  writeFileSync(outputPath, screenshot)

  await browser.close()

  console.log(`✅ Generated: ${outputPath}`)
  console.log(`   📐 ${WIDTH}x${HEIGHT}px (2x) | 💾 ${(screenshot.length / 1024).toFixed(1)} KB`)
}

async function generateAllArticleOGImages(): Promise<void> {
  console.log('🔍 Loading articles from source...\n')

  const articles = await loadArticles()

  if (articles.length === 0) {
    console.log('⚠️  No articles with main images found!')
    return
  }

  console.log(`🚀 Starting OG image generation for ${articles.length} article(s)...\n`)

  for (const article of articles) {
    try {
      await generateArticleOGImage(article)
    } catch (error) {
      console.error(`❌ Failed to generate OG image for ${article.slug}:`, error)
    }
  }

  console.log('\n🎉 All article OG images generated successfully!')
}

// Run the generator
generateAllArticleOGImages().catch((error: Error) => {
  console.error('❌ Failed to generate article OG images:', error)
  process.exit(1)
})
