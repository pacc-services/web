export interface LinkedInPost {
  id: string
  date: string
  datePublished: string
  text: string
  url: string
  image?: string
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: 'hyster-yale-2026-06-13',
    date: 'June 13, 2026',
    datePublished: '2026-06-13T09:00:00-08:00',
    text: 'PACC Services is pleased to share news of a new hydrogen supply agreement with Hyster-Yale Materials Handling in support of their Nuvera® HydroCharge™ rollout across Northern California. HydroCharge delivers grid-independent, zero-emission mobile power and EV fast charging using hydrogen fuel cells. Local hydrogen supply has been one of the biggest barriers to adoption across Bay Area and Sacramento logistics corridors — this agreement addresses that directly.',
    url: 'https://www.linkedin.com/company/pacc-services',
  },
]

export const getRecentPosts = (count = 5): LinkedInPost[] => {
  return linkedInPosts
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, count)
}
