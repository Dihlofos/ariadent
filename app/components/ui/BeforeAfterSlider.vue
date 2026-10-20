<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  before: { type: Object, required: true },
  after: { type: Object, required: true },
  beforeLabel: { type: String, required: true },
  afterLabel: { type: String, required: true },
  sliderLabel: { type: String, required: true },
  arrow: { type: String, required: true },
  labelPosition: { type: String, default: 'top' },
})

const frame = ref(null)
const position = ref(50)
const isDragging = ref(false)
const activePointerId = ref(null)
const pointerType = ref('')
const gestureStart = ref({ x: 0, y: 0 })
const splitStyle = computed(() => ({ '--split': `${position.value}%` }))
const valueText = computed(() => (
  `${props.beforeLabel}: ${Math.round(position.value)}%, ${props.afterLabel}: ${Math.round(100 - position.value)}%`
))

const DRAG_THRESHOLD = 6

function setPosition(clientX) {
  const rect = frame.value?.getBoundingClientRect()
  if (!rect) return

  const nextPosition = ((clientX - rect.left) / rect.width) * 100
  position.value = Math.min(100, Math.max(0, nextPosition))
}

function onPointerDown(event) {
  if (!event.isPrimary) return

  activePointerId.value = event.pointerId
  pointerType.value = event.pointerType
  gestureStart.value = { x: event.clientX, y: event.clientY }

  if (event.pointerType !== 'touch') {
    event.preventDefault()
    isDragging.value = true
    frame.value?.setPointerCapture(event.pointerId)
    setPosition(event.clientX)
  }
}

function onPointerMove(event) {
  if (event.pointerId !== activePointerId.value) return

  if (!isDragging.value) {
    const deltaX = event.clientX - gestureStart.value.x
    const deltaY = event.clientY - gestureStart.value.y

    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < DRAG_THRESHOLD) return

    if (Math.abs(deltaY) >= Math.abs(deltaX)) {
      activePointerId.value = null
      pointerType.value = ''
      return
    }

    isDragging.value = true
    frame.value?.setPointerCapture(event.pointerId)
  }

  event.preventDefault()
  setPosition(event.clientX)
}

function onPointerEnd(event) {
  if (
    event.pointerId === activePointerId.value
    && pointerType.value === 'touch'
    && !isDragging.value
  ) {
    setPosition(event.clientX)
  }

  isDragging.value = false
  activePointerId.value = null
  pointerType.value = ''

  if (frame.value?.hasPointerCapture(event.pointerId)) {
    frame.value.releasePointerCapture(event.pointerId)
  }
}

function onKeydown(event) {
  const step = event.shiftKey ? 10 : 2

  if (event.key === 'ArrowLeft') position.value = Math.max(0, position.value - step)
  else if (event.key === 'ArrowRight') position.value = Math.min(100, position.value + step)
  else if (event.key === 'Home') position.value = 0
  else if (event.key === 'End') position.value = 100
  else return

  event.preventDefault()
}
</script>

<template>
  <div
    ref="frame"
    :class="[
      'before-after',
      `before-after--labels-${labelPosition}`,
      { 'before-after--dragging': isDragging },
    ]"
    :style="splitStyle"
    role="slider"
    tabindex="0"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="Math.round(position)"
    :aria-valuetext="valueText"
    :aria-label="sliderLabel"
    @keydown="onKeydown"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerEnd"
    @pointercancel="onPointerEnd"
  >
    <Image
      :src="before.src"
      :alt="before.alt"
      class="before-after__image before-after__image--before"
      :width="before.width"
      :height="before.height"
    />
    <Image
      :src="after.src"
      :alt="after.alt"
      class="before-after__image before-after__image--after"
      :width="after.width"
      :height="after.height"
    />

    <span class="before-after__label before-after__label--before">{{ beforeLabel }}</span>
    <span class="before-after__label before-after__label--after">{{ afterLabel }}</span>

    <span class="before-after__divider" aria-hidden="true">
      <span class="before-after__handle">
        <Image :src="arrow" alt="" class="before-after__arrow" width="16" height="27" />
        <Image
          :src="arrow"
          alt=""
          class="before-after__arrow before-after__arrow--right"
          width="16"
          height="27"
        />
      </span>
    </span>
  </div>
</template>

<style lang="scss">
.before-after {
  position: relative;
  width: 56rem;
  height: 32.4rem;
  overflow: hidden;
  border-radius: 22px;
  cursor: ew-resize;
  outline: none;
  touch-action: pan-y;
  user-select: none;
  transition: box-shadow 0.3s ease;

  @media (max-width: $tablet) {
    width: 100%;
    height: auto;
    aspect-ratio: 560 / 324;
  }

  &::after {
    position: absolute;
    inset: 0;
    border: 0.2rem solid transparent;
    border-radius: 22px;
    content: '';
    pointer-events: none;
  }

  &:focus-visible::after {
    border-color: $orange;
  }

  &:hover {
    box-shadow: 0 0.8rem 2.4rem rgba(6, 60, 173, 0.16);
  }

  &__image {
    position: absolute;
    inset: 0;
    width: 100%;
    max-width: none;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  &__image--after {
    clip-path: inset(0 0 0 var(--split));
  }

  &__label {
    position: absolute;
    z-index: 3;
    top: 1.5rem;
    display: inline-flex;
    height: 3.2rem;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    border-radius: 20px;
    background: $blue;
    color: $white;
    font-family: $monserrat;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    pointer-events: none;

    @media (max-width: $mobile) {
      top: 1rem;
      height: 2.8rem;
      padding: 0 1rem;
      font-size: 1.4rem;
    }
  }

  &__label--before {
    left: 2.1rem;

    @media (max-width: $mobile) {
      left: 1rem;
    }
  }

  &__label--after {
    right: 1.9rem;
    background: $orange;

    @media (max-width: $mobile) {
      right: 1rem;
    }
  }

  &__divider {
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: var(--split);
    width: 0.5rem;
    background: $white;
    transform: translateX(-50%);
    pointer-events: none;

    @media (max-width: $mobile) {
      width: 0.3rem;
    }
  }

  &__handle {
    position: absolute;
    top: 76%;
    left: 50%;
    display: flex;
    width: 4.88rem;
    height: 4.88rem;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    border-radius: 50%;
    background: $white;
    transform: translate(-50%, -50%);

    @media (max-width: $mobile) {
      width: 3.8rem;
      height: 3.8rem;
      gap: 0.2rem;
    }
  }

  &__arrow {
    width: 1.6rem;
    height: 2.7rem;

    @media (max-width: $mobile) {
      width: 1.2rem;
      height: 2rem;
    }
  }

  &__arrow--right {
    transform: rotate(180deg);
  }
}

.before-after--labels-bottom .before-after__label {
  top: auto;
  bottom: 2.1rem;

  @media (max-width: $mobile) {
    bottom: 1rem;
  }
}
</style>
