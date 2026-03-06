<template>
  <div>
    <UiSectionHeader 
      :title="t('services.title')" 
      :subtitle="t('services.subtitle')"
    />
    
    <section class="bg-navy py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServicesServiceCard
            v-for="service in services"
            :key="service.id"
            :service="service"
          />
        </div>
        
        <!-- CTA Section -->
        <div class="mt-16 text-center">
          <div class="bg-navy-50 rounded-2xl p-8 md:p-12 border border-slate-700">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              {{ t('services.notSure') }}
            </h3>
            <p class="text-slate-400 mb-8 max-w-2xl mx-auto">
              {{ t('services.notSureDesc') }}
            </p>
            <UiWhatsAppButton :label="t('services.bookConsultation')" size="lg" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const { t } = useI18n()

useHead({
  title: computed(() => t('meta.services.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.services.description')) }
  ]
})
</script>
