<template>
  <section id="revenue" class="py-16 bg-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4">
        <h2 class="text-2xl font-extrabold">Revenue Streams</h2>
        <span class="text-sm px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          CAGR 27%
        </span>
      </div>
      
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <RevenueCard
          v-for="stream in revenueStreams"
          :key="stream.title"
          :title="stream.title"
          :description="stream.description"
        />
      </div>
      
      <FinancialSnapshot :data="financialData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import RevenueCard from '@/components/ui/RevenueCard.vue'
import FinancialSnapshot from '@/components/ui/FinancialSnapshot.vue'
import type { RevenueStream, FinancialData } from '@/types'

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

const financialData: FinancialData[] = [
  { year: '2025', netIncome: '($519,600)' },
  { year: '2026', netIncome: '$180,194' },
  { year: '2027', netIncome: '$3,469,650' },
  { year: '2028', netIncome: '$7,037,535' },
]
</script>