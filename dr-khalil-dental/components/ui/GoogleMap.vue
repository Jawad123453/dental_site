<template>
  <div class="rounded-xl overflow-hidden shadow-lg border border-slate-700">
    <iframe
      :src="googleMapsEmbed"
      width="100%"
      :height="height"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="grayscale hover:grayscale-0 transition-all duration-500"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '300',
})

const { googleMapsEmbed } = useContactInfo()
</script>
