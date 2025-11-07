<template>
  <section id="org" class="py-16 bg-white border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-extrabold">Corporate Structure</h2>
      <div class="mt-6 grid md:grid-cols-3 gap-6">
        <div class="md:col-span-1">
          <p class="text-slate-600">
            Platform subsidiaries enable specialized services across the value chain.
          </p>
        </div>
        <div class="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <OrgCard
            v-for="entity in entities"
            :key="entity.name"
            :name="entity.name"
            :description="entity.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import OrgCard from '@/components/ui/OrgCard.vue'

const entities = [
  { name: 'PACC Holding LLC', description: 'Parent' },
  { name: 'PACC Producer Services LLC', description: 'Origination & offtake' },
  { name: 'PACC Logistics LLC', description: 'Midstream & delivery' },
  { name: 'PACC Settlements LLC', description: 'Trading & settlement' },
  { name: 'PACC DevCo LLC', description: 'Development' },
  { name: 'PACC Supply LLC', description: 'Supply & marketing' },
]
</script>
