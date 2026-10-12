<script setup>
import { computed, reactive, ref, watch } from 'vue'
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

const appointmentValues = reactive({})
const appointmentErrors = ref([])
const appointmentStatus = ref('idle')
const isAppointmentSubmitting = ref(false)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const appointmentControls = computed(() => [
  ...appointmentData.value.fields,
  appointmentData.value.message,
])

watch(
  appointmentControls,
  (controls) => {
    const names = controls.map(control => control.name)

    Object.keys(appointmentValues).forEach((name) => {
      if (!names.includes(name)) delete appointmentValues[name]
    })

    controls.forEach((control) => {
      if (!(control.name in appointmentValues)) appointmentValues[control.name] = ''
    })

    appointmentErrors.value = appointmentErrors.value.filter(name => names.includes(name))
  },
  { immediate: true },
)

const isAppointmentControlValid = (control, value) => {
  const normalizedValue = value.trim()

  if (control.required && !normalizedValue) return false
  if (control.type === 'email' && normalizedValue && !emailPattern.test(normalizedValue)) return false

  return true
}

const updateAppointmentValue = ({ name, value }) => {
  appointmentValues[name] = value

  if (!appointmentErrors.value.includes(name)) return

  const control = appointmentControls.value.find(item => item.name === name)
  if (control && isAppointmentControlValid(control, value)) {
    appointmentErrors.value = appointmentErrors.value.filter(errorName => errorName !== name)
  }
}

const submitAppointmentRequest = async (payload) => {
  if (!navigator.onLine) throw new Error('Network connection is unavailable')

  // Replace the mock with the agreed API request when the submission endpoint is available.
  await Promise.resolve(payload)
}

const submitAppointment = async () => {
  const invalidControls = appointmentControls.value
    .filter(control => !isAppointmentControlValid(control, appointmentValues[control.name] ?? ''))
    .map(control => control.name)

  appointmentErrors.value = invalidControls
  if (invalidControls.length) return

  isAppointmentSubmitting.value = true

  try {
    await submitAppointmentRequest({ ...appointmentValues })
    appointmentStatus.value = 'success'
  }
  catch {
    appointmentStatus.value = 'error'
  }
  finally {
    isAppointmentSubmitting.value = false
  }
}

const resetAppointmentStatus = () => {
  appointmentStatus.value = 'idle'
}

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
    <AppointmentSection
      v-bind="appointmentData"
      :values="appointmentValues"
      :errors="appointmentErrors"
      :status="appointmentStatus"
      :is-submitting="isAppointmentSubmitting"
      @update-value="updateAppointmentValue"
      @submit="submitAppointment"
      @reset-status="resetAppointmentStatus"
    />
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
