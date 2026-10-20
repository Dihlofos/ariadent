import indexPage from '../index/en'

export default {
  meta: {
    title: 'Ariadent: Treatment Results, Reviews and First Visit',
    description: 'See real before-and-after results of dental prosthetics, implant-supported crowns and dentures, and learn about reviews, payment and your first appointment.',
  },
  hero: {
    variant: 'patients',
    title: {
      lead: 'RESULTS',
      text: 'OF OUR PATIENTS',
    },
    description: 'Real treatment results from our clinic. See how smiles change after prosthetic treatment and implant placement.',
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
      arrow: '/images/results/slider-arrow.svg',
    },
    items: [
      {
        id: 'case-1',
        sliderLabel: 'Before and after treatment comparison, clinical case 1',
        before: {
          src: '/images/results/case-1-before.webp',
          alt: 'Patient teeth before treatment, clinical case 1',
          caption: 'Damaged and worn-down teeth with an unattractive appearance',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-1-after.webp',
          alt: 'Patient teeth after treatment, clinical case 1',
          caption: 'New zirconia implant crowns with a natural appearance',
          width: 1114,
          height: 648,
        },
      },
      {
        id: 'case-2',
        sliderLabel: 'Before and after treatment comparison, clinical case 2',
        before: {
          src: '/images/results/case-2-before.webp',
          alt: 'Patient teeth before treatment, clinical case 2',
          caption: 'An outdated removable denture and several missing teeth',
          width: 1120,
          height: 766,
        },
        after: {
          src: '/images/results/case-2-after.webp',
          alt: 'Patient teeth after treatment, clinical case 2',
          caption: 'Implant-supported restoration in the upper and lower jaw',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-3',
        sliderLabel: 'Before and after treatment comparison, clinical case 3',
        before: {
          src: '/images/results/case-3-before.webp',
          alt: 'Patient teeth before treatment, clinical case 3',
          caption: 'An aesthetic defect in the partial denture and discomfort while eating',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-3-after.webp',
          alt: 'Patient teeth after treatment, clinical case 3',
          caption: 'A new upper implant-supported denture and renewal of the lower partial denture',
          width: 1120,
          height: 648,
        },
      },
      {
        id: 'case-4',
        sliderLabel: 'Before and after treatment comparison, clinical case 4',
        before: {
          src: '/images/results/case-4-before.webp',
          alt: 'Patient teeth before treatment, clinical case 4',
          caption: 'A removable denture that caused discomfort and looked unattractive',
          width: 1120,
          height: 648,
        },
        after: {
          src: '/images/results/case-4-after.webp',
          alt: 'Patient teeth after treatment, clinical case 4',
          caption: 'A new aesthetic implant-supported denture — the patient no longer feels discomfort while eating',
          width: 1120,
          height: 648,
        },
      },
    ],
  },
  reviews: {
    ...indexPage.reviews,
    showVideo: false,
    description: 'What patients say about the treatment, the team’s care, and the results.',
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
    title: 'IMPORTANT TO KNOW',
    images: indexPage.faq.images,
    groups: [
      {
        id: 'dentures',
        title: 'ABOUT DENTURES',
        items: [
          {
            id: 'replace-denture',
            question: 'How do I know when my denture needs replacing?',
            answer: 'If your denture becomes loose, causes irritation, or makes it difficult to chew or speak, it should be checked by a specialist. Sometimes relining or repair is enough, but in other cases replacement is the better option.',
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
            id: 'denture-irritation',
            question: 'What should I do if my denture causes irritation?',
            answer: 'Do not put up with the discomfort or try to adjust the denture yourself. Book an examination so the specialist can identify the cause and adjust it safely.',
          },
        ],
      },
      {
        id: 'implants',
        title: 'ABOUT IMPLANTS',
        items: [
          {
            id: 'implant-denture',
            question: 'What is an implant-supported denture?',
            answer: 'Titanium supports are placed in the jaw and the denture is then attached to them. This allows the denture to remain secure without relying on the neighbouring teeth.',
          },
          {
            id: 'implant-candidates',
            question: 'Who is suitable for implants?',
            answer: 'Suitability depends on your oral health, available bone, and general health. The specialist will determine the appropriate option after an examination and diagnostic assessment.',
          },
          {
            id: 'implant-pain',
            question: 'Is implant placement painful?',
            answer: 'Implants are placed under local anaesthesia, so the procedure itself is normally painless. After treatment, the clinician will explain how to manage any temporary discomfort.',
          },
          {
            id: 'implant-count',
            question: 'How many implants are needed for a denture?',
            answer: 'The number depends on the type of restoration, the condition of the jaw, and your clinical situation. The specialist will determine the exact number after an examination.',
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
            answer: 'The reimbursement depends on the terms of your policy. We help clarify what your insurer covers. More information is available on the Insurance and payment page.',
          },
          {
            id: 'insurance-approval',
            question: 'Is prior approval from the insurer required?',
            answer: 'Some treatments require prior authorization from your insurance company. We will explain which documents are needed and help you prepare the request.',
          },
          {
            id: 'copayment',
            question: 'Is there a personal contribution?',
            answer: 'The amount you pay depends on the treatment and your policy. Before treatment begins, we will prepare an estimate and explain which costs may remain your responsibility.',
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
            answer: 'Bring identification, your insurance card, a list of medicines, and any health information that may be important for your treatment.',
          },
          {
            id: 'old-denture',
            question: 'Should I bring my old denture?',
            answer: 'Yes, bring your old denture even if you no longer use it. It helps the specialist assess the fit, bite, and features of the previous restoration.',
          },
          {
            id: 'first-visit-duration',
            question: 'How long does the first visit take?',
            answer: 'The duration depends on your situation, but an introduction, examination, and discussion of treatment options usually take between 30 and 60 minutes.',
          },
          {
            id: 'same-day-repair',
            question: 'Can my denture be repaired during the first appointment?',
            answer: 'In many cases, an urgent repair can be completed during the first visit. The specialist will confirm the timeframe after examining the denture.',
          },
        ],
      },
    ],
  },
}
