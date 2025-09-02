<template>
  <section id="timeline" class="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-extrabold">Milestones</h2>
      <div class="mt-8 grid lg:grid-cols-4 gap-6">
        <MilestoneCard
          v-for="milestone in milestones"
          :key="milestone.quarter"
          :milestone="milestone"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MilestoneCard from '@/components/ui/MilestoneCard.vue'
import type { Milestone } from '@/types'

const milestones: Milestone[] = [
  {
    quarter: 'Q3 2025',
    title: 'PACC Formed',
    items: [
      'Exclusive agreement to market K2 hydrogen molecules',
      'Engage customers for commercial agreements',
      'Convert existing robust customer funnel',
    ],
  },
  {
    quarter: 'Q2 2026',
    title: 'K2 Begins Commercial Operation',
    items: [
      'PACC customers start receiving product',
      'Complete mid/back‑office operations',
      'Sign exclusive agreement for K4 product',
    ],
  },
  {
    quarter: 'Q4 2026',
    title: 'K2 Plant Fully Loaded',
    items: [
      'Sales & ops reach full efficiency and capacity',
      'Build strong K4 customer funnel',
      'Optimize customer loading & midstream utilization',
    ],
  },
  {
    quarter: 'Q1 2027',
    title: 'Expand Markets',
    items: [
      'Onboard additional producers (Avina, Ambient, Corterra, Independence, Bevfuel)',
      'Develop pipeline for new products & services',
    ],
  },
]
</script>