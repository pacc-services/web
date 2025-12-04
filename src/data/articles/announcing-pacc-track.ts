import type { Article } from '@/types/article'
import paccLogo from '@/assets/images/logo_full_cropped.png'

export const announcingPaccTrack: Article = {
  slug: 'announcing-pacc-track',
  title:
    'PACC Unveils Revolutionary Real-Time Tracking Feature for Hydrogen Trailers During Order Processing',
  date: 'January 15, 2025',
  location: 'San Francisco, CA',
  category: 'Press Release',
  image: paccLogo,
  excerpt:
    'PACC today announced the launch of PACC Track, a groundbreaking real-time tracking system that provides unprecedented visibility into hydrogen trailer locations and status throughout the entire order processing lifecycle.',
  content: [
    {
      type: 'image',
      src: paccLogo,
      alt: 'PACC Logo',
    },
    {
      type: 'paragraph',
      text: 'PACC, a pioneering hydrogen and specialty gases market-maker, today announced the launch of PACC Track, a revolutionary real-time tracking feature that provides customers and partners with unprecedented visibility into hydrogen trailer locations and status throughout the entire order processing lifecycle.',
    },
    {
      type: 'paragraph',
      text: 'The new tracking system addresses a critical pain point in hydrogen logistics: the lack of real-time visibility into trailer movements and order status. With PACC Track, customers can monitor their hydrogen shipments from the moment an order is placed through delivery, enabling better planning, reduced uncertainty, and improved operational efficiency.',
    },
    {
      type: 'paragraph',
      text: '"In the hydrogen industry, visibility has been a persistent challenge," said Pat Mazza, Founder & CEO of PACC. "Customers need to know where their trailers are, when they\'ll arrive, and the status of their orders in real-time. PACC Track transforms this experience by bringing modern tracking technology to hydrogen logistics, giving our customers the transparency and control they deserve."',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Revolutionary Tracking Capabilities',
    },
    {
      type: 'paragraph',
      text: 'PACC Track leverages advanced GPS and telematics technology to provide comprehensive tracking throughout the order processing workflow. The system offers real-time updates on trailer location, delivery status, and order milestones, all accessible through an intuitive digital interface.',
    },
    {
      type: 'paragraph',
      text: 'Key features of PACC Track include:',
    },
    {
      type: 'list',
      items: [
        'Real-Time Location Tracking: Live GPS updates showing exact trailer locations throughout transit',
        'Order Status Visibility: Comprehensive view of order processing stages from placement to delivery',
        'Automated Notifications: Proactive alerts for key milestones including dispatch, in-transit, and delivery',
        'Historical Analytics: Access to delivery history and performance metrics for better planning',
        'Multi-Trailer Management: Track multiple trailers and orders simultaneously from a single dashboard',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Transforming Hydrogen Logistics',
    },
    {
      type: 'paragraph',
      text: 'The introduction of PACC Track represents a significant advancement in hydrogen supply chain transparency. For enterprise customers managing complex hydrogen requirements, the ability to track trailers in real-time eliminates guesswork and enables more precise operational planning.',
    },
    {
      type: 'paragraph',
      text: '"Hydrogen logistics have historically operated with limited visibility, creating operational challenges for customers who need to coordinate production schedules, storage capacity, and delivery timing," explained Andrew Rezvani, Co-Founder & COO of PACC. "PACC Track brings the hydrogen industry into the modern era of logistics technology, providing the same level of transparency that customers expect in other critical supply chains."',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Industry Impact and Customer Benefits',
    },
    {
      type: 'paragraph',
      text: 'PACC Track is designed to benefit all stakeholders in the hydrogen value chain. Customers gain enhanced visibility and control, enabling better resource planning and reduced operational risk. Producers and logistics partners benefit from streamlined communication and reduced status inquiries, while PACC can optimize routing and delivery efficiency based on real-time data.',
    },
    {
      type: 'paragraph',
      text: "The tracking feature integrates seamlessly with PACC's existing market-making platform, providing a unified experience for order management, tracking, and logistics coordination. This integration ensures that tracking data is automatically synchronized with order processing workflows, eliminating manual updates and reducing the potential for errors.",
    },
    {
      type: 'paragraph',
      text: "PACC Track is now available to all PACC customers and will be rolled out across the company's North American operations. The feature represents PACC's continued commitment to leveraging technology to solve critical challenges in hydrogen market infrastructure.",
    },
    {
      type: 'paragraph',
      text: "For more information about PACC Track and PACC's market-making platform, visit pacc.services or contact pat@pacc.services.",
    },
  ],
}
