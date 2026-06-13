<template>
  <section id="problem" class="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="mb-12">
        <span class="text-xs font-bold tracking-[0.3em] uppercase text-brand bg-brand/5 px-4 py-2 rounded-full">
          The Market Gap
        </span>
        <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
          Building a plant is not the<br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-green">same as building a market.</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- Left: problem + solution -->
        <div class="space-y-8">
          <div>
            <p class="text-lg text-slate-700 leading-relaxed">
              Industrial molecule markets do not fail because production is unavailable.
              They stall when the commercial layer between supply and demand goes unowned.
            </p>
          </div>

          <div>
            <p class="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">Markets stall when</p>
            <ul class="space-y-3">
              <li v-for="problem in problems" :key="problem" class="flex items-start gap-3 text-slate-700">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                {{ problem }}
              </li>
            </ul>
          </div>

          <div id="solution" class="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
            <img
              :src="bridgeImage"
              alt="Bridge representing connection"
              class="absolute inset-0 w-full h-full object-cover opacity-5"
            />
            <div class="relative z-10">
              <p class="text-sm font-bold tracking-widest uppercase text-brand mb-3">The PACC Solution</p>
              <h3 class="text-xl font-bold text-slate-900 mb-4">
                We own the commercial layer producers rarely staff.
              </h3>
              <ul class="space-y-3">
                <li v-for="solution in solutions" :key="solution" class="flex items-start gap-3 text-slate-700">
                  <svg class="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ solution }}
                </li>
              </ul>
              <p class="mt-6 text-slate-800 font-bold italic">
                This is not advisory work. It is market execution.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: reach map -->
        <div class="flex flex-col gap-6">
          <div class="bg-white border border-slate-200 rounded-2xl p-6">
            <p class="text-sm font-bold tracking-widest uppercase text-brand-green mb-1">Active Supply · Northern California</p>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Low-carbon hydrogen available now</h3>
            <img
              :src="reachMap"
              alt="Northern California hydrogen supply reach map — 100-mile commercial radius from Pittsburg, CA"
              class="w-full rounded-xl"
            />
            <div class="mt-4 grid grid-cols-3 gap-3 text-center">
              <div class="bg-slate-50 rounded-xl p-3">
                <p class="text-lg font-black text-brand">2,000</p>
                <p class="text-xs text-slate-500 font-medium">kg/day initial</p>
              </div>
              <div class="bg-slate-50 rounded-xl p-3">
                <p class="text-lg font-black text-brand">100 mi</p>
                <p class="text-xs text-slate-500 font-medium">commercial reach</p>
              </div>
              <div class="bg-slate-50 rounded-xl p-3">
                <p class="text-lg font-black text-brand">11M</p>
                <p class="text-xs text-slate-500 font-medium">residents served</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bridgeImage from '@/assets/images/image45.png'
import reachMap from '@/assets/images/brand/k2-reach-map.png'

const problems = [
  'Offtake certainty is missing',
  'Pricing lacks transparency',
  'Credit risk is misaligned',
  'Logistics are fragmented',
  'No entity owns alignment between producers and buyers',
]

const solutions = [
  'Create revenue certainty for producers through structured offtake',
  'Reduce transaction friction between counterparties',
  'Lower delivered cost through coordinated logistics',
  'Introduce liquidity and price transparency where markets are emerging or dislocated',
]
</script>
