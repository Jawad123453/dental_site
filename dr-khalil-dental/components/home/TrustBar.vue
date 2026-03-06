<template>
  <section class="bg-navy-50 border-y border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div 
          v-for="stat in stats" 
          :key="stat.labelKey"
          class="text-center group"
        >
          <div class="text-3xl md:text-4xl font-bold text-gold mb-1 group-hover:scale-110 transition-transform">
            {{ stat.value }}
          </div>
          <div class="text-slate-400 text-sm md:text-base">
            {{ t(stat.labelKey) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = [
  { value: '15+', labelKey: 'trustBar.yearsExperience' },
  { value: '2,000+', labelKey: 'trustBar.happyPatients' },
  { value: '4.9★', labelKey: 'trustBar.patientRating' },
  { value: '6', labelKey: 'trustBar.servicesOffered' },
]
</script>
