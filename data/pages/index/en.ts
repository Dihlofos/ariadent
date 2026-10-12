export default {
  hero: {
    type: 'hero',
    title: {
      regular: 'DENTAL CLINIC',
      bold: 'ARIADENT',
    },
    subtitle: 'Dental prosthetics and implants with care for your comfort and a natural appearance.',
    button: { text: 'Book an appointment', link: '#appointment' },
    secondaryButton: { text: 'View our work', link: '#results' },
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
        title: 'Implant-supported tooth restoration',
        description: 'We use proven materials with a high implant success rate.',
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
        title: 'Urgent denture repair',
        description: 'We repair your denture while you wait at the clinic.',
        image: {
          src: '/images/benefits/tooth.png',
          alt: '',
          variant: 'tooth',
          width: 308,
          height: 317,
        },
      },
      {
        id: 'insurance',
        title: 'Up to 90% covered by basic insurance',
        description: 'We offer treatment options based on your insurance coverage.',
        image: {
          src: '/images/benefits/coins.png',
          alt: '',
          variant: 'coins',
          width: 342,
          height: 342,
        },
      },
      {
        id: 'after-hours',
        title: 'Help outside working hours',
        description: 'We help in emergencies and accept patients outside working hours.',
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
    title: 'CLINIC SERVICES',
    tabs: [
      {
        id: 'prosthetics',
        label: 'Dental prosthetics',
        items: [
          {
            id: 'full-denture',
            title: 'Full removable denture',
            description: 'A removable denture that replaces all teeth in the upper or lower jaw.',
            image: {
              src: '/images/services/full-denture.png',
              alt: 'Full removable dental prosthesis',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'partial-denture',
            title: 'Partial denture',
            description: 'A denture that replaces several missing teeth when some natural teeth remain.',
            image: {
              src: '/images/services/partial-denture.png',
              alt: 'Partial removable dental prosthesis',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'clasp-denture',
            title: 'Clasp denture',
            description: 'A partial denture with a metal framework attached to the remaining teeth.',
            image: {
              src: '/images/services/clasp-denture.png',
              alt: 'Clasp dental prosthesis',
              width: 551,
              height: 424,
            },
          },
          {
            id: 'denture-relining',
            title: 'Denture relining',
            description: 'Restores the denture fit when it becomes loose or starts causing irritation.',
            image: {
              src: '/images/services/relining.png',
              alt: 'Relining a dental prosthesis',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'denture-repair',
            title: 'Denture repair',
            description: 'Restores a denture after cracks, breakage, or damage to individual parts.',
            image: {
              src: '/images/services/repair.png',
              alt: 'Dental prosthesis repair',
              width: 551,
              height: 418,
            },
          },
        ],
      },
      {
        id: 'implants',
        label: 'Dental implants',
        items: [
          {
            id: 'implant-crown',
            title: 'Implant with a crown',
            description: 'An implant and crown replace a missing tooth. The implant replaces its root and the crown its visible part.',
            image: {
              src: '/images/services/implant-crown.png',
              alt: 'Dental implant with a crown',
              width: 551,
              height: 420,
            },
          },
          {
            id: 'implant-bridge',
            title: 'Implant-supported bridge',
            description: 'A restoration for several adjacent missing teeth supported by dental implants.',
            image: {
              src: '/images/services/implant-bridge.png',
              alt: 'Dental bridge supported by implants',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'implant-prosthesis',
            title: 'Implant-supported denture',
            description: 'A removable denture secured by implants when a conventional denture does not stay in place.',
            image: {
              src: '/images/services/implant-denture.png',
              alt: 'Dental prosthesis supported by implants',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'full-implant-denture',
            title: 'Full implant-supported denture',
            description: 'A full-arch restoration for one jaw supported by several dental implants.',
            image: {
              src: '/images/services/full-implant.png',
              alt: 'Full dental prosthesis supported by implants',
              width: 551,
              height: 418,
            },
          },
        ],
      },
    ],
    moreButton: {
      text: 'Learn more',
      link: '#appointment',
    },
    images: {
      arrow: '/images/arrow-circle.svg',
    },
  },
  treatmentProcess: {
    type: 'treatment-process',
    title: 'HOW TREATMENT WORKS',
    images: {
      check: '/images/treatment-process/check.svg',
    },
    items: [
      {
        id: 'consultation',
        title: 'Examination and consultation',
        description: 'We discuss your concerns and assess your teeth, gums, jaw, and current denture. Together, we review your wishes and possible treatment options.',
      },
      {
        id: 'treatment-plan',
        title: 'Treatment plan',
        description: 'We suggest suitable options and explain their features, timing, and cost. If treatment by another specialist or implant placement is needed first, we explain the next steps.',
      },
      {
        id: 'impressions',
        title: 'Impressions and bite',
        description: 'We take impressions of your jaws and evaluate how your teeth meet. We discuss the shape, colour, and position of your future teeth.',
      },
      {
        id: 'fitting',
        title: 'Fitting and fabrication',
        description: 'We first try in the restoration to check its fit, bite, appearance, speech, and chewing. We make any necessary adjustments before producing the final denture.',
      },
      {
        id: 'installation',
        title: 'Installation and follow-up',
        description: 'We fit your denture, check its position, and explain how to wear and care for it. After placement, we perform a follow-up examination and adjust it if needed.',
      },
    ],
  },
  results: {
    type: 'results',
    title: 'WHAT THE RESULT LOOKS LIKE',
    description: 'Prosthetic and implant treatment results from our patients.',
    labels: {
      before: 'Before',
      after: 'After',
    },
    images: {
      arrow: '/images/results/slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Before and after treatment comparison, clinical case 1',
        before: {
          src: '/images/results/case-1-before.png',
          alt: 'Patient teeth before treatment, clinical case 1',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-1-after.png',
          alt: 'Patient teeth after treatment, clinical case 1',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Before and after treatment comparison, clinical case 2',
        before: {
          src: '/images/results/case-2-before.png',
          alt: 'Patient teeth before treatment, clinical case 2',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/results/case-2-after.png',
          alt: 'Patient teeth after treatment, clinical case 2',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Before and after treatment comparison, clinical case 3',
        before: {
          src: '/images/results/case-3-before.png',
          alt: 'Patient teeth before treatment, clinical case 3',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-3-after.png',
          alt: 'Patient teeth after treatment, clinical case 3',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Before and after treatment comparison, clinical case 4',
        before: {
          src: '/images/results/case-4-before.png',
          alt: 'Patient teeth before treatment, clinical case 4',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-4-after.png',
          alt: 'Patient teeth after treatment, clinical case 4',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  appointment: {
    type: 'appointment',
    title: 'Need an urgent repair or want to find a solution?',
    description: 'Leave a request — we will contact you, book your appointment, and explain what treatment options are available.',
    fields: [
      {
        id: 'appointment-name',
        name: 'name',
        type: 'text',
        label: 'Your name',
        placeholder: 'How should we address you?',
        autocomplete: 'name',
        inputmode: 'text',
        required: true,
      },
      {
        id: 'appointment-phone',
        name: 'phone',
        type: 'tel',
        label: 'Phone number',
        placeholder: 'For example: 06 57 55 85 76',
        autocomplete: 'tel',
        inputmode: 'tel',
        required: true,
      },
      {
        id: 'appointment-email',
        name: 'email',
        type: 'email',
        label: 'Email address',
        placeholder: 'For example: name@example.com',
        autocomplete: 'email',
        inputmode: 'email',
        required: true,
      },
    ],
    message: {
      id: 'appointment-message',
      name: 'message',
      label: 'Message',
      placeholder: 'Briefly tell us what is bothering you',
      required: false,
    },
    submitText: 'Send',
    feedback: {
      error: {
        title: 'Something went wrong',
        description: 'Please try again. If it still does not work, try again later.',
        buttonText: 'Back',
        image: {
          src: '/images/appointment/error-question.png',
          alt: '',
          width: 268,
          height: 272,
        },
      },
      success: {
        title: 'Request received',
        description: 'We will contact you shortly.',
        image: {
          src: '/images/appointment/success-check.png',
          alt: '',
          width: 408,
          height: 412,
        },
      },
    },
    image: {
      src: '/images/appointment/dentures.png',
      alt: 'Example of a dental prosthesis',
      width: 588,
      height: 477,
    },
  },
  reviews: {
    type: 'reviews',
    title: 'PATIENT REVIEWS',
    description: 'What our patients write and say about us.',
    images: {
      avatar: '/images/reviews/avatar.svg',
      stars: '/images/reviews/stars.svg',
      arrow: '/images/arrow-circle.svg',
    },
    items: [
      {
        id: 'scott-vontobel',
        name: 'Scott Vontobel',
        ratingLabel: 'Rating: 5 out of 5',
        text: "After over 15 calls this morning I found this Office to help fix an emergency situation, spoke to the owner. He asked me if I can come in right away. I was in and out of the door in less than an hour with a great solution and a lot less money than I expected. Really couldn't be happier.",
      },
      {
        id: 'sea-loakz',
        name: 'sea. Loakz',
        ratingLabel: 'Rating: 5 out of 5',
        text: 'Fantastic! I am very happy with Ariadent. I arrived feeling very anxious, but the clinician was so calm that I immediately felt at ease. He is highly skilled and restored my smile beautifully. I no longer feel ashamed of how my teeth used to look, and I can smile confidently again. If you are worried about the condition of your teeth, I strongly recommend this clinic.',
      },
      {
        id: 'harry-arts',
        name: 'Harry Arts',
        ratingLabel: 'Rating: 5 out of 5',
        text: 'I was very anxious about the treatment, but it turned out much better than expected. The clinician quickly put me at ease. I received a beautiful denture that fit perfectly right away, and the cosmetic result is excellent. I would recommend this clinic to everyone.',
      },
      {
        id: 'gerda-kleerkoper',
        name: 'Gerda Kleerkoper',
        ratingLabel: 'Rating: 5 out of 5',
        text: 'What an artist! I have a difficult jaw, but the result looks wonderful. Highly recommended — a friendly and delightful professional.',
      },
    ],
    moreButton: {
      text: 'More reviews on Google Maps',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
    video: {
      src: 'https://www.youtube.com/embed/7_QwBaGnZj0?si=Fu4Icq0Nclf-WAuR',
      title: 'Ariadent patient video review',
    },
  },
  about: {
    type: 'about',
    title: 'ABOUT THE CLINIC',
    items: [
      {
        id: 'experience',
        title: 'Working since 1996',
        description: [
          'For more than 30 years, we have helped patients restore their teeth with dentures. We were among the first in the Netherlands to offer removable prosthetics.',
        ],
        image: {
          src: '/images/about/clinic.png',
          alt: 'Ariadent clinic reception area',
          width: 392,
          height: 273,
        },
      },
      {
        id: 'emergency-care',
        title: 'Emergency care',
        description: [
          'When necessary, we see patients outside working hours. We can repair a denture during your visit and produce a new one within a week.',
        ],
        image: {
          src: '/images/about/emergency.png',
          alt: 'A dental prosthesis held by a specialist',
          width: 341,
          height: 273,
        },
      },
      {
        id: 'team',
        title: 'An experienced team',
        description: [
          'ARIADENT’s team comprises specialists with many years of experience in dental prosthetics and implantology.',
          'Because our team is small, we maintain personal contact with every patient and give each situation careful attention.',
        ],
        image: {
          src: '/images/about/team.png',
          alt: 'The Ariadent clinic team',
          width: 392,
          height: 372,
        },
      },
      {
        id: 'standards',
        title: 'Professional standards',
        description: [
          'ARIADENT is a member of the Organisatie van Nederlandse Tandprothetici (ONT), and our clinicians are registered with the KwaliteitsRegister TandProthetici (KRTP).',
          'We maintain our qualifications and regularly update our professional knowledge in dental prosthetics.',
        ],
        logos: [
          {
            src: '/images/about/krtp-logo.png',
            alt: 'KwaliteitsRegister TandProthetici',
            width: 254,
            height: 74,
          },
          {
            src: '/images/about/ont-logo.png',
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
    title: 'ADDRESS IN AMSTERDAM',
    address: {
      lines: ['Hugo de Vrieslaan 85', '1097 EH Amsterdam'],
    },
    schedule: [
      'Monday–Friday: 08:00–20:00',
      'Saturday: 10:00–16:00',
    ],
    phones: [
      { label: '020 408 28 70', href: 'tel:+31204082870' },
      { label: '06 57 55 85 76', href: 'tel:+31657558576' },
    ],
    appointmentButton: {
      text: 'Book an appointment',
      link: '#appointment',
    },
    routeButton: {
      text: 'Get directions',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Hugo+de+Vrieslaan+85%2C+1097+EH+Amsterdam',
    },
    map: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.198163377157!2d4.9320065!3d52.348691099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350363e85%3A0x6c9ee475a6079f2!2zSHVnbyBkZSBWcmllc2xhYW4gODUsIDEwOTcgRUggQW1zdGVyZGFtLCDQndC40LTQtdGA0LvQsNC90LTRiw!5e0!3m2!1sru!2sru!4v1791571571300!5m2!1sru!2sru',
      title: 'Map showing directions to the Ariadent clinic',
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
    title: 'FREQUENTLY ASKED QUESTIONS',
    description: 'Answers to the most common questions about dentures, implants, costs, and appointments.',
    images: {
      arrowDown: '/images/faq/arrow-down.svg',
      arrowUp: '/images/faq/arrow-up.svg',
    },
    items: [
      {
        id: 'replace-denture',
        question: 'How do I know when my denture needs replacing?',
        answer: 'If your denture becomes loose, causes irritation, or makes it difficult to chew or speak, it should be checked by a specialist. Sometimes relining or repair is enough, but in other cases replacement is the better option.',
      },
      {
        id: 'insurance',
        question: 'What does insurance cover?',
        answer: 'Coverage depends on your insurance policy and the treatment you choose. Before treatment begins, we can help clarify the terms and estimate possible reimbursement.',
      },
      {
        id: 'production-time',
        question: 'How long does it take to make a denture?',
        answer: 'The timeframe depends on the type of denture and the amount of work required. Production usually takes several weeks, while urgent repairs can often be completed during one visit.',
      },
      {
        id: 'denture-lifespan',
        question: 'How long does a dental prosthesis last?',
        answer: 'Its lifespan depends on the type of prosthesis, your oral health, and daily care. Regular check-ups help adjust the fit in time and extend its useful life.',
      },
      {
        id: 'implant-pain',
        question: 'Is implant placement painful?',
        answer: 'Implants are placed under local anaesthesia, so the procedure itself is normally painless. After treatment, the clinician will explain how to manage any temporary discomfort.',
      },
      {
        id: 'first-appointment',
        question: 'What should I bring to my first appointment?',
        answer: 'Bring identification, your insurance details, and any previous examination results you may have. It is also helpful to bring a list of medicines you currently take.',
      },
    ],
  },
}
