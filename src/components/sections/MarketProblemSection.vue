<template>
  <section id="problem" class="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-extrabold">Why Markets Stall</h2>
          <p class="mt-4 text-slate-700 leading-relaxed">
            Industrial molecule markets do not fail because production is unavailable.
          </p>
          <p class="mt-2 text-slate-700 font-semibold">They stall when:</p>
          <ul class="mt-4 space-y-3 text-slate-700 list-disc list-inside">
            <li v-for="problem in problems" :key="problem">{{ problem }}</li>
          </ul>
          <p class="mt-6 text-slate-700 font-semibold">
            Supply exists. Markets require structure.
          </p>
        </div>
        <div id="solution" class="card p-6 relative overflow-hidden">
          <img
            :src="bridgeImage"
            alt="Bridge representing connection"
            class="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div class="relative z-10">
            <h3 class="text-xl font-bold">The PACC Solution</h3>
            <p class="mt-2 text-slate-700">
              PACC connects producers and customers by building commercial structure around supply.
            </p>
            <p class="mt-4 text-slate-700 font-semibold">We:</p>
            <ul class="mt-2 space-y-2 text-slate-700 list-disc list-inside">
              <li v-for="solution in solutions" :key="solution">{{ solution }}</li>
            </ul>
            <p class="mt-6 text-slate-700 font-semibold italic">
              This is not advisory work. It is market execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bridgeImage from '@/assets/images/image45.png'

const problems = [
  'Offtake certainty is missing',
  'Pricing lacks transparency',
  'Credit risk is misaligned',
  'Logistics are fragmented',
  'No entity structures alignment between parties',
]

const solutions = [
  'Create revenue certainty for producers',
  'Reduce transaction friction between counterparties',
  'Lower delivered cost through coordinated logistics',
  'Introduce liquidity and price transparency where markets are emerging or dislocated',
]
</script>
