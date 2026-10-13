<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fields: { type: Array, required: true },
  message: { type: Object, required: true },
  submitText: { type: String, required: true },
  feedback: { type: Object, required: true },
  image: { type: Object, required: true },
  values: { type: Object, required: true },
  errors: { type: Array, required: true },
  status: {
    type: String,
    default: 'idle',
    validator: value => ['idle', 'error', 'success'].includes(value),
  },
  isSubmitting: { type: Boolean, default: false },
})

defineEmits(['update-value', 'submit', 'reset-status'])
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

        <form
          v-if="status === 'idle'"
          class="appointment__form"
          novalidate
          :aria-busy="isSubmitting"
          @submit.prevent="$emit('submit')"
        >
          <template v-for="field in fields" :key="field.id">
            <label class="appointment__label" :for="field.id">{{ field.label }}</label>
            <input
              :id="field.id"
              class="appointment__control"
              :class="{ 'appointment__control--invalid': errors.includes(field.name) }"
              :name="field.name"
              :type="field.type"
              :value="values[field.name]"
              :placeholder="field.placeholder"
              :autocomplete="field.autocomplete"
              :inputmode="field.inputmode"
              :required="field.required"
              :aria-invalid="errors.includes(field.name)"
              @input="$emit('update-value', { name: field.name, value: $event.target.value })"
            >
          </template>

          <label class="appointment__label appointment__label--message" :for="message.id">
            {{ message.label }}
          </label>
          <textarea
            :id="message.id"
            class="appointment__control appointment__textarea"
            :class="{ 'appointment__control--invalid': errors.includes(message.name) }"
            :name="message.name"
            :value="values[message.name]"
            :placeholder="message.placeholder"
            :required="message.required"
            :aria-invalid="errors.includes(message.name)"
            @input="$emit('update-value', { name: message.name, value: $event.target.value })"
          />

          <button class="appointment__submit" type="submit" :disabled="isSubmitting">
            {{ submitText }}
          </button>
        </form>

        <div
          v-else
          class="appointment__feedback"
          :class="`appointment__feedback--${status}`"
          :role="status === 'error' ? 'alert' : 'status'"
          aria-live="polite"
        >
          <div v-if="status === 'error'" class="appointment__feedback-media">
            <Image
              :src="feedback.error.image.src"
              :alt="feedback.error.image.alt"
              :width="feedback.error.image.width"
              :height="feedback.error.image.height"
              class="appointment__feedback-image appointment__feedback-image--error"
            />
          </div>

          <h3 class="appointment__feedback-title">{{ feedback[status].title }}</h3>
          <p class="appointment__feedback-description">{{ feedback[status].description }}</p>

          <div v-if="status === 'success'" class="appointment__feedback-media">
            <Image
              :src="feedback.success.image.src"
              :alt="feedback.success.image.alt"
              :width="feedback.success.image.width"
              :height="feedback.success.image.height"
              class="appointment__feedback-image appointment__feedback-image--success"
            />
          </div>

          <button
            v-if="status === 'error'"
            class="appointment__feedback-button"
            type="button"
            @click="$emit('reset-status')"
          >
            {{ feedback.error.buttonText }}
          </button>
        </div>
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
    display: grid;
    min-height: 40.9rem;
    padding: 3.52rem 4.3rem 4.3rem 4.18rem;
    border-radius: 22px;
    background: $blue;
    grid-template-columns: minmax(0, 1fr) 51.9rem;
    column-gap: 5.6rem;

    @media (max-width: $tablet) {
      min-height: 0;
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
    display: flex;
    min-width: 0;
    flex-direction: column;

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
    width: 100%;
    margin: 0 0 2rem;
    color: $white;
    font-family: $monserrat;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-transform: uppercase;

    @media (max-width: $tablet) {
      width: auto;
      order: 1;
      margin: 0;
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
    bottom: -2.95rem;
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
    z-index: 2;
    width: 31rem;
    max-width: 100%;
    margin: auto 0 0 auto;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      width: auto;
      order: 2;
      margin: 2rem 0 0;
      font-size: 1.5rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  &__form {
    z-index: 2;
    display: grid;
    width: 100%;
    height: 100%;
    max-height: 31rem;
    align-self: end;
    align-content: space-between;
    grid-template-columns: 19.5rem 30.3rem;
    column-gap: 2.1rem;
    row-gap: 1.14rem;

    @media (max-width: $tablet) {
      width: auto;
      grid-template-columns: 14rem minmax(0, 1fr);
      column-gap: 1.5rem;
    }

    @media (max-width: $mobile) {
      height: auto;
      max-height: none;
      align-self: start;
      align-content: normal;
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

  &__control--invalid {
    border: 0.2rem solid #FF2C2C;
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

  &__submit:disabled {
    cursor: wait;
    opacity: 0.7;
  }

  &__feedback {
    z-index: 2;
    display: flex;
    width: 100%;
    min-height: 33.1rem;
    align-self: start;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 1rem;
    border-radius: 22px;
    background: $lightBlue;
    color: $blue;
    font-family: $monserrat;
    text-align: center;

    @media (max-width: $tablet) {
      min-height: 34rem;
    }

    @media (max-width: 850px) {
      min-height: 30rem;
    }

    @media (max-width: $mobile) {
      min-height: 28rem;
      padding: 2rem 1.5rem 1rem;
    }
  }

  &__feedback--success {
    padding-top: 5rem;
  }

  &__feedback-title {
    margin: 1rem 0 0;
    color: $blue;
    text-align: center;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__feedback--success &__feedback-title {
    margin-top: 0;
  }

  &__feedback-description {
    max-width: 33rem;
    margin: 2.1rem 0 0;
    color: $blue;
    text-align: center;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__feedback-image {
    height: auto;
  }

  &__feedback-media {
    display: flex;
    width: 100%;
    justify-content: center;

    picture {
      display: flex;
      width: 100%;
      justify-content: center;
      line-height: 0;
    }
  }

  &__feedback-image--error {
    width: 9rem;
  }

  &__feedback-image--success {
    width: 40%;
    margin-top: 2rem;
  }

  &__feedback-button {
    width: 100%;
    height: 3.2rem;
    margin-top: auto;
    padding: 0 1.5rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    background: $orange;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;

    @media (max-width: $tablet) {
      height: 4.2rem;
    }

    @media (max-width: $mobile) {
      font-size: 1.6rem;
    }
  }

  &__feedback-button:hover {
    border-color: $blue;
    background: $white;
    color: $blue;
  }
}
</style>
