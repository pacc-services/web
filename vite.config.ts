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
        const vercelUrl = process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'https://pacc.services'

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
