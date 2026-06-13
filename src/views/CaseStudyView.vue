<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand/90 to-slate-800 pt-28 pb-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-5 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-brand-green"></span>
          <span class="text-xs font-bold tracking-[0.25em] uppercase text-white/50">Industrial Gas · Case Study</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          When the contract<br />is the problem.
        </h1>
        <p class="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
          How PACC reset a seven-figure nitrogen agreement mid-term — cutting <strong class="text-white">$80K a month</strong> in spend with zero transition risk and no operational disruption.
        </p>
        <!-- Tags -->
        <div class="flex flex-wrap gap-3 mb-10">
          <span v-for="tag in tags" :key="tag" class="flex items-center gap-1.5 text-xs text-white/60 bg-white/10 px-3 py-1.5 rounded-full">
            {{ tag }}
          </span>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div v-for="stat in stats" :key="stat.metric" class="bg-white/10 rounded-2xl p-5">
            <p class="text-3xl font-black text-brand-green">{{ stat.metric }}<span v-if="stat.suffix" class="text-lg font-bold text-brand-green/70">{{ stat.suffix }}</span></p>
            <div class="w-full h-px bg-white/20 my-3"></div>
            <p class="text-sm text-white/60 font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Situation -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p class="text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">The Situation</p>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              A cost everyone<br />had accepted.
            </h2>
          </div>
          <div class="space-y-5 text-slate-600 leading-relaxed">
            <p>A California-based chemical facility relied on nitrogen as a critical process input — used for purging, system integrity, trailer preparation, and maintenance across operations. It was supplied under a long-term agreement with a major industrial gas company.</p>
            <p>The contract had been in place for years. What used to be a cost buried in the "other" bucket had quietly climbed to the top of the stack — a single, conspicuous line item. Annual nitrogen spend exceeded seven figures.</p>
            <p class="text-slate-800 font-medium border-l-2 border-brand pl-4">The plant had accepted it as a fixed cost of doing business.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Went Wrong -->
    <section class="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-10">
          <p class="text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">What Went Wrong</p>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight max-w-xl">
            The leverage was built in<br />from the start.
          </h2>
          <p class="mt-4 text-slate-600 max-w-xl">The nitrogen price and monthly facility fee had compounded until annual spend crossed seven figures. None of these clauses were unusual — they are standard in how major industrial gas suppliers write their contracts.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="item in problems" :key="item.title" class="bg-white rounded-2xl p-6 border border-slate-200">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" :class="item.iconBg">
              <svg class="w-5 h-5" :class="item.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            <h3 class="font-bold text-slate-900 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Total Cost-Stack Optimization -->
    <section class="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p class="text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">Total Cost-Stack Optimization</p>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              We model the whole stack —<br />not just the headline price.
            </h2>
          </div>
          <div class="space-y-5 text-slate-600 leading-relaxed">
            <p>PACC engaged the facility's operations and finance teams to map actual nitrogen consumption by shift, process, and season — establishing a defensible demand baseline. We benchmarked current pricing against regional market rates and built a full cost-stack model including delivery frequency, tank rental, facility fees, and escalation exposure.</p>
            <p>A structured competitive bid process followed, run in a way that preserved leverage throughout. The incumbent was forced to compete on every line item, not just the headline rate.</p>
            <p>The renegotiated agreement addressed pricing, delivery optimization, escalation caps, and contract duration — locking in long-term value, not a one-time rate reduction.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The PACC Advantage -->
    <section class="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-10">
          <p class="text-xs font-bold tracking-[0.25em] uppercase text-brand mb-3">The PACC Advantage</p>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 leading-tight max-w-xl">
            Why this only works<br />from the inside.
          </h2>
        </div>
        <div class="grid sm:grid-cols-3 gap-4 mb-12">
          <div v-for="adv in advantages" :key="adv.title" class="bg-white rounded-2xl p-6 border border-slate-200">
            <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="adv.icon" />
              </svg>
            </div>
            <h3 class="font-bold text-brand mb-2">{{ adv.title }}</h3>
            <p class="text-sm text-slate-600 leading-relaxed">{{ adv.detail }}</p>
          </div>
        </div>
        <!-- Pat quote -->
        <div class="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200">
          <div class="grid sm:grid-cols-[auto_1fr] gap-8 items-start">
            <img
              src="/images/pat-charette.jpg"
              alt="Patrick Charette"
              class="w-24 h-24 rounded-2xl object-cover"
              onerror="this.style.display='none'"
            />
            <div>
              <div class="text-3xl text-brand font-black mb-4">"</div>
              <blockquote class="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
                In chemicals, margins are often won or lost in the inputs most operators overlook. Nitrogen may not be the headline molecule — but it directly impacts operating economics. We don't just market molecules; we strengthen the entire cost structure around them.
              </blockquote>
              <div class="flex items-center gap-3">
                <div class="w-8 h-px bg-brand"></div>
                <div>
                  <p class="font-bold text-slate-900 text-sm">Patrick Charette</p>
                  <p class="text-slate-500 text-xs">Co-Founder &amp; CCO, PACC Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-brand/90 to-slate-800">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xs font-bold tracking-[0.25em] uppercase text-brand-green/80 mb-4">The Outcome</p>
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-10">Results that show up on the P&amp;L.</h2>
        <div class="grid sm:grid-cols-3 gap-4 mb-8">
          <div v-for="result in results" :key="result.metric" class="bg-white/10 rounded-2xl p-6">
            <p class="text-3xl font-black text-brand-green">{{ result.metric }}</p>
            <div class="w-full h-px bg-white/20 my-3"></div>
            <p class="text-sm text-white/60">{{ result.label }}</p>
          </div>
        </div>
        <p class="text-white/50 text-sm italic">This is the commercial layer producers and buyers rarely staff in-house. PACC owns it.</p>
      </div>
    </section>

    <ContactSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const tags = ['California', 'Chemical manufacturing', 'Nitrogen supply']

const stats = [
  { metric: '$80K', suffix: '/mo', label: 'Nitrogen spend reduced' },
  { metric: '≈$1M', suffix: '', label: 'Annualized EBITDA lift' },
  { metric: 'Zero risk', suffix: '', label: 'No transition risk or operational disruption' },
]

const problems = [
  {
    title: 'Uncapped escalation',
    detail: 'Automatic price escalations compounded annually with no ceiling.',
    icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: 'Per-delivery fees',
    detail: 'Additional fees kept getting added — charged per delivery, regardless of volume.',
    icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    title: 'Hidden exit liability',
    detail: 'Tank removal and reconditioning obligations created a hidden cost to ever leave.',
    icon: 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-500',
  },
  {
    title: 'Sticky renewal terms',
    detail: 'Ambiguous renewal language left 18+ months remaining — even after cancellation.',
    icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
]

const advantages = [
  {
    title: 'Industrial gas expertise',
    detail: 'Decades negotiating these contracts from inside major suppliers, with a clear view of where structural leverage actually exists.',
    icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
  },
  {
    title: 'Margin expansion without disruption',
    detail: 'Material EBITDA improvement while preserving supplier relationships and operational continuity.',
    icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
  },
  {
    title: 'Total cost-stack optimization',
    detail: 'We model and restructure the full operating cost structure — not just the headline price.',
    icon: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
  },
]

const results = [
  { metric: '$80K/mo', label: 'Nitrogen spend reduced' },
  { metric: '≈$1M', label: 'Annualized EBITDA lift' },
  { metric: 'Zero risk', label: 'No transition risk or disruption' },
]
</script>
