<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="approach" class="about-approach">
    <Container>
      <h2 class="about-approach__heading">{{ title }}</h2>

      <div class="about-approach__grid">
        <article v-for="item in items" :key="item.id" class="about-approach__card">
          <div class="about-approach__content">
            <h3 class="about-approach__title">{{ item.title }}</h3>
            <p class="about-approach__description">{{ item.description }}</p>
          </div>

          <Image
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            :class="['about-approach__image', `about-approach__image--${item.image.variant}`]"
          />
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-approach {
  padding: 6.1rem 0 12.8rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 7rem;
  }

  @media (max-width: $mobile) {
    padding: 4rem 1rem 7rem;
  }

  &__heading {
    margin: 0 0 4rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-align: center;

    @media (max-width: $tablet) {
      margin-bottom: 3.2rem;
      font-size: 3.2rem;
    }

    @media (max-width: $mobile) {
      margin-bottom: 3rem;
      font-size: 3rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 7rem;
      column-gap: 2rem;
    }

    @media (max-width: $mobile) {
      grid-template-columns: minmax(0, 1fr);
      gap: 7rem;
    }
  }

  &__card {
    position: relative;
    min-height: 26rem;
    padding: 1.8rem 2.2rem 14rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      min-height: 24rem;
      padding: 2rem 2rem 12rem;
    }

    @media (max-width: $mobile) {
      min-height: 23rem;
      padding: 2rem 2rem 14rem;
      border-radius: 18px;
    }

    @media (hover: hover) {
      &:hover .about-approach__image {
        scale: 1.04;
      }
    }
  }

  &__card:last-child:nth-child(odd) {
    @media (max-width: $tablet) {
      width: calc(50% - 1rem);
      grid-column: 1 / -1;
      justify-self: center;
    }

    @media (max-width: $mobile) {
      width: auto;
      grid-column: auto;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__title {
    margin: 0;
    color: #063CAD;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__description {
    margin: 1.6rem 0 0;
    color: #063CAD;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__image {
    position: absolute;
    z-index: 1;
    bottom: -6rem;
    left: 50%;
    max-width: none;
    pointer-events: none;
    scale: 1;
    transform: translateX(-50%);
    transform-origin: center;
    transition: scale 0.3s ease;

    @media (max-width: $tablet) {
      margin: 0;
    }
  }

  &__image--stars {
    bottom: -6.2rem;
    margin-left: -0.8rem;
    width: 18.8rem;

    @media (max-width: $tablet) {
      bottom: -3rem;
      width: 14rem;
    }

    @media (max-width: $mobile) {
      bottom: -2rem;
      width: 14rem;
    }
  }

  &__image--options {
    bottom: -6.2rem;
    width: 19.3rem;

    @media (max-width: $tablet) {
      bottom: -3rem;
      width: 13.7rem;
    }

    @media (max-width: $mobile) {
      bottom: -2rem;
      width: 14rem;
    }
  }

  &__image--denture {
    bottom: -5.8rem;
    margin-left: 0.3rem;
    width: 20rem;

    @media (max-width: $tablet) {
      bottom: -3rem;
      width: 15rem;
    }

    @media (max-width: $mobile) {
      bottom: -2rem;
      width: 15.5rem;
    }
  }
}
</style>
