export interface Article {
  slug: string
  title: string
  date: string
  location: string
  category: string
  excerpt: string
  image?: string // Optional image URL for the article
  content: ArticleContent[]
}

export interface ArticleContent {
  type: 'paragraph' | 'heading' | 'list' | 'image'
  level?: number // for headings
  text?: string // for paragraphs and headings
  items?: string[] // for lists
  src?: string // for images
  alt?: string // for images
}
