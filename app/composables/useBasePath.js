export function useBasePath() {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.app.baseURL || '/'
  const normalizedBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  const baseWithoutTrailingSlash = normalizedBase.slice(0, -1)

  return (path) => {
    if (
      typeof path !== 'string'
      || !path.startsWith('/')
      || path.startsWith('//')
      || normalizedBase === '/'
    ) {
      return path
    }

    if (
      path === baseWithoutTrailingSlash
      || path.startsWith(`${baseWithoutTrailingSlash}/`)
    ) {
      return path
    }

    return `${baseWithoutTrailingSlash}${path}`
  }
}
