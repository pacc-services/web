<template>
  <section class="relative isolate overflow-hidden min-h-screen flex items-center hero-section">
    <div 
      class="hero-background absolute inset-0 bg-cover bg-center"
      :style="`background-image: url('${goldenGateBridge}')`"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-brand/50 to-transparent"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-lg animate-fade-in-up">
            The bridge between clean molecule producers and customers
          </h1>
          <p id="mission" class="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow animate-fade-in-up animation-delay-200">
            Our mission is to become the trusted bridge between producers and customers of the energy transition—delivering scale, certainty, and value across dislocated markets.
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
            <BaseButton href="#contact" variant="primary" class="transform hover:scale-110 transition-all duration-300">
              Talk to Us
            </BaseButton>
            <BaseButton href="#approach" variant="secondary" class="transform hover:scale-110 transition-all duration-300">
              How We Work
            </BaseButton>
          </div>
          <div class="text-sm text-white/70 animate-fade-in animation-delay-600">
            Hydrogen & specialty gases • Logistics • Market‑making
          </div>
        </div>
        <div class="lg:pl-8 animate-fade-in-left animation-delay-800">
          <ImpactCard class="hover-glow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import ImpactCard from '@/components/ui/ImpactCard.vue'
import goldenGateBridge from '@/assets/images/golden_gate_bridge.jpg'
</script>

<style scoped>
/* Safari-optimized parallax effect */
.hero-section {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.hero-background {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  perspective: 1000;
  -webkit-perspective: 1000;
  will-change: transform;
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .hero-background {
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}
</style>