import indexPage from '../index/en'

export default {
  meta: {
    title: 'Ariadent: Address, Contacts and Opening Hours in Amsterdam',
    description: 'Dental prosthetics clinic in Amsterdam at Hugo de Vrieslaan 85. Open Monday through Saturday, with online and telephone appointment booking.',
  },
  contacts: indexPage.contacts,
  directions: {
    title: 'HOW TO GET TO THE CLINIC',
    items: [
      {
        id: 'public-transport',
        title: 'By public transport',
        description: [
          'The clinic is located near the Hugo de Vrieslaan stop.',
          'The nearest railway station is Amsterdam Muiderpoort, approximately a 15-minute walk away.',
        ],
        icon: {
          src: '/images/bus.svg',
          alt: '',
        },
      },
      {
        id: 'car',
        title: 'By car',
        description: [
          'Paid municipal parking is available on Hugo de Vrieslaan and the surrounding streets.',
        ],
        icon: {
          src: '/images/auto.svg',
          alt: '',
        },
      },
    ],
  },
}
