<template>
  <div>
    <UiSectionHeader 
      :title="t('about.title')" 
      :subtitle="t('about.subtitle')"
    />
    
    <AboutDoctorProfile />
    <AboutCredentialBadges />
    <AboutWhyChooseUs />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => t('meta.about.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.about.description')) }
  ]
})
</script>
