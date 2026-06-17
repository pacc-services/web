import type { Article } from '@/types/article'
import paccLogo from '@/assets/images/news/transit-tomorrow-hydrogen/pacc-logo.png'
import k2Logo from '@/assets/images/news/transit-tomorrow-hydrogen/k2-logo.png'
import facilityPhoto from '@/assets/images/k2-facility-aerial.jpg'

export const transitTomorrowHydrogen: Article = {
  slug: 'california-transit-agencies-renewable-hydrogen-zeroup-k2-pacc',

  meta: {
    title: 'California Transit Agencies Need Renewable Hydrogen. A New Supply Agreement Could Help Deliver It.',
    date: 'June 17, 2026',
    datePublished: '2026-06-17T08:00:00-04:00',
    location: 'Pittsburg, CA',
    category: 'Industry Update',
    tags: ['Hydrogen', 'Transit', 'California', 'ICT Regulation', 'ZeroUp Energy', 'K2 Pure Solutions', 'Zero Emission'],
  },

  header: {
    logos: [
      { src: k2Logo, alt: 'K2 Pure Solutions Logo', name: 'K2 Pure Solutions' },
      { src: paccLogo, alt: 'PACC Services Logo', name: 'PACC Services' },
    ],
    mainImage: {
      src: facilityPhoto,
      alt: 'K2 Pure Solutions facility in Pittsburg, CA',
      caption: "K2 Pure Solutions\' Pittsburg, CA facility — targeting commercial hydrogen availability in Q3 2026.",
    },
    excerpt: "California\'s transition to zero-emission transit buses faces a challenge beyond vehicle procurement: securing a reliable supply of compliant, low-carbon hydrogen. A new supply agreement between K2, PACC Services, and ZeroUp Energy could help deliver it.",
    subtitle: 'Published by Transit Tomorrow · Spencer Hulse · June 17, 2026',
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'California Transit Agencies Need Renewable Hydrogen. A New Supply Agreement Could Help Deliver It.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Published by Transit Tomorrow — Spencer Hulse — June 17, 2026',
      style: 'italic',
    },
    {
      type: 'paragraph',
      text: "California\'s transition to zero-emission transit buses faces a challenge that extends beyond vehicle procurement: securing a reliable supply of compliant, low-carbon hydrogen.",
    },
    {
      type: 'paragraph',
      text: "To help address that issue, K2 Pure Solutions and PACC Services have executed a Hydrogen Supply Agreement with ZeroUp Energy, a California-based hydrogen solutions provider serving public transit agencies. The agreement secures a dedicated supply of low-carbon hydrogen from K2\'s chlor-alkali facility in Pittsburg, California, to support ZeroUp\'s mobile fueling programs for transit agencies across the state.",
    },
    {
      type: 'paragraph',
      text: "The hydrogen is produced on a pathway targeted to meet the renewable fuel standards required under California\'s Innovative Clean Transit (ICT) regulation, which requires public transit agencies to transition their fleets to zero-emission technologies and mandates renewable fuels for agencies operating fuel cell electric buses.",
    },
    {
      type: 'paragraph',
      text: "For many transit agencies, finding hydrogen that meets California\'s carbon intensity requirements at a workable price has been one of the most significant barriers to deploying fuel cell buses at scale. This agreement is designed to help address both supply availability and fuel compliance as agencies work toward ICT deadlines.",
    },
    {
      type: 'paragraph',
      text: "ZeroUp brings more than a decade of hydrogen fueling and fuel cell vehicle experience to public transit programs across California. The company currently supplies hydrogen to Omnitrans in San Bernardino under a multi-year contract and is working with Stanislaus Regional Transit Authority (StanRTA), which is preparing to deploy fuel cell electric buses and requires a mobile fueling solution before revenue service begins.",
    },
    {
      type: 'paragraph',
      text: "Many agencies adopting fuel cell buses cannot wait for permanent fueling infrastructure to be constructed. ZeroUp\'s mobile fueling model allows agencies to begin operations while longer-term infrastructure is developed, provided hydrogen supply is available and transportation logistics are economically viable. K2\'s Pittsburg facility, which is targeting commercial availability in Q3 2026, is positioned to serve both Northern and Southern California transit corridors where ZeroUp operates.",
    },
    {
      type: 'quote',
      text: "Transit agencies need supply they can count on at a price point that actually works. When that supply is produced on a pathway targeted to meet California\'s renewable fuel standards under the ICT regulation, it removes a real compliance headache for them.",
      author: 'Jonathan Palacios-Avila, Executive, ZeroUp Energy',
    },
    {
      type: 'paragraph',
      text: "Unlike many hydrogen projects that require entirely new production facilities, K2\'s hydrogen is generated as a byproduct of its existing chlor-alkali manufacturing process. The facility has operated since 2011 and holds the Chlorine Institute\'s Platinum Level Process Safety Performance Award. The hydrogen is expected to meet SAE J2719 purity standards required for fuel cell vehicle applications.",
    },
    {
      type: 'quote',
      text: "Our facility was built on decades of operational excellence and process safety, and our hydrogen will be produced on a low-carbon pathway we believe is targeted to meet California\'s renewable fuel standards. That is a meaningful credential for the transit agencies ZeroUp serves, and it is something we will earn through the way we operate.",
      author: 'Howard Brodie, CEO of K2 Pure Solutions',
    },
    {
      type: 'paragraph',
      text: "PACC Services, which holds an exclusive Hydrogen Marketing Agreement with K2, structured and negotiated the ZeroUp agreement and manages contracting, logistics coordination, and supply chain management between K2\'s production and end-use markets.",
    },
    {
      type: 'quote',
      text: "The ICT regulation creates real, durable demand for low-carbon hydrogen across California\'s transit sector. K2\'s targeted low-carbon production pathway, paired with ZeroUp\'s field experience and PACC\'s commercial infrastructure, is exactly the kind of integrated supply chain transit agencies need as they prepare for long-term compliance.",
      author: 'Andrew Carman, CEO of PACC Services',
    },
    {
      type: 'paragraph',
      text: "The agreement marks the second announced hydrogen offtake arrangement for K2 and PACC ahead of the facility\'s planned Q3 2026 commercial launch. The first, with Hyster-Yale Materials Handling, focuses on hydrogen-powered material handling and mobile power applications serving ports, logistics facilities, and distribution centers across Northern California.",
    },
    {
      type: 'callout',
      variant: 'note',
      text: 'This article was originally published by Transit Tomorrow on June 17, 2026. Read the original at transittomorrow.com.',
    },
  ],

  seo: {
    metaDescription: "",
  },
}
