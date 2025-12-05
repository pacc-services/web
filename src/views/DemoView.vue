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
          A dedicated demo hub linking to immersive static mockups of the pacc.services site. Each mockup keeps the
          original content and palette while experimenting with distinct layouts and Three.js-driven visuals.
        </p>
      </section>

      <section class="max-w-6xl mx-auto px-6 lg:px-10 mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="mockup in mockups"
          :key="mockup.href"
          class="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/70 via-slate-800/30 to-slate-900 shadow-xl"
        >
          <div class="p-4 flex flex-col gap-3 h-full">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand-green font-semibold text-sm">
                {{ mockup.badge }}
              </span>
              <div>
                <h2 class="text-base font-semibold">{{ mockup.title }}</h2>
                <p class="text-xs text-slate-200/80">{{ mockup.subtitle }}</p>
              </div>
            </div>

            <p class="text-xs text-slate-100/80 leading-relaxed line-clamp-3">{{ mockup.description }}</p>

            <div class="mt-auto flex items-center gap-2">
              <a
                class="inline-flex items-center gap-1.5 rounded-lg bg-brand-green/80 text-slate-900 font-semibold px-3 py-1.5 text-sm shadow-lg shadow-brand-green/30 transition hover:-translate-y-0.5 hover:shadow-brand-green/50"
                :href="mockup.href"
              >
                Open mockup
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
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
                class="inline-flex items-center gap-1.5 text-xs text-brand-green/80 hover:text-brand-green transition font-semibold"
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
    title: 'Mockup 01 — Enhanced Hero',
    subtitle: 'Polished vertical story with particle hero',
    description:
      'Expanded version of the current layout with a cinematic hero scene, glassmorphic stats, and layered vertical sections.',
    href: '/demo/mockup-01/index.html',
    badge: '01',
  },
  {
    title: 'Mockup 02 — Split-Screen',
    subtitle: 'Alternating panels with animated canvases',
    description:
      'Bold side-by-side storytelling where each content block pairs with a Three.js object, gradients, and geometric separators.',
    href: '/demo/mockup-02/index.html',
    badge: '02',
  },
  {
    title: 'Mockup 03 — Radical Scroll',
    subtitle: 'Scroll-driven 3D narrative',
    description:
      'Immersive, chapter-based experience with camera moves tied to scroll, neon grid motifs, and the full PACC copy.',
    href: '/demo/mockup-03/index.html',
    badge: '03',
  },
  {
    title: 'Mockup 04 — Orbital Circle',
    subtitle: 'Circular canvas with centered story',
    description:
      'A circular hero core surrounded by ringed content blocks, refreshed logos, and leadership images with LinkedIn links.',
    href: '/demo/mockup-04/index.html',
    badge: '04',
  },
  {
    title: 'Mockup 05 — Hydrogen H₂',
    subtitle: 'Three.js H₂ sculpture + round particles',
    description:
      'Massive hydrogen molecule rendered in Three.js with softer particle fields, glass panels, and animated news carousel.',
    href: '/demo/mockup-05/index.html',
    badge: '05',
  },
  {
    title: 'Mockup 06 — Carousel Forward',
    subtitle: 'News-first layout with bold circle hero',
    description:
      'Rounded hero treatments, updated logo styling, LinkedIn founder badges, and a punchy carousel for announcements.',
    href: '/demo/mockup-06/index.html',
    badge: '06',
  },
  {
    title: 'Mockup 07 — Reactor Core',
    subtitle: 'Hydrogen reactor with concentric rings and energy pulses',
    description:
      'Full-viewport cylindrical chamber with rotating reactor core, glowing hydrogen sun, and animated energy arcs.',
    href: '/demo/mockup-07/index.html',
    badge: '07',
  },
  {
    title: 'Mockup 08 — Molecule Sculpture',
    subtitle: 'Giant H₂ molecule with electron cloud particles',
    description:
      'Massive stylized hydrogen molecule floating in void-like space with orbital electron particles and prismatic effects.',
    href: '/demo/mockup-08/index.html',
    badge: '08',
  },
  {
    title: 'Mockup 09 — Energy Grid',
    subtitle: 'Network visualization with pulsing nodes and connections',
    description:
      'Top-down view of glowing energy network with animated node clusters and light pulses traveling along connections.',
    href: '/demo/mockup-09/index.html',
    badge: '09',
  },
  {
    title: 'Mockup 10 — Hydrogen Bridge',
    subtitle: 'Crystalline suspension bridge metaphor',
    description:
      'A crystalline suspension bridge metaphor connecting today\'s energy landscape to tomorrow\'s hydrogen future with 3D glass bridge, energy pulses, and interactive carousel.',
    href: '/demo/mockup-10/index.html',
    badge: '10',
  },
  {
    title: 'Mockup 11 — H₂ Molecule',
    subtitle: 'Giant refractive hydrogen molecule',
    description:
      'Giant refractive hydrogen molecule at the center of an orbiting founder constellation with GPU-like electron trails and scroll-based molecule fracture.',
    href: '/demo/mockup-11/index.html',
    badge: '11',
  },
  {
    title: 'Mockup 12 — Supply Chain Island',
    subtitle: 'Floating isometric mini-world',
    description:
      'Floating isometric mini-world showcasing the complete hydrogen supply chain ecosystem with animated pipelines and mini trucks on patrol routes.',
    href: '/demo/mockup-12/index.html',
    badge: '12',
  },
  {
    title: 'Mockup 13 — Energy Tunnel',
    subtitle: 'Immersive forward-motion tunnel',
    description:
      'Immersive forward-motion tunnel accelerating into the hydrogen future with metallic ring tunnel structure and high-speed particle streaks.',
    href: '/demo/mockup-13/index.html',
    badge: '13',
  },
  {
    title: 'Mockup 14 — Crystal Chamber',
    subtitle: 'Dramatic crystal chamber with holographic spotlight',
    description:
      'Dramatic crystal chamber with holographic leadership spotlight and dissolving lattice featuring refractive crystal shards and volumetric fog particles.',
    href: '/demo/mockup-14/index.html',
    badge: '14',
  },
]
</script>
