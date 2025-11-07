<template>
  <div class="mt-10 card p-6 overflow-x-auto">
    <h3 class="font-semibold">Financial Snapshot (Selected Figures)</h3>
    <p class="text-sm text-slate-600 mt-1">Annual net income projections from planning model.</p>
    <table class="mt-4 min-w-full text-sm">
      <thead>
        <tr class="text-left text-slate-600">
          <th class="py-2 pr-6">Year</th>
          <th class="py-2 pr-6">Annual Net Income</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr v-for="item in data" :key="item.year">
          <td class="py-2 pr-6">{{ item.year }}</td>
          <td class="py-2 pr-6">{{ item.netIncome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { FinancialData } from '@/types'

interface Props {
  data: FinancialData[]
}

defineProps<Props>()
</script>
