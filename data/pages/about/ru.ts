export default {
  meta: {
    title: 'Ariadent: клиника в Амстердаме, врачи, методы лечения',
    description: 'Стоматологическая клиника Ariadent в Амстердаме работает с 1996 года. Опытная команда, цифровые технологии протезирования и имплантации, стандарты ONT и KRTP.',
  },
  hero: {
    title: 'РАБОТАЕМ С 1996 ГОДА',
    facts: [
      {
        id: 'experience',
        label: 'Больше 30 лет',
        description: 'помогаем пациентам восстанавливать зубы с помощью протезов.',
      },
      {
        id: 'pioneers',
        label: 'Одни из первых',
        description: 'занялись съемным протезированием в Нидерландах.',
      },
    ],
    image: {
      src: '/images/about/about-hero.webp',
      alt: 'Команда клиники Ariadent',
      width: 1725,
      height: 960,
    },
  },
  approach: {
    title: 'НАШ ПОДХОД',
    items: [
      {
        id: 'individual-treatment',
        title: 'Работаем без шаблонов',
        description: 'Подбираем лечение под конкретную ситуацию: что нужно восстановить, в каком состоянии зубы и десны, какой прикус и какой протез уже есть.',
        image: {
          src: '/images/about/approach-stars.webp',
          alt: '',
          variant: 'stars',
          width: 378,
          height: 382,
        },
      },
      {
        id: 'treatment-options',
        title: 'Предлагаем варианты лечения',
        description: 'Рассказываем обо всех подходящих вариантах лечения. Вы сами выбираете с учетом условий страховки, времени и предпочтений.',
        image: {
          src: '/images/about/approach-options.webp',
          alt: '',
          variant: 'options',
          width: 390,
          height: 400,
        },
      },
      {
        id: 'expected-result',
        title: 'Обсуждаем результат заранее',
        description: 'До начала лечения обсуждаем, как будут выглядеть и функционировать зубы, чтобы результат соответствовал вашим ожиданиям.',
        image: {
          src: '/images/about/approach-denture.webp',
          alt: '',
          variant: 'denture',
          width: 402,
          height: 382,
        },
      },
    ],
  },
  team: {
    title: 'КОМАНДА КЛИНИКИ',
    members: [
      {
        id: 'hose-sabouri',
        name: 'Hose Sabouri',
        role: 'Руководитель клиники, специалист по имплантатам и зубным протезам',
        image: {
          src: '/images/about/team-hose-sabouri.webp',
          alt: 'Hose Sabouri — руководитель клиники Ariadent',
          width: 520,
          height: 760,
        },
      },
      {
        id: 'albert-roks',
        name: 'Albert Roks',
        role: 'Имплантолог',
        image: {
          src: '/images/about/team-albert-roks.webp',
          alt: 'Albert Roks — имплантолог клиники Ariadent',
          width: 520,
          height: 760,
        },
      },
      {
        id: 'amy-molenaar',
        name: 'Amy Molenaar',
        role: 'Ассистент',
        image: {
          src: '/images/about/team-amy-molenaar.webp',
          alt: 'Amy Molenaar — ассистент клиники Ariadent',
          width: 520,
          height: 760,
        },
      },
      {
        id: 'jennifer-bijl',
        name: 'Jennifer Bijl',
        role: 'Ассистент',
        image: {
          src: '/images/about/team-jennifer-bijl.webp',
          alt: 'Jennifer Bijl — ассистент клиники Ariadent',
          width: 520,
          height: 760,
        },
      },
    ],
  },
  clinicSpace: {
    title: 'ПРОСТРАНСТВО КЛИНИКИ',
    arrow: '/images/about/slider-arrow.svg',
    items: [
      {
        id: 'treatment-room',
        title: 'Кабинет для приема',
        description: 'Осмотр, консультации и лечение проходят в оборудованном кабинете.',
        image: {
          src: '/images/about/clinic-treatment-room.webp',
          alt: 'Кабинет для приема пациентов в клинике Ariadent',
          width: 600,
          height: 600,
        },
      },
      {
        id: 'ct-scanner',
        title: 'Компьютерная томография',
        description: 'Не нужно ехать в другую клинику для диагностики.',
        image: {
          src: '/images/about/clinic-ct-scanner.webp',
          alt: 'Компьютерный томограф в клинике Ariadent',
          width: 600,
          height: 600,
        },
      },
      {
        id: 'waiting-area',
        title: 'Зона ожидания',
        description: 'Комфортное пространство для пациентов и сопровождающих.',
        image: {
          src: '/images/about/clinic-waiting-area.webp',
          alt: 'Зона ожидания клиники Ariadent',
          width: 600,
          height: 600,
        },
      },
      {
        id: 'care-products',
        title: 'Средства для ухода',
        description: 'После лечения дарим набор для ежедневного ухода за протезом.',
        image: {
          src: '/images/about/clinic-care-products.webp',
          alt: 'Средства для ежедневного ухода за протезами',
          width: 600,
          height: 600,
        },
      },
    ],
  },
  technologies: {
    title: 'КАКИЕ ТЕХНОЛОГИИ МЫ ИСПОЛЬЗУЕМ',
    items: [
      {
        id: 'cad-cam',
        title: 'CAD/CAM-технологии',
        description: 'Проектируем и изготавливаем протезы с помощью компьютера, чтобы получить точную форму и размер.',
        image: {
          src: '/images/about/technology-cad-cam.webp',
          alt: 'Цифровое проектирование зубного протеза с помощью CAD/CAM',
          variant: 'cad-cam',
          width: 434,
          height: 382,
        },
      },
      {
        id: 'materials',
        title: 'Керамика и цирконий',
        description: 'Используем современные материалы, которые помогают добиться естественного вида и долговечного результата.',
        image: {
          src: '/images/about/technology-ceramics-zirconia.webp',
          alt: 'Керамика и цирконий для изготовления зубных протезов',
          variant: 'materials',
          width: 350,
          height: 382,
        },
      },
    ],
  },
  standards: {
    title: 'ПРОФЕССИОНАЛЬНЫЕ СТАНДАРТЫ',
    items: [
      {
        id: 'ont',
        intro: 'Клиника ARIADENT состоит',
        connector: 'в',
        standard: 'Organisatie van Nederlandse Tandprothetici',
        abbreviation: '(ONT)',
        image: {
          src: '/images/about/standard-ont-logo.webp',
          alt: 'Organisatie van Nederlandse Tandprothetici',
          variant: 'ont',
          width: 398,
          height: 172,
        },
      },
      {
        id: 'krtp',
        intro: 'Наши специалисты зарегистрированы',
        connector: 'в',
        standard: 'KwaliteitsRegister TandProthetici',
        abbreviation: '(KRTP)',
        image: {
          src: '/images/about/standard-krtp-logo.webp',
          alt: 'KwaliteitsRegister TandProthetici',
          variant: 'krtp',
          width: 596,
          height: 174,
        },
      },
    ],
  },
}
