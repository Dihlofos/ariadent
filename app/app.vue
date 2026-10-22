<script setup>
import { localeData } from '~/../data/locales'
import { provideLocale } from '~/composables/useLocale'
import { getYM } from '~/utils/getYM'

const YM_ID = '999999999' // ⚠️ ЗДЕСЬ МЕНЯТЬ ID ЯНДЕКС.МЕТРИКИ
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
      getYM(YM_ID),
    ],
    noscript: [
      {
        innerHTML: `<div><img src="https://mc.yandex.ru/watch/${YM_ID}" style="position:absolute;left:-9999px;" alt=""></div>`,
        tagPosition: 'bodyOpen',
      },
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
