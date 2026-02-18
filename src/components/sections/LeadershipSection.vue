<template>
  <section
    id="leadership"
    class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Title -->
      <div class="flex items-end justify-between flex-wrap gap-4" data-animate="fade-up">
        <h2
          class="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-brand to-brand-green bg-clip-text text-transparent"
        >
          Founder's Story
        </h2>
      </div>

      <!-- Story Block 1 -->
      <div class="mt-10 max-w-4xl mx-auto" data-animate="fade-up">
        <h3 class="text-2xl font-bold text-slate-900 mb-4">
          Built by Operators. Strengthened by Partnership.
        </h3>
        <p class="text-slate-600 leading-relaxed mb-4">
          PACC was founded by Andrew Carman and Patrick Charette, who have worked together for nearly
          a decade across industrial gas and hydrogen markets.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Over that time, they structured complex offtake agreements, developed new regional markets,
          and led commercialization efforts inside large energy and gas organizations. Through that
          experience, they saw a consistent gap: production was advancing, but commercial alignment
          lagged behind.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Projects did not stall because of technology. They stalled because supply, demand,
          logistics, and risk allocation were not structured correctly.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          PACC was created to close that gap.
        </p>
        <p class="text-slate-600 leading-relaxed">
          Today, PACC operates as an independent commercial platform focused on disciplined
          structuring, market activation, and execution that works in real market conditions.
        </p>
      </div>

      <!-- Divider -->
      <div class="mt-12 mb-12 border-t border-slate-200 max-w-4xl mx-auto"></div>

      <!-- Story Block 2 -->
      <div class="max-w-4xl mx-auto" data-animate="fade-up">
        <h3 class="text-2xl font-bold text-slate-900 mb-4">
          Built by Long-Term Commercial Partners
        </h3>
        <p class="text-slate-600 leading-relaxed mb-4">
          Andrew Carman and Patrick Charette founded PACC after nearly a decade of working
          side-by-side in industrial gas and hydrogen markets.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Together, they led origination efforts, structured first-of-kind hydrogen transactions,
          and developed regional supply strategies across North America. Their shared experience
          revealed a recurring truth: markets do not scale on production alone. They scale when
          commercial structure is built with discipline and alignment.
        </p>
        <p class="text-slate-600 leading-relaxed">
          PACC was formed to bring that structure to industrial molecules across emerging and
          established markets.
        </p>
      </div>

      <!-- Divider -->
      <div class="mt-12 mb-12 border-t border-slate-200 max-w-4xl mx-auto"></div>

      <!-- Founder Bios -->
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.name"
          :member="member"
          :data-animate="'fade-up'"
          :data-animate-delay="index * 100"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue'
import type { TeamMember } from '@/types'
import andrewImage from '@/assets/images/andrew.png'
import patrickImage from '@/assets/images/image.png'

const teamMembers: TeamMember[] = [
  {
    name: 'Andrew Carman',
    role: 'CEO',
    bio: "A senior energy executive with extensive experience in hydrogen, industrial gases, and clean fuels. At Uniper, executed the company's first global hydrogen deal, developed and implemented the North American hydrogen strategy, and built strategic relationships with leading players across the industry. Previously at Nikola, developed, led, and executed the hydrogen supply strategy to fuel the first commercial FCEV Class 8 trucks in North America, working across the full hydrogen value chain from production through distribution and dispensing. Spent over a decade at Linde in progressively senior commercial roles, ultimately leading the Western U.S. onsite business with full P&L responsibility exceeding $100 million.",
    linkedin: 'https://www.linkedin.com/in/andrew-carman-mba-a086a5b',
    image: andrewImage,
  },
  {
    name: 'Patrick Charette',
    role: 'CCO',
    bio: 'An energy executive and entrepreneur with extensive leadership experience in hydrogen and industrial gases. As Head of Commercial at BayoTech Hydrogen, led all commercial activities, set strategy, and pioneered the launch of a hydrogen molecule trading and logistics company that integrated production, distribution, and third-party sourcing. At Nikola Corporation, expanded hydrogen fueling and infrastructure strategy while securing significant government and industry partnerships. Earlier leadership roles with Linde and Praxair built expertise in specialty gases and large-scale pipeline networks. A foundation as an airline captain instilled the operational discipline and decision-making under pressure that continue to shape an executive approach to scaling clean energy businesses.',
    linkedin: 'https://www.linkedin.com/in/patrick-charette',
    image: patrickImage,
  },
]
</script>
