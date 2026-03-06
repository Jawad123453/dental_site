<template>
  <div class="bg-navy-50 rounded-xl p-6 border border-slate-700 hover:border-gold/30 transition-all duration-300 group">
    <!-- Stars -->
    <div class="flex gap-1 mb-4">
      <svg
        v-for="i in 5"
        :key="i"
        class="w-5 h-5"
        :class="i <= review.rating ? 'text-gold' : 'text-slate-600'"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
    
    <!-- Quote -->
    <blockquote class="text-slate-300 mb-4 leading-relaxed">
      "{{ translatedReview.quote }}"
    </blockquote>
    
    <!-- Author -->
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
        <span class="text-gold font-semibold">{{ translatedReview.name.charAt(0) }}</span>
      </div>
      <div>
        <p class="text-white font-medium">{{ translatedReview.name }}</p>
        <p class="text-slate-500 text-sm">{{ translatedReview.city }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '~/data/reviews'

interface Props {
  review: Review
}

const props = defineProps<Props>()
const { t } = useI18n()

const translatedReview = computed(() => ({
  ...props.review,
  name: t(`reviewsData.${props.review.id}.name`),
  city: t(`reviewsData.${props.review.id}.city`),
  quote: t(`reviewsData.${props.review.id}.quote`),
}))
</script>
