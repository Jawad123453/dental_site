<template>
  <div>
    <HomeHeroSection />
    <HomeTrustBar />
    <HomeServicesPreview />
    <HomeCtaBanner />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => t('meta.home.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.home.description')) },
    { property: 'og:title', content: computed(() => t('meta.home.title')) },
    { property: 'og:description', content: computed(() => t('meta.home.description')) },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ]
})
</script>
