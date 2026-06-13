<template>
  <section
    id="pacc-trac"
    class="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    :style="`background-image: url('${aerialPhoto}'); background-size: cover; background-position: center;`"
  >
    <!-- Dark overlay so text reads cleanly over aerial photo -->
    <div class="absolute inset-0 bg-slate-900/82"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left: Logo + description -->
        <div>
          <div class="mb-6">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-brand-green/80 bg-brand-green/10 px-4 py-2 rounded-full">
              Platform
            </span>
          </div>
          <img
            :src="paccTracLogo"
            alt="PACC TRAC"
            class="h-14 sm:h-16 w-auto mb-6 brightness-0 invert"
          />
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Track every molecule.<br />
            <span class="text-brand-green">Manage every deal.</span>
          </h2>
          <p class="text-lg text-white/70 leading-relaxed mb-6">
            PACC TRAC is our purpose-built commercial platform for industrial gas and low-carbon fuel producers. Built by industry operators, the platform connects sales, logistics, operations, and customers in a single environment to improve execution, visibility, and market responsiveness.
          </p>
          <ul class="space-y-3 text-white/70 text-sm">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Manage customer relationships and opportunities
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Coordinate deliveries across logistics partners
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Track volumes, pricing, and commercial performance
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Provide customers with real-time order visibility
            </li>
          </ul>
        </div>

        <!-- Right: Login card -->
        <div class="flex justify-center lg:justify-end">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-10 w-full max-w-sm text-center">
            <div class="w-16 h-16 rounded-2xl bg-brand-green/20 flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">PACC TRAC Portal</h3>
            <p class="text-white/60 text-sm mb-8 leading-relaxed">
              Access your orders, delivery schedules, account information, and commercial updates through a single customer portal.
            </p>
            <a
              href="https://pacctrac.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-4 px-6 rounded-xl bg-brand-green text-white font-bold text-base hover:bg-brand-green/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Log In to PACC TRAC
              <svg class="inline-block w-4 h-4 ml-2 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p class="text-white/40 text-xs mt-4">
              PACC partners and customers only
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import paccTracLogo from '@/assets/images/brand/pacc-trac-logo.png'
import aerialPhoto from '@/assets/images/k2-facility-aerial.jpg'
</script>
