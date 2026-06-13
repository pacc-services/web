<template>
  <div class="min-h-screen bg-white">
    <AppHeader />

    <!-- Hero -->
    <section class="bg-gradient-to-br from-slate-900 via-brand/90 to-slate-800 pt-24 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-4">
          <span class="text-xs font-bold tracking-[0.3em] uppercase text-brand-green/80 bg-brand-green/10 px-4 py-2 rounded-full">
            Case Study
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mt-6 mb-4">
          Industrial Gas Contract Optimization
        </h1>
        <p class="text-lg text-white/70 leading-relaxed max-w-2xl">
          How PACC restructured a California facility's nitrogen supply agreement — reducing delivered cost and unlocking significant annualized EBITDA improvement.
        </p>
        <div class="mt-8 flex flex-wrap gap-6">
          <div class="bg-white/10 rounded-xl px-5 py-4 text-center">
            <p class="text-2xl font-black text-brand-green">$480K+</p>
            <p class="text-xs text-white/60 font-medium mt-1">Annualized EBITDA improvement</p>
          </div>
          <div class="bg-white/10 rounded-xl px-5 py-4 text-center">
            <p class="text-2xl font-black text-brand-green">18%</p>
            <p class="text-xs text-white/60 font-medium mt-1">Reduction in delivered cost</p>
          </div>
          <div class="bg-white/10 rounded-xl px-5 py-4 text-center">
            <p class="text-2xl font-black text-brand-green">Multi-year</p>
            <p class="text-xs text-white/60 font-medium mt-1">Supply agreement secured</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Body -->
    <section class="py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <!-- The Situation -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900">The Situation</h2>
          </div>
          <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <p class="text-slate-700 leading-relaxed">
              A California-based chemical manufacturer was operating under a legacy nitrogen supply agreement that had not been renegotiated in over six years. During that time, the supplier had changed hands, regional market rates had shifted significantly, and the customer's consumption profile had evolved — yet the contract terms remained unchanged.
            </p>
            <p class="text-slate-700 leading-relaxed mt-4">
              The facility was paying above-market rates for delivered liquid nitrogen, lacked competitive pricing benchmarks, and had no visibility into the supplier's cost structure or margin. The agreement included automatic renewal clauses that had been rolling forward without review.
            </p>
          </div>
        </div>

        <!-- What Went Wrong -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900">What Went Wrong</h2>
          </div>
          <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <ul class="space-y-4">
              <li v-for="item in problems" :key="item.title" class="flex items-start gap-3">
                <span class="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                <div>
                  <p class="font-semibold text-slate-800">{{ item.title }}</p>
                  <p class="text-slate-600 text-sm mt-0.5">{{ item.detail }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- The PACC Reset -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900">The PACC Reset</h2>
          </div>
          <div class="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <p class="text-slate-700 leading-relaxed mb-6">
              PACC engaged the facility's operations and finance teams to build a complete picture of their nitrogen consumption, delivery logistics, and contract obligations. We benchmarked current pricing against regional market rates, identified structural inefficiencies in the delivery schedule, and prepared a competitive bid process.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="step in steps" :key="step.label" class="bg-white rounded-xl p-4 border border-slate-200">
                <p class="text-xs font-bold tracking-widest uppercase text-brand mb-1">{{ step.label }}</p>
                <p class="text-sm text-slate-700">{{ step.detail }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- The PACC Advantage -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <div class="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-slate-900">The PACC Advantage</h2>
          </div>
          <div class="bg-gradient-to-br from-slate-900 to-brand/90 rounded-2xl p-6 sm:p-8">
            <p class="text-white/80 leading-relaxed mb-6">
              The renegotiated agreement delivered measurable financial impact immediately and positioned the facility for long-term cost stability. PACC's industrial gas advisory expertise — built over decades of supply, logistics, and contract experience — identified value that internal teams had not been resourced to pursue.
            </p>
            <div class="grid sm:grid-cols-3 gap-4 mb-6">
              <div v-for="result in results" :key="result.metric" class="bg-white/10 rounded-xl p-4 text-center">
                <p class="text-2xl font-black text-brand-green">{{ result.metric }}</p>
                <p class="text-xs text-white/60 mt-1">{{ result.label }}</p>
              </div>
            </div>
            <p class="text-white/60 text-sm italic border-t border-white/10 pt-4">
              This is the commercial layer producers and buyers rarely staff in-house. PACC owns it.
            </p>
          </div>
        </div>

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

const problems = [
  {
    title: 'No competitive benchmark',
    detail: 'The procurement team lacked access to current regional market pricing for bulk liquid nitrogen, making it impossible to assess whether the contract was competitive.',
  },
  {
    title: 'Stale contract structure',
    detail: 'Auto-renewal clauses had rolled the agreement forward without negotiation for multiple cycles. Key provisions — delivery minimums, pricing escalators, take-or-pay thresholds — had never been revisited.',
  },
  {
    title: 'Misaligned delivery schedule',
    detail: 'The delivery frequency and tanker sizing were configured for a consumption profile that no longer matched the facility's actual operations, driving unnecessary logistics cost.',
  },
  {
    title: 'No internal advocacy',
    detail: 'The procurement function had no dedicated industrial gas expertise and no supplier relationship leverage. The incumbent supplier had no incentive to proactively offer better terms.',
  },
]

const steps = [
  { label: 'Consumption audit', detail: 'Mapped actual nitrogen usage by shift, process, and season to establish a defensible demand baseline.' },
  { label: 'Market benchmark', detail: 'Built a regional pricing model across active suppliers to quantify the gap between current contract rates and market.' },
  { label: 'Competitive bid process', detail: 'Ran a structured solicitation across qualified regional and national suppliers, preserving leverage through the entire process.' },
  { label: 'Contract renegotiation', detail: 'Negotiated revised terms including pricing, delivery optimization, escalation caps, and contract duration to lock in long-term value.' },
]

const results = [
  { metric: '$480K+', label: 'Annualized EBITDA improvement' },
  { metric: '18%', label: 'Reduction in delivered cost' },
  { metric: 'Multi-year', label: 'Supply certainty secured' },
]
</script>
