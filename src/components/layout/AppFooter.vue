<template>
  <footer class="py-10 border-t border-slate-200 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg brand-gradient"></div>
        <div class="font-bold">PACC</div>
      </div>
      
      <nav class="flex items-center gap-4 text-slate-600">
        <a 
          v-for="item in footerLinks" 
          :key="item.href"
          :href="item.href" 
          class="hover:text-slate-800 transition-colors"
        >
          {{ item.label }}
        </a>
      </nav>
      
      <div class="text-slate-500">
        © {{ currentYear }} PACC. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavItem } from '@/types'

const currentYear = computed(() => new Date().getFullYear())

const footerLinks: NavItem[] = [
  { label: 'Mission', href: '#mission' },
  { label: 'Approach', href: '#approach' },
  { label: 'Revenue', href: '#revenue' },
  { label: 'Team', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]
</script>