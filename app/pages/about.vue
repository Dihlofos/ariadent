<script setup>
import { computed } from 'vue'
import { useLocaleData } from '~/composables/useLocale'
import { usePageMeta } from '~/composables/usePageMeta'

const localeData = useLocaleData()
const pageData = computed(() => localeData.value.pages.about)
const approachData = computed(() => pageData.value.approach)
const teamData = computed(() => pageData.value.team)
const clinicSpaceData = computed(() => pageData.value.clinicSpace)
const technologiesData = computed(() => pageData.value.technologies)
const standardsData = computed(() => pageData.value.standards)

usePageMeta(pageData)
</script>

<template>
  <main class="about-page">
    <AboutPageHeroSection v-bind="pageData.hero" />
    <AboutApproachSection v-bind="approachData" />
    <AboutTeamSection v-bind="teamData" />
    <AboutClinicSpaceSection v-bind="clinicSpaceData" :ui="localeData.common.ui" />
    <AboutTechnologiesSection v-bind="technologiesData" />
    <AboutStandardsSection v-bind="standardsData" />
  </main>
</template>
