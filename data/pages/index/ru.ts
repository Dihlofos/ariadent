export default {
  hero: {
    type: 'hero',
    title: {
      regular: 'КЛИНИКА',
      bold: 'ARIADENT',
    },
    subtitle: [
      'Протезирование и имплантация зубов',
      'с вниманием к комфорту',
      'и естественному виду.',
    ],
    button: { text: 'Записаться ко врачу', link: '#appointment' },
    secondaryButton: { text: 'Посмотреть примеры работ', link: '#works' },
    images: {
      portrait: '/images/hero/hero.png',
      logo: '/images/logo.svg',
      arrow: '/images/arrow-circle.svg',
    },
  },
  benefits: {
    type: 'benefits',
    items: [
      {
        id: 'direct-appointment',
        title: ['Без', 'направления', 'стоматолога'],
        description: ['Записываем на прием', 'напрямую — без направления', 'от стоматолога.'],
        image: {
          src: '/images/benefits/check.png',
          alt: '',
          variant: 'check',
          width: 308,
          height: 317,
        },
      },
      {
        id: 'urgent-repair',
        title: ['Срочный', 'ремонт', 'протезов'],
        description: ['Ремонтируем протез,', 'пока вы ожидаете', 'в клинике.'],
        image: {
          src: '/images/benefits/tooth.png',
          alt: '',
          variant: 'tooth',
          width: 154,
          height: 159,
        },
      },
      {
        id: 'insurance',
        title: ['До 90% оплаты', 'по базовой', 'страховке'],
        description: ['Предлагаем варианты', 'протезирования с учетом', 'страхового покрытия.'],
        image: {
          src: '/images/benefits/coins.png',
          alt: '',
          variant: 'coins',
          width: 366,
          height: 311,
        },
      },
      {
        id: 'after-hours',
        title: ['Помощь', 'в нерабочее', 'время'],
        description: ['Идем навстречу в экстренных', 'ситуациях и принимаем', 'в нерабочее время.'],
        image: {
          src: '/images/benefits/clock.png',
          alt: '',
          variant: 'clock',
          width: 308,
          height: 317,
        },
      },
    ],
  },
  services: {
    type: 'services',
    title: 'УСЛУГИ КЛИНИКИ',
    tabs: [
      {
        id: 'prosthetics',
        label: 'Протезирование зубов',
        items: [
          {
            id: 'full-denture',
            title: 'Полный съемный протез',
            description: 'Съемный протез, который заменяет все зубы на верхней или нижней челюсти.',
            image: {
              src: '/images/services/full-denture.png',
              alt: 'Полный съемный зубной протез',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'partial-denture',
            title: 'Частичный протез',
            description: 'Протез для восстановления нескольких отсутствующих зубов, если часть своих зубов сохранилась.',
            image: {
              src: '/images/services/partial-denture.png',
              alt: 'Частичный съемный зубной протез',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'clasp-denture',
            title: 'Бюгельный протез',
            description: 'Частичный протез с металлическим каркасом, который крепится к оставшимся зубам.',
            image: {
              src: '/images/services/clasp-denture.png',
              alt: 'Бюгельный зубной протез',
              width: 551,
              height: 424,
            },
          },
          {
            id: 'denture-relining',
            title: 'Перебазировка протеза',
            description: 'Восстановление прилегания протеза, если со временем он стал хуже держаться или натирать.',
            image: {
              src: '/images/services/relining.png',
              alt: 'Перебазировка зубного протеза',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'denture-repair',
            title: 'Ремонт протеза',
            description: 'Восстановление протеза после трещины, поломки или повреждения отдельных частей.',
            image: {
              src: '/images/services/repair.png',
              alt: 'Ремонт зубного протеза',
              width: 551,
              height: 418,
            },
          },
        ],
      },
      {
        id: 'implants',
        label: 'Имплантация зубов',
        items: [
          {
            id: 'implant-crown',
            title: 'Имплант с коронкой',
            description: 'Имплант с коронкой для восстановления отсутствующего зуба. Имплант заменяет корень зуба, а коронка — его видимую часть.',
            image: {
              src: '/images/services/implant-crown.png',
              alt: 'Имплант с зубной коронкой',
              width: 551,
              height: 420,
            },
          },
          {
            id: 'implant-bridge',
            title: 'Мост на имплантах',
            description: 'Конструкция для восстановления нескольких отсутствующих зубов подряд с опорой на импланты.',
            image: {
              src: '/images/services/implant-bridge.png',
              alt: 'Зубной мост на имплантах',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'implant-prosthesis',
            title: 'Протез на имплантах',
            description: 'Съемный протез, который фиксируется на имплантах, если обычный протез плохо держится.',
            image: {
              src: '/images/services/implant-denture.png',
              alt: 'Зубной протез на имплантах',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'full-implant-denture',
            title: 'Полный протез на имплантах',
            description: 'Протез для восстановления всех зубов на одной челюсти с опорой на несколько имплантов.',
            image: {
              src: '/images/services/full-implant.png',
              alt: 'Полный зубной протез на имплантах',
              width: 551,
              height: 418,
            },
          },
        ],
      },
    ],
    moreButton: {
      text: 'Подробнее',
      link: '#appointment',
    },
    images: {
      arrow: '/images/arrow-circle.svg',
    },
  },
  treatmentProcess: {
    type: 'treatment-process',
    title: 'КАК ПРОХОДИТ ЛЕЧЕНИЕ',
    images: {
      check: '/images/treatment-process/check.svg',
    },
    items: [
      {
        id: 'consultation',
        title: ['Осмотр', 'и консультация'],
        description: [
          'Разбираемся, что вас беспокоит, оцениваем состояние зубов, десен, челюсти',
          'и существующего протеза. Обсуждаем ваши пожелания и возможные варианты лечения.',
        ],
      },
      {
        id: 'treatment-plan',
        title: ['План', 'лечения'],
        description: [
          'Предлагаем подходящие варианты, объясняем их особенности, сроки и стоимость.',
          'Если сначала нужно лечение у другого специалиста или установка имплантов,',
          'рассказываем, что потребуется сделать.',
        ],
      },
      {
        id: 'impressions',
        title: ['Слепки', 'и прикус'],
        description: [
          'Снимаем слепки челюстей и определяем, как смыкаются зубы.',
          'Обсуждаем форму, цвет и положение будущих зубов.',
        ],
      },
      {
        id: 'fitting',
        title: ['Примерка', 'и изготовление'],
        description: [
          'Сначала примеряем конструкцию, чтобы проверить посадку, прикус, внешний вид,',
          'речь и жевание. Если необходимо, вносим изменения, а затем изготавливаем',
          'финальный протез.',
        ],
      },
      {
        id: 'installation',
        title: ['Установка', 'и контроль'],
        description: [
          'Устанавливаем ваш протез, проверяем его посадку и объясняем правила носки',
          'и ухода. После установки проводим контрольный осмотр и при необходимости',
          'корректируем протез.',
        ],
      },
    ],
  },
  results: {
    type: 'results',
    title: ['КАК ВЫГЛЯДИТ', 'РЕЗУЛЬТАТ'],
    description: 'Результаты протезирования и имплантации наших пациентов.',
    labels: {
      before: 'До',
      after: 'После',
    },
    images: {
      arrow: '/images/results/slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 1',
        before: {
          src: '/images/results/case-1-before.png',
          alt: 'Зубы пациента до лечения, клинический случай 1',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-1-after.png',
          alt: 'Зубы пациента после лечения, клинический случай 1',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 2',
        before: {
          src: '/images/results/case-2-before.png',
          alt: 'Зубы пациента до лечения, клинический случай 2',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/results/case-2-after.png',
          alt: 'Зубы пациента после лечения, клинический случай 2',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 3',
        before: {
          src: '/images/results/case-3-before.png',
          alt: 'Зубы пациента до лечения, клинический случай 3',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-3-after.png',
          alt: 'Зубы пациента после лечения, клинический случай 3',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 4',
        before: {
          src: '/images/results/case-4-before.png',
          alt: 'Зубы пациента до лечения, клинический случай 4',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-4-after.png',
          alt: 'Зубы пациента после лечения, клинический случай 4',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  appointment: {
    type: 'appointment',
    title: ['Нужен срочный', 'ремонт или хотите', 'подобрать решение?'],
    description: [
      'Оставьте заявку — мы свяжемся',
      'с вами, запишем на прием',
      'и расскажем, что можно сделать.',
    ],
    fields: [
      {
        id: 'appointment-name',
        name: 'name',
        type: 'text',
        label: 'Ваше имя',
        placeholder: 'Как к вам обращаться',
        autocomplete: 'name',
        inputmode: 'text',
      },
      {
        id: 'appointment-birthday',
        name: 'birthday',
        type: 'text',
        label: 'Дата рождения',
        placeholder: 'День, месяц, год',
        autocomplete: 'bday',
        inputmode: 'numeric',
      },
      {
        id: 'appointment-phone',
        name: 'phone',
        type: 'tel',
        label: 'Номер телефона',
        placeholder: 'Например: 06 57 55 85 76',
        autocomplete: 'tel',
        inputmode: 'tel',
      },
      {
        id: 'appointment-email',
        name: 'email',
        type: 'email',
        label: 'Электронная почта',
        placeholder: 'Например: naam@example.com',
        autocomplete: 'email',
        inputmode: 'email',
      },
    ],
    message: {
      id: 'appointment-message',
      name: 'message',
      label: 'Сообщение',
      placeholder: 'Коротко расскажите, что вас беспокоит',
    },
    submitText: 'Отправить',
    image: {
      src: '/images/appointment/dentures.png',
      alt: 'Пример зубного протеза',
      width: 588,
      height: 477,
    },
  },
  reviews: {
    type: 'reviews',
    title: 'ОТЗЫВЫ ПАЦИЕНТОВ',
    description: 'Что о нас пишут и говорят пациенты.',
    images: {
      avatar: '/images/reviews/avatar.svg',
      stars: '/images/reviews/stars.svg',
      arrow: '/images/arrow-circle.svg',
    },
    items: [
      {
        id: 'scott-vontobel',
        name: ['Scott', 'Vontobel'],
        ratingLabel: 'Оценка: 5 из 5',
        text: "After over 15 calls this morning I found this Office to help fix an emergency situation, spoke to the owner. He asked me if I can come in right away. I was in and out of the door in less than an hour with a great solution and a lot less money than I expected. Really couldn't be happier.",
      },
      {
        id: 'sea-loakz',
        name: ['sea. Loakz'],
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Fantastisch, ik ben zeer tevreden over deze praktijk Ariadent. Ik kwam met veel spanning in mijn lijf, maar die behandelaar straalde zoveel rust uit dat ik mij meteen op mijn gemak voelde. Hij is zeer vakkundig en hij heeft mijn mond weer mooi gemaakt. Ik hoef mij niet meer te schamen voor het lelijke gebit wat ik had. Ik durf weer lekker stralend te lachen. Ik zeg: dubt u over uw slechte gebit, ga naar deze praktijk. Doen!!!!',
      },
      {
        id: 'harry-arts',
        name: ['Harry Arts'],
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Ik had best angst voor de behandeling maar dat is heel erg meegevallen. Dankzij de behandelaar was ik snel over de angst heen. Ik heb een mooie prothese die onmiddellijk goed zat. Ook cosmetisch is het perfect. Ik kan dit iedereen aanraden.',
      },
      {
        id: 'gerda-kleerkoper',
        name: ['Gerda', 'Kleerkoper'],
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Wat een kunstenaar, heb een moeilijke kaak maar ziet er prachtig uit, zeer aan te bevelen en vriendelijke adorabele man.',
      },
    ],
    moreButton: {
      text: 'Больше отзывов на Google картах',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
    video: {
      src: 'https://www.youtube.com/embed/7_QwBaGnZj0?si=Fu4Icq0Nclf-WAuR',
      title: 'Видеоотзыв пациента Ariadent',
    },
  },
  about: {
    type: 'about',
    title: 'О КЛИНИКЕ',
    items: [
      {
        id: 'experience',
        title: 'Работа с 1996 года',
        description: [
          'Больше 30 лет помогаем пациентам восстанавливать зубы с помощью протезов. Были одними из первых в Нидерландах, кто начал заниматься съемным протезированием.',
        ],
        image: {
          src: '/images/about/clinic.png',
          alt: 'Приёмная клиники Ariadent',
          width: 392,
          height: 273,
        },
      },
      {
        id: 'emergency-care',
        title: 'Помощь в срочных случаях',
        description: [
          'При необходимости принимаем в нерабочее время. Срочный ремонт протеза можем выполнить во время визита, а изготовить новый протез в течение недели.',
        ],
        image: {
          src: '/images/about/emergency.png',
          alt: 'Зубной протез в руках специалиста',
          width: 341,
          height: 273,
        },
      },
      {
        id: 'team',
        title: 'Команда с большим опытом',
        description: [
          'В команде ARIADENT — специалисты с многолетним опытом в зубном протезировании и имплантации.',
          'А благодаря небольшой команде мы сохраняем личный контакт с пациентами и внимательно разбираемся в каждой ситуации.',
        ],
        image: {
          src: '/images/about/team.png',
          alt: 'Команда клиники Ariadent',
          width: 392,
          height: 372,
        },
      },
      {
        id: 'standards',
        title: 'Профессиональные стандарты',
        description: [
          'ARIADENT состоит в Organisatie van Nederlandse Tandprothetici (ONT), а специалисты клиники зарегистрированы в KwaliteitsRegister TandProthetici (KRTP).',
          'Поддерживаем квалификацию и регулярно обновляем профессиональные знания в области зубного протезирования.',
        ],
        image: {
          src: '/images/about/certifications.png',
          alt: 'Профессиональные реестры клиники Ariadent',
          width: 341,
          height: 372,
        },
      },
    ],
  },
  contacts: {
    type: 'contacts',
    title: 'АДРЕС В АМСТЕРДАМЕ',
    address: {
      lines: ['Hugo de Vrieslaan 85', '1097 EH Amsterdam'],
    },
    schedule: [
      'Понедельник–пятница: 08:00–20:00',
      'Суббота: 10:00–16:00',
    ],
    phones: [
      { label: '020 408 28 70', href: 'tel:+31204082870' },
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
    ],
    appointmentButton: {
      text: 'Записаться на прием',
      link: '#appointment',
    },
    routeButton: {
      text: 'Построить маршрут',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Hugo+de+Vrieslaan+85%2C+1097+EH+Amsterdam',
    },
    map: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.198163377157!2d4.9320065!3d52.348691099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350363e85%3A0x6c9ee475a6079f2!2zSHVnbyBkZSBWcmllc2xhYW4gODUsIDEwOTcgRUggQW1zdGVyZGFtLCDQndC40LTQtdGA0LvQsNC90LTRiw!5e0!3m2!1sru!2sru!4v1791571571300!5m2!1sru!2sru',
      title: 'Карта проезда к клинике Ariadent',
    },
    images: {
      marker: '/images/marker.svg',
      markerSmall: '/images/marker-small.svg',
      time: '/images/time.svg',
      phone: '/images/phone.svg',
    },
  },
  faq: {
    type: 'faq',
    title: ['ЧАСТО ЗАДАВАЕМЫЕ', 'ВОПРОСЫ'],
    description: 'Отвечаем на самые популярные вопросы о протезах, имплантатах, стоимости и записи.',
    images: {
      arrowDown: '/images/faq/arrow-down.svg',
      arrowUp: '/images/faq/arrow-up.svg',
    },
    items: [
      {
        id: 'replace-denture',
        question: 'Как понять, что пора менять протез?',
        answer: 'Если протез стал хуже держаться, натирает, мешает жевать или говорить, его стоит показать специалисту. Иногда достаточно перебазировки или ремонта, но в некоторых случаях протез пора заменить.',
      },
      {
        id: 'insurance',
        question: 'Что покрывает страховка?',
        answer: 'Покрытие зависит от вашего страхового полиса и выбранного лечения. Перед началом мы поможем уточнить условия и рассчитать возможную компенсацию.',
      },
      {
        id: 'production-time',
        question: 'Как долго изготавливают протез?',
        answer: 'Срок зависит от вида протеза и объёма работы. Обычно изготовление занимает несколько недель, а срочный ремонт часто можно выполнить во время одного визита.',
      },
      {
        id: 'denture-lifespan',
        question: 'Сколько служит зубной протез?',
        answer: 'Срок службы зависит от типа протеза, состояния полости рта и ухода. Регулярные осмотры помогают вовремя скорректировать посадку и продлить срок использования.',
      },
      {
        id: 'implant-pain',
        question: 'Больно ли устанавливать импланты?',
        answer: 'Установка проходит под местной анестезией, поэтому во время процедуры боли обычно нет. После лечения врач объяснит, как уменьшить возможный дискомфорт.',
      },
      {
        id: 'first-appointment',
        question: 'Что нужно взять с собой на первый прием?',
        answer: 'Возьмите документ, страховые данные и, если есть, результаты предыдущих обследований. Также можно принести список лекарств, которые вы принимаете.',
      },
    ],
  },
}
