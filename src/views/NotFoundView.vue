<template>
  <div>
    <AppHeader />
    <main
      class="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4"
    >
      <div class="max-w-2xl mx-auto text-center py-20">
        <!-- 404 Icon -->
        <div class="mb-8">
          <svg
            class="w-32 h-32 mx-auto text-brand/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <!-- Error Message -->
        <h1 class="text-6xl font-extrabold text-brand mb-4">404</h1>
        <h2 class="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on
          track.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <router-link
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Go Home
          </router-link>

          <router-link
            to="/news"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            View News
          </router-link>
        </div>

        <!-- Quick Links -->
        <div class="mt-12 pt-8 border-t border-slate-200">
          <p class="text-sm text-slate-600 mb-4">You might be interested in:</p>
          <div class="flex flex-wrap gap-4 justify-center text-sm">
            <router-link
              to="/#approach"
              class="text-brand hover:text-brand-green transition-colors"
            >
              Our Approach
            </router-link>
            <span class="text-slate-300">•</span>
            <router-link
              to="/#leadership"
              class="text-brand hover:text-brand-green transition-colors"
            >
              Leadership
            </router-link>
            <span class="text-slate-300">•</span>
            <router-link to="/#contact" class="text-brand hover:text-brand-green transition-colors">
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useMetaTags } from '@/composables/useMetaTags'

const { setArticleMetaTags } = useMetaTags()

onMounted(() => {
  // Set meta tags for 404 page
  setArticleMetaTags('Page Not Found', "The page you're looking for doesn't exist.")
})
</script>

