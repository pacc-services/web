<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  type?: string
  placeholder?: string
  required?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
