<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ApproachSection />
      <MarketProblemSection />
      <!--<RevenueSection />-->
      <!-- <OrgStructureSection /> -->
      <LeadershipSection />
      <NewsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ApproachSection from '@/components/sections/ApproachSection.vue'
import MarketProblemSection from '@/components/sections/MarketProblemSection.vue'
import LeadershipSection from '@/components/sections/LeadershipSection.vue'
import NewsSection from '@/components/sections/NewsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useMetaTags } from '@/composables/useMetaTags'

useScrollAnimation()

const { initializeMetaTags } = useMetaTags()

onMounted(() => {
  // Initialize meta tags with correct URLs
  initializeMetaTags()
})
</script>
