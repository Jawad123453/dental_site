<template>
  <div class="bg-navy-50 rounded-2xl p-6 md:p-8 border border-slate-700">
    <h3 class="text-xl font-semibold text-white mb-6 flex items-center gap-2">
      <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      {{ t('hours.title') }}
    </h3>
    
    <div class="space-y-3">
      <div
        v-for="day in translatedHours"
        :key="day.dayKey"
        class="flex justify-between items-center py-2 border-b border-slate-700 last:border-0"
      >
        <span class="text-slate-300">{{ t(day.dayKey) }}</span>
        <span 
          :class="[
            'font-medium',
            day.isClosed ? 'text-slate-500' : 'text-gold'
          ]"
        >
          {{ day.isClosed ? t('hours.closed') : day.hours }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const translatedHours = [
  { dayKey: 'hours.monday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.tuesday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.wednesday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.thursday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.friday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.saturday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  { dayKey: 'hours.sunday', hours: '', isClosed: true },
]
</script>
