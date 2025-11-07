<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
})

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold transition-colors'

  const variants = {
    primary:
      'bg-brand text-white shadow-lg hover:bg-brand-dark transform hover:scale-105 transition-all',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-brand transition-all',
  }

  return `${base} ${variants[props.variant]}`
})
</script>
