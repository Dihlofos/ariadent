import indexPage from '../index/ru'

export default {
  meta: {
    title: 'Ariadent: адрес, контакты и график работы в Амстердаме',
    description: 'Клиника зубного протезирования в Амстердаме, Hugo de Vrieslaan 85. Прием с понедельника по субботу, запись на сайте и по телефону.',
  },
  contacts: indexPage.contacts,
  directions: {
    title: 'КАК ДОБРАТЬСЯ ДО КЛИНИКИ',
    items: [
      {
        id: 'public-transport',
        title: 'На общественном транспорте',
        description: [
          'Клиника находится рядом с остановкой Hugo de Vrieslaan.',
          'Ближайшая железнодорожная станция — Amsterdam Muiderpoort, примерно в 15 минутах пешком.',
        ],
        icon: {
          src: '/images/address/bus.svg',
          alt: '',
        },
      },
      {
        id: 'car',
        title: 'На автомобиле',
        description: [
          'На Hugo de Vrieslaan и соседних улицах есть платная городская парковка.',
        ],
        icon: {
          src: '/images/address/auto.svg',
          alt: '',
        },
      },
    ],
  },
}
