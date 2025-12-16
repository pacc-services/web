/**
 * Article Adapter Utilities
 * Provides backward compatibility between legacy and new article formats
 */

import type { Article, LegacyArticle, LogoImage } from '@/types/article'

/**
 * Convert legacy article format to new format
 */
export function adaptLegacyArticle(legacy: LegacyArticle): Article {
  // Extract logos from content if present
  const logosContent = legacy.content.find((block) => block.type === 'logos')
  const logos: LogoImage[] = logosContent?.images || []

  return {
    slug: legacy.slug,

    meta: {
      title: legacy.title,
      date: legacy.date,
      datePublished: legacy.datePublished || new Date().toISOString(),
      location: legacy.location,
      category: legacy.category as
        | 'Press Release'
        | 'Partnership Announcement'
        | 'Company News'
        | 'Industry Update'
        | 'Event'
        | 'Blog Post',
      tags: [],
    },

    header: {
      logos: logos.length > 0 ? logos : undefined,
      mainImage: legacy.image
        ? {
            src: legacy.image,
            alt: legacy.title,
          }
        : undefined,
      excerpt: legacy.excerpt,
    },

    content: legacy.content
      .filter((block) => block.type !== 'logos') // Remove logos block as it's now in header
      .map((block) => {
        switch (block.type) {
          case 'paragraph':
            return {
              type: 'paragraph' as const,
              text: block.text || '',
            }
          case 'heading':
            return {
              type: 'heading' as const,
              level: (block.level || 2) as 2 | 3 | 4 | 5 | 6,
              text: block.text || '',
              style: (block.style as 'normal' | 'italic' | 'bold' | undefined) || 'normal',
            }
          case 'list':
            return {
              type: 'list' as const,
              listStyle: 'bullet' as const,
              items: (block.items || []).map((item) =>
                typeof item === 'string' ? { text: item } : { title: item.title, text: item.text },
              ),
            }
          case 'image':
            return {
              type: 'image' as const,
              src: block.src || '',
              alt: block.alt || '',
              caption: block.caption,
              size: 'full' as const,
              align: 'center' as const,
            }
          default:
            return {
              type: 'paragraph' as const,
              text: '',
            }
        }
      }),

    seo: {
      ogImage: legacy.ogImage,
      metaDescription: legacy.excerpt,
      keywords: [],
    },
  }
}

/**
 * Get article logos (works with both legacy and new format)
 */
export function getArticleLogos(article: Article | LegacyArticle): LogoImage[] {
  // New format
  if ('header' in article && article.header?.logos) {
    return article.header.logos
  }

  // Legacy format
  if ('content' in article) {
    const legacyArticle = article as LegacyArticle
    const logosContent = legacyArticle.content.find((block) => block.type === 'logos')
    return (logosContent as { images?: LogoImage[] })?.images || []
  }

  return []
}

/**
 * Get article main image (works with both legacy and new format)
 */
export function getArticleMainImage(article: Article | LegacyArticle): string | undefined {
  // New format
  if ('header' in article && article.header?.mainImage) {
    return article.header.mainImage.src
  }

  // Legacy format
  if ('image' in article) {
    return article.image
  }

  return undefined
}

/**
 * Get article excerpt (works with both legacy and new format)
 */
export function getArticleExcerpt(article: Article | LegacyArticle): string {
  // New format
  if ('header' in article) {
    return article.header.excerpt
  }

  // Legacy format
  if ('excerpt' in article) {
    return article.excerpt
  }

  return ''
}

/**
 * Get article metadata (works with both legacy and new format)
 */
export function getArticleMetadata(article: Article | LegacyArticle) {
  // New format
  if ('meta' in article) {
    return article.meta
  }

  // Legacy format - construct metadata
  return {
    title: (article as LegacyArticle).title,
    date: (article as LegacyArticle).date,
    datePublished: (article as LegacyArticle).datePublished || new Date().toISOString(),
    location: (article as LegacyArticle).location,
    category: (article as LegacyArticle).category,
    tags: [],
  }
}

/**
 * Get article SEO data (works with both legacy and new format)
 */
export function getArticleSEO(article: Article | LegacyArticle) {
  // New format
  if ('seo' in article) {
    return article.seo
  }

  // Legacy format - construct SEO data
  return {
    ogImage: (article as LegacyArticle).ogImage,
    metaDescription: (article as LegacyArticle).excerpt,
    keywords: [],
  }
}
