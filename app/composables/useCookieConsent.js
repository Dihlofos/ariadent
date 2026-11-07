import {
  initializeGoogleConsent,
  loadGoogleTags,
  removeGoogleCookies,
  setGoogleConsent,
} from '~/utils/getGoogleTags'

const STORAGE_KEY = 'ariadent-cookie-consent'
const CONSENT_VERSION = 1
const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000

function readStoredConsent() {
  try {
    const rawConsent = window.localStorage.getItem(STORAGE_KEY)
    if (!rawConsent) return null

    const consent = JSON.parse(rawConsent)
    const timestamp = Date.parse(consent.timestamp)

    if (
      consent.consentVersion !== CONSENT_VERSION
      || !Number.isFinite(timestamp)
      || timestamp > Date.now()
      || Date.now() - timestamp >= CONSENT_DURATION_MS
      || typeof consent.analytics !== 'boolean'
      || typeof consent.marketing !== 'boolean'
    ) {
      window.localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return consent
  }
  catch {
    return null
  }
}

export function useCookieConsent() {
  const consent = useState('ariadent-cookie-consent', () => null)
  const isSettingsOpen = useState('ariadent-cookie-settings-open', () => false)
  const isInitialized = useState('ariadent-cookie-consent-initialized', () => false)

  function applyConsent(nextConsent, { persist = true } = {}) {
    consent.value = nextConsent

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConsent))
      }
      catch {
        // The current choice still applies for this page view if storage is unavailable.
      }
    }

    setGoogleConsent(nextConsent)

    if (nextConsent.analytics || nextConsent.marketing) {
      loadGoogleTags()
    }
    else {
      removeGoogleCookies()
    }

    isSettingsOpen.value = false
  }

  function initializeConsent() {
    if (isInitialized.value || !import.meta.client) return

    initializeGoogleConsent()
    const storedConsent = readStoredConsent()
    isInitialized.value = true

    if (storedConsent) {
      applyConsent(storedConsent, { persist: false })
      return
    }

    consent.value = null
    removeGoogleCookies()
    isSettingsOpen.value = true
  }

  function acceptConsent() {
    applyConsent({
      consentVersion: CONSENT_VERSION,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    })
  }

  function declineConsent() {
    applyConsent({
      consentVersion: CONSENT_VERSION,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    })
  }

  function openCookieSettings() {
    isSettingsOpen.value = true
  }

  return {
    consent,
    isSettingsOpen,
    initializeConsent,
    acceptConsent,
    declineConsent,
    openCookieSettings,
  }
}
