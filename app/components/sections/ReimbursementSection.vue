<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  items: { type: Array, required: true },
})
</script>

<template>
  <section class="reimbursement">
    <Container>
      <SectionTitle :title="title" class="reimbursement__title" />
      <p class="reimbursement__description">{{ description }}</p>

      <div class="reimbursement__list">
        <article
          v-for="item in items"
          :key="item.id"
          class="reimbursement__card"
        >
          <h3 class="reimbursement__card-title">{{ item.title }}</h3>

          <div class="reimbursement__card-body">
            <dl class="reimbursement__details">
              <div
                v-for="detail in item.details"
                :key="detail.label"
                class="reimbursement__detail"
              >
                <dt class="reimbursement__detail-label">{{ detail.label }}</dt>
                <dd class="reimbursement__detail-value">{{ detail.value }}</dd>
              </div>
            </dl>

            <div class="reimbursement__content">
              <template v-for="(block, blockIndex) in item.content" :key="blockIndex">
                <p
                  v-if="block.type === 'paragraph'"
                  class="reimbursement__paragraph"
                >
                  <component
                    :is="segment.accent ? 'strong' : 'span'"
                    v-for="(segment, segmentIndex) in block.segments"
                    :key="segmentIndex"
                    :class="{ 'reimbursement__accent': segment.accent }"
                  >
                    {{ segment.text }}
                  </component>
                </p>

                <ul
                  v-else-if="block.type === 'list'"
                  class="reimbursement__benefits"
                >
                  <li
                    v-for="(listItem, listItemIndex) in block.items"
                    :key="listItemIndex"
                    class="reimbursement__benefit"
                  >
                    <component
                      :is="segment.accent ? 'strong' : 'span'"
                      v-for="(segment, segmentIndex) in listItem.segments"
                      :key="segmentIndex"
                      :class="{ 'reimbursement__accent': segment.accent }"
                    >
                      {{ segment.text }}
                    </component>
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.reimbursement {
  padding: 4.9rem 0 10rem;

  @media (max-width: $tablet) {
    padding: 6rem 2rem 7rem;
  }

  @media (max-width: $mobile) {
    padding: 4.5rem 1rem 5rem;
  }

  &__title {
    @media (max-width: $tablet) {
      font-size: 5.5rem;
    }

    @media (max-width: $mobile) {
      font-size: 3.6rem;
    }
  }

  &__description {
    max-width: 87rem;
    margin: 4.5rem auto 0;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;

    @media (max-width: $tablet) {
      max-width: 78rem;
      margin-top: 2.4rem;
      font-size: 1.6rem;
    }

    @media (max-width: $mobile) {
      margin-top: 1.8rem;
      font-size: 1.4rem;
    }
  }

  &__list {
    display: flex;
    margin-top: 6.8rem;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: $mobile) {
      margin-top: 3.5rem;
      gap: 2rem;
    }
  }

  &__card {
    padding: 3.4rem 7rem 3.4rem 4rem;
    border-radius: 22px;
    background: $white;

    @media (max-width: $tablet) {
      padding: 2.8rem 2.4rem;
    }

    @media (max-width: $mobile) {
      padding: 2.4rem 2rem;
      border-radius: 18px;
    }
  }

  &__card-title {
    display: inline-flex;
    min-width: 0;
    height: 3.4rem;
    align-items: center;
    margin: 0;
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

    @media (max-width: $mobile) {
      height: auto;
      min-height: 3.4rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 1.6rem;
    }
  }

  &__card-body {
    display: grid;
    margin-top: 2.9rem;
    grid-template-columns: 23rem minmax(0, 1fr);
    gap: 7.6rem;

    @media (max-width: $tablet) {
      grid-template-columns: minmax(0, 1fr);
      gap: 2.8rem;
    }

    @media (max-width: $mobile) {
      margin-top: 2.4rem;
      gap: 2.4rem;
    }
  }

  &__details {
    min-width: 0;
    margin: 0;
  }

  &__detail + &__detail {
    margin-top: 1.7rem;
  }

  &__detail-label {
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

  &__detail-value {
    display: inline-flex;
    min-height: 2.8rem;
    align-items: center;
    margin: 0.7rem 0 0;
    padding: 0.3rem 1.2rem;
    border: 0.1rem solid $orange;
    border-radius: 20px;
    color: $blue;
    font-family: $monserrat;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__content {
    min-width: 0;
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

  &__paragraph {
    margin: 0;
  }

  &__paragraph + &__paragraph,
  &__paragraph + &__benefits {
    margin-top: 1.3rem;
  }

  &__accent {
    color: $orange;
    font-weight: 700;
  }

  &__benefits {
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
  }

  &__benefit {
    position: relative;
    padding-left: 2.2rem;
  }

  &__benefit::before {
    position: absolute;
    top: 0;
    left: 0.8rem;
    color: $orange;
    content: '•';
    font-weight: 700;
  }
}
</style>
