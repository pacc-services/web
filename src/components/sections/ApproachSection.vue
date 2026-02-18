<template>
  <section
    id="approach"
    class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1 approach-header">
          <h2
            class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent mb-2"
          >
            Our Model
          </h2>
          <p class="mt-4 text-lg text-slate-600 leading-relaxed">
            PACC builds structured markets around industrial molecules.
          </p>
          <p class="mt-4 text-lg text-slate-600 leading-relaxed">
            We operate between supply and demand to create commercial certainty, activate scalable
            volume, and reduce friction across production and delivery.
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
    title: 'Commercial Certainty',
    description:
      'Structured offtake, disciplined pricing frameworks, and aligned credit terms that convert production into predictable revenue. We design agreements that support investment and long-term scale.',
  },
  {
    title: 'Demand Activation',
    description:
      'Aggregate fragmented buyers into bankable, scalable volume. We engage end-users directly and build structured customer funnels that create liquidity in regional markets.',
  },
  {
    title: 'Logistics Alignment',
    description:
      'Trailers, storage, pipelines, and regional distribution must work together. We optimize midstream coordination to lower delivered costs and improve reliability across the supply chain.',
  },
  {
    title: 'Market Structure',
    description:
      'Emerging and under-optimized markets often lack a trusted intermediary. PACC operates as a disciplined commercial layer that aligns producers, buyers, and infrastructure into executable transactions.',
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
