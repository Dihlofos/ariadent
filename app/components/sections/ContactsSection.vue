<script setup>
defineProps({
  title: { type: String, required: true },
  titleTag: { type: String, default: 'h2' },
  compactTop: { type: Boolean, default: false },
  address: { type: Object, required: true },
  schedule: { type: Array, required: true },
  phones: { type: Array, required: true },
  appointmentButton: { type: Object, required: true },
  routeButton: { type: Object, required: true },
  map: { type: Object, required: true },
  images: { type: Object, required: true },
})
</script>

<template>
  <section
    id="contacts"
    class="contacts"
    :class="{ 'contacts--compact-top': compactTop }"
  >
    <Container>
      <SectionTitle :title="title" :tag="titleTag" class="contacts__title" />

      <div class="contacts__card">
        <div class="contacts__info">
          <div class="contacts__details">
            <div class="contacts__row contacts__row--address">
              <span class="contacts__icon">
                <Image
                  :src="images.marker"
                  alt=""
                  width="14"
                  height="20"
                  class="contacts__icon-image contacts__icon-image--marker"
                />
              </span>
              <address class="contacts__address">
                <span v-for="line in address.lines" :key="line" class="contacts__line">
                  {{ line }}
                </span>
              </address>
            </div>

            <div class="contacts__row contacts__row--schedule">
              <span class="contacts__icon">
                <Image
                  :src="images.time"
                  alt=""
                  width="20"
                  height="20"
                  class="contacts__icon-image contacts__icon-image--time"
                />
              </span>
              <div class="contacts__text">
                <span v-for="line in schedule" :key="line" class="contacts__line">
                  {{ line }}
                </span>
              </div>
            </div>

            <div class="contacts__row contacts__row--phones">
              <span class="contacts__icon">
                <Image
                  :src="images.phone"
                  alt=""
                  width="18"
                  height="18"
                  class="contacts__icon-image contacts__icon-image--phone"
                />
              </span>
              <div class="contacts__text">
                <a
                  v-for="phone in phones"
                  :key="phone.href"
                  :href="phone.href"
                  class="contacts__line contacts__phone"
                >
                  {{ phone.label }}
                </a>
              </div>
            </div>
          </div>

          <div class="contacts__actions">
            <NuxtLink :to="appointmentButton.link" class="contacts__appointment" v-anchor>
              {{ appointmentButton.text }}
            </NuxtLink>
            <a
              :href="routeButton.link"
              class="contacts__route"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ routeButton.text }}</span>
              <Image :src="images.markerSmall" alt="" width="24" height="24" />
            </a>
          </div>
        </div>

        <div class="contacts__map">
          <iframe
            width="600"
            height="450"
            :src="map.src"
            :title="map.title"
            frameborder="0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.contacts {
  padding: 8rem 0 5.3rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 6rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &--compact-top {
    padding-top: 4rem;
  }

  &__title {
    @media (max-width: $tablet) {
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      font-size: 3.6rem;
    }
  }

  &__card {
    display: grid;
    height: 45.2rem;
    margin-top: 3.4rem;
    padding: 4.2rem 3.5rem 4.2rem 3.3rem;
    grid-template-columns: 42.7rem 1fr;
    gap: 4rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      height: auto;
      margin-top: 3rem;
      padding: 3rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 3rem;
    }

    @media (max-width: $mobile) {
      margin-top: 2.5rem;
      padding: 2rem;
      gap: 2.5rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: $tablet) {
      gap: 3.5rem;
    }

    @media (max-width: $mobile) {
      gap: 3rem;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 2.6rem;

    @media (max-width: $mobile) {
      align-items: flex-start;
      gap: 1.5rem;
    }
  }

  &__row--schedule,
  &__row--phones {
    margin-top: 4.4rem;

    @media (max-width: $tablet) {
      margin-top: 3rem;
    }

    @media (max-width: $mobile) {
      margin-top: 2.5rem;
    }
  }

  &__icon {
    display: flex;
    width: 4.1rem;
    height: 4.1rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    @media (max-width: $mobile) {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  &__icon-image--marker {
    width: 2.4rem;
    height: 3.4rem;

    @media (max-width: $mobile) {
      width: 2rem;
      height: auto;
    }
  }

  &__icon-image--time,
  &__icon-image--phone {
    width: 3.4rem;
    height: 3.4rem;

    @media (max-width: $mobile) {
      width: 3rem;
      height: 3rem;
    }
  }

  &__address {
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

  &__text {
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__line {
    display: block;
  }

  &__phone {
    color: inherit;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;

    @media (max-width: $mobile) {
      display: flex;
      min-height: 3rem;
      align-items: center;
    }
  }

  &__phone:hover {
    color: $orange;
  }

  &__actions {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.2rem;

    @media (max-width: $tablet) {
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    @media (max-width: $mobile) {
      align-items: stretch;
      flex-direction: column;
      gap: 1.2rem;
    }
  }

  &__appointment {
    display: inline-flex;
    width: 24.1rem;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
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
      height: 4.2rem;
    }

    @media (max-width: $mobile) {
      width: 100%;
      height: 4.4rem;
      font-size: 1.6rem;
    }
  }

  &__appointment:hover {
    background: $orange;
  }

  &__route {
    display: inline-flex;
    width: 26.7rem;
    height: 3.7rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0 1.5rem;
    border: 1px solid $blue;
    border-radius: 20px;
    background: $white;
    color: $blue;
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
      height: 4.2rem;
    }

    @media (max-width: $mobile) {
      width: 100%;
      height: 4.4rem;
      font-size: 1.6rem;
    }
  }

  &__route:hover {
    background: $blue;
    color: $white;
  }

  &__route img {
    width: 2.4rem;
    height: 2.4rem;

    @media (max-width: $mobile) {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  &__map {
    min-width: 0;
    overflow: hidden;
    border-radius: 7px;

    @media (max-width: $tablet) {
      width: 100%;
      aspect-ratio: 16 / 9;
    }

    @media (max-width: $mobile) {
      min-height: 20rem;
      aspect-ratio: 16 / 9;
    }
  }

  &__map iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>
