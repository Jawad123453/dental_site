<template>
  <div class="space-y-6">
    <!-- Phone -->
    <a
      :href="`tel:${phoneClean}`"
      class="flex items-center gap-4 p-4 bg-navy-50 rounded-xl border border-slate-700 hover:border-call/50 transition-all group"
    >
      <div class="w-12 h-12 bg-call/10 rounded-lg flex items-center justify-center group-hover:bg-call/20 transition-colors">
        <svg class="w-6 h-6 text-call" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </div>
      <div>
        <p class="text-slate-400 text-sm">{{ t('contact.phone') }}</p>
        <p class="text-white font-medium text-lg">{{ phone }}</p>
      </div>
    </a>
    
    <!-- Address -->
    <div class="flex items-start gap-4 p-4 bg-navy-50 rounded-xl border border-slate-700">
      <div class="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <div>
        <p class="text-slate-400 text-sm mb-1">{{ t('contact.address') }}</p>
        <p class="text-white font-medium">{{ currentAddress }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { phone, phoneClean, address } = useContactInfo()

const currentAddress = computed(() => locale.value === 'ar' ? address.ar : address.en)
</script>
