<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.index)
const heroData = computed(() => pageData.value.hero)
const benefitsData = computed(() => pageData.value.benefits)
const servicesData = computed(() => pageData.value.services)
const treatmentProcessData = computed(() => pageData.value.treatmentProcess)
const resultsData = computed(() => pageData.value.results)
const appointmentData = computed(() => pageData.value.appointment)
const reviewsData = computed(() => pageData.value.reviews)
const aboutData = computed(() => pageData.value.about)
const contactsData = computed(() => pageData.value.contacts)
const faqData = computed(() => pageData.value.faq)

useHead({
  title: '',
})
</script>

<template>
  <main>
    <HeroSection v-bind="heroData" />
    <BenefitsSection :items="benefitsData.items" />
    <ServicesSection v-bind="servicesData" />
    <TreatmentProcessSection v-bind="treatmentProcessData" />
    <ResultsSection v-bind="resultsData" />
    <AppointmentSection v-bind="appointmentData" />
    <ReviewsSection v-bind="reviewsData" />
    <AboutSection v-bind="aboutData" />
    <ContactsSection v-bind="contactsData" />
    <Faq
      :title="faqData.title"
      :description="faqData.description"
      :items="faqData.items"
      :images="faqData.images"
    />
  </main>
</template>
