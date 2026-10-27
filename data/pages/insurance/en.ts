export default {
  meta: {
    title: 'Ariadent: Denture Costs and Insurance in Amsterdam',
    description: 'Dentures, dental implants, relining and urgent denture repairs with insurance coverage of up to 90% at Ariadent in Amsterdam.',
  },
  hero: {
    keepLeadWithFirstWord: true,
    compactTitle: false,
    title: {
      lead: 'HOW',
      text: 'MEDICAL TREATMENT IS COVERED BY INSURANCE',
    },
    description: 'We explain what part of your treatment is covered by basic insurance and which costs you might still have to pay yourself.',
    image: {
      src: '/images/insurance/hero-bg.webp',
      alt: 'Smiling patient of the Ariadent clinic',
      width: 873,
      height: 848,
    },
  },
  reimbursement: {
    title: 'REIMBURSEMENT',
    description: 'The overview below explains the reimbursement arrangements for the current year. Insurance terms vary considerably, so we recommend contacting your insurer with your treatment estimate.',
    items: [
      {
        id: 'dental-denture',
        title: 'Denture',
        details: [
          { label: 'Basic insurance', value: '75%' },
          { label: 'Personal contribution', value: '25%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'A regular (standard) denture, or a type 1 denture, is reimbursed at 75% under basic insurance. The remaining 25% is the ' },
              { text: 'patient contribution.', accent: true },
              { text: ' Depending on your policy, this amount may be partly or fully covered by supplementary insurance.' },
            ],
          },
        ],
      },
      {
        id: 'implant-denture',
        title: 'Implant-supported denture',
        details: [
          { label: 'Basic insurance', value: 'subject to authorization' },
          { label: 'Deductible', value: '€385' },
          { label: 'Personal contribution', value: '8–17%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'The placement of implants by an implantologist or an oral and maxillofacial surgeon is fully covered by basic health insurance, provided that prior authorization is obtained from the insurance company.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Since the treatment is covered by basic insurance, a ' },
              { text: 'deductible', accent: true },
              { text: ' (€385) applies. Please refer to the note regarding the deductible.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'In most cases, implant-supported prosthetics are covered by basic health insurance. You are also required to pay a statutory personal contribution, which is calculated as a specific percentage and structured as follows:' },
            ],
          },
          {
            type: 'list',
            items: [
              {
                segments: [
                  { text: '10%', accent: true },
                  { text: ' — complete lower denture supported by implants,' },
                ],
              },
              {
                segments: [
                  { text: '8%', accent: true },
                  { text: ' — complete upper denture supported by implants,' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' — a combination of a conventional upper denture and an implant-supported lower denture (fabricated simultaneously),' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' — a combination of a conventional lower denture and an implant-supported upper denture (fabricated simultaneously).' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'partial-denture',
        title: 'Partial denture',
        details: [
          { label: 'Basic insurance', value: 'does not cover' },
          { label: 'Additional insurance', value: 'depends on the policy' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'The cost of a partial or framework denture is not covered by basic health insurance. It may therefore be reimbursed partly or fully through supplementary dental insurance, depending on your policy.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'We will be happy to discuss the options and prepare an estimate for you to submit to your insurer.' },
            ],
          },
        ],
      },
      {
        id: 'relining',
        title: 'Denture relining',
        details: [
          { label: 'Basic insurance', value: '90%' },
          { label: 'Personal contribution', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Basic insurance reimburses 90% of the cost of relining a complete denture without implants. Your ' },
              { text: 'patient contribution', accent: true },
              { text: ' is therefore 10%.' },
            ],
          },
        ],
      },
      {
        id: 'denture-repair',
        title: 'Denture repair',
        details: [
          { label: 'Basic insurance', value: '90%' },
          { label: 'Personal contribution', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: '90% of the costs are reimbursed under basic insurance, with a ' },
              { text: '10% patient contribution', accent: true },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'urgent-repair',
        title: 'Emergency repair',
        details: [
          { label: 'Basic insurance', value: '90%' },
          { label: 'Personal contribution', value: '10%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: '90% of the costs are reimbursed under basic insurance, with a ' },
              { text: '10% patient contribution', accent: true },
              { text: '.' },
            ],
          },
        ],
      },
    ],
  },
  appointmentCta: {
    title: 'WANT TO KNOW HOW YOUR INSURANCE COVERS TREATMENT?',
    description: 'Book an appointment and we will clarify the terms and help prepare the necessary documents.',
    button: {
      text: 'Book an appointment',
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
