import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { useMetaTags } from './composables/useMetaTags'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize Vercel Speed Insights
injectSpeedInsights()

// Initialize meta tags with correct URLs for the environment
const { initializeMetaTags } = useMetaTags()
initializeMetaTags()
