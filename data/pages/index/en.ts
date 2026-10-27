export default {
  meta: {
    title: 'Ariadent: Dentures and Dental Implants in Amsterdam',
    description: 'Dental prosthetics, removable dentures, implant-supported crowns and bridges, same-day denture repairs, and help with insurance coverage in Amsterdam.',
  },
  hero: {
    type: 'hero',
    title: {
      regular: 'ARIADENT',
      bold: 'CLINIC',
    },
    subtitle: 'Dental prosthetics and implants, with a focus on comfort and a natural appearance.',
    button: { text: 'Book an appointment', link: '#appointment' },
    secondaryButton: { text: 'View examples of our work', link: '#results' },
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
        title: 'Tooth replacement with implants',
        description: 'We use proven materials with high rates of successful integration.',
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
        title: 'Urgent denture repair',
        description: 'We repair your denture while you wait at the clinic.',
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
        title: 'Up to 90% of the cost covered by basic insurance',
        description: 'We offer prosthetic options that take your insurance coverage into account.',
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
        title: 'Assistance outside of regular hours',
        description: 'We are happy to help in urgent situations and can see you outside of our standard business hours.',
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
    title: 'CLINIC SERVICES',
    tabs: [
      {
        id: 'prosthetics',
        label: 'Dental prosthetics',
        items: [
          {
            id: 'full-denture',
            title: 'Complete removable denture',
            description: 'A removable denture that replaces all teeth in the upper or lower jaw.',
            image: {
              src: '/images/home/service-full-denture.webp',
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
              src: '/images/home/service-partial-denture.webp',
              alt: 'Partial removable dental prosthesis',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'clasp-denture',
            title: 'Cast partial denture',
            description: 'A partial denture with a metal framework that attaches to the remaining teeth.',
            image: {
              src: '/images/home/service-clasp-denture.webp',
              alt: 'Clasp dental prosthesis',
              width: 551,
              height: 424,
            },
          },
          {
            id: 'denture-relining',
            title: 'Denture relining',
            description: 'Adjusting the fit of a denture if it has become loose or causes rubbing over time.',
            image: {
              src: '/images/home/service-relining.webp',
              alt: 'Relining a dental prosthesis',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'denture-repair',
            title: 'Denture repair',
            description: 'Repairing a denture after a crack, break, or damage to individual parts.',
            image: {
              src: '/images/home/service-repair.webp',
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
            description: 'An implant with a crown is used to replace a missing tooth. The implant replaces the tooth root, while the crown replaces the visible part of the tooth.',
            image: {
              src: '/images/home/service-implant-crown.webp',
              alt: 'Dental implant with a crown',
              width: 551,
              height: 420,
            },
          },
          {
            id: 'implant-bridge',
            title: 'Implant-supported bridge',
            description: 'A restoration supported by implants that replaces several consecutive missing teeth.',
            image: {
              src: '/images/home/service-implant-bridge.webp',
              alt: 'Dental bridge supported by implants',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'implant-prosthesis',
            title: 'Implant-supported denture',
            description: 'A removable denture secured to implants when a conventional denture does not stay in place well.',
            image: {
              src: '/images/home/service-implant-denture.webp',
              alt: 'Dental prosthesis supported by implants',
              width: 551,
              height: 418,
            },
          },
          {
            id: 'full-implant-denture',
            title: 'Full-arch implant-supported denture',
            description: 'A denture used to replace all teeth in one jaw, supported by several dental implants.',
            image: {
              src: '/images/home/service-full-implant.webp',
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
      arrow: '/images/home/arrow-circle.svg',
    },
  },
  treatmentProcess: {
    type: 'treatment-process',
    title: 'HOW TREATMENT WORKS',
    images: {
      check: '/images/home/treatment-check.svg',
    },
    items: [
      {
        id: 'consultation',
        title: 'Examination and consultation',
        description: 'We discuss your concerns and assess your teeth, gums, jaw, and any existing denture. We talk through your wishes and possible treatment options.',
      },
      {
        id: 'treatment-plan',
        title: 'Treatment plan',
        description: 'We suggest suitable options and explain their features, timelines, and costs. If you first need treatment from another specialist or implant placement, we explain what is required.',
      },
      {
        id: 'impressions',
        title: 'Impressions and bite assessment',
        description: 'We take impressions of the jaws and assess how the teeth meet. We discuss the shape, colour, and position of the replacement teeth.',
      },
      {
        id: 'fitting',
        title: 'Trial fitting and fabrication',
        description: 'We first try in the restoration to check its fit, bite, appearance, speech, and chewing. We make any necessary adjustments before fabricating the final denture.',
      },
      {
        id: 'installation',
        title: 'Fitting and follow-up',
        description: 'We fit your denture, check its fit, and explain how to wear and care for it. After fitting, we carry out a follow-up examination and adjust the denture if needed.',
      },
    ],
  },
  results: {
    type: 'results',
    title: 'WHAT THE RESULTS LOOK LIKE',
    description: 'Results of prosthetic and implant treatment for our patients.',
    labels: {
      before: 'Before',
      after: 'After',
    },
    images: {
      arrow: '/images/shared/result-slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Before and after treatment comparison, clinical case 1',
        before: {
          src: '/images/shared/result-case-1-before.webp',
          alt: 'Patient teeth before treatment, clinical case 1',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-1-after.webp',
          alt: 'Patient teeth after treatment, clinical case 1',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Before and after treatment comparison, clinical case 2',
        before: {
          src: '/images/shared/result-case-2-before.webp',
          alt: 'Patient teeth before treatment, clinical case 2',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/shared/result-case-2-after.webp',
          alt: 'Patient teeth after treatment, clinical case 2',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Before and after treatment comparison, clinical case 3',
        before: {
          src: '/images/shared/result-case-3-before.webp',
          alt: 'Patient teeth before treatment, clinical case 3',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-3-after.webp',
          alt: 'Patient teeth after treatment, clinical case 3',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Before and after treatment comparison, clinical case 4',
        before: {
          src: '/images/shared/result-case-4-before.webp',
          alt: 'Patient teeth before treatment, clinical case 4',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-4-after.webp',
          alt: 'Patient teeth after treatment, clinical case 4',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  appointment: {
    type: 'appointment',
    title: 'NEED AN URGENT REPAIR OR HELP CHOOSING A SOLUTION?',
    description: 'Send us a request and we will contact you, arrange an appointment, and explain the available options.',
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
        placeholder: 'For example: naam@example.com',
        autocomplete: 'email',
        inputmode: 'email',
        required: true,
      },
    ],
    message: {
      id: 'appointment-message',
      name: 'message',
      label: 'Message',
      placeholder: 'Briefly describe your concern',
      required: false,
    },
    submitText: 'Send',
    feedback: {
      error: {
        title: 'Something went wrong',
        description: 'Please try again. If it still does not work, try again later.',
        buttonText: 'Back',
        image: {
          src: '/images/home/appointment-error-question.webp',
          alt: '',
          width: 268,
          height: 272,
        },
      },
      success: {
        title: 'Request received',
        description: 'We will contact you shortly.',
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
      avatar: '/images/shared/review-avatar.svg',
      stars: '/images/shared/review-stars.svg',
      arrow: '/images/home/arrow-circle.svg',
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
        title: 'Established in 1996',
        description: [
          'For over 30 years, we have been helping patients restore their teeth using dentures. We were among the first in the Netherlands to specialize in removable prosthetics.',
        ],
        image: {
          src: '/images/home/about-clinic.webp',
          alt: 'Ariadent clinic reception area',
          width: 392,
          height: 273,
        },
      },
      {
        id: 'emergency-care',
        title: 'Emergency assistance',
        description: [
          'When necessary, we see patients outside regular hours. We can carry out urgent denture repairs during your visit and make a new denture within a week.',
        ],
        image: {
          src: '/images/home/about-emergency.webp',
          alt: 'A dental prosthesis held by a specialist',
          width: 341,
          height: 273,
        },
      },
      {
        id: 'team',
        title: 'An experienced team',
        description: [
          'The ARIADENT team includes specialists with many years of experience in dental prosthetics and implant treatment.',
          'Our small team allows us to maintain personal contact with patients and carefully consider each individual situation.',
        ],
        image: {
          src: '/images/home/about-team.webp',
          alt: 'The Ariadent clinic team',
          width: 392,
          height: 372,
        },
      },
      {
        id: 'standards',
        title: 'Professional standards',
        description: [
          'ARIADENT is a member of Organisatie van Nederlandse Tandprothetici (ONT), and the clinic’s specialists are registered with the KwaliteitsRegister TandProthetici (KRTP).',
          'We maintain our qualifications and regularly update our professional knowledge in dental prosthetics.',
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
      link: '/#appointment',
    },
    routeButton: {
      text: 'Get directions',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Hugo+de+Vrieslaan+85%2C+1097+EH+Amsterdam',
    },
    map: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.198163377157!2d4.9320065!3d52.348691099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350363e85%3A0x6c9ee475a6079f2!2zSHVnbyBkZSBWcmllc2xhYW4gODUsIDEwOTcgRUggQW1zdGVyZGFt!5e0!3m2!1sen!2sen!4v1791571571300!5m2!1sen!2sen',
      title: 'Map showing directions to the Ariadent clinic',
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
    title: 'FREQUENTLY ASKED QUESTIONS',
    description: 'Answers to common questions about dentures, implants, costs, and appointments.',
    images: {
      arrowDown: '/images/shared/faq-arrow-down.svg',
      arrowUp: '/images/shared/faq-arrow-up.svg',
    },
    items: [
      {
        id: 'replace-denture',
        question: 'How do I know when it is time to replace my denture?',
        answer: 'If your denture has become loose, rubs, or makes chewing or speaking difficult, you should have it checked by a specialist. Sometimes relining or repair is enough, but in some cases it needs to be replaced.',
      },
      {
        id: 'insurance',
        question: 'What does insurance cover?',
        answer: 'The amount of compensation depends on the terms of your policy. We can help you understand what your insurance company covers. You can find more details on the "Insurance and Payment" page.',
      },
      {
        id: 'production-time',
        question: 'How long does it take to make a denture?',
        answer: 'Typically, the fabrication process takes about 5 weeks. In urgent cases, we can produce a prosthesis in one week.',
      },
      {
        id: 'denture-lifespan',
        question: 'How long does a denture last?',
        answer: 'A denture usually lasts several years. The jaw changes over time, so the denture may fit less closely and become loose. Regular check-ups and timely relining can help extend its service life.',
      },
      {
        id: 'implant-pain',
        question: 'Is implant placement painful?',
        answer: 'We place implants under local anaesthesia, so you should not feel anything during the procedure. Soreness, swelling, or discomfort may occur afterwards; these symptoms usually subside within a week.',
      },
      {
        id: 'first-appointment',
        question: 'What should I bring to my first appointment?',
        answer: 'Bring identification, your insurance card, a list of medications, and any health information relevant to your treatment. If you already have a denture, bring it with you.',
      },
    ],
  },
}
