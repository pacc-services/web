import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import { injectSpeedInsights } from '@vercel/speed-insights'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize Vercel Speed Insights
injectSpeedInsights()
