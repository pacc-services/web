<template>
  <section id="leadership"
    class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4" data-animate="fade-up">
        <h2
          class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent">
          Leadership Team</h2>
      </div>
      <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TeamMemberCard v-for="(member, index) in teamMembers" :key="member.name" :member="member"
          :data-animate="'fade-up'" :data-animate-delay="index * 100" />
      </div>

      <div class="mt-20 pt-12 border-t border-slate-200" data-animate="fade-up">
        <h3
          class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent select-none">
          Partner Experience
        </h3>
        <p class="text-center text-slate-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Our team brings deep relationships and proven experience from leading organizations across the hydrogen and
          energy value chain
        </p>

        <!-- Industry Network Carousel -->
        <!--
        <div class="relative overflow-hidden py-8">
          <div class="logo-carousel px-8">
            <div class="logo-track">
              <div v-for="(logo, index) in [...companyLogos, ...companyLogos]" :key="`${logo.name}-${index}`"
                class="logo-item px-6">
                <img :src="logo.src" :alt="logo.name"
                  class="h-12 sm:h-16 w-auto opacity-80 hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
-->
        <div class="mt-12 text-center">
          <p class="text-base text-slate-700 font-medium">
            Building the future of energy through strategic partnerships
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue'
import type { TeamMember } from '@/types'
//import lindeLogo from '@/assets/images/image35.png'
//import bayotechLogo from '@/assets/images/image9.png'
//import bpLogo from '@/assets/images/bp.png'
//import deltaLogo from '@/assets/images/delta.png'
//import gridstorLogo from '@/assets/images/gridstor.png'
//import guzmanLogo from '@/assets/images/guzman.png'
//import nikolaLogo from '@/assets/images/nikola.png'
//import nexteraLogo from '@/assets/images/nextera.png'
//import tdLogo from '@/assets/images/td.png'
//import twinEagleLogo from '@/assets/images/twin-eagle.png'
//import uniperLogo from '@/assets/images/uniper.png'
//import xcelLogo from '@/assets/images/xcel-energy.png'

const teamMembers: TeamMember[] = [
  {
    name: 'Andrew Carmen',
    role: 'CEO',
    bio: 'A senior energy executive with extensive experience in hydrogen, industrial gases, and clean fuels. At Uniper, executed the company’s first global hydrogen deal, developed and implemented the North American hydrogen strategy, and built strategic relationships with leading players across the industry.  Previously at Nikola, developed, led, and executed the hydrogen supply strategy to fuel the first commercial FCEV Class 8 trucks in North America, working across the full hydrogen value chain from production through distribution and dispensing.Spent over a decade at Linde in progressively senior commercial roles, ultimately leading the Western U.S. onsite business with full P&L responsibility exceeding $100 million.',
    linkedin: 'https://www.linkedin.com/in/andrew-carman-mba-a086a5b'
  },
  {
    name: 'Patrick Charette',
    role: 'CCO',
    bio: 'An energy executive and entrepreneur with extensive leadership experience in hydrogen and industrial gases. As Head of Commercial at BayoTech Hydrogen, led all commercial activities, set strategy, and pioneered the launch of a hydrogen molecule trading and logistics company that integrated production, distribution, and third-party sourcing. At Nikola Corporation, expanded hydrogen fueling and infrastructure strategy while securing significant government and industry partnerships. Earlier leadership roles with Linde and Praxair built expertise in specialty gases and large-scale pipeline networks. A foundation as an airline captain instilled the operational discipline and decision-making under pressure that continue to shape an executive approach to scaling clean energy businesses',
    linkedin: 'https://www.linkedin.com/in/patrick-charette'
  },
]

/**
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
**/
</script>
