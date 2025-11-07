<template>
  <BaseCard>
    <div class="text-xs font-semibold text-slate-500">{{ milestone.quarter }}</div>
    <h3 class="mt-1 font-bold">{{ milestone.title }}</h3>
    <ul class="mt-2 text-sm space-y-1 list-disc list-inside text-slate-700">
      <li v-for="(item, index) in milestone.items" :key="index">
        {{ item }}
      </li>
    </ul>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Milestone } from '@/types'

interface Props {
  milestone: Milestone
}

defineProps<Props>()
</script>
