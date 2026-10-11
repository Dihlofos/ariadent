<script setup>
defineProps({
  title: { type: [String, Array], required: true },
  description: { type: String, required: true },
  labels: { type: Object, required: true },
  items: { type: Array, required: true },
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="results" class="results">
    <Container>
      <SectionTitle :title="title" class="results__title" />
      <p class="results__description">{{ description }}</p>

      <div class="results__grid">
        <BeforeAfterSlider
          v-for="item in items"
          :key="item.id"
          :before="item.before"
          :after="item.after"
          :before-label="labels.before"
          :after-label="labels.after"
          :slider-label="item.sliderLabel"
          :arrow="images.arrow"
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.results {
  padding: 8.1rem 0 7.25rem;

  @media (max-width: $tablet) {
    padding: 7rem 2rem 6rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem;
  }

  &__title {
    @media (max-width: $tablet) {
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      font-size: 3.6rem;
    }
  }

  &__description {
    margin: 1.9rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  &__grid {
    display: grid;
    margin-top: 7.6rem;
    grid-template-columns: repeat(2, 56rem);
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3.5rem;
      gap: 2rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}
</style>
