<template>
  <section id="leadership" class="py-16 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between flex-wrap gap-4">
        <h2 class="text-2xl font-extrabold">Leadership Team</h2>
      </div>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <TeamMemberCard
          v-for="member in teamMembers"
          :key="member.name"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue'
import type { TeamMember } from '@/types'

const teamMembers: TeamMember[] = [
  {
    name: '[Redacted]',
    role: 'Co‑Founder / CEO',
    bio: "Senior energy executive with deep hydrogen & industrial gases expertise. Led Uniper's first global hydrogen deal and North American strategy; built Nikola's hydrogen supply strategy for first commercial FCEV trucks; a decade at Linde culminating in P&L leadership of the Western U.S. onsite business (>$100M).",
  },
  {
    name: '[Redacted]',
    role: 'Co‑Founder / CCO',
    bio: 'Energy executive & entrepreneur. As Head of Commercial at BayoTech Hydrogen, launched trading & logistics integrating production, distribution, and third‑party sourcing. At Nikola, expanded fueling & infrastructure strategy; prior roles at Linde and Praxair spanning specialty gases and large‑scale pipelines; former airline captain.',
  },
  {
    name: '[Redacted]',
    role: 'Board Member',
    bio: 'President, Gexa Energy; ex‑Uniper New Energies (Americas) lead; ex‑BP structured products. Closed $20B+ in transactions including 4 GW long‑term renewable offtake; serves on industry advisory boards for energy markets & commodities.',
  },
  {
    name: '[Redacted]',
    role: 'Board Member',
    bio: "Accomplished executive across global power, hydrogen, and commodities. Built Nikola's Hyla division; advised Trafigura on integrated hydrogen value chains; broad leadership across trading, risk management, and infrastructure.",
  },
  {
    name: '[Redacted]',
    role: 'Board Member',
    bio: 'Experienced governance and strategy leader with deep industry expertise.',
  },
  {
    name: '[Redacted]',
    role: 'Board Member',
    bio: 'Seasoned investor and board director with extensive market experience.',
  },
]
</script>