<template>
  <section
    id="news"
    class="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-24 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16" data-scroll-animate>
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
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <article
              v-for="article in articles"
              :key="article.slug"
              class="w-full flex-shrink-0 px-4"
            >
              <div
                class="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group max-w-4xl mx-auto"
              >
                <!-- Article Image -->
                <div
                  v-if="article.image"
                  class="bg-gradient-to-br from-brand/5 to-brand-green/5 p-12 flex items-center justify-center"
                >
                  <img
                    :src="article.image"
                    :alt="article.title"
                    class="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <!-- Article Content -->
                <div class="p-8 lg:p-12">
                  <div class="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
                    {{ article.category }}
                  </div>
                  <h3
                    class="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand transition-colors"
                  >
                    {{ article.title }}
                  </h3>
                  <div class="text-sm text-slate-500 mb-6">
                    <span class="font-medium">{{ article.location }}</span> — {{ article.date }}
                  </div>
                  <p class="text-slate-700 leading-relaxed mb-6">
                    {{ article.excerpt }}
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
          </div>
        </div>

        <!-- Carousel Controls -->
        <div v-if="articles.length > 1" class="flex items-center justify-center gap-4 mt-8">
          <button
            @click="previousSlide"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentSlide === 0"
            aria-label="Previous article"
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
              v-for="(_article, index) in articles"
              :key="index"
              @click="currentSlide = index"
              class="transition-all"
              :class="
                currentSlide === index
                  ? 'w-8 h-3 bg-brand rounded-full'
                  : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'
              "
              :aria-label="`Go to article ${index + 1}`"
            ></button>
          </div>

          <button
            @click="nextSlide"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentSlide === articles.length - 1"
            aria-label="Next article"
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
      </div>

      <!-- View All News Link -->
      <div class="text-center mt-12" data-scroll-animate>
        <router-link
          to="/news"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand-green text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
        >
          View All News
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAllArticles } from '@/data/articles'

const articles = getAllArticles()
const currentSlide = ref(0)

const nextSlide = () => {
  if (currentSlide.value < articles.length - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
