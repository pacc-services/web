<template>
  <section id="revenue" class="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4" data-animate="fade-up">
        <h2 class="text-3xl sm:text-4xl font-extrabold">Revenue Streams</h2>
      </div>
      
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RevenueCard
          v-for="(stream, index) in revenueStreams"
          :key="stream.title"
          :title="stream.title"
          :description="stream.description"
          :data-animate="'scale'"
          :data-animate-delay="index * 100"
          class="hover-glow"
        />
      </div>
      
      
    </div>
  </section>
</template>

<script setup lang="ts">
import RevenueCard from '@/components/ui/RevenueCard.vue'
import type { RevenueStream } from '@/types'

const revenueStreams: RevenueStream[] = [
  {
    title: 'Physical Trading & Market‑Making',
    description: 'Act as principal or agent, monetize arbitrage, and create liquidity in illiquid markets.',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Coordinate transportation, storage, and delivery to ensure molecules flow reliably.',
  },
  {
    title: 'Origination & Marketing',
    description: 'Secure offtake agreements and downstream customers for clean energy & specialty gases.',
  },
  {
    title: 'Advisory / Outsourced Commercial',
    description: 'Plug‑in origination/commercial arm for producers and investors—faster and cheaper.',
  },
]

 
</script>