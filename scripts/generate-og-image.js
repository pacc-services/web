#!/usr/bin/env node

/**
 * Generate OG Image with PACC Logo
 * 
 * This script creates a 1200x630 px Open Graph image with the PACC logo
 * and brand messaging for optimal social media sharing.
 * 
 * Requirements: node-canvas
 * Usage: node scripts/generate-og-image.js
 */

import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// OG Image dimensions (Facebook/LinkedIn/Twitter standard)
const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors
const BRAND_BLUE = '#00497a';
const BRAND_GREEN = '#5cb85c';
const WHITE = '#ffffff';

async function generateOGImage() {
  console.log('🎨 Generating OG image...');

  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background - solid brand blue
  ctx.fillStyle = BRAND_BLUE;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  try {
    // Load PACC logo
    const logoPath = join(__dirname, '../src/assets/images/logo_full.png');
    const logo = await loadImage(logoPath);

    // Calculate logo dimensions (maintain aspect ratio)
    const logoMaxWidth = 500;
    const logoMaxHeight = 300;
    const logoAspect = logo.width / logo.height;
    
    let logoWidth, logoHeight;
    if (logo.width > logo.height) {
      logoWidth = Math.min(logoMaxWidth, logo.width);
      logoHeight = logoWidth / logoAspect;
    } else {
      logoHeight = Math.min(logoMaxHeight, logo.height);
      logoWidth = logoHeight * logoAspect;
    }

    // Draw logo centered at top portion
    const logoX = (WIDTH - logoWidth) / 2;
    const logoY = 100;
    ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

    // Add tagline text below logo
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Main tagline - "Market-Maker"
    ctx.fillStyle = BRAND_GREEN;
    ctx.font = 'bold 72px sans-serif';
    ctx.fillText('Market-Maker', WIDTH / 2, 450);

    // Subtitle - "Hydrogen & Energy Transition"
    ctx.fillStyle = WHITE;
    ctx.font = '40px sans-serif';
    ctx.fillText('Hydrogen & Energy Transition', WIDTH / 2, 530);

  } catch (error) {
    console.error('❌ Error loading logo:', error.message);
    
    // Fallback: text-only version
    ctx.fillStyle = WHITE;
    ctx.font = 'bold 120px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PACC', WIDTH / 2, 220);

    ctx.fillStyle = BRAND_GREEN;
    ctx.font = 'bold 72px sans-serif';
    ctx.fillText('Market-Maker', WIDTH / 2, 350);

    ctx.fillStyle = WHITE;
    ctx.font = '40px sans-serif';
    ctx.fillText('Hydrogen & Energy Transition', WIDTH / 2, 450);
  }

  // Save to public folder
  const buffer = canvas.toBuffer('image/png');
  const outputPath = join(__dirname, '../public/og-image.png');
  writeFileSync(outputPath, buffer);

  console.log('✅ OG image generated successfully!');
  console.log(`📍 Saved to: ${outputPath}`);
  console.log(`📐 Dimensions: ${WIDTH}x${HEIGHT}px`);
}

// Run the generator
generateOGImage().catch(error => {
  console.error('❌ Failed to generate OG image:', error);
  process.exit(1);
});

