import type { Article } from '@/types/article'
import { k2HydrogenFacility } from './k2-hydrogen-facility'
import { vercelWebAnalyticsGuide } from './vercel-web-analytics-guide'

export const articles: Article[] = [k2HydrogenFacility, vercelWebAnalyticsGuide]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}
