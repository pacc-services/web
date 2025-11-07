<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ApproachSection />
      <MarketProblemSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ApproachSection from '@/components/sections/ApproachSection.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>
