export default {
  meta: {
    title: 'Ariadent: kosten en vergoeding van gebitsprotheses in Amsterdam',
    description: 'Gebitsprotheses, implantaten, rebasing en spoedreparaties met een vergoeding tot 90% via de zorgverzekering bij Ariadent in Amsterdam.',
  },
  hero: {
    keepLeadWithFirstWord: true,
    compactTitle: true,
    title: {
      lead: 'HOE WORDT UW',
      text: 'BEHANDELING VERGOED DOOR DE ZORGVERZEKERING?',
    },
    description: 'We leggen u uit welk deel van uw behandeling wordt vergoed vanuit de basisverzekering en met welke eventuele eigen kosten u rekening moet houden.',
    image: {
      src: '/images/insurance/hero-bg.webp',
      alt: 'Lachende patiënt van de Ariadent-kliniek',
      width: 873,
      height: 848,
    },
  },
  reimbursement: {
    title: 'Vergoedingen',
    description: 'In het onderstaande overzicht vindt u de vergoedingsregelingen voor het huidige jaar. Omdat de voorwaarden per zorgverzekeraar en polis kunnen verschillen, adviseren we u om uw behandelbegroting met uw zorgverzekeraar te bespreken. Zo weet u vooraf waar u aan toe bent.',
    items: [
      {
        id: 'dental-denture',
        title: 'Gebitsprothese',
        details: [
          { label: 'Basisverzekering', value: '75%' },
          { label: 'Eigen bijdrage', value: '25%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Een reguliere gebitsprothese (standaardprothese of type 1) wordt voor 75% vergoed vanuit de basisverzekering. De overige 25% is uw ' },
              { text: 'eigen bijdrage.', accent: true },
              { text: ' Afhankelijk van uw zorgverzekering kan deze bijdrage gedeeltelijk of volledig worden vergoed vanuit een aanvullende verzekering.' },
            ],
          },
        ],
      },
      {
        id: 'implant-denture',
        title: 'Implantaatgedragen gebitsprothese',
        details: [
          { label: 'Basisverzekering', value: 'vergoeding afhankelijk van voorafgaande toestemming' },
          { label: 'Eigen risico', value: '€385' },
          { label: 'Eigen bijdrage', value: '8–17%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Het plaatsen van implantaten door een implantoloog of kaakchirurg wordt volledig vergoed vanuit de basisverzekering, mits uw zorgverzekeraar hiervoor vooraf toestemming heeft gegeven.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Omdat de behandeling onder de basisverzekering valt, geldt het ' },
              { text: 'eigen risico', accent: true },
              { text: ' (€385). Zie de toelichting over het eigen risico voor meer informatie.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'In de meeste gevallen wordt ook de implantaatgedragen gebitsprothese vergoed vanuit de basisverzekering. Daarnaast betaalt u een wettelijke eigen bijdrage. De hoogte hiervan hangt af van het type prothese:' },
            ],
          },
          {
            type: 'list',
            items: [
              {
                segments: [
                  { text: '10%', accent: true },
                  { text: ' eigen bijdrage: een volledige onderprothese op implantaten.' },
                ],
              },
              {
                segments: [
                  { text: '8%', accent: true },
                  { text: ' eigen bijdrage: een volledige bovenprothese op implantaten.' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' eigen bijdrage: een combinatie van een reguliere bovenprothese en een onderprothese op implantaten, wanneer beide tegelijkertijd worden gemaakt.' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' eigen bijdrage: een combinatie van een reguliere onderprothese en een bovenprothese op implantaten, wanneer beide tegelijkertijd worden gemaakt.' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'partial-denture',
        title: 'Partiële prothese',
        details: [
          { label: 'Basisverzekering', value: 'geen vergoeding' },
          { label: 'Aanvullende verzekering', value: 'vergoeding afhankelijk van uw polisvoorwaarden' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'De kosten van een gedeeltelijke gebitsprothese of frameprothese worden niet vergoed vanuit de basisverzekering. Afhankelijk van uw polisvoorwaarden kan uw aanvullende tandartsverzekering de kosten gedeeltelijk of volledig vergoeden.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'We bespreken graag de mogelijkheden met u en stellen een behandelbegroting op die u bij uw zorgverzekeraar kunt indienen. Zo weet u vooraf waar u financieel aan toe bent.' },
            ],
          },
        ],
      },
      {
        id: 'relining',
        title: 'Rebasing',
        details: [
          { label: 'Basisverzekering', value: '90%' },
          { label: 'Eigen bijdrage', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'De basisverzekering vergoedt 90% van de kosten voor het opnieuw passend maken (rebasen) van een volledige gebitsprothese zonder implantaten. Uw ' },
              { text: 'eigen bijdrage', accent: true },
              { text: ' bedraagt daarom 10%.' },
            ],
          },
        ],
      },
      {
        id: 'denture-repair',
        title: 'Reparatie van een gebitsprothese',
        details: [
          { label: 'Basisverzekering', value: '90%' },
          { label: 'Eigen bijdrage', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: '90% van de kosten wordt vergoed vanuit de basisverzekering. U betaalt zelf de resterende ' },
              { text: '10% als eigen bijdrage', accent: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'urgent-repair',
        title: 'Spoedreparatie van uw gebitsprothese',
        details: [
          { label: 'Basisverzekering', value: '90%' },
          { label: 'Eigen bijdrage', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: '90% van de kosten wordt vergoed vanuit de basisverzekering. U betaalt zelf de resterende ' },
              { text: '10% als eigen bijdrage', accent: true },
              { text: '.' },
            ],
          },
        ],
      },
    ],
  },
  appointmentCta: {
    title: 'WILT U WETEN WAT UW ZORGVERZEKERING VERGOEDT?',
    description: 'Maak een afspraak. We leggen u graag uit welke vergoedingen voor u gelden en helpen u bij het voorbereiden van de benodigde documenten voor uw zorgverzekeraar.',
    button: {
      text: 'Maak een afspraak',
      link: '/#appointment',
    },
    image: {
      src: '/images/insurance/list.webp',
      alt: '',
      width: 972,
      height: 958,
    },
  },
}

