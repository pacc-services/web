<template>
  <div class="card p-4 flex items-center justify-between">
    <div>
      <div class="font-semibold">{{ contact.name }}</div>
      <div class="text-slate-600">{{ contact.role }}</div>
    </div>
    <a
      href="mailto:info@pacc.tech"
      class="px-3 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
    >
      {{ contact.phone }}
    </a>
  </div>
</template>

<script setup lang="ts">
import type { ContactInfo } from '@/types'

interface Props {
  contact: ContactInfo
}

defineProps<Props>()
</script>