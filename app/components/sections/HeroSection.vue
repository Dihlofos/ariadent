<script setup>
defineProps({
  title: { type: Object, required: true },
  subtitle: { type: Array, default: () => [] },
  button: { type: Object, default: () => ({}) },
  secondaryButton: { type: Object, default: () => ({}) },
  images: { type: Object, required: true },
})
</script>

<template>
  <section id="hero" class="hero">
    <Container>
      <div class="hero__stage">
        <div class="hero__card">
          <div class="hero__content">
            <Image
              :src="images.logo"
              alt=""
              class="hero__logo"
              width="55"
              height="55"
              loading="eager"
            />

            <h1 class="hero__title">
              <span class="hero__title-regular">{{ title.regular }}</span>
              <span class="hero__title-bold">{{ title.bold }}</span>
            </h1>

            <p class="hero__subtitle">
              <span v-for="line in subtitle" :key="line" class="hero__subtitle-line">{{ line }}</span>
            </p>

            <div class="hero__actions">
              <a v-if="button?.text" :href="button.link" class="hero__button hero__button--primary">
                {{ button.text }}
              </a>
              <a
                v-if="secondaryButton?.text"
                :href="secondaryButton.link"
                class="hero__button hero__button--secondary"
              >
                <span>{{ secondaryButton.text }}</span>
                <Image :src="images.arrow" alt="" width="17" height="17" />
              </a>
            </div>
          </div>

          <div class="hero__portrait hero__portrait--card" aria-hidden="true">
            <Image
              :src="images.portrait"
              alt=""
              class="hero__portrait-image"
              width="1536"
              height="1024"
              loading="eager"
            />
          </div>
        </div>

        <div class="hero__portrait hero__portrait--desktop" aria-hidden="true">
          <Image
            :src="images.portrait"
            alt=""
            class="hero__portrait-image"
            width="1536"
            height="1024"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.hero {
  @media (max-width: $tablet) {
    padding: 0 2rem;
  }

  @media (max-width: $mobile) {
    padding: 0 1rem;
  }

  &__stage {
    position: relative;
    height: 52.8rem;

    @media (max-width: $tablet) {
      height: 50rem;
      overflow: hidden;
      border-radius: 22px;
    }

    @media (max-width: $mobile) {
      height: 76rem;
      border-radius: 18px;
    }
  }

  &__card {
    position: absolute;
    top: 4.1rem;
    left: 0;
    width: 100%;
    height: 48.7rem;
    overflow: hidden;
    border-radius: 22px;
    background:
      linear-gradient(270deg, #8CD9F4 34.4%, rgba(140, 217, 244, 0) 52.82%),
      radial-gradient(100% 120% at 0% 100%, #204F61 0%, rgba(32, 79, 97, 0) 55%),
      linear-gradient(90deg, #78C2DA 0%, #98D3E7 58%, #8CD9F4 100%),
      #204F61;

    @media (max-width: $tablet) {
      top: 2rem;
      height: 46rem;
    }

    @media (max-width: $mobile) {
      top: 1rem;
      height: 74rem;
      border-radius: 18px;
      background:
        linear-gradient(180deg, #8CD9F4 0%, #8CD9F4 48%, rgba(140, 217, 244, 0.76) 64%, rgba(140, 217, 244, 0) 82%),
        linear-gradient(90deg, #78C2DA 0%, #98D3E7 58%, #8CD9F4 100%),
        #204F61;
    }
  }

  &__portrait {
    position: absolute;
    z-index: 1;
    top: 0.6rem;
    left: 1.4rem;
    width: 78.5rem;
    height: 52.2rem;
    pointer-events: none;

    @media (max-width: $tablet) {
      top: 4rem;
      left: clamp(-8rem, calc((100vw - 102.4rem) * 0.28), 0rem);
      width: 66rem;
      height: 44rem;
    }

    @media (max-width: $mobile) {
      top: auto;
      bottom: 1rem;
      left: 50%;
      width: 57rem;
      height: 38rem;
      transform: translateX(-50%);
    }
  }

  &__portrait--desktop {
    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__portrait--card {
    display: none;

    @media (max-width: $tablet) {
      top: 2rem;
      display: block;
    }

    @media (max-width: $mobile) {
      top: auto;
      bottom: 0;
    }
  }

  &__portrait-image {
    width: 100%;
    max-width: none;
    height: 100%;

    @media (max-width: $tablet) {
      object-fit: contain;
    }
  }

  &__content {
    position: absolute;
    z-index: 3;
    top: 5.1rem;
    right: 4.2rem;
    display: flex;
    width: 58.6rem;
    flex-direction: column;
    align-items: center;

    @media (max-width: $tablet) {
      top: 4rem;
      right: 2rem;
      width: clamp(38rem, 48vw, 48rem);
    }

    @media (max-width: $mobile) {
      top: 3rem;
      right: auto;
      left: 50%;
      width: calc(100% - 3.2rem);
      transform: translateX(-50%);
    }
  }

  &__logo {
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 2rem;

    @media (max-width: $tablet) {
      width: 4.5rem;
      height: 4.5rem;
      margin-bottom: 1.2rem;
    }

    @media (max-width: $mobile) {
      width: 4.2rem;
      height: 4.2rem;
      margin-bottom: 1rem;
    }
  }

  &__title {
    margin: 0 0 2rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 7rem;
    font-style: normal;
    line-height: 100%;
    text-align: center;

    @media (max-width: $tablet) {
      margin-bottom: 1.2rem;
      font-size: 5rem;
    }

    @media (max-width: $mobile) {
      margin-bottom: 1.4rem;
      font-size: clamp(3.2rem, 10vw, 4.4rem);
    }
  }

  &__title-regular {
    display: block;
    font-weight: 400;
  }

  &__title-bold {
    display: block;
    font-weight: 700;
  }

  &__subtitle {
    margin: 0 0 3.09rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
  }

  &__subtitle-line {
    display: block;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.65rem;
    transform: translateY(1.8rem);

    @media (max-width: $tablet) {
      flex-wrap: wrap;
      gap: 1rem;
      transform: none;
    }

    @media (max-width: $mobile) {
      width: 100%;
      flex-direction: column;
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    height: 3.2rem;
    padding: 0 1.5rem;
    border: 0.1rem solid $blue;
    border-radius: 20px;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    white-space: nowrap;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
      padding-right: 1.2rem;
      padding-left: 1.2rem;
      font-size: 1.5rem;
    }

    @media (max-width: $mobile) {
      box-sizing: border-box;
      width: 100%;
      height: 4.2rem;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      font-size: 1.5rem;
    }
  }

  &__button--primary {
    background: $blue;
    color: $white;
  }

  &__button--primary:hover {
    border-color: $orange;
    background: $orange;
  }

  &__button--secondary {
    gap: 1rem;
    background: transparent;

    @media (max-width: $tablet) {
      background: rgba(140, 217, 244, 0.92);
    }

    @media (max-width: $mobile) {
      background: transparent;
    }
  }

  &__button--secondary:hover {
    background: $blue;
    color: $white;
  }
}
</style>
