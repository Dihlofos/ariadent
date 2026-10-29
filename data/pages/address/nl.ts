import indexPage from '../index/nl'

export default {
  meta: {
    title: 'Ariadent: adres, contact en openingstijden in Amsterdam',
    description: 'Tandprothetische kliniek in Amsterdam aan de Hugo de Vrieslaan 85. Geopend van maandag tot en met zaterdag; afspraken kunnen online of telefonisch worden gemaakt.',
  },
  contacts: indexPage.contacts,
  directions: {
    title: 'ZO VINDT U ONZE KLINIEK',
    items: [
      {
        id: 'public-transport',
        title: 'Met het openbaar vervoer',
        description: [
          'Onze kliniek ligt vlak bij de halte Middenweg.',
          'Het dichtstbijzijnde treinstation is Amsterdam Amstel, op ongeveer 15 minuten loopafstand.',
        ],
        icon: {
          src: '/images/address/bus.svg',
          alt: '',
        },
      },
      {
        id: 'car',
        title: 'Met de auto',
        description: [
          'In de Hugo de Vrieslaan en de omliggende straten kunt u parkeren op gemeentelijke parkeerplaatsen tegen betaling.',
        ],
        icon: {
          src: '/images/address/auto.svg',
          alt: '',
        },
      },
    ],
  },
}

