<template>
  <BaseCard class="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-brand/30">
    <h3 class="font-bold text-slate-900 group-hover:text-brand transition-colors duration-300">{{ title }}</h3>
    <p class="mt-2 text-slate-700 text-sm leading-relaxed">{{ description }}</p>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'

interface Props {
  title: string
  description: string
  icon?: string
}

defineProps<Props>()
</script>