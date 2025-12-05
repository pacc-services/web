<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <AppHeader />
    <main class="pt-28 lg:pt-32 pb-16">
      <section class="max-w-6xl mx-auto px-6 lg:px-10">
        <p class="uppercase tracking-[0.2em] text-brand-green/80 text-xs font-semibold mb-4">Interactive Showcase</p>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Explore the PACC services design mockups
        </h1>
        <p class="text-lg text-slate-200/90 max-w-3xl leading-relaxed">
          A dedicated demo hub linking to three immersive static mockups of the pacc.services site. Each mockup keeps the
          original content and palette while experimenting with distinct layouts and Three.js-driven visuals.
        </p>
      </section>

      <section class="max-w-6xl mx-auto px-6 lg:px-10 mt-10 grid gap-6 lg:grid-cols-3">
        <article
          v-for="mockup in mockups"
          :key="mockup.href"
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/70 via-slate-800/30 to-slate-900 shadow-2xl"
        >
          <div class="p-6 flex flex-col gap-4 h-full">
            <div class="flex items-center gap-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand-green font-semibold text-lg">
                {{ mockup.badge }}
              </span>
              <div>
                <h2 class="text-xl font-semibold">{{ mockup.title }}</h2>
                <p class="text-sm text-slate-200/80">{{ mockup.subtitle }}</p>
              </div>
            </div>

            <p class="text-sm text-slate-100/80 leading-relaxed">{{ mockup.description }}</p>

            <div class="mt-auto flex items-center gap-3">
              <a
                class="inline-flex items-center gap-2 rounded-xl bg-brand-green/80 text-slate-900 font-semibold px-4 py-2 shadow-lg shadow-brand-green/30 transition hover:-translate-y-0.5 hover:shadow-brand-green/50"
                :href="mockup.href"
                target="_blank"
                rel="noreferrer"
              >
                Open mockup
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 112 0v3a4 4 0 01-4 4H5a4 4 0 01-4-4V7a4 4 0 014-4h3a1 1 0 110 2H5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                class="inline-flex items-center gap-2 text-brand-green/80 hover:text-brand-green transition font-semibold"
                :href="mockup.href"
              >
                /demo{{ mockup.href.replace('/demo', '') }}
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const mockups = [
  {
    title: 'Mockup A — Enhanced Hero',
    subtitle: 'Polished vertical story with particle hero',
    description:
      'Expanded version of the current layout with a cinematic hero scene, glassmorphic stats, and layered vertical sections.',
    href: '/demo/mockup-a-hero/',
    badge: 'A',
  },
  {
    title: 'Mockup B — Split-Screen',
    subtitle: 'Alternating panels with animated canvases',
    description:
      'Bold side-by-side storytelling where each content block pairs with a Three.js object, gradients, and geometric separators.',
    href: '/demo/mockup-b-split/',
    badge: 'B',
  },
  {
    title: 'Mockup C — Radical Scroll',
    subtitle: 'Scroll-driven 3D narrative',
    description:
      'Immersive, chapter-based experience with camera moves tied to scroll, neon grid motifs, and the full PACC copy.',
    href: '/demo/mockup-c-radical/',
    badge: 'C',
  },
]
</script>
