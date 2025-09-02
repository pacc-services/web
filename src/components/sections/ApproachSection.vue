<template>
  <section id="approach" class="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1 approach-header">
          <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent mb-2">Our Approach</h2>
          <p class="mt-4 text-lg text-slate-600 leading-relaxed">
            We de‑risk production, aggregate demand, and create structured pathways for clean molecules.
          </p>
        </div>
        <div class="md:col-span-2 grid sm:grid-cols-2 gap-6">
          <div
            v-for="(approach, index) in approaches"
            :key="approach.title"
            :class="`approach-card approach-card-${index}`"
          >
            <ApproachCard
              :title="approach.title"
              :description="approach.description"
              class="h-full"
            />
          </div>
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

<style scoped>
.approach-header {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.approach-card {
  opacity: 0;
}

.approach-card-0 {
  animation: fadeInUp 0.6s ease-out 0.4s forwards;
}

.approach-card-1 {
  animation: fadeInUp 0.6s ease-out 0.5s forwards;
}

.approach-card-2 {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
}

.approach-card-3 {
  animation: fadeInUp 0.6s ease-out 0.7s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>