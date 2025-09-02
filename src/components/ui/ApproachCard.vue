<template>
  <BaseCard>
    <h3 class="font-bold text-slate-900">{{ title }}</h3>
    <p class="mt-2 text-slate-700">{{ description }}</p>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>