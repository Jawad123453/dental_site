import arLocale from '~/locales/ar.json'
import enLocale from '~/locales/en.json'

type Locale = 'ar' | 'en'

const locales: Record<Locale, Record<string, any>> = {
  ar: arLocale,
  en: enLocale,
}

const currentLocale = ref<Locale>('ar')
const isHydrated = ref(false)

function getNestedValue(obj: Record<string, any>, path: string): string {
  const keys = path.split('.')
  let result: any = obj
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      return path
    }
  }
  
  return typeof result === 'string' ? result : path
}

export const useI18n = () => {
  const locale = computed({
    get: () => currentLocale.value,
    set: (val: Locale) => {
      currentLocale.value = val
      if (import.meta.client) {
        localStorage.setItem('locale', val)
      }
    }
  })

  const t = (key: string, params?: Record<string, any>): string => {
    let translation = getNestedValue(locales[currentLocale.value], key)
    
    if (params) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, String(params[param]))
      })
    }
    
    return translation
  }

  const setLocale = (newLocale: Locale) => {
    currentLocale.value = newLocale
    if (import.meta.client) {
      localStorage.setItem('locale', newLocale)
    }
  }

  return {
    locale,
    t,
    setLocale,
    isHydrated,
  }
}

export const initLocale = () => {
  if (import.meta.client && !isHydrated.value) {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === 'ar' || savedLocale === 'en')) {
      currentLocale.value = savedLocale
    }
    isHydrated.value = true
  }
}
