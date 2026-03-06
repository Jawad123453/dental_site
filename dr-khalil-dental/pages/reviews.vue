<template>
  <div>
    <UiSectionHeader 
      :title="t('reviews.title')" 
      :subtitle="t('reviews.subtitle')"
    />
    
    <ReviewsOverallRating />
    
    <!-- Reviews Grid -->
    <section class="bg-navy py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewsReviewCard
            v-for="review in reviews"
            :key="review.id"
            :review="review"
          />
        </div>
      </div>
    </section>
    
    <!-- Google Maps Section -->
    <section class="bg-navy-50 py-12 md:py-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">
            {{ t('reviews.findUs') }}
          </h2>
          <p class="text-slate-400">
            {{ t('reviews.visitClinic') }}
          </p>
        </div>
        <UiGoogleMap height="400" />
      </div>
    </section>
    
    <!-- CTA -->
    <section class="bg-navy py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
          {{ t('reviews.readyToJoin') }}
        </h3>
        <p class="text-slate-400 mb-8 max-w-xl mx-auto">
          {{ t('reviews.experience') }}
        </p>
        <UiWhatsAppButton :label="t('reviews.bookAppointment')" size="lg" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reviews } from '~/data/reviews'

const { t } = useI18n()

useHead({
  title: computed(() => t('meta.reviews.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.reviews.description')) }
  ]
})
</script>
