import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import ArticleView from '@/views/ArticleView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/news/:slug',
    name: 'article',
    component: ArticleView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (back/forward navigation), use it
    if (savedPosition) {
      return savedPosition
    }
    // If navigating to a route with a hash, scroll to that element
    // But ONLY if we're on the home page (where section anchors exist)
    if (to.hash && to.path === '/') {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // For all other cases, scroll to top
    return { top: 0 }
  },
})

// Navigation guard to clean up hashes when navigating away from home page
router.beforeEach((to, from, next) => {
  // If we're navigating to a non-home route and there's a hash, remove it
  if (to.path !== '/' && to.hash) {
    next({ path: to.path, query: to.query, hash: '' })
  } else {
    next()
  }
})

export default router
