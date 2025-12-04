<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div v-if="article">
        <!-- Hero Header -->
        <section class="relative bg-gradient-to-br from-brand to-brand-green pt-32 pb-16 px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              {{ article.category }}
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {{ article.title }}
            </h1>
            <div class="text-sm text-white/90">
              <span class="font-medium">{{ article.location }}</span> — {{ article.date }}
            </div>
          </div>
        </section>

        <!-- Article Content -->
        <section class="max-w-4xl mx-auto px-6 py-16">
          <article class="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div class="prose prose-lg max-w-none space-y-6 text-slate-700">
              <template v-for="(block, index) in article.content" :key="index">
                <p v-if="block.type === 'paragraph'" class="leading-relaxed">
                  {{ block.text }}
                </p>
                <h3
                  v-else-if="block.type === 'heading'"
                  class="text-2xl font-bold text-slate-900 mt-8 mb-4"
                >
                  {{ block.text }}
                </h3>
                <ul v-else-if="block.type === 'list'" class="list-disc pl-6 space-y-2">
                  <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                    <template v-if="item.includes(':')">
                      <strong>{{ item.split(':')[0] }}:</strong>{{ item.split(':')[1] }}
                    </template>
                    <template v-else>
                      {{ item }}
                    </template>
                  </li>
                </ul>
              </template>

              <!-- About Section -->
              <div class="mt-12 pt-8 border-t border-slate-200">
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  About PACC
                </h4>
                <p class="text-sm text-slate-600">
                  PACC is a market-maker for hydrogen and specialty gases, building the trusted
                  infrastructure that connects molecule producers with enterprise customers. By
                  de-risking supply, aggregating demand, and optimizing logistics, PACC accelerates
                  the energy transition and creates value across the clean energy value chain. Based
                  in San Francisco, the company serves customers and producers throughout North
                  America.
                </p>
              </div>

              <!-- Contact Section -->
              <div class="mt-6 pt-6 border-t border-slate-200">
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Media Contact
                </h4>
                <p class="text-sm text-slate-600">
                  Pat Mazza<br />
                  Founder & CEO, PACC<br />
                  Email:
                  <a
                    href="mailto:pat@pacc.services"
                    class="text-brand hover:text-brand-green transition-colors"
                    >pat@pacc.services</a
                  ><br />
                  Web:
                  <a
                    href="https://pacc.services"
                    class="text-brand hover:text-brand-green transition-colors"
                    >pacc.services</a
                  >
                </p>
              </div>
            </div>
          </article>

          <!-- Back to News Link -->
          <div class="mt-12 text-center">
            <router-link
              to="/news"
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
              Back to News
            </router-link>
          </div>
        </section>
      </div>

      <!-- Not Found -->
      <div v-else class="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p class="text-lg text-slate-600 mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <router-link
          to="/news"
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
          Back to News
        </router-link>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { getArticleBySlug } from '@/data/articles'

const route = useRoute()
const article = computed(() => getArticleBySlug(route.params.slug as string))

// Store original meta tags
let originalTitle = ''
let originalOgTitle = ''
let originalTwitterTitle = ''

const updateMetaTags = () => {
  if (article.value) {
    // Update page title and meta tags
    document.title = `${article.value.title} | PACC News`
    
    const ogTitleMeta = document.querySelector('meta[property="og:title"]')
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
    
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', article.value.title)
    }
    
    if (twitterTitleMeta) {
      twitterTitleMeta.setAttribute('content', article.value.title)
    }
  }
}

onMounted(() => {
  // Store original values
  originalTitle = document.title
  const ogTitleMeta = document.querySelector('meta[property="og:title"]')
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
  
  if (ogTitleMeta) {
    originalOgTitle = ogTitleMeta.getAttribute('content') || ''
  }
  if (twitterTitleMeta) {
    originalTwitterTitle = twitterTitleMeta.getAttribute('content') || ''
  }

  updateMetaTags()
})

onUnmounted(() => {
  // Restore original meta tags when leaving the page
  document.title = originalTitle
  
  const ogTitleMeta = document.querySelector('meta[property="og:title"]')
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]')
  
  if (ogTitleMeta && originalOgTitle) {
    ogTitleMeta.setAttribute('content', originalOgTitle)
  }
  
  if (twitterTitleMeta && originalTwitterTitle) {
    twitterTitleMeta.setAttribute('content', originalTwitterTitle)
  }
})

// Watch for article changes (if slug changes)
watch(article, () => {
  updateMetaTags()
})
</script>

<style scoped>
.prose a {
  text-decoration: underline;
}
</style>
