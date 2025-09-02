<template>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    :placeholder="placeholder"
    :rows="rows"
    :required="required"
    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  rows?: number
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  rows: 4,
  required: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>