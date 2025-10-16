<template>
  <section class="relative isolate overflow-hidden min-h-screen flex items-center">
    <div class="absolute inset-0 bg-cover bg-center" :style="`background-image: url('${goldenGateBridge}')`"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-brand/50 to-transparent"></div>
    <HydrogenBubbles />
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full z-10">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <h1
            class="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-lg">
            The bridge between molecule producers and customers
          </h1>
          <p id="mission" class="hero-text text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow">
            Our mission is to become the trusted bridge between producers and customers of the energy
            transition—delivering scale, certainty, and value across dislocated markets.
          </p>
          <div class="hero-buttons flex flex-wrap gap-4">
            <BaseButton href="#contact" variant="primary" class="transform hover:scale-110 transition-all duration-300">
              Talk to Us
            </BaseButton>
            <BaseButton href="#approach" variant="secondary"
              class="transform hover:scale-110 transition-all duration-300">
              How We Work
            </BaseButton>
          </div>
          <div class="hero-subtitle text-sm text-white/70">
            Hydrogen & specialty gases • Logistics • Market‑making
          </div>
        </div>
        <div class="lg:pl-8 hero-card">
          <ImpactCard class="hover-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import ImpactCard from '@/components/ui/ImpactCard.vue'
import HydrogenBubbles from '@/components/ui/HydrogenBubbles.vue'
import goldenGateBridge from '@/assets/images/golden_gate_bridge.jpg'
</script>

<style scoped>
.hero-title {
  opacity: 0;
  animation: fadeInSimple 0.8s ease-out 0.2s forwards;
}

.hero-text {
  opacity: 0;
  animation: fadeInSimple 0.8s ease-out 0.4s forwards;
}

.hero-buttons {
  opacity: 0;
  animation: fadeInSimple 0.8s ease-out 0.6s forwards;
}

.hero-subtitle {
  opacity: 0;
  animation: fadeInSimple 0.8s ease-out 0.8s forwards;
}

.hero-card {
  opacity: 0;
  animation: fadeInSimple 0.8s ease-out 1s forwards;
}

@keyframes fadeInSimple {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
