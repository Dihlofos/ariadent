<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in items" :key="item.link" class="nav__item">
        <NuxtLink :to="item.link" class="nav__link" v-anchor>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav {
  @media (max-width: $tablet) {
    width: 100%;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 3.4rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: $tablet) {
      width: 100%;
      align-items: stretch;
      flex-direction: column;
      gap: 0;
    }
  }

  &__item {
    @media (max-width: $tablet) {
      width: 100%;
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.18);
    }
  }

  &__item:last-child {
    @media (max-width: $tablet) {
      border-bottom: 0;
    }
  }

  &__link {
    color: $white;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    transition: color 0.3s ease;

    @media (max-width: $tablet) {
      display: block;
      width: 100%;
      padding: 1.2rem 0;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      padding: 1rem 0;
      font-size: 1.5rem;
    }
  }

  &__link:hover {
    color: $orange;
  }
}
</style>
