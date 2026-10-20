<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  items: { type: Array, default: () => [] },
  groups: { type: Array, default: () => [] },
  images: { type: Object, required: true },
})

const hasGroups = computed(() => props.groups.length > 0)

function createColumns(items, groupId) {
  const splitIndex = Math.ceil(items.length / 2)
  const entries = items.map(item => ({
    item,
    key: `${groupId}-${item.id}`,
  }))

  return [
    entries.slice(0, splitIndex),
    entries.slice(splitIndex),
  ]
}

const sections = computed(() => {
  if (hasGroups.value) {
    return props.groups.map(group => ({
      ...group,
      columns: createColumns(group.items, group.id),
    }))
  }

  return [{
    id: 'default',
    title: '',
    columns: createColumns(props.items, 'default'),
  }]
})

const initiallyOpenKeys = hasGroups.value
  ? props.groups.flatMap(group => group.items[0] ? [`${group.id}-${group.items[0].id}`] : [])
  : props.items[0] ? [`default-${props.items[0].id}`] : []

const openState = ref(Object.fromEntries(initiallyOpenKeys.map(key => [key, true])))

function toggle(key) {
  openState.value = { ...openState.value, [key]: !openState.value[key] }
}

function isOpen(key) {
  return !!openState.value[key]
}
</script>

<template>
  <section id="faq" :class="['faq', { 'faq--extended': hasGroups }]">
    <Container>
      <SectionTitle
        :title="title"
        :tone="hasGroups ? 'light' : 'brand'"
        class="faq__title"
      />
      <p v-if="description" class="faq__description">{{ description }}</p>

      <div class="faq__groups">
        <div v-for="section in sections" :key="section.id" class="faq__group">
          <h3 v-if="section.title" class="faq__group-title">{{ section.title }}</h3>

          <div class="faq__grid">
            <div v-for="(column, columnIndex) in section.columns" :key="columnIndex" class="faq__column">
              <article
                v-for="entry in column"
                :key="entry.key"
                class="faq__item"
                :class="{ 'faq__item--open': isOpen(entry.key) }"
              >
                <button
                  class="faq__hitbox"
                  type="button"
                  :aria-label="entry.item.question"
                  :aria-expanded="isOpen(entry.key)"
                  :aria-controls="`faq-content-${entry.key}`"
                  @click="toggle(entry.key)"
                />

                <div
                  class="faq__toggler"
                  :class="{ 'faq__toggler--open': isOpen(entry.key) }"
                  aria-hidden="true"
                >
                  <span>{{ entry.item.question }}</span>
                  <span class="faq__icon" aria-hidden="true">
                    <Image
                      :src="isOpen(entry.key) ? images.arrowUp : images.arrowDown"
                      alt=""
                      width="36"
                      height="37"
                    />
                  </span>
                </div>

                <div
                  :id="`faq-content-${entry.key}`"
                  class="faq__content"
                  :class="{ 'faq__content--open': isOpen(entry.key) }"
                  :aria-hidden="!isOpen(entry.key)"
                  role="region"
                >
                  <div class="faq__content-inner">
                    <p>{{ entry.item.answer }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.faq {
  padding: 5rem 0 9.6rem;

  @media (max-width: $tablet) {
    padding: 5rem 2rem 7rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &__title {
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: $tablet) {
      max-width: 70rem;
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      max-width: 100%;
      font-size: 3.6rem;
    }
  }

  &__description {
    margin: 3.7rem 0 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      margin-top: 3rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.5rem;
      font-size: 1.4rem;
    }
  }

  &__group-title {
    margin: 0;
    color: $white;
    font-family: $monserrat;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-align: center;

    @media (max-width: $tablet) {
      font-size: 3.2rem;
    }

    @media (max-width: $mobile) {
      font-size: 2.6rem;
    }
  }

  &__grid {
    display: grid;
    margin-top: 6.1rem;
    grid-template-columns: repeat(2, 56rem);
    gap: 4rem;

    @media (max-width: $tablet) {
      margin-top: 4.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }

    @media (max-width: $mobile) {
      margin-top: 3rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 1.5rem;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

    @media (max-width: $tablet) {
      gap: 1.5rem;
    }
  }

  &__item {
    position: relative;
    min-height: 9.1rem;
    overflow: hidden;
    border-radius: 22px;
    background: $white;
    transition: min-height 0.28s ease;

    @media (max-width: $mobile) {
      min-height: 7.2rem;
    }
  }

  &__item--open {
    min-height: 17.7rem;

    @media (max-width: $tablet) {
      min-height: 9.1rem;
    }

    @media (max-width: $mobile) {
      min-height: 7.2rem;
    }
  }

  &__hitbox {
    position: absolute;
    z-index: 2;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    border-radius: 22px;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  &__hitbox:focus-visible {
    outline: 2px solid $orange;
    outline-offset: -4px;
  }

  &__toggler {
    display: flex;
    width: 100%;
    height: 9.1rem;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 3.2rem 0 4.1rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    transition:
      height 0.28s ease,
      min-height 0.28s ease,
      padding 0.28s ease;

    @media (max-width: $tablet) {
      height: auto;
      min-height: 9.1rem;
      padding: 1.8rem 2.5rem;
    }

    @media (max-width: $mobile) {
      min-height: 7.2rem;
      gap: 1.5rem;
      padding: 1.6rem 2rem;
      font-size: 1.6rem;
    }
  }

  &__toggler--open {
    height: 6.8rem;
    padding-top: 2rem;

    @media (max-width: $tablet) {
      height: auto;
      min-height: 6.8rem;
      padding-top: 1.8rem;
      padding-bottom: 1rem;
    }

    @media (max-width: $mobile) {
      min-height: 6rem;
      padding-top: 1.6rem;
      padding-bottom: 0.8rem;
    }
  }

  &__icon {
    display: flex;
    width: 3rem;
    height: 3rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $orange;

    @media (max-width: $mobile) {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  &__icon img {
    width: 2.4rem;
    height: 2.4rem;

    @media (max-width: $mobile) {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  &__content p {
    margin: 0;
    padding: 0.8rem 8rem 3.3rem 4.1rem;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: $tablet) {
      padding: 0.8rem 6rem 2.5rem 2.5rem;
    }

    @media (max-width: $mobile) {
      padding: 0.8rem 2rem 2rem;
    }
  }

  &__content {
    display: grid;
    opacity: 0;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 0.28s ease,
      opacity 0.3s ease;
  }

  &__content--open {
    opacity: 1;
    grid-template-rows: 1fr;
  }

  &__content-inner {
    min-height: 0;
    overflow: hidden;
  }
}

.faq--extended {
  padding-top: 6.8rem;
  background: $blue;

  @media (max-width: $tablet) {
    padding-top: 5rem;
  }

  @media (max-width: $mobile) {
    padding-top: 4.5rem;
  }
}

.faq--extended .faq__groups {
  display: flex;
  margin-top: 5.9rem;
  flex-direction: column;
  gap: 6.3rem;

  @media (max-width: $tablet) {
    margin-top: 5rem;
    gap: 5rem;
  }

  @media (max-width: $mobile) {
    margin-top: 4rem;
    gap: 4rem;
  }
}

.faq--extended .faq__grid {
  margin-top: 4.3rem;
}
</style>
