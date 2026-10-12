<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="benefits" class="benefits">
    <Container>
      <div class="benefits__grid">
        <article v-for="item in items" :key="item.id" class="benefits__card">
          <div class="benefits__content">
            <h3 class="benefits__title">{{ item.title }}</h3>

            <p class="benefits__description">{{ item.description }}</p>
          </div>

          <Image
            :src="item.image.src"
            :alt="item.image.alt"
            :class="['benefits__image', `benefits__image--${item.image.variant}`]"
            :width="item.image.width"
            :height="item.image.height"
          />
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.benefits {
  padding: 5.3rem 0 2.2rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 3rem;
  }

  @media (max-width: $mobile) {
    padding: 2.5rem 1rem 3rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 26rem);
    gap: 4rem;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }
  }

  &__card {
    position: relative;
    min-height: 15.6rem;
    padding: 2rem 2.1rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      height: auto;
      min-height: 17rem;
      padding: 2rem;
    }

    @media (max-width: $mobile) {
      min-height: 18rem;
      border-radius: 18px;
    }

    @media (hover: hover) {
      &:hover .benefits__image {
        scale: 1.04;
      }
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__title {
    margin: 0 0 0.9rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

     max-width: 70%;

    @media (max-width: $tablet) {
      width: calc(100% - 14rem);
    }

    @media (max-width: $mobile) {
      width: calc(100% - 12rem);
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

     @media (max-width: $tablet) {
      width: calc(100% - 10rem);
    }
  }

  &__image {
    position: absolute;
    z-index: 1;
    max-width: none;
    pointer-events: none;
    scale: 1;
    transform-origin: center;
    transition: scale 0.3s ease;
  }

  &__image--check {
    top: -6.3rem;
    right: -2.4rem;
    width: 13.2rem;
    height: 13.6rem;

    @media (max-width: $tablet) {
      top: 1.5rem;
      right: -1rem;
      width: 13rem;
      height: 13.37rem;
    }

    @media (max-width: $mobile) {
      top: 50%;
      right: 0.8rem;
      width: 12rem;
      height: 12.35rem;
      transform: translateY(-50%);
    }
  }

  &__image--tooth {
    top: -6.2rem;
    right: -2.4rem;
    width: 13.2rem;
    height: 13.6rem;

    @media (max-width: $tablet) {
      top: 1.5rem;
      right: -1rem;
      width: 13rem;
      height: 13.42rem;
    }

    @media (max-width: $mobile) {
      top: 50%;
      right: 0.8rem;
      width: 12rem;
      height: 12.39rem;
      transform: translateY(-50%);
    }
  }

  &__image--coins {
    top: -6.45rem;
    right: -5.2rem;
    width: 15.5rem;
    height: 15.5rem;

    @media (max-width: $tablet) {
      top: 1.5rem;
      right: -1.5rem;
      width: 14.5rem;
      height: 14.5rem;
    }

    @media (max-width: $mobile) {
      top: 50%;
      right: -0.5rem;
      width: 13.5rem;
      height: 13.5rem;
      transform: translateY(-50%);
    }
  }

  &__image--clock {
    top: -6.3rem;
    right: -3.5rem;
    width: 15.4rem;
    height: 15.85rem;

    @media (max-width: $tablet) {
      top: 1.5rem;
      right: -1rem;
      width: 13rem;
      height: 13.37rem;
    }

    @media (max-width: $mobile) {
      top: 50%;
      right: 0.8rem;
      width: 12rem;
      height: 12.35rem;
      transform: translateY(-50%);
    }
  }
}
</style>
