export interface Article {
  slug: string
  title: string
  date: string
  location: string
  category: string
  excerpt: string
  content: ArticleContent[]
}

export interface ArticleContent {
  type: 'paragraph' | 'heading' | 'list'
  level?: number // for headings
  text?: string // for paragraphs and headings
  items?: string[] // for lists
}
