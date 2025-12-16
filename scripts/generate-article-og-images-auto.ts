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
import { generateArticleOGImageHTML, OG_WIDTH, OG_HEIGHT } from './og-image-html-template.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
    viewport: { width: OG_WIDTH, height: OG_HEIGHT },
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
  const imageExt = article.imagePath.split('.').pop() || 'png'

  // Read the PACC logo
  const logoPath = join(__dirname, '../src/assets/images/logo_full.png')
  const logoBase64 = readFileSync(logoPath).toString('base64')

  // Generate HTML using shared template
  const html = generateArticleOGImageHTML({
    logoBase64,
    articleImageBase64,
    imageExt,
    title: article.title,
    category: article.category,
  })

  await page.setContent(html)

  // Wait for images to load
  await page.waitForLoadState('networkidle')

  // Take screenshot
  const screenshot = await page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width: OG_WIDTH,
      height: OG_HEIGHT,
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
  console.log(`   📐 ${OG_WIDTH}x${OG_HEIGHT}px (2x) | 💾 ${(screenshot.length / 1024).toFixed(1)} KB`)
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
