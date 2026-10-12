<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fields: { type: Array, required: true },
  message: { type: Object, required: true },
  submitText: { type: String, required: true },
  image: { type: Object, required: true },
})
</script>

<template>
  <section id="appointment" class="appointment" aria-labelledby="appointment-title">
    <Container>
      <div class="appointment__card">
        <div class="appointment__intro">
          <h2 id="appointment-title" class="appointment__title">{{ title }}</h2>

          <div class="appointment__media">
            <Image
              :src="image.src"
              :alt="image.alt"
              class="appointment__image"
              :width="image.width"
              :height="image.height"
            />
          </div>

          <p class="appointment__description">{{ description }}</p>
        </div>

        <form class="appointment__form" @submit.prevent>
          <template v-for="field in fields" :key="field.id">
            <label class="appointment__label" :for="field.id">{{ field.label }}</label>
            <input
              :id="field.id"
              class="appointment__control"
              :name="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
              :autocomplete="field.autocomplete"
              :inputmode="field.inputmode"
              required
            >
          </template>

          <label class="appointment__label appointment__label--message" :for="message.id">
            {{ message.label }}
          </label>
          <textarea
            :id="message.id"
            class="appointment__control appointment__textarea"
            :name="message.name"
            :placeholder="message.placeholder"
            required
          />

          <button class="appointment__submit" type="submit">{{ submitText }}</button>
        </form>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.appointment {
  padding: 6.3rem 0 6.5rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem;
  }

  @media (max-width: $mobile) {
    padding: 4rem 1rem;
  }

  &__card {
    position: relative;
    height: 40.9rem;
    border-radius: 22px;
    background: $blue;

    @media (max-width: $tablet) {
      display: grid;
      height: auto;
      padding: 3.5rem;
      grid-template-columns: 32rem minmax(35rem, 1fr);
      gap: 3rem;
    }

    @media (max-width: 850px) {
      grid-template-columns: minmax(0, 1fr);
    }

    @media (max-width: $mobile) {
      padding: 2rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 2.5rem;
    }
  }

  &__intro {
    display: contents;

    @media (max-width: $tablet) {
      display: flex;
      min-width: 0;
      flex-direction: column;
    }

    @media (max-width: 850px) {
      position: relative;
      min-height: 17.85rem;
      padding-right: 24rem;
    }

    @media (max-width: $mobile) {
      min-height: 0;
      padding-right: 0;
    }
  }

  &__title {
    position: absolute;
    top: 3.52rem;
    left: 4.18rem;
    width: 50rem;
    margin: 0;
    color: $white;
    font-family: $monserrat;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;

    @media (max-width: $tablet) {
      position: static;
      width: auto;
      order: 1;
      font-size: 2.4rem;
    }

    @media (max-width: $mobile) {
      font-size: 2.4rem;
    }

    @media (max-width: 350px) {
      font-size: 2rem;
    }
  }

  &__media {
    display: contents;

    @media (max-width: $tablet) {
      display: block;
      order: 3;
      width: 22rem;
      height: 17.85rem;
      margin: 2rem auto 0;

      picture {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 850px) {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
    }

    @media (max-width: $mobile) {
      position: static;
      width: 20rem;
      height: 16.22rem;
      margin: 1.5rem auto 0;
    }
  }

  &__image {
    position: absolute;
    z-index: 1;
    top: 20rem;
    left: -7.4rem;
    width: 29.4rem;
    max-width: none;
    height: 23.85rem;
    pointer-events: none;

    @media (max-width: $tablet) {
      position: static;
      width: 100%;
      height: 100%;
    }
  }

  &__description {
    position: absolute;
    z-index: 2;
    bottom: 4.3rem;
    left: 22.9rem;
    width: 31rem;
    margin: 0;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      position: static;
      width: auto;
      order: 2;
      margin-top: 2rem;
      font-size: 1.5rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  &__form {
    position: absolute;
    z-index: 2;
    top: 5rem;
    right: 4.3rem;
    display: grid;
    width: 51.9rem;
    grid-template-columns: 19.5rem 30.3rem;
    column-gap: 2.1rem;
    row-gap: 1.14rem;

    @media (max-width: $tablet) {
      position: static;
      width: auto;
      grid-template-columns: 14rem minmax(0, 1fr);
      column-gap: 1.5rem;
    }

    @media (max-width: $mobile) {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 0.8rem;
    }
  }

  &__label {
    display: flex;
    height: 3.2rem;
    align-items: center;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (max-width: $tablet) {
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      height: auto;
      min-height: 2rem;
      margin-top: 0.4rem;
      font-size: 1.5rem;
    }
  }

  &__label--message {
    align-items: flex-start;
    padding-top: 0.9rem;

    @media (max-width: $mobile) {
      padding-top: 0;
    }
  }

  &__control {
    width: 100%;
    height: 3.2rem;
    padding: 0 1.38rem;
    border: 0;
    border-radius: 20px;
    outline: 0.2rem solid transparent;
    background: $lightBlue;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: outline-color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
    }

    @media (max-width: $mobile) {
      height: 4.2rem;
      font-size: 1.4rem;
    }
  }

  &__control:focus {
    outline-color: $orange;
  }

  &__control::placeholder {
    color: #A2B9E4;
    opacity: 1;
  }

  &__textarea {
    height: 9.7rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    resize: none;

    @media (max-width: $mobile) {
      height: 10rem;
    }
  }

  &__submit {
    grid-column: 1 / -1;
    height: 3.2rem;
    padding: 0 1.5rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
      margin-top: 1rem;
    }

    @media (max-width: $mobile) {
      grid-column: 1;
      height: 4.2rem;
      font-size: 1.6rem;
    }
  }

  &__submit:hover {
    border-color: $white;
    background: $white;
    color: $orange;
  }
}
</style>
