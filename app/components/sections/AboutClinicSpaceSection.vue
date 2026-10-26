<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  arrow: { type: String, required: true },
  ui: { type: Object, required: true },
})

const previousButton = ref(null)
const nextButton = ref(null)
const isPreviousDisabled = ref(true)
const isNextDisabled = ref(false)

function updateNavigationState(swiper) {
  isPreviousDisabled.value = swiper.isBeginning
  isNextDisabled.value = swiper.isEnd
}

const breakpoints = {
  744: {
    slidesPerView: 1.25,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
  },
  1025: {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesOffsetBefore: 0,
  },
}
</script>

<template>
  <section id="clinic-space" class="clinic-space">
    <Container>
      <SectionTitle :title="title" class="clinic-space__heading" />

      <Swiper
        class="clinic-space__slider"
        :modules="[Navigation]"
        slides-per-view="auto"
        :space-between="20"
        :slides-offset-before="10"
        :slides-per-group="1"
        :navigation="{ prevEl: previousButton, nextEl: nextButton }"
        :breakpoints="breakpoints"
        :resistance-ratio="0"
        :watch-overflow="true"
        @swiper="updateNavigationState"
        @slide-change="updateNavigationState"
        @breakpoint="updateNavigationState"
      >
        <SwiperSlide v-for="item in items" :key="item.id" class="clinic-space__slide">
          <article class="clinic-space__card">
            <Image
              :src="item.image.src"
              :alt="item.image.alt"
              :width="item.image.width"
              :height="item.image.height"
              class="clinic-space__image"
            />

            <div class="clinic-space__content">
              <h3 class="clinic-space__title">{{ item.title }}</h3>
              <p class="clinic-space__description">{{ item.description }}</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="clinic-space__controls">
        <button
          ref="previousButton"
          class="clinic-space__button clinic-space__button--previous"
          type="button"
          :disabled="isPreviousDisabled"
          :aria-label="ui.sliderPrevious"
        >
          <Image :src="arrow" alt="" width="16" height="27" class="clinic-space__arrow" />
        </button>

        <button
          ref="nextButton"
          class="clinic-space__button clinic-space__button--next"
          type="button"
          :disabled="isNextDisabled"
          :aria-label="ui.sliderNext"
        >
          <Image :src="arrow" alt="" width="16" height="27" class="clinic-space__arrow" />
        </button>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.clinic-space {
  padding: 8.3rem 0 3.9rem;
  overflow: hidden;

  @media (max-width: $tablet) {
    padding: 6rem 0 4rem;
  }

  @media (max-width: $mobile) {
    padding: 5rem 0 3rem;
  }
}

.clinic-space__heading {
  max-width: 70rem;
  margin-right: auto;
  margin-left: auto;
  line-height: 120%;
  transform: translateY(-0.7rem);

  @media (max-width: $tablet) {
    width: calc(100% - 4rem);
  }

  @media (max-width: $mobile) {
    width: calc(100% - 2rem);
  }
}

.clinic-space__slider {
  margin-top: 3.9rem;

  @media (max-width: $tablet) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    margin-top: 5rem;
  }

  @media (max-width: $mobile) {
    margin-top: 3.5rem;
  }
}

.clinic-space__slide {
  height: auto;

  @media (max-width: $mobile) {
    width: calc(80% - 1rem);
  }
}

.clinic-space__card {
  display: grid;
  min-height: 35.5rem;
  padding: 2.9rem 4.5rem 2.6rem 2.8rem;
  border-radius: 22px;
  background: $white;
  grid-template-columns: 30rem minmax(0, 1fr);
  column-gap: 2.2rem;

  @media (max-width: $mobile) {
    height: 100%;
    padding: 2rem;
    border-radius: 18px;
    grid-template-columns: minmax(0, 1fr);
  }
}

.clinic-space__image {
  display: block;
  width: 30rem;
  height: 30rem;
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  object-fit: contain;

  @media (max-width: $mobile) {
    width: 100%;
    max-width: 30rem;
    height: auto;
    margin: 0 auto;
  }
}

.clinic-space__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: $mobile) {
    margin-top: 2rem;
  }
}

.clinic-space__title {
  margin: 0;
  color: #063CAD;
  font-family: $monserrat;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.clinic-space__description {
  margin: 0;
  color: #063CAD;
  font-family: $monserrat;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: $mobile) {
    margin-top: 1.5rem;
  }
}

.clinic-space__controls {
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  gap: 4rem;

  @media (max-width: $tablet) {
    display: none;
  }
}

.clinic-space__button {
  display: flex;
  width: 4.8854rem;
  height: 4.8854rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: $blue;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;

  @media (hover: hover) {
    &:hover:not(.swiper-button-disabled):not(:disabled) {
      background: $orange;
      transform: scale(1.08);
    }
  }

  @media (max-width: $mobile) {
    width: 4.4rem;
    height: 4.4rem;
  }

  &.swiper-button-disabled,
  &:disabled {
    cursor: default;
    opacity: 0.35;
  }
}

.clinic-space__button--previous .clinic-space__arrow {
  transform: translateX(-0.2rem);
}

.clinic-space__button--next .clinic-space__arrow {
  transform: translateX(0.2rem) rotate(180deg);
}

.clinic-space__arrow {
  display: block;
  width: 1.6rem;
  height: 2.7rem;
}
</style>
