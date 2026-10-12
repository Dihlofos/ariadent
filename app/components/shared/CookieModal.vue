<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  ui: { type: Object, required: true },
})
const STORAGE_KEY = 'cookie-modal-shown'

const isVisible = ref(false)

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    isVisible.value = true
  }
})

function accept() {
  isVisible.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}
</script>

<template>
  <div v-show="isVisible" class="cookie-modal" aria-live="polite">
    <div class="cookie-modal__text">
      <p>{{ ui.cookieMessage }}</p>
    </div>

    <button type="button" class="cookie-modal__close" @click="accept">
      {{ ui.cookieAccept }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.cookie-modal {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 2rem;
  width: calc(100% - 4rem);
  max-width: 68rem;
  padding: 1.6rem 2rem;
  border: 0.2rem solid $white;
  border-radius: 22px;
  background-color: $blue;
  box-shadow: 0 0.8rem 2.4rem rgba($darkBlue, 0.2);
  color: $white;

  @media (max-width: $tablet) {
    max-width: 64rem;
  }

  @media (max-width: $mobile) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    gap: 1.2rem;
    width: auto;
    max-width: none;
    padding: 1.4rem 1.5rem;
    border-radius: 18px;
    transform: none;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    min-width: 7.2rem;
    min-height: 4.4rem;
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    background-color: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      border-color: $white;
      background-color: $white;
      color: $blue;
    }

    @media (max-width: $mobile) {
      min-width: 5.2rem;
      min-height: 4.8rem;
      padding: 0.6rem 1rem;
      font-size: 1.4rem;
    }
  }

  &__text {
    flex: 1 1 auto;
    min-width: 0;
    color: $white;

    p {
      margin: 0;
      color: inherit;
      font-family: $monserrat;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.4;

      @media (max-width: $mobile) {
        font-size: 1.2rem;
        line-height: 1.35;
      }
    }
  }
}
</style>
