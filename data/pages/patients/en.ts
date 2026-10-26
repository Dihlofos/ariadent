import indexPage from '../index/en'

export default {
  meta: {
    title: 'Ariadent: Treatment Results, Reviews and First Visit',
    description: 'See real before-and-after results of dental prosthetics, implant-supported crowns and dentures, and learn about reviews, payment and your first appointment.',
  },
  hero: {
    variant: 'patients',
    title: {
      lead: 'OUR PATIENTS’',
      text: 'RESULTS',
    },
    description: 'Real treatment results from our clinic. See how smiles change after prosthetic and implant treatment.',
    image: {
      src: '/images/patients/hero-patients.webp',
      alt: 'Smiling patient of the Ariadent clinic',
      width: 2032,
      height: 774,
    },
  },
  results: {
    withCaptions: true,
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
          caption: 'Damaged and worn-down teeth, unappealing appearance',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-1-after.webp',
          alt: 'Patient teeth after treatment, clinical case 1',
          caption: 'New zirconia crowns on implants and a natural appearance',
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
          caption: 'Outdated removable denture and missing several teeth',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/shared/result-case-2-after.webp',
          alt: 'Patient teeth after treatment, clinical case 2',
          caption: 'Implant-supported prosthetics for the upper and lower jaw',
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
          caption: 'Aesthetic defect associated with a partial denture and discomfort while eating',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-3-after.webp',
          alt: 'Patient teeth after treatment, clinical case 3',
          caption: 'New implant-supported denture for the upper jaw and refurbishment of a partial denture for the lower jaw',
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
          caption: 'A removable denture that caused discomfort and looked bad',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/shared/result-case-4-after.webp',
          alt: 'Patient teeth after treatment, clinical case 4',
          caption: 'A new, aesthetically pleasing implant-supported prosthesis — the patient feels no discomfort while eating',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  reviews: {
    ...indexPage.reviews,
    showVideo: false,
    description: 'What patients say about their treatment, the team’s approach, and the results.',
    moreButton: {
      text: 'View all reviews',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
    reviewButton: {
      text: 'Leave a review',
      link: 'https://www.google.com/maps/search/?api=1&query=Ariadent%20Amsterdam',
    },
  },
  faq: {
    type: 'faq',
    title: 'WHAT YOU SHOULD KNOW',
    images: indexPage.faq.images,
    groups: [
      {
        id: 'dentures',
        title: 'ABOUT DENTURES',
        items: [
          {
            id: 'replace-denture',
            question: 'How do I know when it is time to replace my denture?',
            answer: 'If your denture has become loose, rubs, or makes chewing or speaking difficult, you should have it checked by a specialist. Sometimes relining or repair is enough, but in some cases it needs to be replaced.',
          },
          {
            id: 'production-time',
            question: 'How long does it take to make a denture?',
            answer: 'Usually we craft a prosthesis within 5 weeks. In urgent cases, we can expedite the process and complete it in one week.',
          },
          {
            id: 'denture-lifespan',
            question: 'How long does a denture last?',
            answer: 'Usually a denture lasts for several years. Over time, the jaw changes, which can cause the denture to fit less securely. Regular check-ups and timely relining help extend its lifespan.',
          },
          {
            id: 'denture-irritation',
            question: 'What should you do if your denture causes chafing?',
            answer: 'If your denture rubs or causes discomfort, do not attempt to adjust it yourself. Schedule an appointment — the dentist will check how it fits and resolve the issue.',
          },
        ],
      },
      {
        id: 'implants',
        title: 'ABOUT IMPLANTS',
        items: [
          {
            id: 'implant-denture',
            question: 'What is an implant-supported prosthesis?',
            answer: 'Titanium supports are placed into the jaw, and a prosthesis with teeth is then attached to them. As a result, the prosthesis is held in the mouth without relying on adjacent teeth for support.',
          },
          {
            id: 'implant-candidates',
            question: 'Who are implants suitable for?',
            answer: 'Implants are suitable for most patients, provided that the condition of the bone tissue and the state of oral health allow for the procedure. Before treatment, the dentist performs a diagnostic assessment and evaluates any potential limitations.',
          },
          {
            id: 'implant-pain',
            question: 'Is implant placement painful?',
            answer: 'We place implants under local anaesthesia, so you should not feel anything during the procedure. Soreness, swelling, or discomfort may occur afterwards; these symptoms usually subside within a week.',
          },
          {
            id: 'implant-count',
            question: 'How many implants are needed for a prosthesis?',
            answer: 'The number of implants depends on the type of prosthesis. For a single missing tooth, one implant is placed. If teeth need to be restored in an entire jaw, a fixed prosthesis is typically anchored to 4–6 implants, while a removable prosthesis requires only 2–4 implants.',
          },
        ],
      },
      {
        id: 'payment',
        title: 'ABOUT PAYMENT',
        items: [
          {
            id: 'insurance',
            question: 'What does insurance cover?',
            answer: 'The amount of compensation depends on the terms of your policy. We can help you understand what your insurance company covers. You can find more details on the "Payment and Insurance" page.',
          },
          {
            id: 'insurance-approval',
            question: 'Is approval from the insurance company required?',
            answer: 'For certain types of treatment—such as implant-supported prosthetics—the insurance company must provide prior approval. We prepare the necessary documentation, submit a request, and then schedule your treatment.',
          },
          {
            id: 'copayment',
            question: 'Is there an additional payment?',
            answer: 'Yes—even with insurance coverage, some costs may still fall to the patient. For example, an insurance policy might cover 75% of the cost of a standard prosthesis, leaving the remaining 25% as an out-of-pocket expense. We will calculate the exact amount you need to pay, based on your specific policy, before treatment begins.',
          },
        ],
      },
      {
        id: 'first-appointment',
        title: 'ABOUT THE FIRST APPOINTMENT',
        items: [
          {
            id: 'what-to-bring',
            question: 'What should I bring to my appointment?',
            answer: 'Bring your ID, insurance card, a list of your medications, and any health information that might be relevant to your treatment.',
          },
          {
            id: 'old-denture',
            question: 'Should I bring my old prosthesis?',
            answer: 'Yes, of course bring it with you. The doctor will be able to assess its condition and determine whether it can be adjusted or repaired, or if it would be better to replace it.',
          },
          {
            id: 'first-visit-duration',
            question: 'How long does the first visit last?',
            answer: 'Usually the first appointment takes about 45–60 minutes. The doctor performs an examination, discusses your concerns, develops a plan of action, and, if necessary, prescribes further treatment or diagnostic tests.',
          },
          {
            id: 'same-day-repair',
            question: 'Is it possible to repair a denture during the first appointment?',
            answer: 'If you are experiencing an issue with your denture, please mention it when scheduling your appointment. We will assess the situation and do our best to carry out the repair during your visit to the clinic.',
          },
        ],
      },
    ],
  },
}
