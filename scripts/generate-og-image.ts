#!/usr/bin/env node

/**
 * Generate OG Image with PACC Logo using Playwright
 *
 * This script creates a 1200x630 px Open Graph image with the PACC logo
 * and brand messaging for optimal social media sharing.
 *
 * Requirements: @playwright/test (already in devDependencies)
 * Usage: tsx scripts/generate-og-image.ts
 */

import { chromium } from '@playwright/test'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateMainOGImageHTML, OG_WIDTH, OG_HEIGHT } from './og-image-html-template.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function generateOGImage(): Promise<void> {
  console.log('🎨 Generating OG image with Playwright...')

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: OG_WIDTH, height: OG_HEIGHT },
    deviceScaleFactor: 2, // 2x for better quality
  })
  const page = await context.newPage()

  // Read the logo file
  const logoPath = join(__dirname, '../src/assets/images/logo_full.png')
  const logoBase64 = readFileSync(logoPath).toString('base64')

  // Generate HTML using shared template
  const html = generateMainOGImageHTML({ logoBase64 })

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

  // Save to public folder
  const outputPath = join(__dirname, '../public/og-image.png')
  writeFileSync(outputPath, screenshot)

  await browser.close()

  console.log('✅ OG image generated successfully!')
  console.log(`📍 Saved to: ${outputPath}`)
  console.log(`📐 Dimensions: ${OG_WIDTH}x${OG_HEIGHT}px (rendered at 2x for quality)`)
  console.log(`💾 File size: ${(screenshot.length / 1024).toFixed(1)} KB`)
}

// Run the generator
generateOGImage().catch((error: Error) => {
  console.error('❌ Failed to generate OG image:', error)
  process.exit(1)
})
