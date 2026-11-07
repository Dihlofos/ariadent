<script setup>
import { useCookieConsent } from '~/composables/useCookieConsent'

defineProps({
  ui: { type: Object, required: true },
  policyLink: { type: String, required: true },
})

const {
  isSettingsOpen,
  acceptConsent,
  declineConsent,
} = useCookieConsent()
const withBasePath = useBasePath()
</script>

<template>
  <section
    v-if="isSettingsOpen"
    class="cookie-modal"
    role="region"
    aria-labelledby="cookie-modal-title"
    aria-live="polite"
  >
    <div class="cookie-modal__text">
      <h2 id="cookie-modal-title">{{ ui.cookieTitle }}</h2>
      <p>{{ ui.cookieMessage }}</p>
      <a
        class="cookie-modal__policy"
        :href="withBasePath(policyLink)"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ ui.cookiePolicy }}
      </a>
    </div>

    <div class="cookie-modal__actions">
      <button type="button" class="cookie-modal__button cookie-modal__button--accept" @click="acceptConsent">
        {{ ui.cookieAccept }}
      </button>
      <button type="button" class="cookie-modal__button cookie-modal__button--decline" @click="declineConsent">
        {{ ui.cookieDecline }}
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cookie-modal {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  z-index: 1000;
  display: flex;
  width: calc(100% - 4rem);
  max-width: 78rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.8rem 2rem;
  border: 0.2rem solid $white;
  border-radius: 22px;
  background-color: $blue;
  box-shadow: 0 0.8rem 2.4rem rgba($darkBlue, 0.2);
  color: $white;
  transform: translateX(-50%);

  &__text {
    flex: 1 1 auto;
    min-width: 0;
    color: $white;
  }

  &__text h2 {
    margin: 0 0 0.6rem;
    color: inherit;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.3;
  }

  &__text p {
    margin: 0;
    color: inherit;
    font-family: $monserrat;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
  }

  &__policy {
    display: inline-block;
    margin-top: 0.8rem;
    color: inherit;
    font-family: $monserrat;
    font-size: 1.2rem;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  &__actions {
    display: flex;
    flex: 0 0 auto;
    gap: 0.8rem;
  }

  &__button {
    display: flex;
    min-width: 10rem;
    min-height: 4.4rem;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.2rem;
    border: 0.1rem solid $white;
    border-radius: 20px;
    color: $white;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  &__button--accept {
    border-color: $orange;
    background: $orange;
  }

  &__button--accept:hover {
    border-color: $white;
    background: $white;
    color: $blue;
  }

  &__button--decline {
    background: transparent;
  }

  &__button--decline:hover {
    background: $white;
    color: $blue;
  }

  &__button:focus-visible,
  &__policy:focus-visible {
    outline: 0.3rem solid $white;
    outline-offset: 0.3rem;
  }

  @media (max-width: $tablet) {
    max-width: 68rem;
    align-items: stretch;
    flex-direction: column;
    gap: 1.4rem;
  }

  @media (max-width: $mobile) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    width: auto;
    max-width: none;
    padding: 1.4rem 1.5rem;
    border-radius: 18px;
    transform: none;

    &__actions {
      width: 100%;
    }

    &__button {
      min-width: 0;
      min-height: 4.8rem;
      flex: 1 1 50%;
    }
  }
}
</style>
