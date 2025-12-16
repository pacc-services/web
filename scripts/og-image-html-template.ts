/**
 * Shared HTML Template Generator for OG Images
 *
 * This module provides reusable HTML templates for generating Open Graph images
 * with consistent PACC branding across different use cases.
 */

// OG Image dimensions
export const OG_WIDTH = 1200
export const OG_HEIGHT = 630

// Brand colors
export const BRAND_BLUE = '#00497a'
export const BRAND_GREEN = '#5cb85c'
export const WHITE = '#ffffff'

/**
 * Logo styling with glow effect (matches navbar styling)
 */
const LOGO_GLOW_FILTER = `
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1))
          drop-shadow(0 0 2px rgba(255, 255, 255, 1))
          drop-shadow(0 0 25px rgba(255, 255, 255, 0.9))
          drop-shadow(0 0 50px rgba(255, 255, 255, 0.6))
          drop-shadow(0 0 75px rgba(255, 255, 255, 0.4));
`

interface MainOGImageConfig {
  logoBase64: string
}

/**
 * Generate HTML for main PACC OG image (homepage)
 */
export function generateMainOGImageHTML(config: MainOGImageConfig): string {
  return `
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
          width: ${OG_WIDTH}px;
          height: ${OG_HEIGHT}px;
          background: ${BRAND_BLUE};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          overflow: hidden;
        }
        .logo-container {
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .logo {
          max-width: 600px;
          max-height: 300px;
          width: auto;
          height: auto;
          ${LOGO_GLOW_FILTER}
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
        <img src="data:image/png;base64,${config.logoBase64}" alt="PACC Logo" class="logo" />
      </div>
      <div class="tagline">
        <div class="market-maker">Market-Maker</div>
        <div class="subtitle">Hydrogen & Energy Transition</div>
      </div>
    </body>
    </html>
  `
}

interface ArticleOGImageConfig {
  logoBase64: string
  articleImageBase64: string
  imageExt: string
  title: string
  category: string
}

/**
 * Generate HTML for article-specific OG image
 */
export function generateArticleOGImageHTML(config: ArticleOGImageConfig): string {
  return `
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
          width: ${OG_WIDTH}px;
          height: ${OG_HEIGHT}px;
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
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .logo {
          max-width: 480px;
          max-height: 140px;
          width: auto;
          height: auto;
          ${LOGO_GLOW_FILTER}
        }
        .category-badge {
          background: ${BRAND_GREEN};
          color: ${WHITE};
          padding: 5px 14px;
          border-radius: 14px;
          font-size: 14px;
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
          font-size: 48px;
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
          justify-content: center;
        }
        .footer-text {
          color: ${WHITE};
          font-size: 24px;
          font-weight: 500;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
      </style>
    </head>
    <body>
      <img src="data:image/${config.imageExt};base64,${config.articleImageBase64}" alt="Article Image" class="background-image" />
      <div class="overlay"></div>
      <div class="content">
        <div class="header">
          <img src="data:image/png;base64,${config.logoBase64}" alt="PACC Logo" class="logo" />
          <div class="category-badge">${config.category}</div>
        </div>
        <div class="title-container">
          <h1 class="title">${config.title}</h1>
        </div>
        <div class="footer">
          <div class="footer-text">pacc.services</div>
        </div>
      </div>
    </body>
    </html>
  `
}

