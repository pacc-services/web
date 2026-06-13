import k2OpenHouse from '@/assets/images/linkedin/k2-open-house.jpg'
import caHydrogenSummit from '@/assets/images/linkedin/ca-hydrogen-summit.jpg'

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
    text: 'PACC Services is pleased to share news of a new hydrogen supply agreement with Hyster-Yale Materials Handling in support of their Nuvera\u00ae HydroCharge\u2122 rollout across Northern California. HydroCharge delivers grid-independent, zero-emission mobile power and EV fast charging using hydrogen fuel cells. For ports, distribution centers, and cold storage facilities across the Bay Area and Sacramento logistics corridors, reliable local hydrogen supply has been one of the biggest barriers to adoption. This agreement addresses that directly.',
    url: 'https://www.linkedin.com/company/pacc-services',
  },
  {
    id: 'andrew-ca-hydrogen-summit-2026-06-10',
    date: 'June 10, 2026',
    datePublished: '2026-06-10T10:00:00-08:00',
    author: 'Andrew Carman',
    authorTitle: 'Co-Founder & CEO',
    authorUrl: 'https://www.linkedin.com/in/andrew-carman-mba-a086a5b/',
    text: "Great few days in Sacramento at the California Hydrogen Summit hosted by California Hydrogen Business Council! What stood out most wasn't another discussion about future possibilities — it was hearing directly from transit agencies, ports, fleet operators, and end users that are actively preparing for hydrogen deployment. The conversation is increasingly shifting from if hydrogen will play a role to how we build the supply chains, infrastructure, and commercial models needed to support adoption at scale. K2 Pure Solutions is proud to be bringing new low-carbon hydrogen supply online in Northern California, and PACC Services is working every day to connect that supply with customers that need reliable molecules, not future promises.",
    url: 'https://www.linkedin.com/posts/andrew-carman-mba-a086a5b_hydrogen-renewablehydrogen-hydrogeneconomy-ugcPost-7470868044739710977-5pbu/',
    image: caHydrogenSummit,
  },
  {
    id: 'pat-ca-hydrogen-summit-2026-06-10',
    date: 'June 10, 2026',
    datePublished: '2026-06-10T09:00:00-08:00',
    author: 'Patrick Charette',
    authorTitle: 'Co-Founder & CCO',
    authorUrl: 'https://www.linkedin.com/in/patrick-charette/',
    text: "Great two days in Sacramento at the California Hydrogen Summit. Thank you to the California Hydrogen Business Council for convening the right voices. Hearing transit agencies and end users speak to their readiness to scale was a strong signal. California's leadership in hydrogen deployment depends on steady policy and aligned incentives. K2 Pure Solutions is doing its part, unlocking access to low carbon hydrogen in Northern California for the fleets and agencies ready to move. The market is there. The supply is coming!",
    url: 'https://www.linkedin.com/posts/patrick-charette_airquality-decarbonization-resilience-activity-7470329099614441472-FDi5',
  },
  {
    id: 'andrew-k2-open-house-2026-05-09',
    date: 'May 9, 2026',
    datePublished: '2026-05-09T09:00:00-08:00',
    author: 'Andrew Carman',
    authorTitle: 'Co-Founder & CEO',
    authorUrl: 'https://www.linkedin.com/in/andrew-carman-mba-a086a5b/',
    text: "Great to see such a strong group come together at the K2 site this week. A big thank you to everyone who joined us. Bringing policymakers, partners, and customers into the same room is how this market moves forward. The conversations were real, practical, and focused on execution, which is exactly what this industry needs right now. Appreciate the K2 team for hosting and everyone who took the time to be there and engage. If you are looking for hydrogen supply or thinking about how to bring new production to market, let's find time to talk.",
    url: 'https://www.linkedin.com/posts/andrew-carman-mba-a086a5b_hydrogen-cleanenergy-energytransition-ugcPost-7455721504530399232-Vs3o/',
    image: k2OpenHouse,
  },
]

export const getRecentPosts = (count = 5): LinkedInPost[] => {
  return linkedInPosts
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
    .slice(0, count)
}
