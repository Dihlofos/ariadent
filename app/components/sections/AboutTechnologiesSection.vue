<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="technologies" class="about-technologies">
    <Container>
      <SectionTitle :title="title" class="about-technologies__heading" />

      <div class="about-technologies__grid">
        <article v-for="item in items" :key="item.id" class="about-technologies__card">
          <div class="about-technologies__content">
            <h3 class="about-technologies__title">{{ item.title }}</h3>
            <p class="about-technologies__description">{{ item.description }}</p>
          </div>

          <Image
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            :class="['about-technologies__image', `about-technologies__image--${item.image.variant}`]"
          />
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-technologies {
  padding: 6.2rem 0 9.8rem;
  overflow: hidden;

  @media (max-width: $tablet) {
    padding: 6rem 2rem 5rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem 4rem;
  }
}

.about-technologies__heading {
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
  line-height: 120%;
  transform: translateY(-0.7rem);

  @media (max-width: $mobile) {
    font-size: 3rem;
  }
}

.about-technologies__grid {
  display: grid;
  margin-top: 6rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4rem;

  @media (max-width: $tablet) {
    gap: 2rem;
  }

  @media (max-width: $mobile) {
    margin-top: 4rem;
    grid-template-columns: minmax(0, 1fr);
    row-gap: 5rem;
  }
}

.about-technologies__card {
  position: relative;
  min-height: 14.7rem;
  padding: 2rem 2.3rem;
  border-radius: 22px;
  background: $blue;

  @media (max-width: $tablet) {
    min-height: 17rem;
    padding: 2rem 2rem 15rem;
  }

  @media (max-width: $mobile) {
    min-height: 18rem;
    padding: 2rem 2rem 13.2rem;
    border-radius: 18px;
  }
}

.about-technologies__content {
  position: relative;
  z-index: 2;
  max-width: 29rem;

  @media (max-width: $tablet) {
    max-width: none;
  }
}

.about-technologies__title {
  margin: 0;
  color: $white;
  font-family: $monserrat;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.about-technologies__description {
  margin: 1.4rem 0 0;
  color: $white;
  font-family: $monserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.about-technologies__image {
  position: absolute;
  z-index: 1;
  right: 2.7rem;
  bottom: -5.4rem;
  max-width: none;
  object-fit: contain;
  pointer-events: none;

  @media (max-width: $tablet) {
    right: auto;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: $mobile) {
    bottom: -2rem;
  }
}

.about-technologies__image--cad-cam {
  width: 21.7rem;
  height: 19.1rem;

  @media (max-width: $tablet) {
    width: 18.4rem;
    height: 16.2rem;
  }

  @media (max-width: $mobile) {
    width: 15rem;
    height: 13.2rem;
  }
}

.about-technologies__image--materials {
  right: 3.6rem;
  width: 17.5rem;
  height: 19.1rem;

  @media (max-width: $tablet) {
    right: auto;
    width: 14.8rem;
    height: 16.2rem;
  }

  @media (max-width: $mobile) {
    right: auto;
    width: 12.1rem;
    height: 13.2rem;
  }
}
</style>
