<template>
  <section class="py-10 sm:py-12 bg-brand border-b border-brand/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <div>
            <p class="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-1">Case Study</p>
            <h3 class="text-lg sm:text-xl font-bold text-white leading-snug">
              Industrial Gas Contract Optimization
            </h3>
            <p class="mt-1 text-white/70 text-sm leading-relaxed max-w-xl">
              How PACC restructured a California facility's nitrogen supply agreement — reducing delivered cost and unlocking significant annualized EBITDA improvement.
            </p>
          </div>
        </div>

        <a
          href="/case-studies/industrial-gas-contract-optimization"
          class="flex-shrink-0 inline-flex items-center gap-2 bg-white text-brand font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          Read the Case Study
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
