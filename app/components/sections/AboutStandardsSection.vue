<script setup>
defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section id="standards" class="about-standards">
    <Container>
      <SectionTitle :title="title" class="about-standards__heading" />

      <div class="about-standards__grid">
        <article v-for="item in items" :key="item.id" class="about-standards__card">
          <p class="about-standards__description">
            {{ item.intro }}
            <span class="about-standards__standard"><span>{{ item.connector }}&nbsp;</span><strong>{{ item.standard }}</strong></span>
            <strong class="about-standards__abbreviation">{{ item.abbreviation }}</strong>
          </p>

          <Image
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            :class="['about-standards__logo', `about-standards__logo--${item.image.variant}`]"
          />
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-standards {
  padding: 6.2rem 0 11.1rem;

  @media (max-width: $tablet) {
    padding: 6rem 2rem 8rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem 6rem;
  }
}

.about-standards__heading {
  max-width: 90rem;
  line-height: 120%;
  transform: translateY(-0.7rem);

  @media (max-width: $mobile) {
    font-size: 2.8rem;
  }

  @media (max-width: 360px) {
    font-size: 2.6rem;
  }

  @media (max-width: 330px) {
    font-size: 2.3rem;
  }
}

.about-standards__grid {
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
  }
}

.about-standards__card {
  display: flex;
  min-height: 24.1rem;
  align-items: center;
  padding: 3.2rem 2rem 2rem;
  border-radius: 22px;
  background: $white;
  flex-direction: column;

  @media (max-width: $mobile) {
    min-height: 22rem;
    padding: 3rem 1.5rem;
    border-radius: 18px;
  }
}

.about-standards__description {
  max-width: 36rem;
  margin: 0;
  color: $blue;
  font-family: $monserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.about-standards__description strong {
  font-weight: 700;
}

.about-standards__standard {
  white-space: nowrap;

  @media (max-width: $tablet) {
    white-space: normal;
  }
}

.about-standards__abbreviation {
  display: block;
}

.about-standards__logo {
  display: block;
  margin-top: 2.7rem;
  object-fit: contain;
}

.about-standards__logo--ont {
  width: 19.9rem;

  @media (max-width: $tablet) {
    width: 60%;
  }
}

.about-standards__logo--krtp {
  margin-top: 3.4rem;
  width: 29.8rem;

   @media (max-width: $tablet) {
      width: 70%;
   }

  @media (max-width: $mobile) {
    width: 100%;
    max-width: 29.8rem;
    height: auto;
  }
}
</style>
