<script setup>
import { localeData } from '~/../data/locales'
import { provideLocale } from '~/composables/useLocale'

const { locale } = provideLocale()
const withBasePath = useBasePath()

useHead(() => {
  const site = localeData[locale.value].common.site

  return {
    htmlAttrs: { lang: locale.value },
    titleTemplate: (titleChunk) => titleChunk || site.title,
    meta: [
      { name: 'title', content: site.title },
      { name: 'description', content: site.description },
      { name: 'keywords', content: site.keywords?.join(', ') },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:image', content: withBasePath(site.ogImage) },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: site.url },
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: withBasePath('/images/favicons/favicon-96x96.png'), sizes: '96x96' },
      { rel: 'icon', type: 'image/svg+xml', href: withBasePath('/images/favicons/favicon.svg') },
      { rel: 'shortcut icon', href: withBasePath('/images/favicons/favicon.ico') },
      { rel: 'apple-touch-icon', sizes: '180x180', href: withBasePath('/images/favicons/apple-touch-icon.png') },
      { rel: 'manifest', href: withBasePath('/images/favicons/site.webmanifest') },
      { rel: 'canonical', href: site.url },
    ],
    script: [
      //GTM and GA here
    ],
    noscript: [
       //GTM and GA here
    ],
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// Глобальные стили — only main.scss
</style>
