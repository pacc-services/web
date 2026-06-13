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
        <div class="mt-8 flex flex-wrap gap-4">
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
            <p class="text-xs text-white/60 font-medium mt-1">Supply certainty secured</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Body -->
    <section class="py-16 sm:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-lg">

        <p>
          A California-based chemical manufacturer was operating under a legacy nitrogen supply agreement that had not been renegotiated in over six years. During that time, the supplier had changed hands, regional market rates had shifted significantly, and the customer's consumption profile had evolved — yet the contract terms remained unchanged.
        </p>

        <p>
          The facility was paying above-market rates for delivered liquid nitrogen, lacked competitive pricing benchmarks, and had no visibility into the supplier's cost structure or margin. Auto-renewal clauses had rolled the agreement forward without negotiation for multiple cycles, and key provisions — delivery minimums, pricing escalators, take-or-pay thresholds — had never been revisited.
        </p>

        <p>
          PACC engaged the facility's operations and finance teams to build a complete picture of their nitrogen consumption, delivery logistics, and contract obligations. We mapped actual usage by shift, process, and season to establish a defensible demand baseline. We then benchmarked current pricing against regional market rates across active suppliers and quantified the gap between what the facility was paying and what was available.
        </p>

        <p>
          A structured competitive bid process followed — run in a way that preserved leverage throughout. The renegotiated agreement addressed pricing, delivery optimization, escalation caps, and contract duration, locking in long-term value rather than a one-time rate reduction.
        </p>

        <div class="bg-gradient-to-br from-slate-900 to-brand/90 rounded-2xl p-6 sm:p-8 my-10">
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

        <p>
          The renegotiated agreement delivered measurable financial impact immediately and positioned the facility for long-term cost stability. PACC's industrial gas advisory expertise — built over decades of supply, logistics, and contract experience — identified value that internal teams had not been resourced to pursue.
        </p>

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

const results = [
  { metric: '$480K+', label: 'Annualized EBITDA improvement' },
  { metric: '18%', label: 'Reduction in delivered cost' },
  { metric: 'Multi-year', label: 'Supply certainty secured' },
]
</script>
