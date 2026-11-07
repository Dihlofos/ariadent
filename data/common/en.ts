export default {
  site: {
    title: 'Ariadent',
    description: 'Dental prosthetics, removable dentures, implant-supported crowns and bridges in Amsterdam.',
    keywords: ['Ariadent', 'dentures', 'dental implants', 'Amsterdam'],
    url: 'https://example.com',
    ogImage: '/images/favicons/favicon.svg',
  },
  navigation: {
    brand: {
      alt: 'Ariadent',
      link: '/#hero',
    },
    location: {
      label: 'Amsterdam',
      link: '/address',
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
      link: '/#appointment',
    },
    call: {
      label: 'Call',
      href: 'tel:+31657558576',
    },
    navItems: [
      { label: 'Services', link: '/#services' },
      { label: 'Insurance and payment', link: '/insurance' },
      { label: 'For patients', link: '/patients' },
      { label: 'About the clinic', link: '/about' },
      { label: 'Contact and address', link: '/address' },
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
      logo: '/images/shared/text-logo.svg',
      marker: '/images/shared/marker.svg',
      phone: '/images/shared/phone.svg',
      time: '/images/shared/time.svg',
      email: '/images/shared/email.svg',
    },
  },
  ui: {
    languageSwitcher: 'Choose language',
    menu: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cookieTitle: 'Cookie settings',
    cookieMessage: 'We use Google Analytics to measure website usage and Google Ads for marketing. These tags are only loaded after you give consent. You can change your choice later using Cookie settings at the bottom of the page.',
    cookiePolicy: 'Read our privacy statement',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    cookieSettings: 'Cookie settings',
    sliderPrevious: 'Previous',
    sliderNext: 'Next',
  },
}
