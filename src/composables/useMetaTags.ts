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

    // Update canonical URL
    updateCanonicalUrl(baseUrl)

    // Update OG meta tags
    updateMetaTag('meta[property="og:url"]', 'content', baseUrl)
    updateMetaTag('meta[property="og:image"]', 'content', ogImageUrl)
    updateMetaTag('meta[property="og:image:secure_url"]', 'content', ogImageUrl)

    // Update Twitter meta tags
    updateMetaTag('meta[name="twitter:image"]', 'content', ogImageUrl)
    updateMetaTag('meta[name="twitter:url"]', 'content', baseUrl)
  }

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }

  const setArticleMetaTags = (
    title: string,
    description: string,
    imageUrl?: string,
    articleSlug?: string,
    datePublished?: string,
  ) => {
    const baseUrl = getBaseUrl()
    const fullUrl = articleSlug ? `${baseUrl}/news/${articleSlug}` : baseUrl
    const ogImage = imageUrl || `${baseUrl}/og-image.png`

    // Update document title
    document.title = `${title} | PACC`

    // Update meta name="title" tag
    updateMetaTag('meta[name="title"]', 'content', `${title} | PACC`)

    // Update canonical URL
    updateCanonicalUrl(fullUrl)

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
    updateMetaTag('meta[name="twitter:url"]', 'content', fullUrl)

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', description)

    // Add structured data for articles
    if (articleSlug && datePublished) {
      // Add Article structured data
      addStructuredData('article', {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: title,
        description: description,
        image: ogImage,
        datePublished: datePublished,
        dateModified: datePublished,
        author: {
          '@type': 'Organization',
          name: 'PACC',
          url: baseUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'PACC',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo_full_cropped.png`,
          },
        },
        url: fullUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
        articleSection: 'Energy Transition',
        keywords: 'hydrogen, energy transition, market maker, specialty gases',
      })

      // Add BreadcrumbList structured data
      addStructuredData('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'News',
            item: `${baseUrl}/news`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: fullUrl,
          },
        ],
      })
    }
  }

  const addStructuredData = (id: string, data: Record<string, unknown>) => {
    // Remove existing structured data with this ID
    const existingScript = document.querySelector(`script[data-schema-id="${id}"]`)
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-schema-id', id)
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  const resetMetaTags = () => {
    const baseUrl = getBaseUrl()

    document.title = 'PACC – Market‑Maker | Hydrogen & Energy Transition'

    // Update canonical URL
    updateCanonicalUrl(baseUrl)

    updateMetaTag(
      'meta[property="og:title"]',
      'content',
      'PACC – Market‑Maker | Hydrogen & Energy Transition',
    )
    updateMetaTag(
      'meta[property="og:description"]',
      'content',
      'Building the trusted bridge between producers and customers of the energy transition. We de‑risk supply, aggregate demand, and create structured pathways for hydrogen and molecules. Join us in accelerating the energy future.',
    )
    updateMetaTag('meta[property="og:image"]', 'content', `${baseUrl}/og-image.png`)
    updateMetaTag('meta[property="og:image:secure_url"]', 'content', `${baseUrl}/og-image.png`)
    updateMetaTag('meta[property="og:url"]', 'content', baseUrl)
    updateMetaTag('meta[property="og:type"]', 'content', 'website')

    updateMetaTag(
      'meta[name="twitter:title"]',
      'content',
      'PACC – Market‑Maker | Hydrogen & Energy Transition',
    )
    updateMetaTag(
      'meta[name="twitter:description"]',
      'content',
      'Building the trusted bridge for hydrogen & energy. De‑risking supply, aggregating demand, creating the future of energy transition.',
    )
    updateMetaTag('meta[name="twitter:image"]', 'content', `${baseUrl}/og-image.png`)
    updateMetaTag('meta[name="twitter:url"]', 'content', baseUrl)

    updateMetaTag(
      'meta[name="description"]',
      'content',
      'PACC is the trusted bridge between producers and customers of the energy transition—de‑risking supply, aggregating demand, and creating structured pathways for molecules including hydrogen and specialty gases.',
    )

    // Remove article-specific structured data
    const articleScript = document.querySelector('script[data-schema-id="article"]')
    if (articleScript) {
      articleScript.remove()
    }
    const breadcrumbScript = document.querySelector('script[data-schema-id="breadcrumb"]')
    if (breadcrumbScript) {
      breadcrumbScript.remove()
    }
  }

  return {
    getBaseUrl,
    initializeMetaTags,
    setArticleMetaTags,
    resetMetaTags,
  }
}
