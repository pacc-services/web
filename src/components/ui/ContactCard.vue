<template>
  <div class="card p-8 flex items-center justify-center">
    
      href="mailto:contact@pacc.services"
      class="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors"
    >
      Contact Us
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
