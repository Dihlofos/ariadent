import { computed, inject, onMounted, provide, ref } from 'vue'
import { DEFAULT_LOCALE, localeData, SUPPORTED_LOCALES } from '~/../data/locales'

const localeKey = Symbol('app-locale')
const localeStorageKey = 'ariadent-locale'

function readStoredLocale() {
  if (!import.meta.client) return null

  try {
    return window.localStorage.getItem(localeStorageKey)
  }
  catch {
    return null
  }
}

function storeLocale(locale) {
  if (!import.meta.client) return

  try {
    window.localStorage.setItem(localeStorageKey, locale)
  }
  catch {
    // Keep language switching functional when storage is unavailable.
  }
}

export function provideLocale() {
  const locale = ref(DEFAULT_LOCALE)

  onMounted(() => {
    const storedLocale = readStoredLocale()

    if (SUPPORTED_LOCALES.includes(storedLocale)) {
      locale.value = storedLocale
    }
  })

  function setLocale(nextLocale) {
    if (SUPPORTED_LOCALES.includes(nextLocale)) {
      locale.value = nextLocale
      storeLocale(nextLocale)
    }
  }

  const context = { locale, setLocale }
  provide(localeKey, context)

  return context
}

export function useLocale() {
  const context = inject(localeKey)

  if (!context) {
    throw new Error('useLocale must be called under the application locale provider')
  }

  return context
}

export function useLocaleData() {
  const { locale } = useLocale()
  return computed(() => localeData[locale.value])
}
