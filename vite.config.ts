import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Get the deployment URL from Vercel environment variables
        // Try VERCEL_URL first, then VERCEL_PROJECT_PRODUCTION_URL, fallback to pacc.services
        const vercelUrl = 
          process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
          process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
          'https://pacc.services'

        console.log('Building with URL:', vercelUrl)
        
        // Replace placeholders in HTML
        return html.replace(/%VITE_VERCEL_URL%/g, vercelUrl)
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
