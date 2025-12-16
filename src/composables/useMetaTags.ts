/**
 * Composable for managing dynamic meta tags
 */
export const useMetaTags = () => {
  const getBaseUrl = (): string => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return 'https://pacc.services'
    }

    const hostname = window.location.hostname

    // Check for Vercel preview environment
    if (hostname.includes('vercel.app')) {
      return window.location.origin
    }

    // Check for localhost
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return window.location.origin
    }

    // Default to production
    return 'https://pacc.services'
  }

  const updateMetaTag = (selector: string, attribute: string, value: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.setAttribute(attribute, value)
    }
  }

  const initializeMetaTags = () => {
    const baseUrl = getBaseUrl()

    // Use the optimized OG image (1200x630) from public folder
    const ogImageUrl = `${baseUrl}/og-image.png`

    // Update OG meta tags
    updateMetaTag('meta[property="og:url"]', 'content', baseUrl)
    updateMetaTag('meta[property="og:image"]', 'content', ogImageUrl)
    updateMetaTag('meta[property="og:image:secure_url"]', 'content', ogImageUrl)
    updateMetaTag('meta[property="article:publisher"]', 'content', baseUrl)

    // Update Twitter meta tags
    updateMetaTag('meta[name="twitter:image"]', 'content', ogImageUrl)
  }

  const setArticleMetaTags = (
    title: string,
    description: string,
    imageUrl?: string,
    articleSlug?: string,
  ) => {
    const baseUrl = getBaseUrl()
    const fullUrl = articleSlug ? `${baseUrl}/news/${articleSlug}` : baseUrl
    const ogImage = imageUrl || `${baseUrl}/og-image.png`

    // Update document title
    document.title = `${title} | PACC`

    // Update OG tags
    updateMetaTag('meta[property="og:title"]', 'content', title)
    updateMetaTag('meta[property="og:description"]', 'content', description)
    updateMetaTag('meta[property="og:image"]', 'content', ogImage)
    updateMetaTag('meta[property="og:image:secure_url"]', 'content', ogImage)
    updateMetaTag('meta[property="og:url"]', 'content', fullUrl)
    updateMetaTag('meta[property="og:type"]', 'content', articleSlug ? 'article' : 'website')

    // Update Twitter tags
    updateMetaTag('meta[name="twitter:title"]', 'content', title)
    updateMetaTag('meta[name="twitter:description"]', 'content', description)
    updateMetaTag('meta[name="twitter:image"]', 'content', ogImage)

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', description)
  }

  const resetMetaTags = () => {
    const baseUrl = getBaseUrl()

    document.title = 'PACC – Market‑Maker | Hydrogen & Energy Transition'

    updateMetaTag('meta[property="og:title"]', 'content', 'PACC – Market‑Maker')
    updateMetaTag(
      'meta[property="og:description"]',
      'content',
      'Building the trusted bridge between producers and customers of the energy transition. We de‑risk supply, aggregate demand, and create structured pathways for hydrogen and molecules. Join us in accelerating the energy future.',
    )
    updateMetaTag('meta[property="og:image"]', 'content', `${baseUrl}/og-image.png`)
    updateMetaTag(
      'meta[property="og:image:secure_url"]',
      'content',
      `${baseUrl}/og-image.png`,
    )
    updateMetaTag('meta[property="og:url"]', 'content', baseUrl)
    updateMetaTag('meta[property="og:type"]', 'content', 'website')

    updateMetaTag('meta[name="twitter:title"]', 'content', 'PACC – Market‑Maker')
    updateMetaTag(
      'meta[name="twitter:description"]',
      'content',
      'Building the trusted bridge for hydrogen & energy. De‑risking supply, aggregating demand, creating the future of energy transition.',
    )
    updateMetaTag('meta[name="twitter:image"]', 'content', `${baseUrl}/og-image.png`)

    updateMetaTag(
      'meta[name="description"]',
      'content',
      'PACC is the trusted bridge between producers and customers of the energy transition—de‑risking supply, aggregating demand, and creating structured pathways for molecules including hydrogen and specialty gases.',
    )
  }

  return {
    getBaseUrl,
    initializeMetaTags,
    setArticleMetaTags,
    resetMetaTags,
  }
}
