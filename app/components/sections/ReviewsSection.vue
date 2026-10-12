<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  items: { type: Array, required: true },
  moreButton: { type: Object, required: true },
  video: { type: Object, required: true },
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="reviews" class="reviews">
    <Container>
      <SectionTitle :title="title" class="reviews__title" />
      <p class="reviews__description">{{ description }}</p>

      <div class="reviews__grid">
        <article v-for="item in items" :key="item.id" class="reviews__card">
          <div class="reviews__header">
            <Image
              :src="images.avatar"
              alt=""
              class="reviews__avatar"
              width="60"
              height="60"
            />
            <div class="reviews__author">
              <h3 class="reviews__name">{{ item.name }}</h3>
              <Image
                :src="images.stars"
                :alt="item.ratingLabel"
                class="reviews__stars"
                width="94"
                height="19"
              />
            </div>
          </div>

          <p class="reviews__text">{{ item.text }}</p>
        </article>
      </div>

      <a
        :href="moreButton.link"
        class="reviews__more"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{{ moreButton.text }}</span>
        <Image :src="images.arrow" alt="" width="17" height="17" />
      </a>

      <div class="reviews__video">
        <iframe
          width="560"
          height="315"
          :src="video.src"
          :title="video.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="lazy"
          allowfullscreen
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.reviews {
  padding: 7.5rem 0 9.6rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 7rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &__title {
    @media (max-width: $tablet) {
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      font-size: 3.6rem;
    }
  }

  &__description {
    margin: 4.9rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: 3rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  &__grid {
    display: grid;
    margin-top: 4.4rem;
    grid-template-columns: repeat(4, 26rem);
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 4.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    @media (max-width: $mobile) {
      gap: 2rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__card {
    min-height: 37.8rem;
    padding: 2.2rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      height: auto;
      min-height: 24rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding: 2rem;
    }
  }

  &__header {
    display: flex;
    height: 6.3rem;
    align-items: flex-start;
    gap: 1.8rem;

    @media (max-width: $mobile) {
      height: 5.5rem;
      gap: 1.2rem;
    }
  }

  &__avatar {
    width: 6rem;
    height: 6rem;
    flex: 0 0 auto;

    @media (max-width: $mobile) {
      width: 5rem;
      height: 5rem;
    }
  }

  &__author {
    display: flex;
    height: 6.3rem;
    min-width: 0;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: $mobile) {
      height: 5.5rem;
    }
  }

  &__name {
    margin: 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__stars {
    width: 9.4rem;
    height: 1.9rem;

    @media (max-width: $mobile) {
      width: 8rem;
      height: auto;
    }
  }

  &__text {
    margin: 1.7rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
    }
  }

  &__more {
    display: flex;
    width: 39.5rem;
    height: 4.4rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 4.6rem auto 0;
    border-radius: 20px;
    background: $blue;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      width: 39.5rem;
      margin-top: 4rem;
    }

    @media (max-width: $mobile) {
      width: 100%;
      max-width: 35rem;
      gap: 0.8rem;
      margin-top: 3rem;
      font-size: 1.5rem;
    }

    @media (max-width: 350px) {
      gap: 0.5rem;
      font-size: 1.3rem;
      white-space: nowrap;
    }
  }

  &__more:hover {
    background: $orange;
  }

  &__more img {
    transition: filter 0.3s ease;
  }

  &__more:hover img {
    filter: brightness(0) invert(1);
  }

  &__video {
    width: 76rem;
    height: 42.75rem;
    margin: 8.2rem auto 0;
    overflow: hidden;
    border-radius: 22px;

    @media (max-width: $tablet) {
      width: 100%;
      max-width: 76rem;
      height: auto;
      margin-top: 6rem;
      aspect-ratio: 16 / 9;
    }

    @media (max-width: $mobile) {
      margin-top: 4rem;
    }
  }

  &__video iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
