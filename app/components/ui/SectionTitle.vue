<script setup>
defineProps({
  title: { type: [String, Array], required: true },
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
    <template v-if="Array.isArray(title)">
      <span v-for="line in title" :key="line" class="section-title__line">
        {{ line }}
      </span>
    </template>
    <template v-else>{{ title }}</template>
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

  &__line {
    display: block;
  }

  &--light {
    color: $white;
  }
}
</style>
