<script setup>
defineProps({
  title: { type: String, required: true },
  facts: { type: Array, required: true },
  image: { type: Object, required: true },
})
</script>

<template>
  <section id="hero" class="about-page-hero">
    <Container>
      <div class="about-page-hero__card">
        <div class="about-page-hero__media">
          <Image
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            class="about-page-hero__image"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="about-page-hero__content">
          <h1 class="about-page-hero__title">{{ title }}</h1>

          <div class="about-page-hero__facts">
            <div v-for="fact in facts" :key="fact.id" class="about-page-hero__fact">
              <p class="about-page-hero__label">{{ fact.label }}</p>
              <p class="about-page-hero__description">{{ fact.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-page-hero {
  padding-top: 3.9rem;

  @media (max-width: $tablet) {
    padding: 2rem 2rem 0;
  }

  @media (max-width: $mobile) {
    padding: 1rem 1rem 0;
  }

  &__card {
    position: relative;
    min-height: 48rem;
    overflow: hidden;
    border-radius: 22px;
    background: lightgray;

    @media (max-width: $tablet) {
      display: flex;
      min-height: 0;
      height: auto;
      background: #8CD9F4;
      flex-direction: column;
    }

    @media (max-width: $mobile) {
      border-radius: 18px;
    }
  }

  &__card::after {
    position: absolute;
    z-index: 2;
    border-radius: inherit;
    background: linear-gradient(90deg, #8CD9F4 34.22%, rgba(140, 217, 244, 0) 61.77%);
    content: '';
    inset: 0;
    pointer-events: none;

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__media {
    position: absolute;
    z-index: 1;
    top: -0.1rem;
    right: 0;
    bottom: -0.1rem;
    left: 29.8rem;
    width: auto;
    height: auto;

    @media (max-width: $tablet) {
      position: relative;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      width: 100%;
      height: auto;
      order: 2;
    }
  }

  &__media picture {
    display: block;
    width: 100%;
    height: 100%;

    @media (max-width: $tablet) {
      height: auto;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right center;

    @media (max-width: $tablet) {
      height: auto;
      object-fit: contain;
      object-position: center;
    }
  }

  &__content {
    position: relative;
    z-index: 3;
    width: 54rem;
    padding: 4rem 0 4rem 5rem;

    @media (max-width: $tablet) {
      width: 100%;
      padding: 3.5rem;
      order: 1;
    }

    @media (max-width: $mobile) {
      width: 100%;
      padding: 3rem 2.4rem;
    }
  }

  &__title {
    max-width: 54rem;
    margin: 0;
    color: #063CAD;
    font-family: $monserrat;
    font-size: 7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    transform: translateX(-0.6rem);

    @media (max-width: $tablet) {
      max-width: 100%;
      font-size: 4.4rem;
      transform: none;
    }

    @media (max-width: $mobile) {
      max-width: 30rem;
      font-size: 3.2rem;
    }
  }

  &__facts {
    display: grid;
    max-width: 43rem;
    margin-top: 3.6rem;
    gap: 2.8rem;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 3rem;
      column-gap: 3rem;
      gap: 2.5rem;
    }

    @media (max-width: $mobile) {
      max-width: 100%;
      margin-top: 2.6rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }
  }

  &__label {
    display: inline-flex;
    min-height: 3.6rem;
    align-items: center;
    width: fit-content;
    margin: 0;
    padding: 0 1rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    color: $blue;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: $tablet) {
      min-height: 3.2rem;
      padding: 0 1.5rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      min-height: 3rem;
      padding: 0 1.2rem;
      font-size: 1.5rem;
    }
  }

  &__description {
    margin: 1.1rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      margin-top: 1.2rem;
      font-size: 1.7rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
}
</style>
