<template>
  <section id="approach" class="py-16 sm:py-20 lg:py-24 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1" data-animate="fade-up">
          <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent">Our Approach</h2>
          <p class="mt-4 text-lg text-slate-600">
            We de‑risk production, aggregate demand, and create structured pathways for clean molecules.
          </p>
        </div>
        <div class="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <ApproachCard
            v-for="(approach, index) in approaches"
            :key="approach.title"
            :title="approach.title"
            :description="approach.description"
            :data-animate="'fade-up'"
            :data-animate-delay="(index + 1) * 100"
            class="hover-lift"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ApproachCard from '@/components/ui/ApproachCard.vue'

const approaches = [
  {
    title: 'De‑risk Production',
    description: 'Commercial certainty via structured offtake, credit support, and long‑term agreements.',
  },
  {
    title: 'Aggregate Demand',
    description: 'Create liquidity and price transparency; build scalable customer funnels.',
  },
  {
    title: 'Optimize Logistics',
    description: 'Trailers, storage, pipelines—optimize midstream to lower delivered costs and improve reliability.',
  },
  {
    title: 'Market‑Maker',
    description: 'Act as trusted intermediary to take market risk so producers can focus on operations.',
  },
]
</script>