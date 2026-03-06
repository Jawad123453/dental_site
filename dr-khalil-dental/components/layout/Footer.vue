<template>
  <footer class="bg-navy-50 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand & Address -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <span class="text-white font-bold text-lg">{{ t('footer.brand') }}</span>
          </div>
          <p class="text-slate-400">{{ currentAddress }}</p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ t('footer.contact') }}</h3>
          <div class="space-y-3">
            <a 
              :href="`tel:${phoneClean}`" 
              class="flex items-center gap-2 text-slate-400 hover:text-gold transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {{ phone }}
            </a>
            <a 
              :href="whatsappLink" 
              target="_blank"
              class="flex items-center gap-2 text-slate-400 hover:text-whatsapp transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {{ t('footer.whatsapp') }}
            </a>
          </div>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ t('footer.openingHours') }}</h3>
          <div class="space-y-2 text-slate-400">
            <p>{{ t('hours.mondaySaturday') }}</p>
            <p class="text-gold font-medium">9:00 AM – 7:00 PM</p>
            <p class="text-slate-500">{{ t('hours.sundayClosed') }}</p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-800 mt-8 pt-8 text-center">
        <p class="text-slate-500 text-sm">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()
const { phone, phoneClean, whatsappLink, address } = useContactInfo()

const currentAddress = computed(() => locale.value === 'ar' ? address.ar : address.en)
</script>
