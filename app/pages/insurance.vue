<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'
import { usePageMeta } from '~/composables/usePageMeta'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.insurance)
const reimbursementData = computed(() => pageData.value.reimbursement)
const appointmentCtaData = computed(() => pageData.value.appointmentCta)

usePageMeta(pageData)
</script>

<template>
  <main class="insurance-page">
    <PageHeroSection v-bind="pageData.hero" />
    <ReimbursementSection v-bind="reimbursementData" />
    <InsuranceAppointmentCta v-bind="appointmentCtaData" />
  </main>
</template>
