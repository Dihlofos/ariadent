import indexPage from '../index/en'

export default {
  meta: {
    title: 'Ariadent: Address, Contacts and Opening Hours in Amsterdam',
    description: 'Dental prosthetics clinic in Amsterdam at Hugo de Vrieslaan 85. Open Monday through Saturday, with online and telephone appointment booking.',
  },
  contacts: indexPage.contacts,
  directions: {
    title: 'HOW TO FIND THE CLINIC',
    items: [
      {
        id: 'public-transport',
        title: 'By public transport',
        description: [
          'The clinic is located next to the Hugo de Vrieslaan stop.',
          'The nearest railway station is Amsterdam Muiderpoort, about a 15-minute walk away.',
        ],
        icon: {
          src: '/images/address/bus.svg',
          alt: '',
        },
      },
      {
        id: 'car',
        title: 'By car',
        description: [
          'There is paid municipal parking on Hugo de Vrieslaan and the surrounding streets.',
        ],
        icon: {
          src: '/images/address/auto.svg',
          alt: '',
        },
      },
    ],
  },
}
