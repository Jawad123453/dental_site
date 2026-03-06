<template>
  <div class="bg-navy-50 rounded-2xl p-6 md:p-8 border border-slate-700">
    <h3 class="text-xl font-semibold text-white mb-6">{{ t('form.sendMessage') }}</h3>
    
    <form 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST"
      @submit="handleSubmit"
      class="space-y-5"
    >
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
          {{ t('form.yourName') }}
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          required
          :placeholder="t('form.namePlaceholder')"
          class="w-full px-4 py-3 bg-navy border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>
      
      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-slate-300 mb-2">
          {{ t('form.phoneNumber') }}
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          name="phone"
          required
          :placeholder="t('form.phonePlaceholder')"
          class="w-full px-4 py-3 bg-navy border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>
      
      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
          {{ t('form.message') }}
        </label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="4"
          required
          :placeholder="t('form.messagePlaceholder')"
          class="w-full px-4 py-3 bg-navy border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
        ></textarea>
      </div>
      
      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isSubmitting">{{ t('form.send') }}</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ t('form.sending') }}
        </span>
      </button>
    </form>
    
    <!-- Success Message -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="isSuccess" class="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
        {{ t('form.success') }}
      </div>
    </Transition>
    
    <p class="text-slate-500 text-sm text-center mt-4">
      {{ t('form.orWhatsApp') }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = async (e: Event) => {
  isSubmitting.value = true
  
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
    form.name = ''
    form.phone = ''
    form.message = ''
    
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>
