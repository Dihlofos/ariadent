export default {
  site: {
    title: 'My Website',
    description: 'A modern static website built with Nuxt 3',
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
      label: 'Amsterdam',
      link: '#contacts',
    },
    schedule: [
      'Monday–Friday: 08:00–20:00',
      'Saturday: 10:00–16:00',
    ],
    phones: [
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
      { label: '020 408 28 70', href: 'tel:+31204082870' },
    ],
    appointment: {
      label: 'Book an appointment',
      link: '#appointment',
    },
    call: {
      label: 'Call us',
      href: 'tel:+31657558576',
    },
    navItems: [
      { label: 'Services', link: '#services' },
      { label: 'Insurance and payment', link: '#insurance' },
      { label: 'For patients', link: '#patients' },
      { label: 'About the clinic', link: '#about' },
      { label: 'Contacts and address', link: '#contacts' },
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
      text: 'Privacy policy',
      link: '/docs/policy.pdf',
    },
    address: ['Hugo de Vrieslaan 85', '1097 EH Amsterdam'],
    phones: [
      { label: '020 408 28 70', href: 'tel:+31204082870' },
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
    ],
    schedule: [
      'Monday–Friday: 08:00–20:00',
      'Saturday: 10:00–16:00',
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
    languageSwitcher: 'Choose language',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cookieMessage: 'By continuing to use this site, you agree to the use of cookies. Cookies help us keep the site working properly. If you do not agree, change your browser settings.',
    cookieAccept: 'OK',
    sliderPrevious: 'Previous',
    sliderNext: 'Next',
  },
}
