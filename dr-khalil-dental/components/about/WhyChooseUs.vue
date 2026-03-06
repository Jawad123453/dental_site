<template>
  <section class="bg-navy py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {{ t('whyChoose.title') }}
        </h2>
        
        <div class="space-y-6">
          <div
            v-for="(reason, index) in reasons"
            :key="index"
            class="flex gap-4 p-6 bg-navy-50 rounded-xl border border-slate-700 hover:border-gold/50 transition-all duration-300 group"
          >
            <div class="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <component :is="reason.icon" class="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                {{ t(reason.titleKey) }}
              </h3>
              <p class="text-slate-400">
                {{ t(reason.descriptionKey) }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center mt-12">
          <UiWhatsAppButton :label="t('whyChoose.bookConsultation')" size="lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const reasons = [
  {
    titleKey: 'whyChoose.gentle.title',
    descriptionKey: 'whyChoose.gentle.description',
    icon: defineComponent({
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
    })
  },
  {
    titleKey: 'whyChoose.technology.title',
    descriptionKey: 'whyChoose.technology.description',
    icon: defineComponent({
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    })
  },
  {
    titleKey: 'whyChoose.transparent.title',
    descriptionKey: 'whyChoose.transparent.description',
    icon: defineComponent({
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
    })
  },
]
</script>
