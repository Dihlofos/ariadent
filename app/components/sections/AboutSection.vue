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

          <div v-if="item.logos" class="about__logos">
            <Image
              v-for="logo in item.logos"
              :key="logo.src"
              :src="logo.src"
              :alt="logo.alt"
              :width="logo.width"
              :height="logo.height"
              class="about__logo"
            />
          </div>

          <div v-else class="about__media">
            <Image
              :src="item.image.src"
              :alt="item.image.alt"
              :width="item.image.width"
              :height="item.image.height"
              class="about__image"
            />
          </div>
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

  &__grid {
    display: grid;
    margin-top: 6.3rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 4.5rem;
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }
  }

  &__card {
    display: grid;
    min-width: 0;
    min-height: 17.7rem;
    padding: 2rem;
    grid-template-columns: 30rem minmax(0, 1fr);
    column-gap: 1.4rem;
    border: 2px solid $white;
    border-radius: 22px;

    @media (max-width: $tablet) {
      display: flex;
      min-height: 0;
      flex-direction: column;
    }

    @media (max-width: $mobile) {
      padding: 1.5rem;
    }
  }

  &__card:nth-child(n + 3) {
    min-height: 22.4rem;

    @media (max-width: $tablet) {
      min-height: 0;
    }
  }

  &__content {
    min-width: 0;

    @media (max-width: $tablet) {
      width: 100%;
    }
  }

  &__card:nth-child(4) {
    grid-template-columns: 33rem minmax(0, 1fr);

    @media (max-width: $tablet) {
      grid-template-columns: none;
    }
  }

  &__card-title {
    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    min-height: 3.2rem;
    align-items: center;
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    overflow-wrap: break-word;

    @media (max-width: $tablet) {
      align-self: flex-start;
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
    overflow-wrap: break-word;
  }

  &__description p {
    margin: 0;
  }

  &__description p + p {
    margin-top: 1.5rem;
  }

  &__media {
    min-width: 0;
    min-height: 0;
    align-self: start;
    overflow: hidden;
    border-radius: 10px;

    picture {
      display: block;
      width: 100%;
    }

    @media (max-width: $tablet) {
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  &__logos {
    display: flex;
    min-width: 0;
    min-height: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem 1.4rem;
    border-radius: 10px;
    background: $white;

    @media (max-width: $tablet) {
      width: 100%;
      height: auto;
      margin-top: 2rem;
      padding: 2.5rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      padding: 2rem;
    }
  }

  &__logo {
    width: 100%;
    max-width: 14.4rem;
    height: auto;
  }
}
</style>
