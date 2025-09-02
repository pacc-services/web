<template>
  <header class="sticky top-0 z-50 bg-gradient-to-r from-white via-white to-slate-50/95 backdrop-blur-lg border-b transition-all duration-300"
    :class="{ 'shadow-xl border-brand/20': isScrolled, 'border-slate-200': !isScrolled }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
      <a href="#" class="flex items-center group">
        <img :src="paccLogo" alt="PACC" class="h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
      </a>
      
      <nav class="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-medium">
        <a 
          v-for="item in navItems" 
          :key="item.href"
          :href="item.href" 
          class="relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-brand hover:bg-gradient-to-r hover:from-brand/5 hover:to-brand-green/5 group"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-green transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      
      <button
        @click="toggleMobileMenu"
        class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 hover:bg-slate-100"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-slate-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3 text-sm font-semibold">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="py-2 hover:text-sky-700 transition-colors"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { NavItem } from '@/types'
import paccLogo from '@/assets/images/logo_full.png'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems: NavItem[] = [
  { label: 'Mission', href: '#mission' },
  { label: 'Approach', href: '#approach' },
  { label: 'Market', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Revenue', href: '#revenue' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Team', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>