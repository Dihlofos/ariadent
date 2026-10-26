export default {
  meta: {
    title: 'Ariadent: клиника протезирования и имплантации в Амстердаме',
    description: 'Протезирование зубов, съемные протезы, коронки и мосты на имплантах. Ремонт протезов во время визита, помощь со страховкой.',
  },
  hero: {
    type: 'hero',
    title: {
      regular: 'КЛИНИКА',
      bold: 'ARIADENT',
    },
    subtitle: 'Протезирование и имплантация зубов с вниманием к комфорту и естественному виду.',
    button: { text: 'Записаться на приём', link: '#appointment' },
    secondaryButton: { text: 'Посмотреть примеры работ', link: '#results' },
    images: {
      portrait: '/images/home/hero.webp',
      logo: '/images/home/logo.svg',
      arrow: '/images/home/arrow-circle.svg',
    },
  },
  benefits: {
    type: 'benefits',
    items: [
      {
        id: 'direct-appointment',
        title: 'Восстановление зубов на имплантах',
        description: 'Используем проверенные материалы с высокой приживаемостью.',
        image: {
          src: '/images/home/benefit-check.webp',
          alt: '',
          variant: 'check',
          width: 308,
          height: 317,
        },
      },
      {
        id: 'urgent-repair',
        title: 'Срочный ремонт протезов',
        description: 'Ремонтируем протез, пока вы ожидаете в клинике.',
        image: {
          src: '/images/home/benefit-tooth.webp',
          alt: '',
          variant: 'tooth',
          width: 308,
          height: 317,
        },
      },
      {
        id: 'insurance',
        title: 'До 90% оплаты по базовой страховке',
        description: 'Предлагаем варианты протезирования с учетом страхового покрытия.',
        image: {
          src: '/images/home/benefit-coins.webp',
          alt: '',
          variant: 'coins',
          width: 342,
          height: 342,
        },
      },
      {
        id: 'after-hours',
        title: 'Помощь в нерабочее время',
        description: 'Идем навстречу в экстренных ситуациях и принимаем в нерабочее время.',
        image: {
          src: '/images/home/benefit-clock.webp',
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
              src: '/images/home/service-full-denture.webp',
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
              src: '/images/home/service-partial-denture.webp',
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
              src: '/images/home/service-clasp-denture.webp',
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
              src: '/images/home/service-relining.webp',
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
              src: '/images/home/service-repair.webp',
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
              src: '/images/home/service-implant-crown.webp',
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
              src: '/images/home/service-implant-bridge.webp',
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
              src: '/images/home/service-implant-denture.webp',
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
              src: '/images/home/service-full-implant.webp',
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
      arrow: '/images/home/arrow-circle.svg',
    },
  },
  treatmentProcess: {
    type: 'treatment-process',
    title: 'КАК ПРОХОДИТ ЛЕЧЕНИЕ',
    images: {
      check: '/images/home/treatment-check.svg',
    },
    items: [
      {
        id: 'consultation',
        title: 'Осмотр и консультация',
        description: 'Разбираемся, что вас беспокоит, оцениваем состояние зубов, десен, челюсти и существующего протеза. Обсуждаем ваши пожелания и возможные варианты лечения.',
      },
      {
        id: 'treatment-plan',
        title: 'План лечения',
        description: 'Предлагаем подходящие варианты, объясняем их особенности, сроки и стоимость. Если сначала нужно лечение у другого специалиста или установка имплантов, рассказываем, что потребуется сделать.',
      },
      {
        id: 'impressions',
        title: 'Слепки и прикус',
        description: 'Снимаем слепки челюстей и определяем, как смыкаются зубы. Обсуждаем форму, цвет и положение будущих зубов.',
      },
      {
        id: 'fitting',
        title: 'Примерка и изготовление',
        description: 'Сначала примеряем конструкцию, чтобы проверить посадку, прикус, внешний вид, речь и жевание. Если необходимо, вносим изменения, а затем изготавливаем финальный протез.',
      },
      {
        id: 'installation',
        title: 'Установка и контроль',
        description: 'Устанавливаем ваш протез, проверяем его посадку и объясняем правила носки и ухода. После установки проводим контрольный осмотр и при необходимости корректируем протез.',
      },
    ],
  },
  results: {
    type: 'results',
    title: 'КАК ВЫГЛЯДИТ РЕЗУЛЬТАТ',
    description: 'Результаты протезирования и имплантации наших пациентов.',
    labels: {
      before: 'До',
      after: 'После',
    },
    images: {
      arrow: '/images/shared/result-slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 1',
        before: {
          src: '/images/shared/result-case-1-before.webp',
          alt: 'Зубы пациента до лечения, клинический случай 1',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-1-after.webp',
          alt: 'Зубы пациента после лечения, клинический случай 1',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 2',
        before: {
          src: '/images/shared/result-case-2-before.webp',
          alt: 'Зубы пациента до лечения, клинический случай 2',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/shared/result-case-2-after.webp',
          alt: 'Зубы пациента после лечения, клинический случай 2',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 3',
        before: {
          src: '/images/shared/result-case-3-before.webp',
          alt: 'Зубы пациента до лечения, клинический случай 3',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-3-after.webp',
          alt: 'Зубы пациента после лечения, клинический случай 3',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Сравнение результата до и после лечения, клинический случай 4',
        before: {
          src: '/images/shared/result-case-4-before.webp',
          alt: 'Зубы пациента до лечения, клинический случай 4',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-4-after.webp',
          alt: 'Зубы пациента после лечения, клинический случай 4',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  appointment: {
    type: 'appointment',
    title: 'Нужен срочный ремонт или хотите подобрать решение?',
    description: 'Оставьте заявку — мы свяжемся с вами, запишем на прием и расскажем, что можно сделать.',
    fields: [
      {
        id: 'appointment-name',
        name: 'name',
        type: 'text',
        label: 'Ваше имя',
        placeholder: 'Как к вам обращаться',
        autocomplete: 'name',
        inputmode: 'text',
        required: true,
      },
      {
        id: 'appointment-phone',
        name: 'phone',
        type: 'tel',
        label: 'Номер телефона',
        placeholder: 'Например: 06 57 55 85 76',
        autocomplete: 'tel',
        inputmode: 'tel',
        required: true,
      },
      {
        id: 'appointment-email',
        name: 'email',
        type: 'email',
        label: 'Электронная почта',
        placeholder: 'Например: naam@example.com',
        autocomplete: 'email',
        inputmode: 'email',
        required: true,
      },
    ],
    message: {
      id: 'appointment-message',
      name: 'message',
      label: 'Сообщение',
      placeholder: 'Коротко расскажите, что вас беспокоит',
      required: false,
    },
    submitText: 'Отправить',
    feedback: {
      error: {
        title: 'Что-то пошло не так',
        description: 'Повторите попытку — если не поможет, попробуйте чуть позже.',
        buttonText: 'Назад',
        image: {
          src: '/images/home/appointment-error-question.webp',
          alt: '',
          width: 268,
          height: 272,
        },
      },
      success: {
        title: 'Заявка принята',
        description: 'Свяжемся с вами в ближайшее время.',
        image: {
          src: '/images/home/appointment-success-check.webp',
          alt: '',
          width: 408,
          height: 412,
        },
      },
    },
    image: {
      src: '/images/home/appointment-dentures.webp',
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
      avatar: '/images/shared/review-avatar.svg',
      stars: '/images/shared/review-stars.svg',
      arrow: '/images/home/arrow-circle.svg',
    },
    items: [
      {
        id: 'scott-vontobel',
        name: 'Scott Vontobel',
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Сегодня утром я обзвонил более 15 клиник, прежде чем нашёл эту, готовую помочь в экстренной ситуации. Я поговорил с владельцем, и он попросил меня приехать сразу. Меньше чем за час всё было готово: я получил отличное решение за гораздо меньшие деньги, чем ожидал. Я очень доволен.',
      },
      {
        id: 'sea-loakz',
        name: 'sea. Loakz',
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Фантастика! Я очень доволен клиникой Ariadent. Я пришёл с сильным волнением, но специалист был настолько спокоен, что я сразу почувствовал себя комфортно. Он очень профессионален и прекрасно восстановил мою улыбку. Мне больше не нужно стесняться того, как раньше выглядели мои зубы, и я снова могу уверенно улыбаться. Если вас беспокоит состояние зубов, смело обращайтесь в эту клинику. Рекомендую!',
      },
      {
        id: 'harry-arts',
        name: 'Harry Arts',
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Я очень боялся лечения, но всё прошло гораздо легче, чем ожидал. Благодаря специалисту страх быстро исчез. Мне установили прекрасный протез, который сразу идеально подошёл. Результат отлично выглядит. Смело рекомендую эту клинику всем.',
      },
      {
        id: 'gerda-kleerkoper',
        name: 'Gerda Kleerkoper',
        ratingLabel: 'Оценка: 5 из 5',
        text: 'Настоящий мастер! У меня сложная челюсть, но результат выглядит прекрасно. Очень рекомендую — дружелюбный и замечательный специалист.',
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
          src: '/images/home/about-clinic.webp',
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
          src: '/images/home/about-emergency.webp',
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
          src: '/images/home/about-team.webp',
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
        logos: [
          {
            src: '/images/home/about-krtp-logo.webp',
            alt: 'KwaliteitsRegister TandProthetici',
            width: 254,
            height: 74,
          },
          {
            src: '/images/home/about-ont-logo.webp',
            alt: 'Organisatie van Nederlandse Tandprothetici',
            width: 254,
            height: 109,
          },
        ],
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
      text: 'Записаться на приём',
      link: '/#appointment',
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
      marker: '/images/shared/marker.svg',
      markerSmall: '/images/shared/marker-small.svg',
      time: '/images/shared/time.svg',
      phone: '/images/shared/phone.svg',
    },
  },
  faq: {
    type: 'faq',
    title: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
    description: 'Отвечаем на самые популярные вопросы о протезах, имплантатах, стоимости и записи.',
    images: {
      arrowDown: '/images/shared/faq-arrow-down.svg',
      arrowUp: '/images/shared/faq-arrow-up.svg',
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
        answer: 'Размер компенсации зависит от условий вашего полиса. Мы помогаем разобраться, что покрывает ваша страховая компания. Подробнее — на странице «Страховка и оплата».',
      },
      {
        id: 'production-time',
        question: 'Как долго изготавливают протез?',
        answer: 'Обычно изготовление занимает около 5 недель. Если случай срочный, мы можем изготовить протез за неделю.',
      },
      {
        id: 'denture-lifespan',
        question: 'Сколько служит зубной протез?',
        answer: 'Обычно зубной протез служит несколько лет. Со временем челюсть меняется, поэтому протез хуже прилегает и не держится. Регулярные осмотры и своевременная перебазировка помогают продлить срок его службы.',
      },
      {
        id: 'implant-pain',
        question: 'Больно ли устанавливать импланты?',
        answer: 'Мы устанавливаем импланты под местной анестезией, поэтому во время процедуры вы ничего не чувствуете. После установки возможны болезненность, отек или чувство дискомфорта — обычно всё проходит в течение недели.',
      },
      {
        id: 'first-appointment',
        question: 'Что нужно взять с собой на первый прием?',
        answer: 'Возьмите удостоверение личности, страховую карту, список лекарств и информацию о здоровье, которая может быть важна для лечения. Если у вас уже есть протез, принесите его с собой.',
      },
    ],
  },
}
