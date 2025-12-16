<template>
  <section
    id="news"
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12" data-scroll-animate>
        <div class="inline-block mb-4">
          <span
            class="text-xs font-bold tracking-[0.3em] uppercase text-brand bg-brand/5 px-4 py-2 rounded-full"
          >
            Latest Updates
          </span>
        </div>
        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
        >
          News &
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-green"
            >Announcements</span
          >
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay updated with the latest developments from PACC
        </p>
      </div>

      <!-- Carousel Container -->
      <div class="relative" data-scroll-animate>
        <!-- Gradient overlays to indicate more content -->
        <div
          class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10 lg:block hidden"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10 lg:block hidden"
        ></div>
        <div ref="embla" class="overflow-hidden px-4 sm:px-6 lg:px-10 py-2">
          <div class="flex">
            <!-- Article Cards -->
            <article
              v-for="article in recentArticles"
              :key="article.slug"
              class="min-w-0 shrink-0 basis-full lg:basis-1/2 px-2 lg:px-3"
            >
              <div
                class="bg-white rounded-2xl subtle-shadow hover:subtle-shadow-hover transition-all duration-300 overflow-hidden group h-full"
              >
                <!-- Article Logos Header -->
                <div
                  v-if="getArticleLogos(article).length > 0"
                  class="bg-gradient-to-br from-brand/5 to-brand-green/5 p-6 flex items-center justify-center gap-2 sm:gap-3"
                >
                  <!-- PACC Logo (Left) -->
                  <img
                    :src="getArticleLogos(article)[0]?.src"
                    :alt="getArticleLogos(article)[0]?.alt"
                    class="h-12 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                  />
                  <!-- Partnership indicator -->
                  <div class="flex items-center gap-1 text-brand/40 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 sm:h-5 sm:w-5"
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
                  <!-- K2 Logo (Right) -->
                  <img
                    :src="getArticleLogos(article)[1]?.src"
                    :alt="getArticleLogos(article)[1]?.alt"
                    class="h-12 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                  />
                </div>

                <!-- Article Content -->
                <div class="p-6 lg:p-8">
                  <div class="text-xs font-semibold text-brand uppercase tracking-wider mb-2">
                    {{ getArticleMetadata(article).category }}
                  </div>
                  <router-link :to="`/news/${article.slug}`">
                    <h3
                      class="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand transition-colors cursor-pointer"
                    >
                      {{ getArticleMetadata(article).title }}
                    </h3>
                  </router-link>
                  <div class="text-sm text-slate-500 mb-4">
                    <span class="font-medium">{{ getArticleMetadata(article).location }}</span> —
                    {{ getArticleMetadata(article).date }}
                  </div>
                  <p class="text-slate-700 leading-relaxed mb-4 text-sm">
                    {{ getArticleExcerpt(article) }}
                  </p>
                  <router-link
                    :to="`/news/${article.slug}`"
                    class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-semibold"
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
              </div>
            </article>

            <!-- All News Card -->
            <div class="min-w-0 shrink-0 basis-full lg:basis-1/2 px-2 lg:px-3">
              <router-link
                to="/news"
                class="block bg-white rounded-2xl subtle-shadow hover:subtle-shadow-hover transition-all duration-300 overflow-hidden group h-full"
              >
                <div
                  class="bg-gradient-to-br from-brand to-brand-green p-8 flex items-center justify-center min-h-[150px]"
                >
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 mx-auto mb-2 text-white transition-transform group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="p-6 lg:p-8">
                  <div class="text-xs font-semibold text-brand uppercase tracking-wider mb-2">
                    All News
                  </div>
                  <h3
                    class="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand transition-colors"
                  >
                    View All News & Announcements
                  </h3>
                  <p class="text-slate-700 leading-relaxed mb-4 text-sm">
                    Explore our complete collection of press releases, announcements, and updates
                    from PACC.
                  </p>
                  <div
                    class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-semibold"
                  >
                    View all articles
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
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Carousel Controls -->
        <div v-if="carouselItems.length > 1" class="flex items-center justify-center gap-4 mt-6">
          <button
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="flex gap-2">
            <button
              v-for="(_item, index) in carouselItems"
              :key="index"
              @click="scrollTo(index)"
              class="transition-all"
              :class="
                selectedIndex === index
                  ? 'w-8 h-3 bg-brand rounded-full'
                  : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'
              "
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>

          <button
            @click="scrollNext"
            :disabled="!canScrollNext"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- All News Link -->
        <div class="mt-8 text-center">
          <router-link
            to="/news"
            class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium"
          >
            View All News & Announcements
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { getAllArticles } from '@/data/articles'
import { getArticleLogos, getArticleExcerpt, getArticleMetadata } from '@/utils/articleAdapter'

const allArticles = getAllArticles()
// Get the 5 most recent articles
const recentArticles = computed(() => allArticles.slice(0, 5))
// Carousel items: 5 articles + 1 "All News" card = 6 items total
const carouselItems = computed(() => [...recentArticles.value, { type: 'all-news' }])

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  align: 'start',
  slidesToScroll: 1,
})
const embla = emblaRef

const selectedIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const scrollPrev = () => {
  emblaApi.value?.scrollPrev()
}

const scrollNext = () => {
  emblaApi.value?.scrollNext()
}

const scrollTo = (index: number) => {
  emblaApi.value?.scrollTo(index)
}

const updateCarouselState = () => {
  if (!emblaApi.value) return

  selectedIndex.value = emblaApi.value.selectedScrollSnap()
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

onMounted(() => {
  if (emblaApi.value) {
    emblaApi.value.on('select', updateCarouselState)
    emblaApi.value.on('reInit', updateCarouselState)
    updateCarouselState()
  }
})

onUnmounted(() => {
  if (emblaApi.value) {
    emblaApi.value.off('select', updateCarouselState)
    emblaApi.value.off('reInit', updateCarouselState)
  }
})
</script>

<style scoped>
/* Subtle shadow - just a hint */
.subtle-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.subtle-shadow-hover {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}
</style>
