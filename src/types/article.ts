/**
 * Article Type System
 * Structured for future CMS/backend editing capabilities
 */

// ============================================================================
// MAIN ARTICLE INTERFACE
// ============================================================================

export interface Article {
  // Core Identifiers
  slug: string // URL-friendly identifier (e.g., "k2-hydrogen-facility-pittsburg")

  // Metadata
  meta: ArticleMetadata

  // Header/Carousel Display (shown in previews/cards)
  header: ArticleHeader

  // Main Content
  content: ArticleContent[]

  // SEO & Social
  seo: ArticleSEO
}

// ============================================================================
// ARTICLE METADATA
// ============================================================================

export interface ArticleMetadata {
  title: string // Full article title
  date: string // Display date (e.g., "December 17, 2025")
  datePublished: string // ISO 8601 format for structured data (e.g., "2025-12-17T08:00:00-08:00")
  location: string // Article location (e.g., "Pittsburg, CA")
  category: ArticleCategory // Type of article
  author?: string // Optional author name
  tags?: string[] // Optional tags for categorization
}

export type ArticleCategory =
  | 'Press Release'
  | 'Partnership Announcement'
  | 'Company News'
  | 'Industry Update'
  | 'Event'
  | 'Blog Post'

// ============================================================================
// ARTICLE HEADER (for cards/carousel display)
// ============================================================================

export interface ArticleHeader {
  // Partner/Organization Logos (displayed in carousel/cards)
  logos?: LogoImage[] // Array of logos (typically [PACC, Partner])

  // Main Hero Image (for full article view)
  mainImage?: ArticleImage

  // Short summary for cards/previews
  excerpt: string // 1-2 sentences summarizing the article

  // Optional subtitle
  subtitle?: string
}

export interface LogoImage {
  src: string // Image source (import or URL)
  alt: string // Alt text for accessibility
  name?: string // Organization name (for future use)
}

export interface ArticleImage {
  src: string // Image source (import or URL)
  alt: string // Alt text for accessibility
  caption?: string // Optional caption
  credit?: string // Optional photo credit
}

// ============================================================================
// ARTICLE SEO
// ============================================================================

export interface ArticleSEO {
  // Custom OG image path (e.g., '/og-images/article-slug.png')
  ogImage?: string

  // SEO meta description (defaults to excerpt if not provided)
  metaDescription?: string

  // Additional keywords for SEO
  keywords?: string[]
}

// ============================================================================
// ARTICLE CONTENT BLOCKS
// ============================================================================

export type ArticleContent =
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | ImageBlock
  | QuoteBlock
  | DividerBlock
  | CalloutBlock

// Paragraph Block
export interface ParagraphBlock {
  type: 'paragraph'
  text: string
  align?: 'left' | 'center' | 'right'
}

// Heading Block
export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3 | 4 | 5 | 6 // Heading level (h2-h6)
  text: string
  style?: 'normal' | 'italic' | 'bold'
  align?: 'left' | 'center' | 'right'
}

// List Block
export interface ListBlock {
  type: 'list'
  listStyle: 'bullet' | 'numbered' // ul or ol
  items: ListItem[]
}

export interface ListItem {
  title?: string // Optional bold title before text
  text: string // Main list item text
}

// Image Block
export interface ImageBlock {
  type: 'image'
  src: string // Image source
  alt: string // Alt text
  caption?: string // Optional caption
  credit?: string // Optional photo credit
  size?: 'small' | 'medium' | 'large' | 'full' // Display size
  align?: 'left' | 'center' | 'right'
}

// Quote Block
export interface QuoteBlock {
  type: 'quote'
  text: string // Quote text
  author?: string // Quote author
  authorTitle?: string // Author's title/position
  organization?: string // Author's organization
}

// Divider Block
export interface DividerBlock {
  type: 'divider'
  style?: 'solid' | 'dashed' | 'dotted'
}

// Callout Block (for highlights/important info)
export interface CalloutBlock {
  type: 'callout'
  variant: 'info' | 'success' | 'warning' | 'note'
  title?: string
  text: string
}

// ============================================================================
// LEGACY SUPPORT (for backward compatibility)
// ============================================================================

/**
 * @deprecated Use Article interface instead
 * Kept for backward compatibility during migration
 */
export interface LegacyArticle {
  slug: string
  title: string
  date: string
  datePublished?: string
  location: string
  category: string
  excerpt: string
  image?: string
  ogImage?: string
  content: LegacyArticleContent[]
}

/**
 * @deprecated Use ArticleContent types instead
 */
export interface LegacyArticleContent {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'logos'
  level?: number
  text?: string
  style?: string
  items?: string[] | ListItem[]
  src?: string
  alt?: string
  caption?: string
  images?: LogoImage[]
}
