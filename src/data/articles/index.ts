import type { Article } from '@/types/article'
import { hydrogenPlatformLaunch } from './hydrogen-platform-launch'
import { announcingPaccTrack } from './announcing-pacc-track'
import { paccPartnersWithGridstor } from './pacc-partners-with-gridstor'
import { paccExpandsToTexas } from './pacc-expands-to-texas'
import { paccProcessesMillionthKilogram } from './pacc-processes-millionth-kilogram'
import { paccSecuresSeriesA } from './pacc-secures-series-a'
import { paccNamedTopInnovator } from './pacc-named-top-innovator'

export const articles: Article[] = [
  announcingPaccTrack,
  hydrogenPlatformLaunch,
  paccPartnersWithGridstor,
  paccExpandsToTexas,
  paccProcessesMillionthKilogram,
  paccSecuresSeriesA,
  paccNamedTopInnovator,
]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug)
}

export const getAllArticles = (): Article[] => {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
