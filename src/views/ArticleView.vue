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
                <!-- Logos -->
                <div v-if="block.type === 'logos' && block.images"
                  class="flex justify-center items-center gap-3 sm:gap-4 mb-12 pb-8 border-b border-slate-200">
                  <!-- PACC Logo (Left) -->
                  <img v-if="block.images[0]" :src="block.images[0].src" :alt="block.images[0].alt"
                    class="h-16 sm:h-20 object-contain flex-shrink-0" />
                  <!-- Partnership indicator -->
                  <div class="flex items-center gap-1 text-brand/40 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <!-- K2 Logo (Right) -->
                  <img v-if="block.images[1]" :src="block.images[1].src" :alt="block.images[1].alt"
                    class="h-16 sm:h-20 object-contain flex-shrink-0" />
                </div>

                <!-- Paragraph -->
                <p v-else-if="block.type === 'paragraph'" class="leading-relaxed">
                  {{ block.text }}
                </p>

                <!-- Heading -->
                <component :is="'h' + (block.level || 3)" v-else-if="block.type === 'heading'" :class="[
                  block.level === 2
                    ? 'text-3xl font-bold text-slate-900 mt-8 mb-4'
                    : 'text-xl font-bold text-slate-900 mt-6 mb-3',
                  block.style === 'italic' ? 'italic font-normal' : '',
                ]">
                  {{ block.text }}
                </component>

                <!-- List -->
                <ul v-else-if="block.type === 'list'" class="list-disc pl-6 space-y-3 my-6">
                  <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                    <template v-if="typeof item === 'object' && item.title">
                      <strong>{{ item.title }}</strong> {{ item.text }}
                    </template>
                    <template v-else-if="typeof item === 'string' && item.includes(':')">
                      <strong>{{ item.split(':')[0] }}:</strong>{{ item.split(':')[1] }}
                    </template>
                    <template v-else>
                      {{ typeof item === 'string' ? item : item.text }}
                    </template>
                  </li>
                </ul>

                <!-- Image -->
                <figure v-else-if="block.type === 'image'" class="my-12">
                  <img :src="block.src" :alt="block.alt || ''" class="w-full h-auto rounded-lg shadow-lg" />
                  <figcaption v-if="block.caption" class="text-center text-sm text-slate-600 mt-3 italic">
                    {{ block.caption }}
                  </figcaption>
                </figure>
              </template>
            </div>
          </article>

          <!-- Back to News Link -->
          <div class="mt-12 text-center">
            <router-link to="/news"
              class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd" />
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
        <router-link to="/news"
          class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd" />
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
