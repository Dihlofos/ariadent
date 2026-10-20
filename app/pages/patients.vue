<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'
import { usePageMeta } from '~/composables/usePageMeta'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.patients)
const resultsData = computed(() => pageData.value.results)
const reviewsData = computed(() => pageData.value.reviews)
const faqData = computed(() => pageData.value.faq)

usePageMeta(pageData)
</script>

<template>
  <main class="patients-page">
    <PageHeroSection v-bind="pageData.hero" />
    <ResultsSection v-bind="resultsData" />
    <ReviewsSection v-bind="reviewsData" />
    <Faq v-bind="faqData" />
  </main>
</template>
