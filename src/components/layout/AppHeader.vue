<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <a href="#" class="flex items-center">
        <img :src="paccLogo" alt="PACC" class="h-10 w-auto" />
      </a>
      
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a 
          v-for="item in navItems" 
          :key="item.href"
          :href="item.href" 
          class="hover:text-sky-700 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>
      
      <button
        @click="toggleMobileMenu"
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 hover:bg-slate-100"
        aria-label="Open Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
    
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-slate-200 bg-white">
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
import { ref } from 'vue'
import type { NavItem } from '@/types'
import paccLogo from '@/assets/images/image3.png'

const isMobileMenuOpen = ref(false)

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