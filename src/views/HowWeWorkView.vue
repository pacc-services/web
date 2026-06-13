<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>

      <section class="relative overflow-hidden py-28 sm:py-32 lg:py-40">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${aerialPhoto})` }"></div>
        <div class="absolute inset-0 bg-slate-900/85"></div>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Markets Do Not Scale Without Structure
          </h1>
          <div class="mt-8 space-y-5 text-lg text-white/70 leading-relaxed">
            <p>Production capacity alone does not create a market.</p>
            <p>Industrial and emerging molecule markets stall when offtake is uncertain, logistics are fragmented, and risk is misaligned.</p>
            <p>PACC exists to build the commercial structure that allows supply and demand to meet at scale.</p>
            <p>We follow a disciplined, repeatable execution framework from first conversation to executed transaction.</p>
          </div>
        </div>
      </section>

      <section class="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16">The PACC Commercial Framework</h2>
          <div class="space-y-0">
            <div v-for="(step, index) in frameworkSteps" :key="step.title" class="relative flex gap-8">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-black text-lg shadow-md">
                  {{ index + 1 }}
                </div>
                <div v-if="index < frameworkSteps.length - 1" class="w-px flex-1 bg-slate-300 my-2"></div>
              </div>
              <div class="pb-16">
                <h3 class="text-xl font-bold text-slate-900 mt-2 mb-3">{{ step.title }}</h3>
                <p class="text-slate-600 mb-4">{{ step.description }}</p>
                <ul class="space-y-2">
                  <li v-for="item in step.items" :key="item" class="flex items-start gap-2 text-slate-600">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></span>
                    {{ item }}
                  </li>
                </ul>
                <p v-if="step.closing" class="mt-5 text-slate-800 font-semibold">{{ step.closing }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Delivery Methods -->
      <section class="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-brand bg-brand/5 px-4 py-2 rounded-full">
              Logistics
            </span>
            <h2 class="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">How We Deliver</h2>
            <p class="mt-3 text-xl text-slate-600 max-w-3xl">
              PACC coordinates delivery logistics directly — matching the right method to each customer's infrastructure and operational profile.
            </p>
          </div>
          <div class="grid sm:grid-cols-3 gap-6">
            <div v-for="method in deliveryMethodCards" :key="method.title" class="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" :class="method.iconBg">
                <svg class="w-6 h-6" :class="method.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="method.icon" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-brand mb-2">{{ method.title }}</h3>
              <div class="w-8 h-0.5 bg-brand-green mb-4"></div>
              <p class="text-base text-slate-600 leading-relaxed flex-1">{{ method.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">Engagement Models</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-slate-900 mb-2">For Producers</h3>
              <p class="text-slate-600 mb-6">We act as your commercial execution partner.</p>
              <p class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">PACC can support:</p>
              <ul class="space-y-3">
                <li v-for="item in producerItems" :key="item" class="flex items-start gap-2 text-slate-600">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"></span>
                  {{ item }}
                </li>
              </ul>
              <p class="mt-6 text-slate-700 font-semibold">We align production reality with scalable demand.</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 class="text-xl font-bold text-slate-900 mb-2">For Buyers</h3>
              <p class="text-slate-600 mb-6">We provide structured access to reliable supply.</p>
              <p class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">PACC supports:</p>
              <ul class="space-y-3">
                <li v-for="item in buyerItems" :key="item" class="flex items-start gap-2 text-slate-600">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></span>
                  {{ item }}
                </li>
              </ul>
              <p class="mt-6 text-slate-700 font-semibold">We reduce friction between production and end use.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 sm:py-24 bg-slate-900 border-b border-slate-700">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-10">What Makes PACC Different</h2>
          <div class="space-y-4 text-xl text-slate-300 font-medium mb-10">
            <p>We are not brokers.</p>
            <p>We are not consultants.</p>
            <p>We are not speculative developers.</p>
          </div>
          <p class="text-lg text-slate-300 mb-8">PACC operates as a commercial structuring layer.</p>
          <ul class="grid sm:grid-cols-2 gap-4 mb-14">
            <li v-for="trait in traits" :key="trait" class="flex items-center gap-3 text-white font-semibold text-lg">
              <span class="w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></span>
              {{ trait }}
            </li>
          </ul>
          <p class="text-slate-400 mb-12">We prioritize transactions that work under real capital constraints.</p>
          <div class="border-t border-slate-700 pt-12">
            <h3 class="text-2xl font-bold text-white mb-4">Molecules and Markets</h3>
            <p class="text-slate-400 mb-6">PACC's framework applies wherever supply and demand require commercial alignment.</p>
            <p class="text-slate-400 mb-4 font-semibold">We work across:</p>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li v-for="molecule in molecules" :key="molecule" class="flex items-center gap-3 text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0"></span>
                {{ molecule }}
              </li>
            </ul>
            <p class="mt-8 text-slate-300 font-semibold italic">If production exists but market structure does not, we build the bridge.</p>
          </div>
        </div>
      </section>

      <section class="py-20 sm:py-24 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Start the Right Conversation</h2>
          <p class="text-lg text-slate-600 mb-4">Are you a producer seeking structured market access?</p>
          <p class="text-lg text-slate-600 mb-10">Are you a buyer seeking reliable supply?</p>
          <p class="text-xl text-slate-800 font-semibold mb-10">Let us build the commercial pathway.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors duration-200 text-base">
              Speak with Our Commercial Team
            </a>
            <a href="/#contact" class="inline-flex items-center justify-center px-8 py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand/5 transition-colors duration-200 text-base">
              Explore a Market Opportunity
            </a>
          </div>
        </div>
      </section>

    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import aerialPhoto from '@/assets/images/k2-facility-aerial.jpg'

const deliveryMethodCards = [
  {
    title: 'Drop & Swap',
    icon: 'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5',
    iconBg: 'bg-brand/10',
    iconColor: 'text-brand',
    description: 'A PACC yard tractor hauls the empty trailer away and drops a fully-charged one in its place. The trailer doubles as on-site gaseous storage — continuous supply with no fixed infrastructure and no downtime.',
  },
  {
    title: 'Offloading',
    icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3',
    iconBg: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
    description: "Hydrogen is transferred from the PACC trailer into the customer's fixed on-site tube storage in a single delivery — minimizing dwell time and maximizing throughput.",
  },
  {
    title: 'Wet Hose Fueling',
    icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    description: "A trained PACC operator fills the customer's vehicle directly via cascade fill. Designed for buses, locomotives, and heavy-duty equipment operating from a central depot.",
  },
]

const frameworkSteps = [
  {
    title: 'Evaluate and Align',
    description: 'We begin with disciplined assessment.',
    items: [
      'Production profile and operating constraints',
      'Target geography and customer segmentation',
      'Delivery pathways and infrastructure',
      'Credit exposure and risk tolerance',
      'Commercial objectives and timeline',
    ],
    closing: 'We only pursue strategies that can operate in real market conditions.',
  },
  {
    title: 'Structure the Market',
    description: 'We design the commercial architecture that connects supply to scalable demand.',
    items: [
      'Offtake strategy and pricing framework',
      'Volume aggregation across buyers',
      'Risk allocation and credit structure',
      'Term sheet and contract development',
      'Logistics alignment',
    ],
    closing: 'This stage converts capacity into bankable opportunity.',
  },
  {
    title: 'Activate Demand',
    description: 'We originate and negotiate transactions directly.',
    items: [
      'Customer outreach and qualification',
      'Commercial negotiation',
      'Volume alignment and pricing execution',
      'Deal closing support',
    ],
    closing: 'We do not deliver advisory memos. We drive transactions to execution.',
  },
  {
    title: 'Execute and Scale',
    description: 'Execution does not stop at contract signature.',
    items: [
      'Delivery coordination',
      'Ramp strategy',
      'Pricing optimization',
      'Ongoing commercial oversight',
      'Expansion into adjacent demand',
    ],
    closing: 'Our objective is durable market structure, not one-time transactions.',
  },
]

const producerItems = [
  'Full commercialization strategy',
  'Targeted offtake origination',
  'Structured pricing design',
  'Market activation in new regions',
  'Long-term revenue pathway development',
]

const buyerItems = [
  'Direct producer connectivity',
  'Transparent pricing frameworks',
  'Regional delivery optimization',
  'Contract flexibility',
  'Supply continuity planning',
]

const traits = ['Asset-light', 'Risk-aware', 'Execution-focused', 'Scalable across markets']

const molecules = [
  'Hydrogen',
  'Industrial gases',
  'Byproduct streams',
  'CO2 and specialty gases',
  'Traditional industrial fuels',
  'Emerging molecules',
]
</script>

