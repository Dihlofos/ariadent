<script setup>
defineProps({
  title: { type: String, required: true },
  tag: { type: String, default: 'h2' },
  tone: { type: String, default: 'brand' },
})
</script>

<template>
  <component
    :is="tag"
    class="section-title"
    :class="{ 'section-title--light': tone === 'light' }"
  >
    {{ title }}
  </component>
</template>

<style lang="scss">
.section-title {
  margin: 0;
  color: $blue;
  font-family: $monserrat;
  font-size: 7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-align: center;

  @media (max-width: $tablet) {
    font-size: 5.5rem;
  }

  @media (max-width: $mobile) {
    font-size: 4rem;
  }
}

.section-title--light {
  color: $white;
}
</style>
