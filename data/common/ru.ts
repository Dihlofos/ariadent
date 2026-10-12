export default {
  site: {
    title: 'Мой сайт',
    description: 'Современный статический сайт на Nuxt 3',
    keywords: ['nuxt', 'vue', 'ssg', 'template'],
    url: 'https://example.com',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    brand: {
      alt: 'Ariadent',
      link: '#hero',
    },
    location: {
      label: 'Амстердам',
      link: '#contacts',
    },
    schedule: [
      'Понедельник–пятница: 08:00–20:00',
      'Суббота: 10:00–16:00',
    ],
    phones: [
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
      { label: '020 408 28 70', href: 'tel:+31204082870' },
    ],
    appointment: {
      label: 'Записаться ко врачу',
      link: '#appointment',
    },
    call: {
      label: 'Позвонить',
      href: 'tel:+31657558576',
    },
    navItems: [
      { label: 'Услуги', link: '#services' },
      { label: 'Страховка и оплата', link: '#benefits' },
      { label: 'Пациентам', link: '#treatment-process' },
      { label: 'О клинике', link: '#about' },
      { label: 'Контакты и адрес', link: '#contacts' },
    ],
    images: {
      logo: '/images/text-logo.svg',
      marker: '/images/marker.svg',
      phone: '/images/phone.svg',
      phoneWhite: '/images/phone-white.svg',
      time: '/images/time.svg',
    },
  },
  footer: {
    type: 'footer',
    brand: {
      alt: 'Ariadent',
      link: '#hero',
    },
    privacy: {
      text: 'Политика конфиденциальности',
      link: '/docs/policy.pdf',
    },
    address: ['Hugo de Vrieslaan 85', '1097 EH Amsterdam'],
    phones: [
      { label: '020 408 28 70', href: 'tel:+31204082870' },
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
    ],
    schedule: [
      'Понедельник–пятница: 08:00–20:00',
      'Суббота: 10:00–16:00',
    ],
    email: 'info@ariadenttandprothese.nl',
    images: {
      logo: '/images/text-logo.svg',
      marker: '/images/marker.svg',
      phone: '/images/phone.svg',
      time: '/images/time.svg',
      email: '/images/email.svg',
    },
  },
  ui: {
    languageSwitcher: 'Выбор языка',
    menu: 'Меню',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    cookieMessage: 'Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, установите специальные настройки в браузере.',
    cookieAccept: 'Ок',
    sliderPrevious: 'Назад',
    sliderNext: 'Вперёд',
  },
}
