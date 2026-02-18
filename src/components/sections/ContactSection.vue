<template>
  <section id="contact" class="relative py-24 sm:py-32 lg:py-40 bg-white border-t border-slate-200">
    <div class="absolute inset-0 opacity-5" :style="`background-image: url('${bridgeBackground}'); background-size: cover; background-position: center;`"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900">Get in Touch</h2>
        <p class="mt-4 text-xl text-slate-600">Discuss offtake, logistics, or partnership opportunities.</p>
        <div class="mt-10">
          <a href="mailto:contact@pacc.services" class="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-slate-900 text-white font-bold text-xl hover:bg-slate-800 transition-colors">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import bridgeBackground from '@/assets/images/image45.png'
</script>
