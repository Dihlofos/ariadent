export default {
  site: {
    title: 'Ariadent',
    description: 'Протезирование зубов, съемные протезы, коронки и мосты на имплантах.',
    keywords: ['Ariadent', 'зубные протезы', 'имплантация', 'Амстердам'],
    url: 'https://example.com',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    brand: {
      alt: 'Ariadent',
      link: '/#hero',
    },
    location: {
      label: 'Амстердам',
      link: '/address',
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
      label: 'Записаться на приём',
      link: '/#appointment',
    },
    call: {
      label: 'Позвонить',
      href: 'tel:+31657558576',
    },
    navItems: [
      { label: 'Услуги', link: '/#services' },
      { label: 'Страховка и оплата', link: '/insurance' },
      { label: 'Пациентам', link: '/patients' },
      { label: 'О клинике', link: '/about' },
      { label: 'Контакты и адрес', link: '/address' },
    ],
    images: {
      logo: '/images/shared/text-logo.svg',
      marker: '/images/shared/marker.svg',
      phone: '/images/shared/phone.svg',
      phoneWhite: '/images/shared/phone-white.svg',
      time: '/images/shared/time.svg',
    },
  },
  footer: {
    type: 'footer',
    brand: {
      alt: 'Ariadent',
      link: '/#hero',
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
      logo: '/images/shared/text-logo.svg',
      marker: '/images/shared/marker.svg',
      phone: '/images/shared/phone.svg',
      time: '/images/shared/time.svg',
      email: '/images/shared/email.svg',
    },
  },
  ui: {
    languageSwitcher: 'Выбор языка',
    menu: 'Меню',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    cookieMessage: 'Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, то установите специальные настройки в браузере.',
    cookieAccept: 'Ок',
    sliderPrevious: 'Назад',
    sliderNext: 'Вперёд',
  },
}
