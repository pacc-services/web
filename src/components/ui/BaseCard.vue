<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'glass'
  padding?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
})

const cardClasses = computed(() => {
  const base = 'card'

  const variants = {
    default: '',
    glass: 'glass',
  }

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return `${base} ${variants[props.variant]} ${paddings[props.padding]}`
})
</script>
