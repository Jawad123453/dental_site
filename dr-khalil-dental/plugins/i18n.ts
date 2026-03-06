import { initLocale } from '~/composables/useI18n'

export default defineNuxtPlugin({
  name: 'i18n',
  hooks: {
    'app:mounted'() {
      initLocale()
    }
  }
})
