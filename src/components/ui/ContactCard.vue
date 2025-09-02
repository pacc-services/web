<template>
  <div class="card p-4 flex items-center justify-between">
    <div>
      <div class="font-semibold">{{ contact.name }}</div>
      <div class="text-slate-600">{{ contact.role }}</div>
    </div>
    <span
      class="px-3 py-2 rounded-lg bg-slate-900 text-white font-semibold"
    >
      {{ contact.phone }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { ContactInfo } from '@/types'

interface Props {
  contact: ContactInfo
}

defineProps<Props>()
</script>