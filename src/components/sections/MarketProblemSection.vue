<template>
  <section id="problem" class="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-400"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-extrabold">Market Problem</h2>
          <ul class="mt-4 space-y-3 text-slate-700 list-disc list-inside">
            <li v-for="problem in problems" :key="problem.title">
              <span class="font-semibold">{{ problem.title }}:</span> {{ problem.description }}
            </li>
          </ul>
        </div>
        <div id="solution" class="card p-6 relative overflow-hidden">
          <img 
            :src="bridgeImage" 
            alt="Bridge representing connection" 
            class="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div class="relative z-10">
            <h3 class="text-xl font-bold">PACC Solution</h3>
          <p class="mt-2 text-slate-700">
            PACC connects producers and customers, turning stranded molecules into scalable markets.
          </p>
          <ul class="mt-4 space-y-2 text-slate-700 list-disc list-inside">
            <li v-for="solution in solutions" :key="solution">
              {{ solution }}
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bridgeImage from '@/assets/images/image45.png'

const problems = [
  {
    title: 'Stranded Molecules',
    description: 'Producers lack offtake certainty—limiting investment and scale.',
  },
  {
    title: 'Commercial Barriers',
    description: 'Credit requirements, risk exposure, and illiquidity stall deals.',
  },
  {
    title: 'High Delivered Costs',
    description: 'Fragmented supply, complex logistics, unreliable delivery.',
  },
  {
    title: 'No Market‑Maker',
    description: 'Emerging markets lack a trusted intermediary to connect supply and demand.',
  },
]

const solutions = [
  'Unlock value for producers through commercial certainty',
  'De‑risk transactions as a trusted intermediary',
  'Lower delivered costs by aggregating volumes and optimizing logistics',
  'Create liquidity and price transparency in emerging molecules',
]
</script>