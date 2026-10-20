import type { Directive } from 'vue'

export interface AnchorOptions {
  offset?: number
  speed?: number
}

const DEFAULTS: AnchorOptions = {
  offset: 45,
  speed: 200,
}

let smoothScroll: any = null

export function setSmoothScrollInstance(instance: any) {
  smoothScroll = instance
}

function createClickHandler(options: AnchorOptions) {
  return (event: Event) => {
    const mouseEvent = event as MouseEvent
    const link = mouseEvent.currentTarget as HTMLAnchorElement
    const href = link.getAttribute('href')

    if (!href) return
    if (mouseEvent.ctrlKey || mouseEvent.metaKey || mouseEvent.shiftKey) return

    const url = new URL(href, window.location.href)
    const isSamePage = url.origin === window.location.origin
      && url.pathname === window.location.pathname
      && url.search === window.location.search

    if (!isSamePage || !url.hash) return

    const target = document.querySelector(url.hash)
    if (!target) {
      if (import.meta.env.DEV) {
        console.warn(`[v-anchor] Target "${url.hash}" not found`)
      }
      return
    }

    mouseEvent.preventDefault()

    const header = document.querySelector<HTMLElement>('.header')
    const fixedHeaderOffset = header && window.getComputedStyle(header).position === 'fixed'
      ? Math.ceil(header.getBoundingClientRect().height)
      : null
    const opts = { ...DEFAULTS, ...options }

    smoothScroll.animateScroll(target, null, {
      speed: opts.speed,
      offset: options.offset ?? fixedHeaderOffset ?? opts.offset,
    })
  }
}

export const vAnchor: Directive<HTMLElement, AnchorOptions | undefined> = {
  mounted(el, binding) {
    const handler = createClickHandler(binding.value ?? {})
    ;(el as any).__vAnchorHandler = handler
    el.addEventListener('click', handler)
  },

  updated(el, binding) {
    const oldHandler = (el as any).__vAnchorHandler
    if (oldHandler) {
      el.removeEventListener('click', oldHandler)
    }
    const handler = createClickHandler(binding.value ?? {})
    ;(el as any).__vAnchorHandler = handler
    el.addEventListener('click', handler)
  },

  unmounted(el) {
    const handler = (el as any).__vAnchorHandler
    if (handler) {
      el.removeEventListener('click', handler)
    }
  },
}
