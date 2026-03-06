<template>
  <div :class="['py-12 md:py-16 text-center', dark ? 'bg-navy' : 'bg-navy-50']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  dark?: boolean
}

withDefaults(defineProps<Props>(), {
  dark: false,
})
</script>
