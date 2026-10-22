<script setup>
defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  labels: { type: Object, required: true },
  items: { type: Array, required: true },
  images: { type: Object, required: true },
  withCaptions: { type: Boolean, default: false },
})
</script>

<template>
  <section
    id="results"
    :class="[
      'results',
      {
        'results--with-captions': withCaptions,
        'results--without-intro': !title && !description,
      },
    ]"
  >
    <Container>
      <SectionTitle v-if="title" :title="title" class="results__title" />
      <p v-if="description" class="results__description">{{ description }}</p>

      <div class="results__grid">
        <div v-for="item in items" :key="item.id" class="results__item">
          <BeforeAfterSlider
            :before="item.before"
            :after="item.after"
            :before-label="labels.before"
            :after-label="labels.after"
            :slider-label="item.sliderLabel"
            :arrow="images.arrow"
            :label-position="withCaptions ? 'bottom' : 'top'"
          />

          <div v-if="withCaptions" class="results__captions">
            <p class="results__caption results__caption--before">{{ item.before.caption }}</p>
            <p class="results__caption results__caption--after">{{ item.after.caption }}</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.results {
  padding: 13rem 0 7.25rem;

  @media (max-width: $tablet) {
    padding: 7rem 2rem 6rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem;
  }

  &__title {
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: $tablet) {
      max-width: 60rem;
    }

    @media (max-width: $mobile) {
      max-width: 100%;
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
      row-gap: 3rem;
    }
  }

  &__captions {
    display: grid;
    margin-top: 1.8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__caption {
    margin: 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      font-size: 1.7rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.5rem;
    }
  }

  &__caption--before {
    max-width: 24rem;
  }

  &__caption--after {
    font-weight: 700;
  }
}

.results--without-intro .results__grid {
  margin-top: 0;
}

.results--with-captions .results__grid {
  row-gap: 7rem;

  @media (max-width: $tablet) {
    row-gap: 5rem;
  }

  @media (max-width: $mobile) {
    row-gap: 4rem;
  }
}
</style>
