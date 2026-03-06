import arLocale from '~/locales/ar.json'
import enLocale from '~/locales/en.json'

type Locale = 'ar' | 'en'

const locales: Record<Locale, Record<string, any>> = {
  ar: arLocale,
  en: enLocale,
}

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
  const localeCookie = useCookie<Locale>('locale', {
    default: () => 'ar',
    watch: true,
  })

  const locale = computed({
    get: () => localeCookie.value,
    set: (val: Locale) => {
      localeCookie.value = val
    }
  })

  const t = (key: string, params?: Record<string, any>): string => {
    let translation = getNestedValue(locales[localeCookie.value], key)
    
    if (params) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, String(params[param]))
      })
    }
    
    return translation
  }

  const setLocale = (newLocale: Locale) => {
    localeCookie.value = newLocale
  }

  return {
    locale,
    t,
    setLocale,
  }
}
