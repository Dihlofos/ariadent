<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'
import { usePageMeta } from '~/composables/usePageMeta'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.address)
const contactsData = computed(() => pageData.value.contacts)
const directionsData = computed(() => pageData.value.directions)

usePageMeta(pageData)
</script>

<template>
  <main class="address-page">
    <ContactsSection v-bind="contactsData" title-tag="h1" compact-top />
    <DirectionsSection v-bind="directionsData" />
  </main>
</template>
