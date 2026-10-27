import indexPage from '../index/nl'

export default {
  meta: {
    title: 'Ariadent: behandelresultaten, beoordelingen en eerste afspraak',
    description: 'Bekijk echte resultaten voor en na behandelingen met gebitsprotheses, kronen op implantaten en implantaatgedragen protheses, plus informatie over beoordelingen, betaling en uw eerste afspraak.',
  },
  hero: {
    variant: 'patients',
    title: {
      lead: 'DE RESULTATEN BIJ ONZE',
      text: 'PATIËNTEN',
    },
    description: 'Bekijk de resultaten van behandelingen in onze kliniek. Ontdek hoe een glimlach kan veranderen na een behandeling met een gebitsprothese of implantaten.',
    image: {
      src: '/images/patients/hero-patients.webp',
      alt: 'Lachende patiënt van de Ariadent-kliniek',
      width: 2032,
      height: 774,
    },
  },
  results: {
    withCaptions: true,
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
          caption: 'Beschadigde en versleten tanden met een minder mooie uitstraling.',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-1-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 1',
          caption: 'Nieuwe zirkonium kroonvoorzieningen op implantaten, met een natuurlijk ogend resultaat.',
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
          caption: 'Een verouderde uitneembare gebitsprothese en meerdere ontbrekende tanden.',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/shared/result-case-2-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 2',
          caption: 'Implantaatgedragen gebitsprotheses voor zowel de boven- als onderkaak.',
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
          caption: 'Een esthetisch probleem met een gedeeltelijke gebitsprothese en ongemak tijdens het eten.',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-3-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 3',
          caption: 'Een nieuwe implantaatgedragen gebitsprothese voor de bovenkaak en een vernieuwde gedeeltelijke gebitsprothese voor de onderkaak.',
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
          caption: 'Een uitneembare gebitsprothese die niet prettig zat en er niet mooi uitzag.',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-4-after.webp',
          alt: 'Gebit van de patiënt na de behandeling, casus 4',
          caption: 'Een nieuwe, natuurlijk ogende implantaatgedragen gebitsprothese, waarmee de patiënt weer comfortabel kan eten.',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  reviews: {
    ...indexPage.reviews,
    showVideo: false,
    description: 'Lees hoe onze patiënten hun behandeling, onze persoonlijke aanpak en het uiteindelijke resultaat hebben ervaren.',
    moreButton: {
      text: 'Bekijk alle beoordelingen',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
    reviewButton: {
      text: 'Laat een beoordeling achter',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
  },
  faq: {
    type: 'faq',
    title: 'WAT U MOET WETEN',
    images: indexPage.faq.images,
    groups: [
      {
        id: 'dentures',
        title: 'OVER GEBITSPROTHESES',
        items: [
          {
            id: 'replace-denture',
            question: 'Wanneer is het tijd om mijn gebitsprothese te vervangen?',
            answer: 'Als uw gebitsprothese losser zit, schuurt of het kauwen of praten moeilijker maakt, is het verstandig om deze door een specialist te laten controleren. Soms is het voldoende om de prothese aan te passen of te repareren. In andere gevallen is een nieuwe gebitsprothese de beste oplossing.',
          },
          {
            id: 'production-time',
            question: 'Hoe lang duurt het om een gebitsprothese te maken?',
            answer: 'Het maken van een gebitsprothese duurt doorgaans ongeveer 5 weken. Heeft u met spoed een nieuwe prothese nodig? Dan kunnen we het proces versnellen en de prothese in dringende gevallen al binnen één week voor u maken.',
          },
          {
            id: 'denture-lifespan',
            question: 'Hoe lang gaat een gebitsprothese mee?',
            answer: 'Een gebitsprothese gaat doorgaans meerdere jaren mee. Uw kaak verandert echter geleidelijk, waardoor de prothese na verloop van tijd minder goed kan aansluiten of losser kan gaan zitten. Door uw prothese regelmatig te laten controleren en deze indien nodig opnieuw passend te laten maken, kunt u de levensduur verlengen.',
          },
          {
            id: 'denture-irritation',
            question: 'Wat kunt u doen als uw gebitsprothese schuurt?',
            answer: 'Schuurt uw gebitsprothese of veroorzaakt deze ongemak? Probeer de prothese dan niet zelf aan te passen. Maak een afspraak, zodat we kunnen controleren of de prothese goed zit en deze waar nodig kunnen aanpassen. Zo zorgen we ervoor dat uw prothese weer comfortabel zit.',
          },
        ],
      },
      {
        id: 'implants',
        title: 'OVER IMPLANTATEN',
        items: [
          {
            id: 'implant-denture',
            question: 'Wat is een implantaatgedragen gebitsprothese?',
            answer: 'Bij deze oplossing worden titanium implantaten in de kaak geplaatst. Hierop wordt een gebitsprothese met kunsttanden bevestigd. De prothese zit daardoor stevig vast en is niet afhankelijk van aangrenzende tanden of kiezen voor steun.',
          },
          {
            id: 'implant-candidates',
            question: 'Voor wie zijn implantaten geschikt?',
            answer: 'Implantaten zijn voor veel mensen een geschikte oplossing, mits de kaak voldoende gezond is en de mondgezondheid het plaatsen van implantaten toelaat. Voorafgaand aan de behandeling onderzoekt de specialist uw gebit en kaak zorgvuldig en beoordeelt hij of er eventuele beperkingen zijn. Zo bepalen we samen of een behandeling met implantaten bij u past.',
          },
          {
            id: 'implant-pain',
            question: 'Is het plaatsen van implantaten pijnlijk?',
            answer: 'We plaatsen implantaten onder plaatselijke verdoving, zodat u tijdens de behandeling geen pijn hoort te voelen. Na de behandeling kunt u last hebben van napijn, zwelling of een gevoelig gevoel. Deze klachten nemen meestal binnen een week geleidelijk af.',
          },
          {
            id: 'implant-count',
            question: 'Hoeveel implantaten zijn er nodig voor een gebitsprothese?',
            answer: 'Het aantal benodigde implantaten hangt af van het type prothese en uw persoonlijke situatie. Voor één ontbrekende tand is meestal één implantaat voldoende. Voor een volledige kaak met vaste tanden worden doorgaans 4 tot 6 implantaten geplaatst om de prothese te ondersteunen. Voor een uitneembare prothese op implantaten zijn meestal 2 tot 4 implantaten voldoende. Tijdens een intake beoordelen we uw situatie en bespreken we welke oplossing het beste bij u past.',
          },
        ],
      },
      {
        id: 'payment',
        title: 'OVER KOSTEN EN BETALINGEN',
        items: [
          {
            id: 'insurance',
            question: 'Wat vergoedt mijn zorgverzekering?',
            answer: 'De hoogte van de vergoeding hangt af van de voorwaarden van uw polis. We helpen u graag om te begrijpen wat uw zorgverzekering vergoedt. Meer informatie vindt u op de pagina "Verzekering en betaling".',
          },
          {
            id: 'insurance-approval',
            question: 'Is vooraf toestemming van de zorgverzekeraar nodig?',
            answer: 'Voor bepaalde behandelingen, zoals een implantaatgedragen gebitsprothese, is vooraf toestemming van uw zorgverzekeraar nodig om voor vergoeding in aanmerking te komen. Wij helpen u bij het verzamelen van de benodigde documenten en dienen de aanvraag voor u in. Zodra de zorgverzekeraar een beslissing heeft genomen, bespreken we de vervolgstappen en plannen we de behandeling in.',
          },
          {
            id: 'copayment',
            question: 'Moet ik zelf nog een deel van de kosten betalen?',
            answer: 'Ja, ook als uw zorgverzekering een deel van de behandeling vergoedt, kan het zijn dat u een deel zelf moet betalen. Zo wordt een standaardgebitsprothese bijvoorbeeld voor 75% vergoed vanuit de basisverzekering. De resterende 25% is dan uw eigen bijdrage. We bespreken de vergoedingen met u en brengen vooraf in kaart welk bedrag u zelf moet betalen, op basis van uw persoonlijke verzekeringsvoorwaarden. Zo weet u vóór de start van de behandeling waar u financieel aan toe bent.',
          },
        ],
      },
      {
        id: 'first-appointment',
        title: 'OVER UW EERSTE AFSPRAAK',
        items: [
          {
            id: 'what-to-bring',
            question: 'Wat neemt u mee naar uw afspraak?',
            answer: 'Neem uw identiteitsbewijs, zorgverzekeringspas, een overzicht van uw medicatie en eventuele medische gegevens die relevant zijn voor uw behandeling mee. Zo kunnen we uw situatie goed beoordelen en u zo passend mogelijk helpen.',
          },
          {
            id: 'old-denture',
            question: 'Moet ik mijn oude gebitsprothese meenemen?',
            answer: 'Ja, neem uw huidige gebitsprothese gerust mee naar uw afspraak. We beoordelen de staat ervan en bekijken of deze kan worden aangepast of gerepareerd, of dat het beter is om een nieuwe prothese te maken. Zo bespreken we samen welke oplossing het beste bij u past.',
          },
          {
            id: 'first-visit-duration',
            question: 'Hoe lang duurt de eerste afspraak?',
            answer: 'De eerste afspraak duurt meestal ongeveer 45 tot 60 minuten. We onderzoeken uw gebit en bespreken uw klachten en wensen. Vervolgens stellen we een behandelplan op en bespreken we de mogelijke vervolgstappen. Indien nodig adviseren we aanvullend onderzoek of een verdere behandeling.',
          },
          {
            id: 'same-day-repair',
            question: 'Kan mijn gebitsprothese tijdens de eerste afspraak worden gerepareerd?',
            answer: 'Heeft uw gebitsprothese een reparatie nodig? Geef dit dan aan wanneer u uw afspraak maakt. We beoordelen uw situatie en doen ons best om de reparatie direct tijdens uw bezoek uit te voeren. Zo kunt u zo snel mogelijk weer comfortabel gebruikmaken van uw gebitsprothese.',
          },
        ],
      },
    ],
  },
}

