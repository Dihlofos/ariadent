export function usePageMeta(pageData) {
  useHead(() => {
    const { title, description } = pageData.value.meta

    return {
      title,
      meta: [
        { name: 'title', content: title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ],
    }
  })
}
