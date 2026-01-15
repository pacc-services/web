<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div v-if="article">
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumb" class="pt-24 pb-4 px-6 max-w-4xl mx-auto">
          <ol
            class="flex items-center gap-2 text-sm text-white/90"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <router-link to="/" class="hover:text-white transition-colors" itemprop="item">
                <span itemprop="name">Home</span>
              </router-link>
              <meta itemprop="position" content="1" />
            </li>
            <li aria-hidden="true" class="text-white/50">/</li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <router-link to="/news" class="hover:text-white transition-colors" itemprop="item">
                <span itemprop="name">News</span>
              </router-link>
              <meta itemprop="position" content="2" />
            </li>
            <li aria-hidden="true" class="text-white/50">/</li>
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <span class="font-medium text-white" itemprop="name">{{ article.meta.title }}</span>
              <meta itemprop="position" content="3" />
            </li>
          </ol>
        </nav>

        <!-- Hero Header -->
        <section class="relative bg-gradient-to-br from-brand to-brand-green pt-8 pb-16 px-6">
          <div class="max-w-4xl mx-auto">
            <div class="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              {{ article.meta.category }}
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              {{ article.meta.title }}
            </h1>
            <div class="text-sm text-white/90">
              <span class="font-medium">{{ article.meta.location }}</span> — {{ article.meta.date }}
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

                <!-- Heading -->
                <component
                  :is="'h' + (block.level || 3)"
                  v-else-if="block.type === 'heading'"
                  :class="[
                    block.level === 2
                      ? 'text-3xl font-bold text-slate-900 mt-8 mb-4'
                      : 'text-xl font-bold text-slate-900 mt-6 mb-3',
                    block.style === 'italic' ? 'italic font-normal' : '',
                  ]"
                >
                  {{ block.text }}
                </component>

                <!-- List -->
                <ul v-else-if="block.type === 'list'" class="list-disc pl-6 space-y-3 my-6">
                  <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
                    <template v-if="item.title">
                      <strong>{{ item.title }}</strong> {{ item.text }}
                    </template>
                    <template v-else>
                      {{ item.text }}
                    </template>
                  </li>
                </ul>

                <!-- Image -->
                <figure v-else-if="block.type === 'image'" class="my-12">
                  <img
                    :src="block.src"
                    :alt="block.alt || ''"
                    class="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption
                    v-if="block.caption"
                    class="text-center text-sm text-slate-600 mt-3 italic"
                  >
                    {{ block.caption }}
                  </figcaption>
                </figure>

                <!-- Quote -->
                <blockquote
                  v-else-if="block.type === 'quote'"
                  class="border-l-4 border-brand pl-6 py-4 my-8 bg-slate-50 rounded-r-lg"
                >
                  <p class="text-lg italic text-slate-700 mb-3">"{{ block.text }}"</p>
                  <footer class="text-sm text-slate-600">
                    <strong class="font-semibold text-slate-900">{{ block.author }}</strong>
                    <template v-if="block.authorTitle"> , {{ block.authorTitle }} </template>
                    <template v-if="block.organization">
                      <br />
                      <span class="text-slate-500">{{ block.organization }}</span>
                    </template>
                  </footer>
                </blockquote>

                <!-- Callout -->
                <div
                  v-else-if="block.type === 'callout'"
                  :class="[
                    'rounded-lg p-6 my-8',
                    block.variant === 'success'
                      ? 'bg-green-50 border-l-4 border-green-500'
                      : block.variant === 'warning'
                        ? 'bg-yellow-50 border-l-4 border-yellow-500'
                        : block.variant === 'info'
                          ? 'bg-blue-50 border-l-4 border-blue-500'
                          : 'bg-slate-50 border-l-4 border-slate-500',
                  ]"
                >
                  <h4
                    v-if="block.title"
                    :class="[
                      'font-bold mb-2',
                      block.variant === 'success'
                        ? 'text-green-900'
                        : block.variant === 'warning'
                          ? 'text-yellow-900'
                          : block.variant === 'info'
                            ? 'text-blue-900'
                            : 'text-slate-900',
                    ]"
                  >
                    {{ block.title }}
                  </h4>
                  <p
                    :class="[
                      block.variant === 'success'
                        ? 'text-green-800'
                        : block.variant === 'warning'
                          ? 'text-yellow-800'
                          : block.variant === 'info'
                            ? 'text-blue-800'
                            : 'text-slate-700',
                    ]"
                  >
                    {{ block.text }}
                  </p>
                </div>

                <!-- Divider -->
                <hr v-else-if="block.type === 'divider'" class="my-8 border-t-2 border-slate-200" />
              </template>
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
import { useMetaTags } from '@/composables/useMetaTags'

const route = useRoute()
const article = computed(() => getArticleBySlug(route.params.slug as string))
const { setArticleMetaTags, resetMetaTags, getBaseUrl } = useMetaTags()

const updateMetaTags = () => {
  if (article.value) {
    const baseUrl = getBaseUrl()

    // Use custom OG image if available, otherwise fall back to default
    const imageUrl = article.value.seo.ogImage
      ? `${baseUrl}${article.value.seo.ogImage}`
      : `${baseUrl}/og-image.png`

    setArticleMetaTags(
      article.value.meta.title,
      article.value.header.excerpt,
      imageUrl,
      article.value.slug,
      article.value.meta.datePublished,
    )
  }
}

onMounted(() => {
  updateMetaTags()
})

onUnmounted(() => {
  // Reset to default meta tags when leaving the page
  resetMetaTags()
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
