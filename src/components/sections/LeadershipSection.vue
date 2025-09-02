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
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue'
import type { TeamMember } from '@/types'

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
</script>