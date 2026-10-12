<script setup>
import { useLocaleData } from '~/composables/useLocale'

const localeData = useLocaleData()
const common = computed(() => localeData.value.common)
</script>

<template>
  <div class="page">
    <Header :navigation="common.navigation" :ui="common.ui" />
    <slot />
    <Footer :footer-data="common.footer" />
    <CookieModal :ui="common.ui" />
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: $mobile) {
    padding-top: 7.8rem;
  }
}

// Ensure content pushes footer down
main {
  flex: 1;
}
</style>
