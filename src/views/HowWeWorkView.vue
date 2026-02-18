<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>

      <!-- SECTION 1: INTRO -->
      <section class="py-20 sm:py-24 lg:py-32 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Markets Do Not Scale Without Structure
          </h1>
          <div class="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>Production capacity alone does not create a market.</p>
            <p>Industrial and emerging molecule markets stall when offtake is uncertain, logistics are fragmented, and risk is misaligned.</p>
            <p>PACC exists to build the commercial structure that allows supply and demand to meet at scale.</p>
            <p>We follow a disciplined, repeatable execution framework from first conversation to executed transaction.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 2: THE PACC FRAMEWORK -->
      <section class="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16">
            The PACC Commercial Framework
          </h2>
          <div class="space-y-0">
            <div
              v-for="(step, index) in frameworkSteps"
              :key="step.title"
              class="relative flex gap-8"
            >
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
                  <li
                    v-for="item in step.items"
                    :key="item"
                    class="flex items-start gap-2 text-slate-600"
                  >
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

      <!-- SECTION 3: ENGAGEMENT MODELS -->
      <section class="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-12">
            Engagement Models
          </h2>
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

      <!-- SECTION 4: DIFFERENTIATION + MOLECULES -->
      <section class="py-20 sm:py-24 bg-slate-900 border-b border-slate-700">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-10">
            What Makes PACC Different
          </h2>
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

      <!-- SECTION 5: CTA -->
      <section class="py-20 sm:py-24 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Start the Right Conversation</h2>
          <p class="text-lg text-slate-600 mb-4">Are you a producer seeking structured market access?</p>
          <p class="text-lg text-slate-600 mb-10">Are you a buyer seeking reliable supply?</p>
          <p class="text-xl text-slate-800 font-semibold mb-10">Let's build the commercial pathway.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="/#contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-bold rounded-xl hover:bg-brand/90 transition-colors duration-200 text-base"
            >
              Speak with Our Commercial Team
            </a>
            
              href="/#contact"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-brand text-brand font-bold rounded-xl hover:bg-brand/5 transition-colors duration-200 text-base"
            >
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
