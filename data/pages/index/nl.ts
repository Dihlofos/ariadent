export default {
  meta: {
    title: 'Ariadent: gebitsprotheses en implantaten in Amsterdam',
    description: 'Tandprothetiek, uitneembare gebitsprotheses, kronen en bruggen op implantaten, spoedreparaties en hulp bij verzekeringsvergoedingen in Amsterdam.',
  },
  hero: {
    type: 'hero',
    title: {
      regular: 'TANDPROTHETISCHE PRAKTIJK',
      bold: 'ARIADENT',
    },
    subtitle: 'Tandprothetiek en implantaten met aandacht voor comfort en een natuurlijke uitstraling.',
    button: { text: 'Maak een afspraak', link: '#appointment' },
    secondaryButton: { text: 'Bekijk voorbeelden van ons werk', link: '#results' },
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
        title: 'Tandvervanging met implantaten',
        description: 'We gebruiken beproefde materialen die bijdragen aan een succesvolle integratie van de implantaten.',
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
        title: 'Spoedreparaties aan kunstgebitten',
        description: 'We repareren uw gebitsprothese terwijl u wacht.',
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
        title: 'Tot 90% vergoed vanuit de basisverzekering',
        description: 'We bieden verschillende mogelijkheden voor gebitsprotheses, rekening houdend met uw verzekeringsdekking.',
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
        title: 'Hulp buiten reguliere openingstijden',
        description: 'Bij spoedgevallen denken we met u mee en ontvangen we u ook buiten de reguliere openingstijden.',
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
    title: 'BEHANDELINGEN IN DE KLINIEK',
    tabs: [
      {
        id: 'prosthetics',
        label: 'Tandprothetiek',
        items: [
          {
            id: 'full-denture',
            title: 'Volledig uitneembaar kunstgebit',
            description: 'Een uitneembare prothese die alle tanden in de boven- of onderkaak vervangt.',
            image: {
              src: '/images/home/service-full-denture.webp',
              alt: 'Volledig uitneembaar kunstgebit',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'partial-denture',
            title: 'Partiële prothese',
            description: 'Een uitneembare prothese die meerdere ontbrekende tanden vervangt. U heeft hierbij nog enkele eigen tanden.',
            image: {
              src: '/images/home/service-partial-denture.webp',
              alt: 'Partiële prothese',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'clasp-denture',
            title: 'Partieel kunstgebit met metalen frame',
            description: 'Een uitneembaar kunstgebit met een stevig metalen frame dat aan uw eigen tanden wordt bevestigd. Het vervangt ontbrekende tanden en helpt u weer comfortabel te kauwen en te lachen.',
            image: {
              src: '/images/home/service-clasp-denture.webp',
              alt: 'Partieel kunstgebit met metalen frame',
              width: 551,
              height: 424,
            },
          },
          {
            id: 'denture-relining',
            title: 'Rebasing',
            description: 'We passen uw kunstgebit aan zodat het weer goed aansluit en comfortabel zit als het losser is geworden of wrijving veroorzaakt.',
            image: {
              src: '/images/home/service-relining.webp',
              alt: 'Rebasing van een gebitsprothese',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'denture-repair',
            title: 'Reparatie van een gebitsprothese',
            description: 'We herstellen uw prothese als deze bijvoorbeeld gescheurd of gebroken is, of als een onderdeel beschadigd is.',
            image: {
              src: '/images/home/service-repair.webp',
              alt: 'Reparatie van een gebitsprothese',
              width: 551,
              height: 418,
            },
          },
        ],
      },
      {
        id: 'implants',
        label: 'Tandimplantaten',
        items: [
          {
            id: 'implant-crown',
            title: 'Implantaat met kroon',
            description: 'Een implantaat met daarop een kroon ter vervanging van één ontbrekende tand. Het implantaat vervangt de tandwortel. De kroon is het zichtbare deel van de nieuwe tand.',
            image: {
              src: '/images/home/service-implant-crown.webp',
              alt: 'Tandimplantaat met kroon',
              width: 551,
              height: 420,
            },
          },
          {
            id: 'implant-bridge',
            title: 'Implantaatgedragen brug',
            description: 'Een brug die door implantaten wordt ondersteund. Hiermee vervangen we meerdere ontbrekende tanden die naast elkaar staan.',
            image: {
              src: '/images/home/service-implant-bridge.webp',
              alt: 'Brug op implantaten',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'implant-prosthesis',
            title: 'Implantaatgedragen gebitsprothese',
            description: 'Een uitneembare prothese die op implantaten wordt vastgezet. Dit kan een oplossing zijn als een gewone prothese niet stevig genoeg blijft zitten.',
            image: {
              src: '/images/home/service-implant-denture.webp',
              alt: 'Implantaatgedragen gebitsprothese',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'full-implant-denture',
            title: 'Volledige implantaatgedragen prothese',
            description: 'Een prothese die alle tanden in één kaak vervangt. De prothese wordt door meerdere implantaten ondersteund.',
            image: {
              src: '/images/home/service-full-implant.webp',
              alt: 'Volledige gebitsprothese op implantaten',
              width: 551,
              height: 418,
            },
          },
        ],
      },
    ],
    moreButton: {
      text: 'Meer informatie',
      link: '#appointment',
    },
    images: {
      arrow: '/images/home/arrow-circle.svg',
    },
  },
  treatmentProcess: {
    type: 'treatment-process',
    title: 'Hoe verloopt de behandeling?',
    images: {
      check: '/images/home/treatment-check.svg',
    },
    items: [
      {
        id: 'consultation',
        title: 'Persoonlijk behandelplan',
        description: 'We bespreken uw klachten en wensen en onderzoeken uw tanden, tandvlees en kaak. Ook bekijken we uw huidige gebitsprothese, als u die heeft. Vervolgens bespreken we samen de mogelijke behandelingen en bekijken we welke oplossing het beste bij u past.',
      },
      {
        id: 'treatment-plan',
        title: 'Behandelingsplan',
        description: 'We bespreken samen welke behandelmogelijkheden het beste bij u passen. Daarbij leggen we duidelijk uit wat elke optie inhoudt, hoe lang de behandeling duurt en welke kosten u kunt verwachten. Is er eerst een behandeling door een andere specialist of het plaatsen van een implantaat nodig? Dan leggen we u stap voor stap uit wat er nodig is en wat u kunt verwachten.',
      },
      {
        id: 'impressions',
        title: 'Afdrukken en beet bepalen',
        description: 'We maken afdrukken van uw kaken en bekijken hoe uw tanden en kiezen op elkaar aansluiten. Samen bespreken we de gewenste vorm, kleur en stand van uw nieuwe tanden, zodat het resultaat goed aansluit bij uw wensen en er natuurlijk uitziet.',
      },
      {
        id: 'fitting',
        title: 'Proefpassen en op maat maken',
        description: 'We passen de voorziening eerst om te controleren of deze goed zit en of uw beet, het uiterlijk, uw spraak en het kauwen naar wens zijn. Waar nodig voeren we aanpassingen uit, zodat alles zo comfortabel mogelijk aanvoelt. Pas daarna maken we uw definitieve gebitsprothese.',
      },
      {
        id: 'installation',
        title: 'Plaatsing en nazorg',
        description: 'We plaatsen uw gebitsprothese en controleren of deze goed zit en comfortabel aanvoelt. We leggen u uit hoe u de prothese draagt en hoe u deze het beste kunt verzorgen. Na het plaatsen plannen we een controleafspraak om te kijken of alles naar wens is. Indien nodig passen we de prothese aan, zodat u er zo comfortabel mogelijk mee kunt functioneren.',
      },
    ],
  },
  results: {
    type: 'results',
    title: 'Hoe het eindresultaat eruit ziet',
    description: 'Bekijk de resultaten van onze prothese- en implantaatbehandelingen bij onze patiënten.',
    labels: {
      before: 'Voor de behandeling',
      after: 'Na de behandeling',
    },
    images: {
      arrow: '/images/shared/result-slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Vergelijking voor en na de behandeling, casus 1',
        before: {
          src: '/images/shared/result-case-1-before.webp',
          alt: 'Gebit van de patiënt voor de behandeling, casus 1',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-1-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 1',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Vergelijking voor en na de behandeling, casus 2',
        before: {
          src: '/images/shared/result-case-2-before.webp',
          alt: 'Gebit van de patiënt voor de behandeling, casus 2',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/shared/result-case-2-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 2',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Vergelijking voor en na de behandeling, casus 3',
        before: {
          src: '/images/shared/result-case-3-before.webp',
          alt: 'Gebit van de patiënt voor de behandeling, casus 3',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-3-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 3',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Vergelijking voor en na de behandeling, casus 4',
        before: {
          src: '/images/shared/result-case-4-before.webp',
          alt: 'Gebit van de patiënt voor de behandeling, casus 4',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-4-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 4',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  appointment: {
    type: 'appointment',
    title: 'DRINGEND EEN REPARATIE NODIG OF HULP BIJ HET KIEZEN VAN DE JUISTE OPLOSSING?',
    description: 'Stuur ons een bericht. We nemen contact met u op, plannen een afspraak in en bespreken samen de mogelijkheden.',
    fields: [
      {
        id: 'appointment-name',
        name: 'name',
        type: 'text',
        label: 'Naam',
        placeholder: 'Hoe mogen we u aanspreken?',
        autocomplete: 'name',
        inputmode: 'text',
        required: true,
      },
      {
        id: 'appointment-phone',
        name: 'phone',
        type: 'tel',
        label: 'Telefoonnummer',
        placeholder: 'Bijvoorbeeld: 06 57 55 85 76',
        autocomplete: 'tel',
        inputmode: 'tel',
        required: true,
      },
      {
        id: 'appointment-email',
        name: 'email',
        type: 'email',
        label: 'E-mail',
        placeholder: 'Bijvoorbeeld: naam@example.com',
        autocomplete: 'email',
        inputmode: 'email',
        required: true,
      },
    ],
    message: {
      id: 'appointment-message',
      name: 'message',
      label: 'Bericht',
      placeholder: 'Beschrijf kort uw vraag of klacht.',
      required: false,
    },
    submitText: 'Versturen',
    feedback: {
      error: {
        title: 'Er is iets misgegaan',
        description: 'Probeer het opnieuw. Lukt het nog steeds niet, probeer het dan later nog eens.',
        buttonText: 'Terug',
        image: {
          src: '/images/home/appointment-error-question.webp',
          alt: '',
          width: 268,
          height: 272,
        },
      },
      success: {
        title: 'Aanvraag ontvangen',
        description: 'We nemen binnenkort contact met u op.',
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
      alt: 'Voorbeeld van een gebitsprothese',
      width: 588,
      height: 477,
    },
  },
  reviews: {
    type: 'reviews',
    title: 'ERVARINGEN VAN ONZE PATIËNTEN',
    description: 'Wat onze patiënten over ons vertellen en schrijven.',
    images: {
      avatar: '/images/shared/review-avatar.svg',
      stars: '/images/shared/review-stars.svg',
      arrow: '/images/home/arrow-circle.svg',
    },
    items: [
      {
        id: 'scott-vontobel',
        name: 'Scott Vontobel',
        ratingLabel: 'Beoordeling: 5 van 5',
        text: "After over 15 calls this morning I found this Office to help fix an emergency situation, spoke to the owner. He asked me if I can come in right away. I was in and out of the door in less than an hour with a great solution and a lot less money than I expected. Really couldn't be happier.",
      },
      {
        id: 'sea-loakz',
        name: 'sea. Loakz',
        ratingLabel: 'Beoordeling: 5 van 5',
        text: 'Fantastic! I am very happy with Ariadent. I arrived feeling very anxious, but the clinician was so calm that I immediately felt at ease. He is highly skilled and restored my smile beautifully. I no longer feel ashamed of how my teeth used to look, and I can smile confidently again. If you are worried about the condition of your teeth, I strongly recommend this clinic.',
      },
      {
        id: 'harry-arts',
        name: 'Harry Arts',
        ratingLabel: 'Beoordeling: 5 van 5',
        text: 'I was very anxious about the treatment, but it turned out much better than expected. The clinician quickly put me at ease. I received a beautiful denture that fit perfectly right away, and the cosmetic result is excellent. I would recommend this clinic to everyone.',
      },
      {
        id: 'gerda-kleerkoper',
        name: 'Gerda Kleerkoper',
        ratingLabel: 'Beoordeling: 5 van 5',
        text: 'What an artist! I have a difficult jaw, but the result looks wonderful. Highly recommended — a friendly and delightful professional.',
      },
    ],
    moreButton: {
      text: 'Meer beoordelingen op Google Maps',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
    video: {
      src: 'https://www.youtube.com/embed/7_QwBaGnZj0?si=Fu4Icq0Nclf-WAuR',
      title: 'Videobeoordeling van een Ariadent-patiënt',
    },
  },
  about: {
    type: 'about',
    title: 'Over ons',
    items: [
      {
        id: 'experience',
        title: 'Sinds 1996',
        description: [
          'Al meer dan 30 jaar helpen we patiënten aan een mooi en functioneel gebit met behulp van gebitsprotheses. We behoren tot de eerste praktijken in Nederland die zich specialiseerden in uitneembare gebitsprotheses.',
        ],
        image: {
          src: '/images/home/about-clinic.webp',
          alt: 'Ontvangstruimte van de Ariadent-kliniek',
          width: 392,
          height: 273,
        },
      },
      {
        id: 'emergency-care',
        title: 'Spoedreparaties',
        description: [
          'Zo nodig, helpen we u ook buiten onze reguliere openingstijden. Spoedreparaties aan uw gebitsprothese voeren we vaak direct tijdens uw afspraak uit. Ook kunnen we binnen een week een nieuwe gebitsprothese voor u maken.',
        ],
        image: {
          src: '/images/home/about-emergency.webp',
          alt: 'Gebitsprothese in de handen van een specialist',
          width: 341,
          height: 273,
        },
      },
      {
        id: 'team',
        title: 'Een ervaren team',
        description: [
          'Het team van ARIADENT bestaat uit ervaren specialisten op het gebied van gebitsprotheses en implantaatbehandelingen.',
          'Dankzij ons kleinschalige team houden we het contact persoonlijk en nemen we de tijd om naar uw wensen te luisteren. Zo kunnen we uw persoonlijke situatie zorgvuldig beoordelen en samen zoeken naar de oplossing die het beste bij u past.',
        ],
        image: {
          src: '/images/home/about-team.webp',
          alt: 'Het team van de Ariadent-kliniek',
          width: 392,
          height: 372,
        },
      },
      {
        id: 'standards',
        title: 'Professionele kwaliteit',
        description: [
          'ARIADENT is aangesloten bij de Organisatie van Nederlandse Tandprothetici (ONT). Onze specialisten staan ingeschreven in het KwaliteitsRegister TandProthetici (KRTP).',
          'We blijven ons voortdurend ontwikkelen en scholen ons regelmatig bij, zodat onze kennis en vaardigheden op het gebied van gebitsprotheses up-to-date blijven. Zo kunt u rekenen op deskundige zorg en persoonlijke aandacht.',
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
    title: 'Adres in Amsterdam',
    address: {
      lines: ['Hugo de Vrieslaan 85', '1097 EH Amsterdam'],
    },
    schedule: [
      'Maandag–vrijdag: 08:00–20:00',
      'Zaterdag: 10:00–16:00',
    ],
    phones: [
      { label: '020 408 28 70', href: 'tel:+31204082870' },
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
    ],
    appointmentButton: {
      text: 'Maak een afspraak',
      link: '/#appointment',
    },
    routeButton: {
      text: 'Plan uw route',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Hugo+de+Vrieslaan+85%2C+1097+EH+Amsterdam',
    },
    map: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.198163377157!2d4.9320065!3d52.348691099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350363e85%3A0x6c9ee475a6079f2!2zSHVnbyBkZSBWcmllc2xhYW4gODUsIDEwOTcgRUggQW1zdGVyZGFt!5e0!3m2!1snl!2snl!4v1791571571300!5m2!1snl!2snl',
      title: 'Kaart met de route naar de Ariadent-kliniek',
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
    title: 'VEELGESTELDE VRAGEN',
    description: 'Antwoorden op veelgestelde vragen over gebitsprotheses, implantaten, kosten en afspraken.',
    images: {
      arrowDown: '/images/shared/faq-arrow-down.svg',
      arrowUp: '/images/shared/faq-arrow-up.svg',
    },
    items: [
      {
        id: 'replace-denture',
        question: 'Wanneer is het tijd om mijn gebitsprothese te vervangen?',
        answer: 'Als uw gebitsprothese losser zit, schuurt of het kauwen of praten moeilijker maakt, is het verstandig om deze door een specialist te laten controleren. Soms is het voldoende om de prothese aan te passen of te repareren. In andere gevallen is een nieuwe gebitsprothese de beste oplossing.',
      },
      {
        id: 'insurance',
        question: 'Wat vergoedt mijn zorgverzekering?',
        answer: 'De vergoeding hangt af van de voorwaarden van uw zorgverzekering en uw polis. We helpen u graag inzicht te krijgen in welke kosten uw zorgverzekering vergoedt. Meer informatie vindt u op de pagina ‘Vergoeding en betaling’.',
      },
      {
        id: 'production-time',
        question: 'Hoe lang duurt het om een gebitsprothese te maken?',
        answer: 'Het maken van een gebitsprothese duurt doorgaans ongeveer 5 weken. Heeft u met spoed een nieuwe prothese nodig? In dringende gevallen kunnen we deze al binnen één week voor u maken.',
      },
      {
        id: 'denture-lifespan',
        question: 'Hoe lang gaat een gebitsprothese mee?',
        answer: 'Een gebitsprothese gaat meestal meerdere jaren mee. Uw kaak verandert echter in de loop van de tijd, waardoor de prothese minder goed kan aansluiten en losser kan gaan zitten. Door uw prothese regelmatig te laten controleren en deze indien nodig opnieuw passend te laten maken, kunt u de levensduur verlengen.',
      },
      {
        id: 'implant-pain',
        question: 'Is het plaatsen van implantaten pijnlijk?',
        answer: 'We plaatsen implantaten onder plaatselijke verdoving, zodat u tijdens de behandeling geen pijn hoort te voelen. Na de behandeling kunt u last hebben van napijn, zwelling of een gevoelig gevoel. Deze klachten nemen meestal binnen een week geleidelijk af.',
      },
      {
        id: 'first-appointment',
        question: 'Wat moet ik meenemen naar mijn eerste afspraak?',
        answer: 'Neem bij uw eerste afspraak uw identiteitsbewijs, zorgverzekeringspas, een overzicht van uw medicatie en relevante medische gegevens mee. Heeft u al een gebitsprothese? Neem deze dan ook mee, zodat we deze kunnen beoordelen.',
      },
    ],
  },
}

