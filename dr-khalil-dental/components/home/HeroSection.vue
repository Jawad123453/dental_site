<template>
  <section class="bg-navy relative overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-50 opacity-50"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-start">
          <div class="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
            <span class="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span class="text-gold text-sm font-medium">{{ t('hero.badge') }}</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {{ t('hero.doctorName') }}
          </h1>
          
          <p class="text-xl md:text-2xl text-gold font-medium mb-2">
            {{ t('hero.title') }}
          </p>
          
          <p class="text-slate-400 text-lg mb-8 flex items-center justify-center lg:justify-start gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ t('hero.location') }}
          </p>
          
          <p class="text-slate-300 text-lg mb-10 max-w-lg mx-auto lg:mx-0">
            {{ t('hero.description') }}
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <UiWhatsAppButton :label="t('hero.bookWhatsApp')" size="lg" />
            <UiCallButton :label="t('hero.callNow')" size="lg" />
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="relative hidden lg:block">
          <div class="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform rotate-3"></div>
          <div class="relative bg-navy-50 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
            <div class="aspect-[4/5]">
              <img 
                src="/images/Doctor image.png" 
                :alt="t('hero.doctorName')"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
