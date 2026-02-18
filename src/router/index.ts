import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import ArticleView from '@/views/ArticleView.vue'
import HowWeWorkView from '@/views/HowWeWorkView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
  {
    path: '/how-we-work',
    name: 'how-we-work',
    component: HowWeWorkView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash && to.path === '/') {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  if (to.path !== '/' && to.hash) {
    next({ path: to.path, query: to.query, hash: '' })
  } else {
    next()
  }
})

export default router
