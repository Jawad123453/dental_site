<template>
  <section class="bg-navy py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Photo -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform -rotate-3"></div>
          <div class="relative bg-navy-50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <div class="aspect-[3/4]">
              <img 
                src="/images/Doctor image.png" 
                :alt="t('about.doctorName')"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <!-- Bio -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
            {{ t('about.doctorName') }}
          </h2>
          <p class="text-gold text-xl font-medium mb-2">
            {{ t('about.specialty') }}
          </p>
          <p class="text-slate-400 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
            {{ t('about.university') }}
          </p>
          
          <div class="prose prose-invert max-w-none">
            <p class="text-slate-300 text-lg leading-relaxed mb-6">
              {{ t('about.bio1') }}
            </p>
            <p class="text-slate-300 text-lg leading-relaxed">
              {{ t('about.bio2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
