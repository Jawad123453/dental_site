<template>
  <nav class="bg-navy border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-navy" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5"/>
              <path d="M12 5.5l3 1.5"/>
            </svg>
          </div>
          <span class="text-white font-bold text-lg group-hover:text-gold transition-colors">
            {{ t('nav.drKhalil') }}
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to"
            :to="link.to"
            :class="[
              route.path === link.to ? 'text-gold' : 'text-slate-300',
              'hover:text-gold transition-colors font-medium'
            ]"
          >
            {{ t(link.labelKey) }}
          </NuxtLink>
          
          <!-- Language Switcher -->
          <button 
            @click="toggleLanguage"
            class="flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-slate-700 rounded-lg text-slate-300 hover:text-gold hover:border-gold/50 transition-all"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
            </svg>
            <span class="text-sm font-medium">{{ t('language.switch') }}</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          :aria-label="t('nav.toggleMenu')"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="md:hidden pb-4 border-t border-slate-800 mt-2 pt-4">
          <div class="flex flex-col gap-4">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.to"
              :to="link.to"
              :class="[
                route.path === link.to ? 'text-gold' : 'text-slate-300',
                'hover:text-gold transition-colors font-medium px-2 py-1'
              ]"
              @click="isMenuOpen = false"
            >
              {{ t(link.labelKey) }}
            </NuxtLink>
            
            <!-- Mobile Language Switcher -->
            <button 
              @click="toggleLanguage"
              class="flex items-center gap-2 px-2 py-1 text-slate-300 hover:text-gold transition-colors font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
              </svg>
              <span>{{ t('language.switch') }}</span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, t, setLocale } = useI18n()
const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { labelKey: 'nav.services', to: '/services' },
  { labelKey: 'nav.about', to: '/about' },
  { labelKey: 'nav.reviews', to: '/reviews' },
  { labelKey: 'nav.contact', to: '/contact' },
]

const toggleLanguage = () => {
  const newLocale = locale.value === 'ar' ? 'en' : 'ar'
  setLocale(newLocale)
  isMenuOpen.value = false
}
</script>
