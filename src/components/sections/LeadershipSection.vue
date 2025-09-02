<template>
  <section id="leadership" class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4" data-animate="fade-up">
        <h2 class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent">Leadership Team</h2>
      </div>
      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.name"
          :member="member"
          :data-animate="'fade-up'"
          :data-animate-delay="index * 100"
          class="hover-lift"
        />
      </div>
      
      <div class="mt-20 pt-12 border-t border-slate-200" data-animate="fade-up">
        <h3 class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent">
          Partner Experience
        </h3>
        <p class="text-center text-slate-600 mb-16 max-w-3xl mx-auto text-lg">
          Our team brings deep relationships and proven experience from leading organizations across the hydrogen and energy value chain
        </p>
        
        <!-- Featured Partners -->
        <div class="mb-16">
          <h4 class="text-center text-sm uppercase tracking-wider text-slate-500 mb-8">Featured Partners</h4>
          <div class="relative overflow-hidden">
            <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div class="flex items-center justify-center gap-x-16 gap-y-8 px-8 flex-wrap">
              <div
                v-for="(logo, index) in featuredLogos"
                :key="logo.name"
                :data-animate="'scale'"
                :data-animate-delay="index * 150"
                class="group relative flex-shrink-0"
              >
                <div class="relative">
                  <img 
                    :src="logo.src"
                    :alt="logo.name"
                    class="h-20 sm:h-24 lg:h-28 w-auto filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 transform hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span class="text-sm font-bold text-brand whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-lg">{{ logo.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Additional Partners Carousel -->
        <div class="relative overflow-hidden py-8">
          <h4 class="text-center text-sm uppercase tracking-wider text-slate-500 mb-8">Industry Network</h4>
          <div class="logo-carousel">
            <div class="logo-track">
              <div
                v-for="(logo, index) in [...additionalLogos, ...additionalLogos]"
                :key="`${logo.name}-${index}`"
                class="logo-item"
              >
                <img 
                  :src="logo.src"
                  :alt="logo.name"
                  class="h-12 sm:h-16 w-auto filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-base text-slate-600 font-medium">
            Building the future of clean energy through strategic partnerships
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue'
import type { TeamMember } from '@/types'
import lindeLogo from '@/assets/images/image35.png'
import bayotechLogo from '@/assets/images/image9.png'
import nikolaLogo from '@/assets/images/image10.png'

const teamMembers: TeamMember[] = [
  {
    name: 'Co‑Founder / CEO',
    role: '',
    bio: 'Senior energy executive with over 20 years of experience in hydrogen and industrial gases. Proven track record in developing global strategies and building strategic partnerships across the energy transition value chain.',
  },
  {
    name: 'Co‑Founder / CCO',
    role: '',
    bio: 'Accomplished commercial leader with extensive experience in energy trading and logistics. Expert in structuring complex transactions and developing scalable market solutions.',
  },
  {
    name: 'Board Member',
    role: '',
    bio: 'Distinguished energy industry veteran with deep expertise in power markets and renewable energy. Successfully executed multiple billion-dollar transactions in the clean energy sector.',
  },
  {
    name: 'Board Member',
    role: '',
    bio: 'Global commodities executive with comprehensive experience across traditional and emerging energy markets. Specialized in building and scaling new business platforms.',
  },
  {
    name: 'Board Member',
    role: '',
    bio: 'Strategic advisor with extensive board experience across energy and infrastructure sectors. Focused on governance excellence and sustainable growth strategies.',
  },
  {
    name: 'Board Member',
    role: '',
    bio: 'Investment professional with deep expertise in energy transition and growth capital. Strong track record in value creation and strategic partnerships.',
  },
]

const featuredLogos = [
  { name: 'Linde', src: lindeLogo },
  { name: 'BayoTech', src: bayotechLogo },
  { name: 'Nikola', src: nikolaLogo },
]

const additionalLogos = [
  { name: 'Partner 1', src: lindeLogo },
  { name: 'Partner 2', src: bayotechLogo },
  { name: 'Partner 3', src: nikolaLogo },
  { name: 'Partner 4', src: lindeLogo },
  { name: 'Partner 5', src: bayotechLogo },
]
</script>