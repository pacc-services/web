<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="pt-24 pb-4 px-6 max-w-4xl mx-auto">
        <ol
          class="flex items-center gap-2 text-sm text-slate-600"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <router-link to="/" class="hover:text-brand transition-colors" itemprop="item">
              <span itemprop="name">Home</span>
            </router-link>
            <meta itemprop="position" content="1" />
          </li>
          <li aria-hidden="true" class="text-slate-400">/</li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span class="font-medium text-slate-900" itemprop="name">News</span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </nav>

      <!-- Hero Header -->
      <section class="relative bg-gradient-to-br from-brand to-brand-green pt-12 pb-20 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            News & Updates
          </h1>
          <p class="text-xl text-white/90">Latest developments from PACC</p>
        </div>
      </section>

      <!-- News Articles List -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <div class="space-y-6">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
          >
            <!-- Article Logos Header -->
            <div
              v-if="article.header.logos && article.header.logos.length > 0"
              class="bg-gradient-to-br from-brand/5 to-brand-green/5 p-8 flex items-center justify-center gap-4"
            >
              <!-- PACC Logo (Left) -->
              <img
                :src="article.header.logos[0]?.src"
                :alt="article.header.logos[0]?.alt"
                class="h-16 sm:h-20 object-contain transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
              <!-- Partnership indicator -->
              <div class="flex items-center gap-1 text-brand/40 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <!-- Partner Logo (Right) -->
              <img
                :src="article.header.logos[1]?.src"
                :alt="article.header.logos[1]?.alt"
                class="h-16 sm:h-20 object-contain transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
            </div>

            <!-- Main Article Image (if no logos) -->
            <div
              v-else-if="article.header.mainImage"
              class="relative overflow-hidden"
              style="max-height: 400px"
            >
              <img
                :src="article.header.mainImage.src"
                :alt="article.meta.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              ></div>
            </div>

            <div class="p-8">
              <div class="text-xs font-semibold text-brand uppercase tracking-wider mb-2">
                {{ article.meta.category }}
              </div>
              <h2
                class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand transition-colors"
              >
                {{ article.meta.title }}
              </h2>
              <div class="text-sm text-slate-500 mb-4">
                <span class="font-medium">{{ article.meta.location }}</span> —
                {{ article.meta.date }}
              </div>
              <p class="text-slate-700 leading-relaxed mb-4">
                {{ article.header.excerpt }}
              </p>
              <router-link
                :to="`/news/${article.slug}`"
                class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium"
              >
                Read full article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>
          </article>
        </div>

        <!-- Back to Home Link -->
        <div class="mt-12 text-center">
          <router-link
            to="/"
            class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Back to Home
          </router-link>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { getAllArticles } from '@/data/articles'
import { useMetaTags } from '@/composables/useMetaTags'

const articles = getAllArticles()
const { setArticleMetaTags, resetMetaTags } = useMetaTags()

onMounted(() => {
  // Update meta tags for news page
  setArticleMetaTags(
    'PACC News & Updates',
    'Latest developments and announcements from PACC. Stay informed about our partnerships, projects, and progress in the hydrogen and energy transition markets.',
  )
})

onUnmounted(() => {
  resetMetaTags()
})
</script>
