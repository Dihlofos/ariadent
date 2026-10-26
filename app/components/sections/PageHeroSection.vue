<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: Object, required: true },
  description: { type: String, default: '' },
  image: { type: Object, required: true },
  variant: { type: String, default: 'default' },
  keepLeadWithFirstWord: { type: Boolean, default: false },
})

const titleParts = computed(() => {
  const [firstWord = '', ...rest] = props.title.text.trim().split(/\s+/)

  return {
    firstWord,
    rest: rest.join(' '),
  }
})
</script>

<template>
  <section id="hero" :class="['page-hero', `page-hero--${variant}`]">
    <Container>
      <div class="page-hero__card">
        <div class="page-hero__content">
          <h1 class="page-hero__title">
            <span class="page-hero__title-desktop">
              <span class="page-hero__title-lead">{{ title.lead }}</span>
              <span class="page-hero__title-text">{{ title.text }}</span>
            </span>
            <span class="page-hero__title-adaptive">
              <template v-if="keepLeadWithFirstWord">
                <span class="page-hero__title-prefix">
                  {{ title.lead }} {{ titleParts.firstWord }}
                </span>{{ ' ' }}<span>{{ titleParts.rest }}</span>
              </template>
              <template v-else>{{ title.lead }} {{ title.text }}</template>
            </span>
          </h1>

          <p v-if="description" class="page-hero__description">{{ description }}</p>
        </div>

        <div class="page-hero__portrait">
          <Image
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            class="page-hero__image"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.page-hero {
  padding-top: 3.9rem;

  @media (max-width: $tablet) {
    padding: 2rem 2rem 0;
  }

  @media (max-width: $mobile) {
    padding: 1rem 1rem 0;
  }

  &__card {
    position: relative;
    min-height: 47.6rem;
    border-radius: 22px;
    background:
      radial-gradient(75% 150% at 61% 55%, rgba(56, 157, 184, 0.62) 0%, rgba(56, 157, 184, 0) 64%),
      linear-gradient(90deg, #80D4EE 0%, #90D9EC 100%);

    @media (max-width: $tablet) {
      display: flex;
      min-height: 0;
      height: auto;
      overflow: hidden;
      flex-direction: column;
      background:
        linear-gradient(180deg, #87D8F0 0%, #8BD8EC 42%, #66BDD6 100%);
    }

    @media (max-width: $mobile) {
      border-radius: 18px;
    }
  }

  &__card::after {
    position: absolute;
    z-index: 2;
    border-radius: inherit;
    background: linear-gradient(90deg, #8CD9F4 24.7%, rgba(140, 217, 244, 0) 45.17%);
    content: '';
    inset: 0;
    pointer-events: none;

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__content {
    position: relative;
    z-index: 3;
    width: 80rem;
    padding: 4rem 0 4rem 5rem;

    @media (max-width: $tablet) {
      width: auto;
      padding: 3.5rem 3.5rem 0;
    }

    @media (max-width: $mobile) {
      padding: 3rem 2.4rem 0;
    }

    @media (max-width: 37.4rem) {
      padding-right: 1.2rem;
      padding-left: 1.2rem;
    }
  }

  &__title {
    max-width: 73rem;
    margin: 0;
    color: #063CAD;
    font-family: $monserrat;
    font-size: 7rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    @media (max-width: $tablet) {
      font-size: 4.4rem;
    }

    @media (max-width: $mobile) {
      font-size: 3rem;
    }

    @media (max-width: 37.4rem) {
      font-size: 2.6rem;
    }

    @media (max-width: 34rem) {
      font-size: 2.4rem;
    }
  }

  &__title-desktop {
    display: block;

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__title-lead,
  &__title-text {
    display: block;
  }

  &__title-adaptive {
    display: none;

    @media (max-width: $tablet) {
      display: inline;
    }
  }

  &__title-prefix {
    display: inline-block;
    white-space: nowrap;
  }

  &__description {
    max-width: 45rem;
    margin: 3.2rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      max-width: 42rem;
      margin-top: 2.6rem;
      font-size: 1.7rem;
    }

    @media (max-width: $mobile) {
      max-width: 100%;
      margin-top: 2.2rem;
      font-size: 1.6rem;
    }
  }

  &__portrait {
    position: absolute;
    z-index: 2;
    top: -3rem;
    right: -0.1rem;
    width: auto;
    height: calc(100% + 3rem);
    aspect-ratio: 873 / 848;
    pointer-events: none;

    @media (max-width: $tablet) {
      position: relative;
      top: auto;
      right: auto;
      bottom: auto;
      left: 50%;
      width: min(44rem, calc(100% - 4rem));
      height: auto;
      margin-top: 1.5rem;
      aspect-ratio: 873 / 848;
      clip-path: none;
      transform: translateX(-50%);
    }

    @media (max-width: $mobile) {
      width: min(34rem, calc(100% - 2rem));
      margin-top: 1rem;
    }
  }

  &__portrait picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    max-width: none;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
  }
}

.page-hero--patients .page-hero__card {
  min-height: 40.3rem;

  @media (max-width: $tablet) {
    min-height: 0;
    height: auto;
  }
}

.page-hero--patients .page-hero__title {
  max-width: 52rem;

  @media (max-width: $tablet) {
    max-width: 55rem;
  }
}

.page-hero--patients .page-hero__description {
  max-width: 50rem;

  @media (max-width: $mobile) {
    max-width: 100%;
  }
}

.page-hero--patients .page-hero__portrait {
  top: auto;
  right: 0;
  bottom: 0;
  width: 116rem;
  height: 44.2rem;

  @media (max-width: $tablet) {
    right: auto;
    left: auto;
    width: 100%;
    height: 35rem;
    margin-top: 1rem;
    aspect-ratio: auto;
    transform: none;
  }

  @media (max-width: $mobile) {
    width: 100%;
    height: 28rem;
    margin-top: 0.5rem;
  }
}

.page-hero--patients .page-hero__image {
  @media (max-width: $tablet) {
    object-fit: cover;
    object-position: 80% bottom;
  }
}
</style>
