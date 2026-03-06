<template>
  <a
    :href="`tel:${phoneClean}`"
    :class="[
      'inline-flex items-center justify-center gap-2 bg-call text-white font-semibold rounded-lg transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg hover:shadow-call/25',
      sizeClasses
    ]"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Call Now',
  size: 'md',
})

const { phoneClean } = useContactInfo()

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return 'px-6 py-3 text-base'
  }
})
</script>
