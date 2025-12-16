import type { Article } from '@/types/article'
import k2Logo from '@/assets/images/news/k2-pittsburg-hydrogen/k2-logo.png'
import paccLogo from '@/assets/images/news/k2-pittsburg-hydrogen/pacc-logo.png'
import aerialView from '@/assets/images/news/k2-pittsburg-hydrogen/aerial-view-k2-production.png'

export const k2HydrogenFacilityV2: Article = {
  slug: 'k2-hydrogen-facility-pittsburg',

  // Metadata
  meta: {
    title:
      'K2 Pure Solutions Breaks Ground on Commercial Low-Carbon Hydrogen Facility in Pittsburg, California',
    date: 'December 17, 2025',
    datePublished: '2025-12-17T08:00:00-08:00',
    location: 'Pittsburg, CA',
    category: 'Press Release',
    tags: ['Hydrogen', 'Partnership', 'Infrastructure', 'California', 'Clean Energy'],
  },

  // Header (for carousel/card display)
  header: {
    logos: [
      { src: paccLogo, alt: 'PACC Logo', name: 'PACC Services' },
      { src: k2Logo, alt: 'K2 Pure Solutions Logo', name: 'K2 Pure Solutions' },
    ],
    mainImage: {
      src: aerialView,
      alt: 'Aerial view of K2 Pittsburg construction site',
      caption: 'Aerial view of K2 Pittsburg construction site',
    },
    excerpt:
      'Expansion Adds High-Pressure Hydrogen Production Engineered to Meet California Clean-Fuel Standards, with PACC Serving as Exclusive Marketing & Distribution Partner',
    subtitle:
      'Expansion Adds High-Pressure Hydrogen Production Engineered to Meet California Clean-Fuel Standards, with PACC Serving as Exclusive Marketing & Distribution Partner',
  },

  // Main Content
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'K2 Pure Solutions Breaks Ground on Commercial Low-Carbon Hydrogen Facility in Pittsburg, California',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Expansion Adds High-Pressure Hydrogen Production Engineered to Meet California Clean-Fuel Standards, with PACC Serving as Exclusive Marketing & Distribution Partner',
      style: 'italic',
    },
    {
      type: 'list',
      listStyle: 'bullet',
      items: [
        {
          title: 'Facility Expansion:',
          text: 'K2 Pure is expanding its state-of-the-art chlor-alkali plant, capturing and commercializing low-carbon hydrogen generated from existing site operations',
        },
        {
          title: 'California-Spec Hydrogen Production:',
          text: "The new high-pressure gaseous hydrogen system is engineered to meet the state's stringent clean-fuel market standards",
        },
        {
          title: 'Strategic Partnership:',
          text: 'Through an exclusive agreement with PACC, K2 will deliver certified low-carbon hydrogen to downstream industrial and transportation customers',
        },
      ],
    },
    {
      type: 'paragraph',
      text: "PITTSBURG, CA — 12.17.25 Clean Manufacturing and Low-Carbon Hydrogen innovator K2 Pure Solutions (\"K2\") announced today that it has broken ground on its new low-carbon hydrogen project in Pittsburg, California, marking a major milestone in California's energy transition. Scheduled for commissioning in early summer 2026, the project will expand K2's existing chlor-alkali operations into California's first commercial source of low-carbon, high pressure hydrogen produced from a proven industrial site serving municipal and industrial customers.",
    },
    {
      type: 'image',
      src: aerialView,
      alt: 'Aerial view of K2 Pittsburg construction site',
      caption: 'Aerial view of K2 Pittsburg construction site',
      size: 'full',
      align: 'center',
    },
    {
      type: 'paragraph',
      text: "Under an exclusive agreement, PACC Services (PACC) will serve as K2's commercial partner for hydrogen marketing, customer engagement, and offtake development — while also coordinating logistics, and distribution of the product across transportation, industrial, and power markets. The collaboration positions K2 and PACC at the forefront of California's growing clean-molecules market, linking reliable industrial supply with the region's decarbonization goals.",
    },
    {
      type: 'quote',
      text: "Breaking ground marks more than a construction milestone, it's the moment California's hydrogen economy starts to scale. Our Northern California footprint puts us close to customers who are ready to act on sustainability today, not in the distant future. Pittsburg is the ideal home for this next chapter: a community with deep industrial roots and a forward-looking spirit.",
      author: 'Howard Brodie',
      authorTitle: 'CEO',
      organization: 'K2 Pure Solutions',
    },
    {
      type: 'quote',
      text: "This expansion represents K2's commitment to building the infrastructure California needs to achieve its clean energy goals. We're not just talking about the hydrogen economy, we're building it, right here in Pittsburg. This facility will demonstrate that scaling hydrogen production is both achievable and essential for the energy future. We're proud to invest in a community that shares our vision for sustainable industrial growth.",
      author: 'David Cynamon',
      authorTitle: 'Chairman',
      organization: 'K2 Pure Solutions',
    },
    {
      type: 'paragraph',
      text: "K2's chlor-alkali plant manufactures the bleach used in water-purification systems statewide, and in the process, naturally generates hydrogen. Rather than allowing this hydrogen byproduct to go unused, K2 is investing in advanced systems to capture, purify, compress, and distribute it as low-carbon fuel. With Hargrove Engineers & Constructors leading EPC execution, the project is turning a byproduct into a new clean-energy commodity for California.",
    },
    {
      type: 'callout',
      variant: 'success',
      title: 'Environmental Impact',
      text: 'Using the U.S. Department of Energy\'s GREET carbon-accounting model, K2 estimates that its hydrogen will have about 95 percent lower carbon intensity than conventional gasoline. With local distribution, its lifecycle emissions are reduced even further "from well to wheel."',
    },
    {
      type: 'quote',
      text: 'PACC is proud to partner with K2 Pure Solutions to bring new hydrogen supply to market in California. Our mission is to build commercial bridges in dislocated markets; creating partnerships with producers like K2 to bring their molecules to end users.',
      author: 'Andrew Carman',
      authorTitle: 'CEO',
      organization: 'PACC Services',
    },
    {
      type: 'quote',
      text: "This project exemplifies the vast potential of hydrogen; turning what was once a waste stream into a commodity that will be used decarbonize multiple sectors, all with private capital. The success of our state's hydrogen market hinges on developing projects like this, and we commend K2 Pure Solutions, PACC Services and the City of Pittsburg for moving this project forward.",
      author: 'Tyson Eckerle',
      authorTitle: 'Senior Advisor',
      organization: "California Governor's Office of Business & Economic Development",
    },
    {
      type: 'paragraph',
      text: 'The project also drew praise from the local community:',
    },
    {
      type: 'quote',
      text: "We're thrilled to continue our partnership with K2 and welcome this expansion to Pittsburg. This project honors our city's proud industrial heritage while positioning us at the forefront of California's clean energy future. The quality jobs this facility brings are tremendous for our local economy, and we're excited to see Pittsburg play a vital role in building the state's sustainable energy infrastructure.",
      author: 'Jordan Davis',
      authorTitle: 'Director of Community and Economic Development',
      organization: 'City of Pittsburg',
    },
    {
      type: 'paragraph',
      text: 'Once operational, the project will establish a new benchmark for industrial decarbonization in California, turning proven manufacturing into a next-generation energy resource.',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      level: 3,
      text: 'For more information contact:',
    },
    {
      type: 'paragraph',
      text: 'K2 Pure Solutions | Darren Gold | darren@therosegrp.com',
    },
    {
      type: 'divider',
    },
    {
      type: 'heading',
      level: 3,
      text: 'About K2 Pure Solutions',
    },
    {
      type: 'paragraph',
      text: 'K2 Pure Solutions produces exceptionally pure bleach, caustic soda, and other chlor-alkali products in the most inherently safe, environmentally responsible, and economically viable manner. K2 is a recipient of the Chlorine Institute Platinum Level Process Safety Performance Award.',
    },
    {
      type: 'paragraph',
      text: 'Website: www.k2pure.com',
    },
    {
      type: 'heading',
      level: 3,
      text: 'About PACC Services (PACC)',
    },
    {
      type: 'paragraph',
      text: 'PACC builds the commercial bridge between production and end-use markets for hydrogen and other molecules. As a market-maker, PACC develops strategic partnerships and commercial structures that connect reliable supply with growing demand across North America.',
    },
    {
      type: 'paragraph',
      text: 'Website: www.pacc.services',
    },
    {
      type: 'paragraph',
      text: 'Email: contact@pacc.services',
    },
  ],

  // SEO
  seo: {
    ogImage: '/og-images/k2-hydrogen-facility-pittsburg.png',
    metaDescription:
      'K2 Pure Solutions breaks ground on commercial low-carbon hydrogen facility in Pittsburg, CA. PACC Services serves as exclusive marketing partner for this landmark California clean energy project.',
    keywords: [
      'hydrogen',
      'low-carbon',
      'K2 Pure Solutions',
      'PACC',
      'Pittsburg California',
      'clean energy',
      'chlor-alkali',
      'hydrogen production',
    ],
  },
}
