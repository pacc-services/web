import type { Article } from '@/types/article'

export const vercelWebAnalyticsGuide: Article = {
  slug: 'vercel-web-analytics-guide',

  // Metadata
  meta: {
    title: 'Getting Started with Vercel Web Analytics',
    date: 'December 17, 2025',
    datePublished: '2025-12-17T08:00:00-08:00',
    location: 'Online',
    category: 'Blog Post',
    tags: ['Vercel', 'Web Analytics', 'Guide', 'Next.js', 'Vue', 'React', 'Deployment'],
  },

  // Header (for carousel/card display)
  header: {
    excerpt:
      'Learn how to enable Vercel Web Analytics on your project and start tracking visitors and page views in minutes.',
    subtitle: 'A comprehensive guide to setting up and deploying Vercel Web Analytics',
  },

  // Main Content
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Getting Started with Vercel Web Analytics',
    },
    {
      type: 'paragraph',
      text: 'This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Select your framework',
      text: 'Select your framework to view instructions on using the Vercel Web Analytics in your project.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Prerequisites',
    },
    {
      type: 'list',
      listStyle: 'bullet',
      items: [
        {
          text: "A Vercel account. If you don't have one, you can sign up for free at https://vercel.com/signup",
        },
        {
          text: "A Vercel project. If you don't have one, you can create a new project at https://vercel.com/new",
        },
        {
          text: "The Vercel CLI installed. If you don't have it, you can install it using the following command:",
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Install Vercel CLI with pnpm, yarn, npm, or bun:',
    },
    {
      type: 'list',
      listStyle: 'bullet',
      items: [
        {
          title: 'pnpm:',
          text: 'pnpm i vercel',
        },
        {
          title: 'yarn:',
          text: 'yarn i vercel',
        },
        {
          title: 'npm:',
          text: 'npm i vercel',
        },
        {
          title: 'bun:',
          text: 'bun i vercel',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Enable Web Analytics in Vercel',
    },
    {
      type: 'paragraph',
      text: 'On the Vercel dashboard, select your Project and then click the Analytics tab and click Enable from the dialog.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Important Note',
      text: 'Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Add @vercel/analytics to Your Project',
    },
    {
      type: 'paragraph',
      text: 'Using the package manager of your choice, add the `@vercel/analytics` package to your project:',
    },
    {
      type: 'list',
      listStyle: 'bullet',
      items: [
        {
          title: 'pnpm:',
          text: 'pnpm i @vercel/analytics',
        },
        {
          title: 'yarn:',
          text: 'yarn i @vercel/analytics',
        },
        {
          title: 'npm:',
          text: 'npm i @vercel/analytics',
        },
        {
          title: 'bun:',
          text: 'bun i @vercel/analytics',
        },
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Add the Analytics Component to Your App',
    },
    {
      type: 'paragraph',
      text: 'The Analytics component is a wrapper around the tracking script, offering seamless integration with your framework, including route support.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Next.js (Pages Directory)',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.',
    },
    {
      type: 'paragraph',
      text: 'If you are using the `pages` directory, add the following code to your main app file:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (pages/_app.tsx)',
      text: 'Import Analytics from "@vercel/analytics/next" and add the <Analytics /> component to your app. The Analytics component should be placed after your main component.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Next.js (App Directory)',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to the root layout:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (app/layout.tsx)',
      text: 'Import Analytics from "@vercel/analytics/next" and add the <Analytics /> component to the body element of your root layout.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Remix',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering a seamless integration with Remix, including route detection.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to your root file:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (app/root.tsx)',
      text: 'Import Analytics from "@vercel/analytics/remix" and add the <Analytics /> component to the body element.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'SvelteKit',
    },
    {
      type: 'paragraph',
      text: 'The `injectAnalytics` function is a wrapper around the tracking script, offering more seamless integration with SvelteKit.js, including route support.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to the main layout:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (src/routes/+layout.ts)',
      text: 'Import injectAnalytics from "@vercel/analytics/sveltekit" and call injectAnalytics({ mode: dev ? "development" : "production" })',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Nuxt',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Nuxt, including route support.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to your main component.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (app.vue)',
      text: 'Import Analytics from "@vercel/analytics/nuxt" in the script setup and add the <Analytics /> component to your template.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Astro',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Astro, including route support.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to your base layout:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (src/layouts/Base.astro)',
      text: 'Import Analytics from "@vercel/analytics/astro" and add the <Analytics /> component to the head element.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Version Note',
      text: 'The `Analytics` component is available in version `@vercel/analytics@1.4.0` and later. If you are using an earlier version, you must configure the `webAnalytics` property of the Vercel adapter in your `astro.config.mjs` file.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'React (Create React App)',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with React.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Route Support',
      text: 'When using the plain React implementation, there is no route support.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to the main app file:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (App.tsx)',
      text: 'Import Analytics from "@vercel/analytics/react" and add the <Analytics /> component to your App component.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Vue',
    },
    {
      type: 'paragraph',
      text: 'The `Analytics` component is a wrapper around the tracking script, offering more seamless integration with Vue.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Route Support',
      text: "Route support is automatically enabled if you're using `vue-router`.",
    },
    {
      type: 'paragraph',
      text: 'Add the following code to your main component:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (src/App.vue)',
      text: 'Import Analytics from "@vercel/analytics/vue" in the script setup and add the <Analytics /> component to your template.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Other Frameworks',
    },
    {
      type: 'paragraph',
      text: 'Import the `inject` function from the package, which will add the tracking script to your app. This should only be called once in your app, and must run in the client.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Route Support',
      text: 'There is no route support with the `inject` function.',
    },
    {
      type: 'paragraph',
      text: 'Add the following code to your main app file:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (main.ts)',
      text: 'Import inject from "@vercel/analytics" and call inject() to add the tracking script to your app.',
    },
    {
      type: 'heading',
      level: 4,
      text: 'Plain HTML',
    },
    {
      type: 'paragraph',
      text: 'For plain HTML sites, you can add the following script to your `.html` files:',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Example (index.html)',
      text: 'Add a script tag that initializes window.va and loads the tracking script from /_vercel/insights/script.js',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Important Note',
      text: 'When using the HTML implementation, there is no need to install the `@vercel/analytics` package. However, there is no route support.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Deploy Your App to Vercel',
    },
    {
      type: 'paragraph',
      text: 'Deploy your app using the following command:',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'vercel deploy',
    },
    {
      type: 'paragraph',
      text: "If you haven't already, we also recommend connecting your project's Git repository, which will enable Vercel to deploy your latest commits to main without terminal commands.",
    },
    {
      type: 'paragraph',
      text: 'Once your app is deployed, it will start tracking visitors and page views.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Verification Tip',
      text: "If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.",
    },
    {
      type: 'heading',
      level: 3,
      text: 'View Your Data in the Dashboard',
    },
    {
      type: 'paragraph',
      text: 'Once your app is deployed, and users have visited your site, you can view your data in the dashboard.',
    },
    {
      type: 'paragraph',
      text: 'To do so, go to your Vercel dashboard, select your project, and click the Analytics tab.',
    },
    {
      type: 'paragraph',
      text: "After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the panels.",
    },
    {
      type: 'paragraph',
      text: 'Users on Pro and Enterprise plans can also add custom events to their data to track user interactions such as button clicks, form submissions, or purchases.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Learn More',
      text: 'Learn more about how Vercel supports privacy and data compliance standards with Vercel Web Analytics.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Next Steps',
    },
    {
      type: 'paragraph',
      text: 'Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:',
    },
    {
      type: 'list',
      listStyle: 'bullet',
      items: [
        {
          text: 'Learn how to use the `@vercel/analytics` package',
        },
        {
          text: 'Learn how to set update custom events',
        },
        {
          text: 'Learn about filtering data',
        },
        {
          text: 'Read about privacy and compliance',
        },
        {
          text: 'Explore pricing',
        },
        {
          text: 'Troubleshooting',
        },
      ],
    },
  ],

  // SEO
  seo: {
    ogImage: '/og-images/vercel-web-analytics-guide.png',
    metaDescription:
      'Learn how to enable Vercel Web Analytics on your project and start tracking visitors and page views. A comprehensive guide for Next.js, React, Vue, and other frameworks.',
    keywords: ['Vercel', 'Web Analytics', 'Analytics', 'Guide', 'Tutorial', 'Setup', 'Tracking'],
  },
}
