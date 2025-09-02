<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-white/95 backdrop-blur-lg shadow-xl': isScrolled, 'bg-transparent': !isScrolled }">
    <div class="flex items-center justify-between px-6 lg:px-12 h-20">
      <a href="#" class="flex items-center group">
        <img :src="paccLogo" alt="PACC" class="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
      </a>
      
      <nav class="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-medium">
        <a 
          v-for="item in navItems" 
          :key="item.href"
          :href="item.href" 
          class="relative px-3 py-2 rounded-lg transition-all duration-300 group"
          :class="isScrolled ? 'hover:text-brand hover:bg-brand/5' : 'text-white/90 hover:text-white hover:bg-white/10'"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-green transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      
      <button
        @click="toggleMobileMenu"
        class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
        :class="isScrolled ? 'border border-slate-300 hover:bg-slate-100' : 'border border-white/30 hover:bg-white/10 text-white'"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 border-t bg-white/95 backdrop-blur-lg shadow-xl"
        :class="isScrolled ? 'border-slate-200' : 'border-white/20'">
        <div class="px-6 py-3 grid grid-cols-2 gap-3 text-sm font-semibold">
          <a 
            v-for="item in navItems" 
            :key="item.href"
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="py-2 hover:text-brand transition-colors"
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