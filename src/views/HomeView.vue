<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ApproachSection />
      <MarketProblemSection />
      <RevenueSection />
      <OrgStructureSection />
      //<LeadershipSection />
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
import RevenueSection from '@/components/sections/RevenueSection.vue'
import OrgStructureSection from '@/components/sections/OrgStructureSection.vue'
//import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>