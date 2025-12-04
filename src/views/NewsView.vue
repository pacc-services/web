<template>
  <div>
    <AppHeader />
    <main class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <!-- Hero Header -->
      <section class="relative bg-gradient-to-br from-brand to-brand-green pt-32 pb-20 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            News & Updates
          </h1>
          <p class="text-xl text-white/90">Latest developments from PACC</p>
        </div>
      </section>

      <!-- News Article -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <article class="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-6">
          <!-- Press Release Header -->
          <div class="border-b border-slate-200 pb-6">
            <div class="text-xs font-semibold text-brand uppercase tracking-wider mb-2">
              Press Release
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              PACC Launches Revolutionary Hydrogen Market-Making Platform to Bridge Energy
              Transition Gap
            </h2>
            <div class="text-sm text-slate-500 mt-4">
              <span class="font-medium">San Francisco, CA</span> — December 4, 2025
            </div>
          </div>

          <!-- Article Content -->
          <div class="prose prose-lg max-w-none space-y-6 text-slate-700">
            <p class="text-xl font-medium text-slate-900 leading-relaxed">
              PACC, a pioneering hydrogen and specialty gases market-maker, today announced the
              official launch of its innovative platform designed to accelerate the energy
              transition by connecting molecule producers with enterprise customers at scale.
            </p>

            <p>
              The company's groundbreaking approach addresses a critical bottleneck in the rapidly
              growing hydrogen economy: the disconnect between production capacity and customer
              demand. By serving as a trusted intermediary, PACC de-risks supply chains, aggregates
              fragmented demand, and creates structured pathways for hydrogen and specialty gases
              distribution.
            </p>

            <p>
              "We're witnessing unprecedented momentum in clean energy, yet the infrastructure to
              efficiently move molecules from producers to end-users remains severely
              underdeveloped," said Pat Mazza, Founder & CEO of PACC. "Our platform solves this
              fundamental challenge by becoming the trusted bridge that the market desperately
              needs—delivering scale, certainty, and value across previously dislocated markets."
            </p>

            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Transforming the Hydrogen Value Chain
            </h3>

            <p>
              PACC's market-making approach leverages sophisticated logistics coordination, risk
              management, and customer aggregation to create liquid, efficient markets for hydrogen
              and specialty gases. The company's initial focus spans multiple critical sectors
              including industrial applications, transportation, and energy storage.
            </p>

            <p>Key capabilities of the PACC platform include:</p>

            <ul class="list-disc pl-6 space-y-2">
              <li>
                <strong>Supply De-risking:</strong> Long-term offtake agreements that provide
                producers with revenue certainty
              </li>
              <li>
                <strong>Demand Aggregation:</strong> Consolidating fragmented customer needs to
                achieve economies of scale
              </li>
              <li>
                <strong>Logistics Optimization:</strong> Seamless coordination of storage,
                transportation, and delivery
              </li>
              <li>
                <strong>Market Intelligence:</strong> Real-time pricing and availability data to
                drive efficient decision-making
              </li>
            </ul>

            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Industry Validation and Market Opportunity
            </h3>

            <p>
              The launch comes at a pivotal moment for the hydrogen economy. According to the
              International Energy Agency, global hydrogen demand is projected to reach 500 million
              tonnes annually by 2050, representing a six-fold increase from current levels.
              However, achieving this scale requires sophisticated market infrastructure that can
              efficiently match supply with demand.
            </p>

            <p>
              "Traditional energy commodities took decades to develop liquid, efficient markets,"
              explained Andrew Rezvani, Co-Founder & COO of PACC. "With hydrogen and specialty
              gases, we don't have that luxury. PACC is accelerating this evolution by bringing
              market-making expertise and modern logistics capabilities to an emerging industry that
              needs it most."
            </p>

            <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4">
              Strategic Focus and Future Vision
            </h3>

            <p>
              PACC is initially targeting the North American market, where federal incentives under
              the Inflation Reduction Act have catalyzed significant investment in clean hydrogen
              production. The company plans to expand geographically as the global hydrogen economy
              matures, with particular emphasis on regions with strong industrial decarbonization
              mandates.
            </p>

            <p>
              The company's leadership team brings deep expertise from commodities trading, energy
              logistics, and technology scaling, positioning PACC uniquely to navigate the
              complexities of building new market infrastructure.
            </p>

            <p class="font-medium text-slate-900">
              For more information about PACC and its market-making platform, visit
              <a
                href="https://pacc.services"
                class="text-brand hover:text-brand-green transition-colors underline"
                >pacc.services</a
              >
              or contact
              <a
                href="mailto:pat@pacc.services"
                class="text-brand hover:text-brand-green transition-colors underline"
                >pat@pacc.services</a
              >.
            </p>

            <!-- About Section -->
            <div class="mt-12 pt-8 border-t border-slate-200">
              <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                About PACC
              </h4>
              <p class="text-sm text-slate-600">
                PACC is a market-maker for hydrogen and specialty gases, building the trusted
                infrastructure that connects molecule producers with enterprise customers. By
                de-risking supply, aggregating demand, and optimizing logistics, PACC accelerates
                the energy transition and creates value across the clean energy value chain. Based
                in San Francisco, the company serves customers and producers throughout North
                America.
              </p>
            </div>

            <!-- Contact Section -->
            <div class="mt-6 pt-6 border-t border-slate-200">
              <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Media Contact
              </h4>
              <p class="text-sm text-slate-600">
                Pat Mazza<br />
                Founder & CEO, PACC<br />
                Email:
                <a
                  href="mailto:pat@pacc.services"
                  class="text-brand hover:text-brand-green transition-colors"
                  >pat@pacc.services</a
                ><br />
                Web:
                <a
                  href="https://pacc.services"
                  class="text-brand hover:text-brand-green transition-colors"
                  >pacc.services</a
                >
              </p>
            </div>
          </div>
        </article>

        <!-- Back to Home Link -->
        <div class="mt-12 text-center">
          <router-link
            to="/"
            class="inline-flex items-center gap-2 text-brand hover:text-brand-green transition-colors font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Back to Home
          </router-link>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<style scoped>
.prose a {
  text-decoration: underline;
}
</style>
