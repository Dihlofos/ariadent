<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section class="directions">
    <Container>
      <h2 class="directions__title">{{ title }}</h2>

      <div class="directions__list">
        <article v-for="item in items" :key="item.id" class="directions__card">
          <div class="directions__header">
            <Image
              :src="item.icon.src"
              :alt="item.icon.alt"
              width="38"
              height="38"
              class="directions__icon"
            />
            <h3 class="directions__card-title">{{ item.title }}</h3>
          </div>

          <div class="directions__content">
            <p v-for="paragraph in item.description" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.directions {
   margin-top: 4rem;
  padding: 9rem 0 11.3rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding: 6rem 2rem 7rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &__title {
    margin: 0;
    color: $white;
    font-family: $monserrat;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      font-size: 3.2rem;
    }

    @media (max-width: $mobile) {
      font-size: 3rem;
    }
  }

  &__list {
    display: grid;
    margin-top: 4.9rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 4rem;
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3rem;
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__card {
    min-height: 26rem;
    padding: 3.8rem 4.2rem;
    border-radius: 22px;
    background: $lightBlue;

    @media (max-width: $tablet) {
      padding: 3rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding: 2.6rem 2rem 3rem;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  &__icon {
    width: 3.8rem;
    height: 3.8rem;
    flex: 0 0 auto;
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
      font-size: 1.7rem;
    }
  }

  &__content {
    margin-top: 2.3rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $mobile) {
      margin-top: 2rem;
      font-size: 1.6rem;
    }
  }

  &__content p {
    margin: 0;
  }

  &__content p + p {
    margin-top: 1.5rem;
  }
}
</style>
