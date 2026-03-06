<template>
  <section class="bg-navy py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-navy-50 rounded-2xl p-8 md:p-12 border border-slate-700 text-center">
        <!-- Rating Display -->
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="text-5xl md:text-6xl font-bold text-gold">{{ rating.score }}</span>
          <span class="text-2xl md:text-3xl text-slate-400">/ 5</span>
        </div>
        
        <!-- Stars -->
        <div class="flex justify-center gap-1 mb-4">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-8 h-8"
            :class="i <= Math.floor(rating.score) ? 'text-gold' : 'text-slate-600'"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <!-- Review Count -->
        <p class="text-slate-400 text-lg">
          {{ t('reviews.basedOn') }} <span class="text-white font-semibold">{{ rating.totalReviews }}+</span> {{ t('reviews.patientReviews') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { overallRating } from '~/data/reviews'

const { t } = useI18n()
const rating = overallRating
</script>
