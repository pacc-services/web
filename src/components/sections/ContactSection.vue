<template>
  <section id="contact" class="py-16 bg-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

const contacts: ContactInfo[] = [
  {
    name: '[Redacted]',
    role: 'Co‑Founder / CEO',
    phone: '[Redacted]',
  },
  {
    name: '[Redacted]',
    role: 'Co‑Founder / CCO',
    phone: '[Redacted]',
  },
]
</script>