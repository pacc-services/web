#!/usr/bin/env python3
"""
Generate OG Image with PACC Logo

This script creates a 1200x630 px Open Graph image with the PACC logo
and brand messaging for optimal social media sharing.

Requirements: Pillow (PIL)
Usage: python3 scripts/generate-og-image.py
"""

from PIL import Image, ImageDraw, ImageFont
import os
from pathlib import Path

# OG Image dimensions (Facebook/LinkedIn/Twitter standard)
WIDTH = 1200
HEIGHT = 630

# Brand colors
BRAND_BLUE = '#00497a'
BRAND_GREEN = '#5cb85c'
WHITE = '#ffffff'

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def generate_og_image():
    print('🎨 Generating OG image...')
    
    # Get script directory
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    
    # Create canvas with brand blue background
    img = Image.new('RGB', (WIDTH, HEIGHT), hex_to_rgb(BRAND_BLUE))
    draw = ImageDraw.Draw(img)
    
    try:
        # Load PACC logo
        logo_path = project_root / 'src' / 'assets' / 'images' / 'logo_full.png'
        logo = Image.open(logo_path)
        
        # Convert RGBA to RGB if necessary (on blue background)
        if logo.mode == 'RGBA':
            # Create a background
            background = Image.new('RGB', logo.size, hex_to_rgb(BRAND_BLUE))
            background.paste(logo, mask=logo.split()[3])  # 3 is the alpha channel
            logo = background
        
        # Calculate logo dimensions (maintain aspect ratio)
        logo_max_width = 500
        logo_max_height = 250
        logo_aspect = logo.width / logo.height
        
        if logo.width > logo.height:
            logo_width = min(logo_max_width, logo.width)
            logo_height = int(logo_width / logo_aspect)
        else:
            logo_height = min(logo_max_height, logo.height)
            logo_width = int(logo_height * logo_aspect)
        
        # Resize logo
        logo = logo.resize((logo_width, logo_height), Image.Resampling.LANCZOS)
        
        # Paste logo centered at top portion
        logo_x = (WIDTH - logo_width) // 2
        logo_y = 80
        img.paste(logo, (logo_x, logo_y))
        
        logo_bottom = logo_y + logo_height
        
    except Exception as e:
        print(f'⚠️  Warning: Could not load logo: {e}')
        print('📝 Using text-only fallback...')
        logo_bottom = 100
        
        # Fallback: Draw PACC text
        try:
            font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 120)
        except:
            font_large = ImageFont.load_default()
        
        text = "PACC"
        bbox = draw.textbbox((0, 0), text, font=font_large)
        text_width = bbox[2] - bbox[0]
        text_x = (WIDTH - text_width) // 2
        draw.text((text_x, 150), text, fill=hex_to_rgb(WHITE), font=font_large)
        logo_bottom = 280
    
    # Add tagline text below logo
    try:
        font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
        font_subtitle = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
    except:
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
    
    # Main tagline - "Market-Maker"
    title_text = "Market-Maker"
    title_bbox = draw.textbbox((0, 0), title_text, font=font_title)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (WIDTH - title_width) // 2
    title_y = logo_bottom + 60
    draw.text((title_x, title_y), title_text, fill=hex_to_rgb(BRAND_GREEN), font=font_title)
    
    # Subtitle - "Hydrogen & Energy Transition"
    subtitle_text = "Hydrogen & Energy Transition"
    subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=font_subtitle)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (WIDTH - subtitle_width) // 2
    subtitle_y = title_y + 90
    draw.text((subtitle_x, subtitle_y), subtitle_text, fill=hex_to_rgb(WHITE), font=font_subtitle)
    
    # Save to public folder
    output_path = project_root / 'public' / 'og-image.png'
    img.save(output_path, 'PNG', optimize=True)
    
    print('✅ OG image generated successfully!')
    print(f'📍 Saved to: {output_path}')
    print(f'📐 Dimensions: {WIDTH}x{HEIGHT}px')
    
    # Get file size
    file_size = os.path.getsize(output_path)
    print(f'💾 File size: {file_size / 1024:.1f} KB')

if __name__ == '__main__':
    try:
        generate_og_image()
    except Exception as e:
        print(f'❌ Failed to generate OG image: {e}')
        import traceback
        traceback.print_exc()
        exit(1)

