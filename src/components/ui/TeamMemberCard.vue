<template>
  <article class="card p-6">
    <h3 class="text-lg font-bold">{{ member.name }}</h3>
    <div class="text-sm text-slate-600">{{ member.role }}</div>
    <p class="mt-3 text-sm text-slate-700">{{ member.bio }}</p>
    <h3>
      <p>
    <a href="https://www.linkedin.com/in/andrew-carmen-6b1b51100/" target="_blank">LinkedIn</a>
  </p>
    </h3>
  </article>
</template>

<script setup lang="ts">
import type { TeamMember } from '@/types'

interface Props {
  member: TeamMember
}

defineProps<Props>()
</script>