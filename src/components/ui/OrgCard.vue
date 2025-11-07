<template>
  <div class="card p-4">
    <div class="text-sm font-semibold">{{ name }}</div>
    <div class="text-xs text-slate-600">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  description: string
}

defineProps<Props>()
</script>
