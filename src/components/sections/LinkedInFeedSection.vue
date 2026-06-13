<template>
  <section
    id="linkedin"
    class="relative overflow-hidden bg-white border-t border-slate-200 py-16 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12" data-scroll-animate>
        <div class="inline-block mb-4">
          <span
            class="text-xs font-bold tracking-[0.3em] uppercase text-brand bg-brand/5 px-4 py-2 rounded-full"
          >
            Social
          </span>
        </div>
        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
        >
          Follow Us on
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0A66C2] to-brand">
            LinkedIn
          </span>
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay connected with our latest activity and market updates
        </p>
      </div>

      <!-- Feed -->
      <div class="relative" data-scroll-animate>
        <!-- Carousel -->
        <div ref="embla" class="overflow-hidden px-4 sm:px-6 lg:px-10 py-2">
          <div class="flex">
            <article
              v-for="post in posts"
              :key="post.id"
              class="min-w-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-2 lg:px-3"
            >
              <a
                :href="post.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block bg-white rounded-2xl subtle-shadow hover:subtle-shadow-hover transition-all duration-300 overflow-hidden group h-full border border-slate-100 hover:border-[#0A66C2]/20"
              >
                <!-- Card Header -->
                <div class="bg-gradient-to-br from-[#0A66C2]/5 to-brand/5 p-5 flex items-center gap-3">
                  <a
                    :href="post.authorUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <div>
                    <a
                      :href="post.authorUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm font-semibold text-slate-900 hover:text-[#0A66C2] transition-colors"
                    >{{ post.author }}</a>
                    <p class="text-xs text-slate-500">{{ post.authorTitle }} · {{ post.date }}</p>
                  </div>
                </div>

                <!-- Post Image -->
                <div v-if="post.image" class="w-full aspect-video overflow-hidden">
                  <img
                    :src="post.image"
                    :alt="'LinkedIn post from ' + post.date"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <!-- Post Text -->
                <div class="p-5 lg:p-6">
                  <p class="text-slate-700 text-sm leading-relaxed line-clamp-5">{{ post.text }}</p>
                  <div class="mt-4 flex items-center gap-2 text-[#0A66C2] text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>View on LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </div>

        <!-- Gradient overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 lg:block hidden"></div>
        <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 lg:block hidden"></div>

        <!-- Carousel Controls -->
        <div v-if="posts.length > 1" class="flex items-center justify-center gap-4 mt-6">
          <button
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-[#0A66C2] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous post"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <div class="flex gap-2">
            <button
              v-for="(_post, index) in posts"
              :key="index"
              @click="scrollTo(index)"
              class="transition-all"
              :class="selectedIndex === index ? 'w-8 h-3 bg-[#0A66C2] rounded-full' : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-slate-400'"
              :aria-label="`Go to post ${index + 1}`"
            ></button>
          </div>

          <button
            @click="scrollNext"
            :disabled="!canScrollNext"
            class="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-[#0A66C2] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next post"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Follow Link -->
        <div class="mt-8 text-center">
          <a
            href="https://www.linkedin.com/company/pacc-services"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-[#0A66C2] hover:text-brand transition-colors font-medium"
          >
            Follow PACC Services on LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { getRecentPosts } from '@/data/linkedin-posts'

const posts = getRecentPosts(5)

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  align: 'start',
  slidesToScroll: 1,
})
const embla = emblaRef

const selectedIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()
const scrollTo = (index: number) => emblaApi.value?.scrollTo(index)

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
.subtle-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.subtle-shadow-hover {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
