<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { useLocale } from '~/composables/useLocale'

defineProps({
  navigation: { type: Object, required: true },
  ui: { type: Object, required: true },
})

const isMenuOpen = ref(false)
const menu = ref(null)
const menuToggle = ref(null)
const { locale, setLocale } = useLocale()
const languages = [
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'ENG' },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleOutsidePointer(event) {
  if (menu.value?.contains(event.target) || menuToggle.value?.contains(event.target)) {
    return
  }

  closeMenu()
}

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('pointerdown', handleOutsidePointer, true)
    return
  }

  document.removeEventListener('pointerdown', handleOutsidePointer, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer, true)
})
</script>

<template>
  <header class="header" @keydown.esc="closeMenu">
    <Container>
      <div class="header__top">
        <NuxtLink :to="navigation.brand.link" class="header__logo" :aria-label="navigation.brand.alt" v-anchor>
          <Image
            :src="navigation.images.logo"
            :alt="navigation.brand.alt"
            width="122"
            height="34"
            loading="eager"
          />
        </NuxtLink>

        <NuxtLink :to="navigation.location.link" class="header__info header__location" v-anchor>
          <Image :src="navigation.images.marker" alt="" width="14" height="20" />
          <span>{{ navigation.location.label }}</span>
        </NuxtLink>

        <div class="header__info header__schedule">
          <Image :src="navigation.images.time" alt="" width="20" height="20" />
          <span>
            <span v-for="line in navigation.schedule" :key="line" class="header__line">{{ line }}</span>
          </span>
        </div>

        <div class="header__info header__phones">
          <Image :src="navigation.images.phone" alt="" width="18" height="18" />
          <span>
            <a v-for="phone in navigation.phones" :key="phone.href" :href="phone.href" class="header__line">
              {{ phone.label }}
            </a>
          </span>
        </div>

        <NuxtLink :to="navigation.appointment.link" class="header__appointment" v-anchor>
          {{ navigation.appointment.label }}
        </NuxtLink>

        <a
          v-if="navigation.phones[0]"
          :href="navigation.phones[0].href"
          class="header__mobile-phone"
        >
          <Image :src="navigation.images.phone" alt="" width="18" height="18" />
          <span>{{ navigation.phones[0].label }}</span>
        </a>

        <button
          ref="menuToggle"
          class="header__menu-toggle"
          :class="{ 'header__menu-toggle--open': isMenuOpen }"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="header-menu"
          :aria-label="isMenuOpen ? ui.closeMenu : ui.openMenu"
          @click="toggleMenu"
        >
          <span class="header__menu-label">{{ ui.menu }}</span>
          <span class="header__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="header-menu"
        ref="menu"
        class="header__bottom"
        :class="{ 'header__bottom--open': isMenuOpen }"
        @click="closeMenu"
      >
        <div class="header__languages" role="group" :aria-label="ui.languageSwitcher">
          <button
            v-for="language in languages"
            :key="language.code"
            class="header__language"
            :class="{ 'header__language--active': locale === language.code }"
            type="button"
            :aria-pressed="locale === language.code"
            @click="setLocale(language.code)"
          >
            {{ language.label }}
          </button>
        </div>

        <Navigation :items="navigation.navItems" />

        <a :href="navigation.call.href" class="header__call">
          <Image :src="navigation.images.phoneWhite" alt="" width="11" height="11" />
          <span>{{ navigation.call.label }}</span>
        </a>
      </div>
    </Container>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;
  z-index: 20;
//   background: $lightBlue;
  padding: 4.5rem 0 1.3rem;

  @media (max-width: $tablet) {
    padding: 2.4rem 2rem 1.2rem;
  }

  @media (max-width: $mobile) {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
   //  padding: 0.8rem 1rem 1rem;
   padding: 0.8rem 1.6rem;
   background: rgba(255, 255, 255, 0.88);
   border-bottom: 0.1rem solid rgba(6, 60, 173, 0.1);
   backdrop-filter: blur(1.2rem);
   -webkit-backdrop-filter: blur(1.2rem);
  }

  & > .container {
    position: relative;
  }

  &__top {
    display: flex;
    align-items: center;
    height: 6.5rem;
    padding: 0 1.07rem 0 2.615rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      padding: 0 2rem;
    }

    @media (max-width: $mobile) {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 0;
      height: 5.6rem;
      // padding: 0 1.6rem;
      // border-radius: 18px;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-right: 5rem;
    transition: opacity 0.3s ease;

    @media (max-width: $tablet) {
      margin-right: 3rem;
    }

    @media (max-width: $mobile) {
      height: 4.4rem;
      margin-right: 0;
    }
  }

  &__logo img {
    @media (max-width: $mobile) {
      width: 10.8rem;
      height: auto;
    }

    @media (max-width: 360px) {
      width: 9.4rem;
    }
  }

  &__logo:hover {
    opacity: 0.78;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 1.15rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    transition: color 0.3s ease;

    picture {
      flex: 0 0 auto;
    }
  }

  &__location {
    flex: 0 0 auto;
    margin-right: 7rem;

    @media (max-width: $tablet) {
      margin-right: 3rem;
    }

    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__location:hover {
    color: $orange;
  }

  &__schedule {
    flex: 0 0 auto;
    margin-right: 7.2rem;

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__phones {
    flex: 0 0 auto;

    @media (max-width: $tablet) {
      display: none;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: $orange;
    }
  }

  &__line {
    display: block;
  }

  &__appointment {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.7rem;
    margin-left: auto;
    padding: 0 1.5rem;
    border: 0.1rem solid $blue;
    border-radius: 20px;
    background: $white;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      margin-left: auto;
    }

    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__appointment:hover {
    background: $blue;
    color: $white;
  }

  &__mobile-phone {
    display: none;
    align-items: center;
    gap: 0.8rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.3s ease;

    @media (max-width: $mobile) {
      display: inline-flex;
      justify-self: center;
      margin-left: 0;
    }

    @media (max-width: 360px) {
      gap: 0.6rem;
      font-size: 1.2rem;
    }
  }

  &__mobile-phone:hover {
    color: $orange;
  }

  &__bottom {
    display: flex;
    align-items: center;
    height: 5rem;
    margin-top: 1.5rem;
    padding: 0 1.07rem 0 2.615rem;
    border-radius: 22px;
    background: $blue;

    @media (max-width: $tablet) {
      position: absolute;
      z-index: 10;
      top: 100%;
      left: 0;
      height: auto;
      width: 100%;
      max-height: 0;
      padding: 0 2rem;
      overflow: hidden;
      flex-direction: column;
      align-items: stretch;
      margin-top: 0;
      border-radius: 18px;
      opacity: 0;
      visibility: hidden;
      transition:
        max-height 0.3s ease,
        margin-top 0.3s ease,
        padding 0.3s ease,
        opacity 0.3s ease,
        visibility 0s linear 0.3s;
    }

    @media (max-width: $mobile) {
      left: -1.6rem;
      width: calc(100% + 3.2rem);
      padding-right: 1.6rem;
      padding-left: 1.6rem;
      border-radius: 0;
    }
  }

  &__bottom--open {
    @media (max-width: $tablet) {
      max-height: 44rem;
      margin-top: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      opacity: 1;
      visibility: visible;
      transition-delay: 0s;
    }

    @media (max-width: $mobile) {
      margin-top: 0.8rem;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
    }
  }

  &__languages {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 0.6rem;
    margin-right: 4rem;

    @media (max-width: $tablet) {
      width: 100%;
      margin: 0 0 1.2rem;
    }
  }

  &__language {
    display: inline-flex;
    height: 2.7rem;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    border: 0.1rem solid $white;
    border-radius: 20px;
    background: transparent;
    color: $white;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      height: 3.6rem;
      font-size: 1.5rem;
    }
  }

  &__language:hover {
    background: $white;
    color: $blue;
  }

  &__language--active {
    border-color: $orange;
    background: $orange;
  }

  &__language--active:hover {
    border-color: #C96812;
    background: #C96812;
    color: $white;
  }

  &__call {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2.7rem;
    margin-left: auto;
    padding: 0 1.5rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      width: 100%;
      height: 4.2rem;
      margin: 2.4rem 0 0;
      font-size: 1.6rem;
    }
  }

  &__call:hover {
    border-color: #C96812;
    background: #C96812;
  }

  &__menu-toggle {
    display: none;
    height: 3.8rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: 2rem;
    padding: 0 1.4rem;
    border: 0.1rem solid $blue;
    border-radius: 20px;
    background: $blue;
    color: $white;
    cursor: pointer;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      display: inline-flex;
      height: 4.4rem;
    }

    @media (max-width: $mobile) {
      width: 4.4rem;
      flex: 0 0 4.4rem;
      margin-left: 0;
      padding: 0;
      border-radius: 50%;
    }
  }

  &__menu-label {
    @media (max-width: $mobile) {
      display: none;
    }
  }

  &__menu-toggle:hover {
    border-color: $orange;
    background: $orange;
  }

  &__menu-toggle--open {
    border-color: $orange;
    background: $orange;
  }

  &__menu-icon {
    position: relative;
    display: block;
    width: 2.2rem;
    height: 1.6rem;
  }

  &__menu-icon span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.2rem;
    border-radius: 2px;
    background: currentColor;
    transition: top 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
  }

  &__menu-icon span:nth-child(1) {
    top: 0;
  }

  &__menu-icon span:nth-child(2) {
    top: 0.7rem;
  }

  &__menu-icon span:nth-child(3) {
    top: 1.4rem;
  }

  &__menu-toggle--open &__menu-icon span:nth-child(1) {
    top: 0.7rem;
    transform: rotate(45deg);
  }

  &__menu-toggle--open &__menu-icon span:nth-child(2) {
    opacity: 0;
  }

  &__menu-toggle--open &__menu-icon span:nth-child(3) {
    top: 0.7rem;
    transform: rotate(-45deg);
  }
}
</style>
