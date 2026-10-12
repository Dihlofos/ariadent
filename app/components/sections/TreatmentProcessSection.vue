<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  images: { type: Object, required: true },
})

function formatStepNumber(index) {
  return `${String(index + 1).padStart(2, '0')}.`
}
</script>

<template>
  <section id="treatment-process" class="treatment-process">
    <Container>
      <SectionTitle :title="title" tone="light" class="treatment-process__heading" />

      <ol class="treatment-process__list">
        <li v-for="(item, index) in items" :key="item.id" class="treatment-process__card">
          <span class="treatment-process__number" aria-hidden="true">
            {{ formatStepNumber(index) }}
          </span>

          <h3 class="treatment-process__card-title">{{ item.title }}</h3>

          <p class="treatment-process__description">{{ item.description }}</p>

          <span class="treatment-process__check" aria-hidden="true">
            <Image
              :src="images.check"
              alt=""
              class="treatment-process__check-image"
              width="48"
              height="56"
            />
          </span>
        </li>
      </ol>
    </Container>
  </section>
</template>

<style lang="scss">
.treatment-process {
  padding: 8.2rem 0 10rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding: 7rem 2rem 8rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem 6rem;
  }

  &__heading {
    @media (max-width: $tablet) {
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      font-size: 4rem;
    }
  }

  &__list {
    display: flex;
    margin: 7.9rem 0 0;
    padding: 0;
    flex-direction: column;
    gap: 1.9rem;
    list-style: none;

    @media (max-width: $tablet) {
      gap: 1.5rem;
      margin-top: 6rem;
    }

    @media (max-width: $mobile) {
      gap: 1.2rem;
      margin-top: 4rem;
    }
  }

  &__card {
    display: grid;
    min-height: 10.2rem;
    padding: 2rem 3rem;
    grid-template-columns: 7rem 24rem minmax(0, 1fr) 4.13rem;
    align-items: center;
    column-gap: 3rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      min-height: 13rem;
      grid-template-columns: 6rem 18rem minmax(0, 1fr) 4.13rem;
      column-gap: 2rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding: 2rem 1.5rem;
      grid-template-columns: 7rem minmax(0, 1fr) 4.13rem;
      grid-template-rows: auto auto;
      column-gap: 1.4rem;
      row-gap: 1.5rem;
    }
  }

  &__number {
    color: $orange;
    font-family: $monserrat;
    font-size: 5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: $tablet) {
      font-size: 4rem;
    }

    @media (max-width: $mobile) {
      grid-column: 1;
      grid-row: 1;
      white-space: nowrap;
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

    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      grid-column: 2;
      grid-row: 1;
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

    @media (max-width: $mobile) {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }

  &__check {
    position: relative;
    width: 4.13rem;
    height: 4.13rem;
    border-radius: 5px;
    background: $blue;

    @media (max-width: $mobile) {
      grid-column: 3;
      grid-row: 1;
    }
  }

  &__check-image {
    position: absolute;
    top: -2rem;
    left: -1.1rem;
    width: 4.8rem;
    max-width: none;
    height: 5.6rem;
  }
}
</style>
