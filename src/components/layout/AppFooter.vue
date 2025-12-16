<template>
  <footer class="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Logo & About -->
        <div class="lg:col-span-2">
          <img :src="paccLogo" alt="PACC" class="h-16 w-auto mb-4" />
          <p class="text-sm text-slate-600 max-w-md leading-relaxed">
            Building the commercial bridge between production and end-use markets for hydrogen and
            other molecules across North America.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul class="space-y-2">
            <li v-for="item in companyLinks" :key="item.href">
              <a
                :href="item.href"
                class="text-sm text-slate-600 hover:text-brand transition-colors"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Contact
          </h3>
          <ul class="space-y-2 text-sm text-slate-600">
            <li>
              <a
                href="mailto:contact@pacc.services"
                class="hover:text-brand transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@pacc.services
              </a>
            </li>
            <li class="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-300 text-center">
        <div class="text-sm text-slate-500">
          © {{ currentYear }} PACC Services. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavItem } from '@/types'
import paccLogo from '@/assets/images/logo_full_cropped.png'

const currentYear = computed(() => new Date().getFullYear())

const companyLinks: NavItem[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Market', href: '#market' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]
</script>
