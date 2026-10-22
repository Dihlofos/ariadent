<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  tabs: { type: Array, required: true },
  moreButton: { type: Object, required: true },
  images: { type: Object, required: true },
})

const activeTabId = ref(props.tabs[0]?.id ?? '')
const activeTab = computed(() => (
  props.tabs.find(tab => tab.id === activeTabId.value) ?? props.tabs[0]
))
</script>

<template>
  <section id="services" class="services">
    <Container>
      <SectionTitle :title="title" class="services__title" />

      <div class="services__tabs" role="tablist" :aria-label="title">
        <button
          v-for="tab in tabs"
          :id="`services-tab-${tab.id}`"
          :key="tab.id"
          type="button"
          role="tab"
          class="services__tab"
          :class="{ 'services__tab--active': tab.id === activeTabId }"
          :aria-controls="`services-panel-${tab.id}`"
          :aria-selected="tab.id === activeTabId"
          @click="activeTabId = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        v-if="activeTab"
        :id="`services-panel-${activeTab.id}`"
        class="services__panel"
        role="tabpanel"
        :aria-labelledby="`services-tab-${activeTab.id}`"
      >
        <div class="services__grid">
          <article v-for="item in activeTab.items" :key="item.id" class="services__card">
            <div class="services__media">
              <Image
                :src="item.image.src"
                :alt="item.image.alt"
                class="services__image"
                :width="item.image.width"
                :height="item.image.height"
              />
            </div>

            <div class="services__content">
              <h3 class="services__card-title">{{ item.title }}</h3>
              <p class="services__description">{{ item.description }}</p>
            </div>
          </article>
        </div>

        <NuxtLink :to="moreButton.link" class="services__more" v-anchor>
          <span>{{ moreButton.text }}</span>
          <Image :src="images.arrow" alt="" width="17" height="17" />
        </NuxtLink>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.services {
  padding: 5.8rem 0 7.6rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 6rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &__tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.1rem;
    margin-top: 3.5rem;

    @media (max-width: $tablet) {
      gap: 1.5rem;
    }

    @media (max-width: $mobile) {
      align-items: stretch;
      gap: 1rem;
      margin-top: 2.5rem;
    }
  }

  &__tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    padding: 0 1.5rem;
    border: 0.1rem solid $blue;
    border-radius: 20px;
    background: transparent;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      flex: 1 1 0;
      min-width: 0;
      height: auto;
      min-height: 4.8rem;
      padding: 0.6rem 1rem;
      font-size: 1.4rem;
      line-height: 115%;
      text-align: center;
    }
  }

  &__tab--active {
    border-color: $orange;
    background: $orange;
    color: $white;
  }

  &__tab:not(.services__tab--active):hover {
    background: $blue;
    color: $white;
  }

  &__tab--active:hover {
    border-color: #C96812;
    background: #C96812;
  }

  &__panel {
    margin-top: 6.2rem;

    @media (max-width: $tablet) {
      margin-top: 4.5rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 56rem);
    column-gap: 4rem;
    row-gap: 3.5rem;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      gap: 2rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__card {
    display: grid;
    min-height: 25.6rem;
    padding: 2.35rem 3.18rem 2.35rem 2.47rem;
    grid-template-columns: 27.5rem minmax(0, 1fr);
    column-gap: 2.81rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      display: flex;
      min-height: 0;
      flex-direction: column;
      padding: 2rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding: 1.5rem;
      border-radius: 18px;
    }
  }

  &__media {
    width: 27.5rem;
    height: 20.9rem;

    picture {
      display: block;
      width: 100%;
      height: 100%;
    }

    @media (max-width: $tablet) {
      width: 100%;
      height: 20rem;
      flex: 0 0 auto;
    }

    @media (max-width: $mobile) {
      height: 18rem;
    }

    @media (max-width: 600px) {
      height: auto;
      max-height: 30rem;
      aspect-ratio: 551 / 418;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
  }

  &__content {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;

    @media (max-width: $tablet) {
      flex: 0 0 auto;
      justify-content: flex-start;
      margin-top: 1.6rem;
    }

    @media (max-width: $mobile) {
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
  }

  &__card-title {
    margin: 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__description {
    margin: 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__more {
    display: flex;
    width: 33rem;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4.55rem auto 0;
    border: 0.1rem solid $blue;
    border-radius: 20px;
    background: $blue;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      width: 30rem;
      margin-top: 4rem;
    }

    @media (max-width: $mobile) {
      width: 100%;
      max-width: 33rem;
      margin-top: 3rem;
      font-size: 1.6rem;
    }
  }

  &__more:hover {
    border-color: $orange;
    background: $orange;
  }

  &__more img {
    transition: filter 0.3s ease;
  }

  &__more:hover img {
    filter: brightness(0) invert(1);
  }
}
</style>
