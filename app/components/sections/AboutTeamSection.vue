<script setup>
defineProps({
  title: { type: String, required: true },
  members: { type: Array, required: true },
})
</script>

<template>
  <section id="team" class="about-team">
    <Container>
      <SectionTitle :title="title" tone="light" class="about-team__heading" />

      <div class="about-team__grid">
        <article v-for="member in members" :key="member.id" class="about-team__card">
          <Image
            :src="member.image.src"
            :alt="member.image.alt"
            :width="member.image.width"
            :height="member.image.height"
            class="about-team__image"
          />

          <div class="about-team__content">
            <h3 class="about-team__name">{{ member.name }}</h3>
            <p class="about-team__role">{{ member.role }}</p>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.about-team {
  padding: 7.5rem 0 9.8rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding: 6rem 2rem 8rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 1rem 6rem;
  }
}

.about-team__grid {
  display: grid;
  margin-top: 5.1rem;
  grid-template-columns: repeat(3, 26rem);
  justify-content: center;
  gap: 4rem;

  @media (max-width: $tablet) {
    grid-template-columns: repeat(2, 26rem);
    justify-content: center;
    gap: 3rem;
  }

  @media (max-width: $mobile) {
    margin-top: 4rem;
    grid-template-columns: minmax(0, 26rem);
  }
}

.about-team__card {
  position: relative;
  height: 38rem;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background: transparent;

  &::after {
    position: absolute;
    z-index: 1;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(6, 60, 173, 0) 55%,
      $blue 95%,
      $blue 100%
    );
    content: '';
    pointer-events: none;
  }
}

.about-team__card picture {
  display: block;
  width: 100%;
  height: 100%;
}

.about-team__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-team__content {
  position: absolute;
  z-index: 2;
  top: 28.5rem;
  right: 2rem;
  left: 2rem;
  text-align: center;
}

.about-team__name {
  display: inline-flex;
  min-height: 3.2rem;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 1.5rem;
  border-radius: 20px;
  background: $orange;
  color: $white;
  font-family: $monserrat;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.about-team__role {
  margin: 1.2rem 0 0;
  color: $white;
  font-family: $monserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
