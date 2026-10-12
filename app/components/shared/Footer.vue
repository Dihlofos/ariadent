<script setup>
defineProps({
  footerData: { type: Object, required: true },
})
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__grid">
        <div class="footer__brand">
          <a :href="footerData.brand.link" class="footer__logo-link" v-anchor>
            <Image
              :src="footerData.images.logo"
              :alt="footerData.brand.alt"
              width="122"
              height="34"
              class="footer__logo"
            />
          </a>
          <a :href="footerData.privacy.link" class="footer__privacy">
            {{ footerData.privacy.text }}
          </a>
        </div>

        <div class="footer__column footer__column--contacts">
          <div class="footer__row">
            <span class="footer__icon">
              <Image
                :src="footerData.images.marker"
                alt=""
                width="14"
                height="20"
                class="footer__icon-image footer__icon-image--marker"
              />
            </span>
            <address class="footer__address">
              <span v-for="line in footerData.address" :key="line" class="footer__line">
                {{ line }}
              </span>
            </address>
          </div>

          <div class="footer__row footer__row--second">
            <span class="footer__icon">
              <Image
                :src="footerData.images.phone"
                alt=""
                width="18"
                height="18"
                class="footer__icon-image footer__icon-image--large"
              />
            </span>
            <div class="footer__text">
              <a
                v-for="phone in footerData.phones"
                :key="phone.href"
                :href="phone.href"
                class="footer__line footer__link"
              >
                {{ phone.label }}
              </a>
            </div>
          </div>
        </div>

        <div class="footer__column footer__column--details">
          <div class="footer__row">
            <span class="footer__icon">
              <Image
                :src="footerData.images.time"
                alt=""
                width="20"
                height="20"
                class="footer__icon-image footer__icon-image--large"
              />
            </span>
            <div class="footer__text">
              <span v-for="line in footerData.schedule" :key="line" class="footer__line">
                {{ line }}
              </span>
            </div>
          </div>

          <div class="footer__row footer__row--second">
            <span class="footer__icon">
              <Image
                :src="footerData.images.email"
                alt=""
                width="34"
                height="28"
                class="footer__icon-image footer__icon-image--email"
              />
            </span>
            <a :href="`mailto:${footerData.email}`" class="footer__email">
              {{ footerData.email }}
            </a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss">
.footer {
  height: 31.95rem;
  padding: 7.9rem 0 10.05rem;
  background: $white;

  @media (max-width: $tablet) {
    height: auto;
    padding: 5rem 2rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 2rem;
  }

  &__grid {
    display: grid;
    height: 14rem;
    grid-template-columns: 32.5rem 35.5rem 1fr;
    gap: 4rem;

    @media (max-width: $tablet) {
      height: auto;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4rem 3rem;
    }

    @media (max-width: $mobile) {
      grid-template-columns: minmax(0, 1fr);
      gap: 3.5rem;
    }
  }

  &__brand {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: $tablet) {
      min-height: 14rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      gap: 2.5rem;
    }
  }

  &__logo-link {
    display: block;
    transition: opacity 0.3s ease;
  }

  &__logo-link:hover {
    opacity: 0.78;
  }

  &__logo {
    width: 26rem;
    height: auto;

    @media (max-width: $mobile) {
      width: 22rem;
    }
  }

  &__privacy {
    position: relative;
    top: -0.4rem;
    color: $blue;
    font-family: $monserrat;
   opacity: 0.4;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    transition: color 0.3s ease;

    @media (max-width: $mobile) {
      display: flex;
      min-height: 3rem;
      align-items: center;
      top: 0;
    }
  }

  &__privacy:hover {
    color: $orange;
  }

  &__column {
    padding-top: 1.7rem;

    @media (max-width: $tablet) {
      padding-top: 0;
    }
  }

  &__column--details {
    @media (max-width: $tablet) {
      display: grid;
      grid-column: 1 / -1;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }

    @media (max-width: $mobile) {
      grid-column: auto;
      grid-template-columns: minmax(0, 1fr);
      gap: 2.5rem;
    }
  }

  &__row {
    display: flex;
    min-height: 4.1rem;
    align-items: center;
    gap: 1.9rem;

    @media (max-width: $mobile) {
      align-items: flex-start;
      gap: 1.5rem;
    }
  }

  &__row--second {
    margin-top: 4.4rem;

    @media (max-width: $mobile) {
      margin-top: 2.5rem;
    }
  }

  &__column--contacts .footer__row {
    gap: 1.4rem;
  }

  &__column--contacts .footer__row--second {
    margin-top: 4.2rem;

    @media (max-width: $mobile) {
      margin-top: 2.5rem;
    }
  }

  &__column--details .footer__row--second {
    align-items: flex-start;

    @media (max-width: $tablet) {
      margin-top: 0;
    }
  }

  &__column--details .footer__row--second .footer__icon {
    height: 2.8rem;
    margin-top: 0.1rem;
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

  &__icon-image--large {
    width: 3.4rem;
    height: 3.4rem;

    @media (max-width: $mobile) {
      width: 3rem;
      height: 3rem;
    }
  }

  &__icon-image--email {
    width: 3.4rem;
    height: 2.8rem;

    @media (max-width: $mobile) {
      width: 3rem;
      height: auto;
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

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    @media (max-width: $mobile) {
      display: flex;
      min-height: 3rem;
      align-items: center;
    }
  }

  &__link:hover {
    color: $orange;
  }

  &__email {
    margin-top: 0.3rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: underline;
    transition: color 0.3s ease;

    @media (max-width: $mobile) {
      display: flex;
      min-width: 0;
      min-height: 3rem;
      align-items: center;
      font-size: 1.5rem;
      overflow-wrap: anywhere;
    }
  }

  &__email:hover {
    color: $orange;
  }
}
</style>
