export interface LinkedInPost {
  id: string
  date: string
  datePublished: string
  author: string
  authorTitle: string
  authorUrl: string
  text: string
  url: string
  image?: string
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: 'pacc-hyster-yale-2026-06-13',
    date: 'June 13, 2026',
    datePublished: '2026-06-13T09:00:00-08:00',
    author: 'PACC Services',
    authorTitle: 'PACC Services',
    authorUrl: 'https://www.linkedin.com/company/pacc-services',
    text: 'PACC Services is pleased to share news of a new hydrogen supply agreement with Hyster-Yale Materials Handling in support of their Nuvera® HydroCharge™ rollout across Northern California. HydroCharge delivers grid-independent, zero-emission mobile power and EV fast charging using hydrogen fuel cells. For ports, distribution centers, and cold storage facilities across the Bay Area and Sacramento logistics corridors, reliable local hydrogen supply has been one of the biggest barriers to adoption. This agreement addresses that directly.',
    url: 'https://www.linkedin.com/company/pacc-services',
  },
  {
    id: 'pat-ca-hydrogen-summit-2026-06-10',
    date: 'June 10, 2026',
    datePublished: '2026-06-10T09:00:00-08:00',
    author: 'Patrick Charette',
    authorTitle: 'Co-Founder & CCO',
    authorUrl: 'https://www.linkedin.com/in/patrick-charette/',
    text: 'Great two days in Sacramento at the California Hydrogen Summit. Thank you to the California Hydrogen Business Council for convening the right voices. Hearing transit agencies and end users speak to their readiness to scale was a strong signal. As Katrina Fritz noted in her closing remarks, California's leadership in hydrogen deployment depends on steady policy and aligned incentives. K2 Pure Solutions is doing its part, unlocking access to low carbon hydrogen in Northern California for the fleets and agencies ready to move. The market is there. The supply is coming!',
    url: 'https://www.linkedin.com/posts/patrick-charette_airquality-decarbonization-resilience-activity-7470329099614441472-FDi5',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFExample/feedshare-shrink_800/0/1749586800000',
  },
]

export const getRecentPosts = (count = 5): LinkedInPost[] => {
  return linkedInPosts
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, count)
}
