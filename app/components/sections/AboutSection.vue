<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="about" class="about">
    <Container>
      <SectionTitle :title="title" tone="light" class="about__title" />

      <div class="about__grid">
        <article v-for="item in items" :key="item.id" class="about__card">
          <div class="about__content">
            <h3 class="about__card-title">{{ item.title }}</h3>
            <div class="about__description">
              <p v-for="paragraph in item.description" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <Image
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            class="about__image"
          />
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about {
  padding: 8.8rem 0 8.1rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding: 6rem 2rem;
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

  &__grid {
    display: grid;
    margin-top: 6.3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 17.7rem 22.4rem;
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 4.5rem;
      grid-template-rows: none;
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }
  }

  &__card {
    position: relative;
    padding: 2rem;
    border: 2px solid $white;
    border-radius: 22px;

    @media (max-width: $tablet) {
      display: flex;
      min-width: 0;
      flex-direction: column;
    }

    @media (max-width: $mobile) {
      padding: 1.5rem;
    }
  }

  &__content {
    width: 30rem;

    @media (max-width: $tablet) {
      width: 100%;
    }
  }

  &__card:nth-child(4) .about__content {
    width: 33rem;

    @media (max-width: $tablet) {
      width: 100%;
    }
  }

  &__card-title {
    display: inline-flex;
    height: 3.2rem;
    align-items: center;
    margin: 0;
    padding: 0 1rem;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;

    @media (max-width: $tablet) {
      align-self: flex-start;
      height: auto;
      min-height: 3.2rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      line-height: 120%;
      white-space: normal;
    }

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__description {
    margin-top: 1.1rem;
    color: $white;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__description p {
    margin: 0;
  }

  &__description p + p {
    margin-top: 1.5rem;
  }

  &__image {
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    width: auto;
    height: calc(100% - 3.6rem);
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: $tablet) {
      position: static;
      width: 100%;
      height: 22rem;
      margin-top: 2rem;
    }

    @media (max-width: $mobile) {
      height: 20rem;
      margin-top: 1.5rem;
    }
  }

  &__card:nth-child(4) &__image {
    @media (max-width: $tablet) {
      background: $white;
      object-fit: contain;
    }
  }
}
</style>
