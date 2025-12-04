import type { Article } from '@/types/article'
import { hydrogenPlatformLaunch } from './hydrogen-platform-launch'

export const articles: Article[] = [hydrogenPlatformLaunch]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
