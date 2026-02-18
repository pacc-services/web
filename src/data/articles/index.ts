import type { Article } from '@/types/article'
import { k2HydrogenFacility } from './k2-hydrogen-facility'
import { k2HydrogenFttCoverage } from './k2-hydrogen-ftt-coverage'

export const articles: Article[] = [k2HydrogenFacility, k2HydrogenFttCoverage]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}
