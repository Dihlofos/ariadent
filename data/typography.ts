type Locale = 'nl' | 'en'

const NO_BREAK_WORDS: Record<Locale, ReadonlySet<string>> = {
  nl: new Set([
    // Voorzetsels
    'aan', 'achter', 'bij', 'binnen', 'boven', 'door', 'in', 'met', 'na', 'naar', 'naast',
    'om', 'onder', 'op', 'over', 'per', 'rond', 'tegen', 'tot', 'tussen', 'uit', 'van',
    'voor', 'zonder',
    // Voegwoorden
    'als', 'dat', 'en', 'maar', 'of', 'omdat', 'terwijl', 'wanneer', 'want', 'zoals',
    // Lidwoorden
    'de', 'een', 'het',
  ]),
  en: new Set([
    // Prepositions
    'as', 'at', 'by', 'for', 'from', 'in', 'into', 'of', 'on', 'onto', 'per', 'to', 'up',
    'via', 'with',
    // Conjunctions
    'and', 'but', 'if', 'nor', 'or', 'so', 'than', 'that', 'when', 'while', 'yet',
    // Articles
    'a', 'an', 'the',
  ]),
}

const NON_TEXT_KEYS = new Set([
  'autocomplete',
  'href',
  'id',
  'inputmode',
  'link',
  'name',
  'src',
  'type',
  'url',
  'variant',
])

const NON_TYPOGRAPHY_BRANCHES = new Set([
  'meta',
  'site',
])

const SPACES_BEFORE_TEXT = /[ \t]+(?=\S)/g
const WORD_AT_END = /\p{L}+$/u
const NON_BREAKING_SPACE = '\u00A0'

export function preventHangingWords(text: string, locale: Locale) {
  const words = NO_BREAK_WORDS[locale]

  return text.replace(SPACES_BEFORE_TEXT, (spaces, offset: number) => {
    const word = text.slice(0, offset).match(WORD_AT_END)?.[0]

    return word && words.has(word.toLocaleLowerCase(locale))
      ? NON_BREAKING_SPACE
      : spaces
  })
}

export function applyTypography<T>(value: T, locale: Locale, key = ''): T {
  if (NON_TYPOGRAPHY_BRANCHES.has(key)) return value

  if (typeof value === 'string') {
    return (NON_TEXT_KEYS.has(key) ? value : preventHangingWords(value, locale)) as T
  }

  if (Array.isArray(value)) {
    return value.map(item => applyTypography(item, locale, key)) as T
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([nestedKey, nestedValue]) => [
        nestedKey,
        applyTypography(nestedValue, locale, nestedKey),
      ]),
    ) as T
  }

  return value
}
