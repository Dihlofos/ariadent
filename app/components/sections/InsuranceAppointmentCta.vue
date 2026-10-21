<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  button: { type: Object, required: true },
  image: { type: Object, required: true },
})
</script>

<template>
  <section class="insurance-cta">
    <Container>
      <div class="insurance-cta__card">
        <Image
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="insurance-cta__image"
        />

        <div class="insurance-cta__content">
          <h2 class="insurance-cta__title">{{ title }}</h2>
          <p class="insurance-cta__description">{{ description }}</p>
          <NuxtLink :to="button.link" class="insurance-cta__button" v-anchor>
            {{ button.text }}
          </NuxtLink>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.insurance-cta {
  padding: 17.7rem 0 16.2rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding: 12rem 2rem 10rem;
  }

  @media (max-width: $mobile) {
    padding: 11rem 1rem 6rem;
  }

  &__card {
    position: relative;
    min-height: 32rem;
    padding: 3.4rem 6rem 4.1rem 44.5rem;
    border-radius: 22px;
    background: $lightBlue;

    @media (max-width: $tablet) {
      min-height: 34rem;
      padding: 4rem 4rem 4rem 34rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding: 18rem 2rem 2.5rem;
      border-radius: 18px;
    }
  }

  &__image {
    position: absolute;
    top: -11.8rem;
    left: -1.8rem;
    width: 49rem;
    max-width: none;
    height: 48.3rem;
    object-fit: contain;
    pointer-events: none;

    @media (max-width: $tablet) {
      top: -6rem;
      left: -2rem;
      width: 36rem;
      height: 35.5rem;
    }

    @media (max-width: $mobile) {
      top: -8.5rem;
      left: 50%;
      width: 28rem;
      height: 27.6rem;
      transform: translateX(-50%);
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    min-width: 0;
    flex-direction: column;
  }

  &__title {
    max-width: 66rem;
    margin: 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;

    @media (max-width: $tablet) {
      font-size: 3rem;
    }

    @media (max-width: $mobile) {
      max-width: none;
      font-size: 2.6rem;
      text-align: center;
    }
  }

  &__description {
    max-width: 58rem;
    margin: 4rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      margin-top: 3rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      max-width: none;
      margin-top: 2.4rem;
      text-align: center;
    }
  }

  &__button {
    display: inline-flex;
    width: 100%;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    padding: 0 1.5rem;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    transition: background-color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
      margin-top: 3rem;
    }

    @media (max-width: $mobile) {
      height: 4.4rem;
      margin-top: 2.4rem;
      font-size: 1.6rem;
    }
  }

  &__button:hover {
    background: $blue;
  }
}
</style>
