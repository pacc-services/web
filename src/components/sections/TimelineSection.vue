<template>
  <section id="timeline" class="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/3 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-800"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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