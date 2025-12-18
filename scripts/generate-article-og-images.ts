#!/usr/bin/env node

/**
 * Generate Article-Specific OG Images with PACC Branding
 *
 * This script creates custom 1200x630 px Open Graph images for each article
 * using the article's main image with PACC branding overlay.
 *
 * Requirements: @playwright/test (already in devDependencies)
 * Usage: tsx scripts/generate-article-og-images.ts
 */

import { chromium } from '@playwright/test'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateArticleOGImageHTML, OG_WIDTH, OG_HEIGHT } from './og-image-html-template.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface ArticleConfig {
  slug: string
  title: string
  imagePath?: string // Path relative to src/assets/images
  category: string
}

// Configure articles here
const articles: ArticleConfig[] = [
  {
    slug: 'k2-hydrogen-facility-pittsburg',
    title:
      'K2 Pure Solutions Breaks Ground on Commercial Low-Carbon Hydrogen Facility in Pittsburg, California',
    imagePath: 'news/k2-pittsburg-hydrogen/aerial-view-k2-production.png',
    category: 'Press Release',
  },
  {
    slug: 'vercel-web-analytics-guide',
    title: 'Getting Started with Vercel Web Analytics',
    imagePath: 'logo_full.png', // Fallback to PACC logo
    category: 'Blog Post',
  },
  // Add more articles here as needed
]

async function generateArticleOGImage(article: ArticleConfig): Promise<void> {
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
  console.log(
    `   📐 ${OG_WIDTH}x${OG_HEIGHT}px (2x) | 💾 ${(screenshot.length / 1024).toFixed(1)} KB`,
  )
}

async function generateAllArticleOGImages(): Promise<void> {
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
