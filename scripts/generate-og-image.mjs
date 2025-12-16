#!/usr/bin/env node

/**
 * Generate OG Image with PACC Logo using Playwright
 * 
 * This script creates a 1200x630 px Open Graph image with the PACC logo
 * and brand messaging for optimal social media sharing.
 * 
 * Requirements: @playwright/test (already in devDependencies)
 * Usage: node scripts/generate-og-image.mjs
 */

import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// OG Image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors
const BRAND_BLUE = '#00497a';
const BRAND_GREEN = '#5cb85c';
const WHITE = '#ffffff';

async function generateOGImage() {
  console.log('🎨 Generating OG image with Playwright...');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 2, // 2x for better quality
  });
  const page = await context.newPage();

  // Read the logo file
  const logoPath = join(__dirname, '../src/assets/images/logo_full.png');
  const logoBase64 = readFileSync(logoPath).toString('base64');

  // Create HTML content
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
          background: ${BRAND_BLUE};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .logo-container {
          margin-bottom: 40px;
        }
        .logo {
          max-width: 500px;
          max-height: 250px;
          width: auto;
          height: auto;
        }
        .tagline {
          text-align: center;
          margin-top: 20px;
        }
        .market-maker {
          color: ${BRAND_GREEN};
          font-size: 72px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .subtitle {
          color: ${WHITE};
          font-size: 40px;
          font-weight: 400;
        }
      </style>
    </head>
    <body>
      <div class="logo-container">
        <img src="data:image/png;base64,${logoBase64}" alt="PACC Logo" class="logo" />
      </div>
      <div class="tagline">
        <div class="market-maker">Market-Maker</div>
        <div class="subtitle">Hydrogen & Energy Transition</div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  
  // Wait for images to load
  await page.waitForLoadState('networkidle');
  
  // Take screenshot
  const screenshot = await page.screenshot({
    type: 'png',
    clip: {
      x: 0,
      y: 0,
      width: WIDTH,
      height: HEIGHT,
    },
  });

  // Save to public folder
  const outputPath = join(__dirname, '../public/og-image.png');
  writeFileSync(outputPath, screenshot);

  await browser.close();

  console.log('✅ OG image generated successfully!');
  console.log(`📍 Saved to: ${outputPath}`);
  console.log(`📐 Dimensions: ${WIDTH}x${HEIGHT}px (rendered at 2x for quality)`);
  console.log(`💾 File size: ${(screenshot.length / 1024).toFixed(1)} KB`);
}

// Run the generator
generateOGImage().catch(error => {
  console.error('❌ Failed to generate OG image:', error);
  process.exit(1);
});

