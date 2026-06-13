import type { Article } from '@/types/article'
import paccLogo from '@/assets/images/news/hyster-yale-hydrocharge/pacc-logo.png'
import nuvera from '@/assets/images/news/hyster-yale-hydrocharge/nuvera-logo.png'
import hydrochargePhoto from '@/assets/images/news/hyster-yale-hydrocharge/hydrocharge-ev-charging.jpg'

export const hysterYaleHydrocharge: Article = {
  slug: 'pacc-hyster-yale-hydrocharge-northern-california',

  meta: {
    title:
      'PACC Services Announces Hydrogen Supply Agreement with Hyster-Yale to Power HydroCharge™ Rollout Across Northern California',
    date: 'June 10, 2026',
    datePublished: '2026-06-10T08:00:00-08:00',
    location: 'Pittsburg, CA',
    category: 'Press Release',
    tags: ['Hydrogen', 'Partnership', 'Hyster-Yale', 'HydroCharge', 'California', 'Logistics', 'Clean Energy'],
  },

  header: {
    logos: [
      { src: paccLogo, alt: 'PACC Services Logo', name: 'PACC Services' },
      { src: nuvera, alt: 'Nuvera Logo', name: 'Nuvera' },
    ],
    mainImage: {
      src: hydrochargePhoto,
      alt: 'Hyster-Yale HydroCharge hydrogen-powered EV fast charger',
      caption: 'Nuvera® HydroCharge™ — grid-independent mobile power and EV fast charging powered by hydrogen fuel cells.',
    },
    excerpt:
      'Agreement delivers locally sourced, low-carbon hydrogen to support zero-emission mobile power and EV fast charging across Bay Area and Sacramento logistics corridors.',
    subtitle:
      'Agreement delivers locally sourced, low-carbon hydrogen to support zero-emission mobile power and EV fast charging across Bay Area and Sacramento logistics corridors.',
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'PACC Services Announces Hydrogen Supply Agreement with Hyster-Yale to Power HydroCharge™ Rollout Across Northern California',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Agreement delivers locally sourced, low-carbon hydrogen to support zero-emission mobile power and EV fast charging across Bay Area and Sacramento logistics corridors.',
      style: 'italic',
    },
    {
      type: 'paragraph',
      text: "PITTSBURG, CA — June 10, 2026 — PACC Services, LLC today announced the execution of a Hydrogen Supply Agreement (HSA) with Hyster-Yale Materials Handling, Inc., securing a dedicated supply of low-carbon gaseous hydrogen to support the commercial rollout of Hyster-Yale's Nuvera® HydroCharge™ system across Northern California's major port, distribution, and logistics corridors.",
    },
    {
      type: 'paragraph',
      text: 'HydroCharge delivers grid-independent, zero-emission mobile power and EV fast charging using hydrogen fuel cells — enabling ports, distribution centers, cold storage facilities, and municipalities to electrify operations without waiting for grid upgrades or permanent charging infrastructure. For fleet operators across the Bay Area and Sacramento region, local hydrogen supply has historically been one of the biggest barriers to adoption. This agreement addresses that directly.',
    },
    {
      type: 'image',
      src: hydrochargePhoto,
      alt: 'Hyster-Yale HydroCharge hydrogen-powered EV fast charger in use',
      caption: 'Nuvera® HydroCharge™ — grid-independent mobile power and EV fast charging powered by hydrogen fuel cells.',
      size: 'full',
      align: 'center',
    },
    {
      type: 'quote',
      text: 'We structured this agreement to support exactly what Hyster-Yale is building in Northern California. Local production delivers lower costs and real supply security — two things that have historically been difficult to deliver in this market. This is the kind of infrastructure that makes hydrogen adoption viable at scale.',
      author: 'Andrew Carman',
      authorTitle: 'CEO',
      organization: 'PACC Services',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Solving the supply problem',
    },
    {
      type: 'paragraph',
      text: 'Northern California is one of the most active hydrogen markets in North America, driven by corporate decarbonization mandates and a dense concentration of port operations, distribution centers, and cold storage facilities. Despite strong demand, adoption has been constrained by limited access to reliable, locally sourced supply.',
    },
    {
      type: 'paragraph',
      text: "PACC's commercial platform is purpose-built to close that gap — connecting hydrogen producers with end-market customers through structured offtake agreements, logistics coordination, and supply chain management. The Hyster-Yale HSA is among the first committed offtake collaborations ahead of commercial hydrogen availability in the region, and a direct demonstration of the PACC model in action.",
    },
    {
      type: 'quote',
      text: "Local, reliable production is foundational to HydroCharge's path to scaling. By securing supply from K2's East Bay facility, we reduce supply chain risk while delivering predictable economics and a low-carbon domestic hydrogen source.",
      author: 'Cameron Kasper',
      authorTitle: 'Business Development Lead, Energy Solutions',
      organization: 'Hyster-Yale Materials Handling',
    },
    {
      type: 'heading',
      level: 3,
      text: 'About the supply partnership',
    },
    {
      type: 'paragraph',
      text: "Hydrogen for this agreement is sourced from K2 Pure Solutions' chlor-alkali facility in Pittsburg, CA — a low-carbon byproduct of K2's existing manufacturing process, requiring no natural gas reforming or standalone electrolysis. PACC serves as K2's exclusive commercial partner, responsible for contracting, logistics coordination, and supply chain management across the Northern California market. K2's facility is targeting commercial availability in Q3 2026.",
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Media Coverage',
      text: 'Full coverage of the K2 and Hyster-Yale partnership is available via the California Business Journal: https://calbizjournal.com/k2-pure-solutions-and-pacc-services-collaborate-with-hyster-yale-to-advance-hydrogen-adoption-across-northern-california/',
    },
  ],

  seo: {
    ogImage: '/og-images/pacc-hyster-yale-hydrocharge.png',
    metaDescription:
      'PACC Services announces a hydrogen supply agreement with Hyster-Yale Materials Handling to power the Nuvera® HydroCharge™ rollout across Northern California logistics and port corridors.',
    keywords: [
      'hydrogen',
      'Hyster-Yale',
      'HydroCharge',
      'Nuvera',
      'PACC Services',
      'Northern California',
      'low-carbon hydrogen',
      'EV fast charging',
      'logistics',
      'clean energy',
    ],
  },
}
