<template>
  <div :dir="dir" :class="fontClass">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const dir = computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
const fontClass = computed(() => locale.value === 'ar' ? 'font-arabic' : 'font-sans')

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => dir.value,
  },
})
</script>
