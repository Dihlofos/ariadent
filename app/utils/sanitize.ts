let purifierPromise = null

const getPurifier = () => {
  if (!import.meta.client) {
    throw new Error('sanitizeText can only be used in the browser')
  }

  if (!purifierPromise) {
    purifierPromise = import('dompurify').then(module => module.default)
  }

  return purifierPromise
}

/**
 * Очищает введённое пользователем значение от HTML-тегов и атрибутов.
 * DOMPurify загружается лениво, но функция всегда дожидается его загрузки.
 *
 * @param {string} text
 * @returns {Promise<string>}
 */
export async function sanitizeText(text) {
  if (!text || typeof text !== 'string') return ''

  const purifier = await getPurifier()

  const sanitizedContent = purifier.sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    RETURN_DOM_FRAGMENT: true,
  })

  return sanitizedContent.textContent ?? ''
}
