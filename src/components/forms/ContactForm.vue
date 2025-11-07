<template>
  <form @submit.prevent="handleSubmit" class="card p-6">
    <h3 class="text-lg font-bold">Send a Message</h3>
    <div class="mt-4 grid grid-cols-1 gap-4">
      <BaseInput v-model="form.name" placeholder="Your name" required />
      <BaseInput v-model="form.email" type="email" placeholder="Email" required />
      <BaseInput v-model="form.company" placeholder="Company" />
      <BaseTextarea v-model="form.message" placeholder="How can we help?" :rows="4" required />
      <BaseButton type="submit" variant="primary"> Submit </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

const handleSubmit = () => {
  const subject = encodeURIComponent('PACC Website Inquiry')
  const body = encodeURIComponent(
    `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company}\n` +
      `Message:\n${form.message}`,
  )

  window.location.href = `mailto:pat@pacc.services?subject=${subject}&body=${body}`

  setTimeout(() => {
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = ''
    })
  }, 1000)
}
</script>
