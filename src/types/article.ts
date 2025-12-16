export interface Article {
  slug: string
  title: string
  date: string
  datePublished?: string // ISO 8601 date format for structured data
  location: string
  category: string
  excerpt: string
  image?: string // Optional image URL for the article
  content: ArticleContent[]
}

export interface ListItem {
  title?: string
  text: string
}

export interface LogoImage {
  src: string
  alt: string
}

export interface ArticleContent {
  type: 'paragraph' | 'heading' | 'list' | 'image' | 'logos'
  level?: number // for headings
  text?: string // for paragraphs and headings
  style?: string // for styling (e.g., 'italic')
  items?: string[] | ListItem[] // for lists - can be simple strings or objects with title and text
  src?: string // for images
  alt?: string // for images
  caption?: string // for image captions
  images?: LogoImage[] // for logos type
}
