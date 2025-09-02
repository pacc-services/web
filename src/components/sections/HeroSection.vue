<template>
  <section class="relative isolate overflow-hidden">
    <div class="absolute inset-0 brand-gradient opacity-10"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            The bridge between clean molecule producers and customers
          </h1>
          <p id="mission" class="mt-5 text-lg leading-7 text-slate-700">
            Our mission is to become the trusted bridge between producers and customers of the energy transition—delivering scale, certainty, and value across dislocated markets.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <BaseButton href="#contact" variant="primary">
              Talk to Us
            </BaseButton>
            <BaseButton href="#approach" variant="secondary">
              How We Work
            </BaseButton>
          </div>
          <div class="mt-6 text-xs text-slate-500">
            Hydrogen & specialty gases • Logistics • Market‑making
          </div>
        </div>
        <div class="lg:pl-8">
          <ImpactCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import ImpactCard from '@/components/ui/ImpactCard.vue'
</script>