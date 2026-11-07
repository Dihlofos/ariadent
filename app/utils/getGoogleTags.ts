const GOOGLE_TAG_IDS = {
  gtm: 'GTM-KPM8WMJK',
  analytics: 'G-MZ8RLVKRB1',
  marketing: 'AW-982665486',
}

const CONSENT_DENIED = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
}

function getGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }

  return window.gtag
}

export function setGoogleConsent({ analytics, marketing }) {
  if (!import.meta.client) return

  const gtag = getGtag()
  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  })
}

export function initializeGoogleConsent() {
  if (!import.meta.client) return

  getGtag()('consent', 'default', CONSENT_DENIED)
}

function addScript(key, src) {
  if (document.querySelector(`script[data-google-tag="${key}"]`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = src
  script.dataset.googleTag = key
  document.head.appendChild(script)
}

export function loadGoogleTags() {
  if (!import.meta.client) return

  const gtag = getGtag()
  gtag('js', new Date())
  gtag('config', GOOGLE_TAG_IDS.analytics)
  gtag('config', GOOGLE_TAG_IDS.marketing)

  if (!document.querySelector(`script[data-google-tag="${GOOGLE_TAG_IDS.gtm}"]`)) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    addScript(
      GOOGLE_TAG_IDS.gtm,
      `https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_IDS.gtm}`,
    )
  }

  addScript(
    GOOGLE_TAG_IDS.analytics,
    `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS.analytics}`,
  )
  addScript(
    GOOGLE_TAG_IDS.marketing,
    `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS.marketing}`,
  )
}

export function removeGoogleCookies() {
  if (!import.meta.client) return

  const cookieNames = document.cookie
    .split(';')
    .map(cookie => cookie.trim().split('=')[0])
    .filter(name => /^(_ga($|_)|_gid$|_gat($|_)|_gcl_|_gac_)/.test(name))

  const paths = new Set(['/'])
  const segments = window.location.pathname.split('/').filter(Boolean)
  let path = ''

  for (const segment of segments) {
    path += `/${segment}`
    paths.add(path)
  }

  const domainParts = window.location.hostname.split('.')
  const domains = new Set([''])

  for (let index = 0; index < domainParts.length - 1; index += 1) {
    const domain = domainParts.slice(index).join('.')
    domains.add(domain)
    domains.add(`.${domain}`)
  }

  for (const name of cookieNames) {
    for (const cookiePath of paths) {
      for (const domain of domains) {
        const domainAttribute = domain ? `; domain=${domain}` : ''
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${cookiePath}${domainAttribute}; SameSite=Lax`
      }
    }
  }
}
