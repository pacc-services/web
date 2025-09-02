<template>
  <section id="contact" class="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50"></div>
    <div class="absolute top-0 left-1/2 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
    <div 
      class="absolute inset-0 opacity-5"
      :style="`background-image: url('${bridgeBackground}'); background-size: cover; background-position: center;`"
    ></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 class="text-2xl font-extrabold">Get in Touch</h2>
          <p class="mt-2 text-slate-600">
            Let's discuss offtake, logistics, or partnership opportunities.
          </p>
          <div class="mt-6 grid gap-3 text-sm">
            <ContactCard
              v-for="contact in contacts"
              :key="contact.name"
              :contact="contact"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactCard from '@/components/ui/ContactCard.vue'
import ContactForm from '@/components/forms/ContactForm.vue'
import type { ContactInfo } from '@/types'
import bridgeBackground from '@/assets/images/image45.png'

const contacts: ContactInfo[] = [
  {
    name: 'Leadership',
    role: 'Executive Team',
    phone: 'Contact Us',
  },
  {
    name: 'Commercial',
    role: 'Business Development',
    phone: 'Contact Us',
  },
]
</script>