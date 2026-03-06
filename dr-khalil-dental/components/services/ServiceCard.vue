<template>
  <div class="bg-navy-50 rounded-xl p-6 md:p-8 border border-slate-700 hover:border-gold/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/5 group">
    <!-- Icon -->
    <div class="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
      <span class="w-7 h-7 text-gold" v-html="iconSvg" />
    </div>
    
    <!-- Content -->
    <h3 class="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
      {{ translatedService.name }}
    </h3>
    <p class="text-slate-400 leading-relaxed mb-6">
      {{ translatedService.fullDescription }}
    </p>
    
    <!-- WhatsApp Link -->
    <a
      :href="serviceWhatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 text-whatsapp hover:text-whatsapp/80 font-medium transition-colors group/link"
    >
      <span>{{ t('services.askAbout') }}</span>
      <svg class="w-4 h-4 group-hover/link:translate-x-1 rtl-flip transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'

interface Props {
  service: Service
}

const props = defineProps<Props>()
const { t } = useI18n()
const { whatsappNumber } = useContactInfo()

const serviceKeys: Record<string, string> = {
  'implants': 'services.dental.implants',
  'whitening': 'services.dental.whitening',
  'veneers': 'services.dental.veneers',
  'braces': 'services.dental.braces',
  'cleaning': 'services.dental.cleaning',
  'root-canal': 'services.dental.rootCanal',
}

const translatedService = computed(() => ({
  ...props.service,
  name: t(`${serviceKeys[props.service.id]}.name`),
  shortDescription: t(`${serviceKeys[props.service.id]}.shortDescription`),
  fullDescription: t(`${serviceKeys[props.service.id]}.fullDescription`),
}))

const serviceWhatsappLink = computed(() => {
  const message = encodeURIComponent(`Hello Dr. Ahmad, I would like to inquire about ${translatedService.value.name}.`)
  return `https://wa.me/${whatsappNumber}?text=${message}`
})

const icons: Record<string, string> = {
  implant: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  sparkles: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
  veneer: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  braces: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>`,
  cleaning: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  tooth: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
}

const iconSvg = computed(() => icons[props.service.icon] || icons.tooth)
</script>
