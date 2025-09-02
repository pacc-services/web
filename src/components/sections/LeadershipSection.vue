<template>
  <section id="leadership" class="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
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
        />
      </div>
      
      <div class="mt-20 pt-12 border-t border-slate-200" data-animate="fade-up">
        <h3 class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent select-none">
          Partner Experience
        </h3>
        <p class="text-center text-slate-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Our team brings deep relationships and proven experience from leading organizations across the hydrogen and energy value chain
        </p>
        
        <!-- Industry Network Carousel -->
        <div class="relative overflow-hidden py-8">
          <div class="logo-carousel px-8">
            <div class="logo-track">
              <div
                v-for="(logo, index) in [...companyLogos, ...companyLogos]"
                :key="`${logo.name}-${index}`"
                class="logo-item px-6"
              >
                <img 
                  :src="logo.src"
                  :alt="logo.name"
                  class="h-12 sm:h-16 w-auto opacity-80 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <p class="text-base text-slate-700 font-medium">
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
import bpLogo from '@/assets/images/bp.png'
import deltaLogo from '@/assets/images/delta.png'
import gridstorLogo from '@/assets/images/gridstor.png'
import guzmanLogo from '@/assets/images/guzman.png'
import nikolaLogo from '@/assets/images/nikola.png'
import nexteraLogo from '@/assets/images/nextera.png'
import tdLogo from '@/assets/images/td.png'
import twinEagleLogo from '@/assets/images/twin-eagle.png'
import uniperLogo from '@/assets/images/uniper.png'
import xcelLogo from '@/assets/images/xcel-energy.png'

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
    bio: 'Strategic advisor with extensive board experience across energy and infrastructure sectors. Focused on governance excellence and sustainable growth strategies.',
  },
]

const companyLogos = [
  { name: 'Linde', src: lindeLogo },
  { name: 'BayoTech', src: bayotechLogo },
  { name: 'BP', src: bpLogo },
  { name: 'Delta', src: deltaLogo },
  { name: 'GridStor', src: gridstorLogo },
  { name: 'Guzman Energy', src: guzmanLogo },
  { name: 'Nikola', src: nikolaLogo },
  { name: 'NextEra', src: nexteraLogo },
  { name: 'TD', src: tdLogo },
  { name: 'Twin Eagle', src: twinEagleLogo },
  { name: 'Uniper', src: uniperLogo },
  { name: 'Xcel Energy', src: xcelLogo },
]
</script>