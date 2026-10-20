export default {
  meta: {
    title: 'Ariadent: Denture Costs and Insurance in Amsterdam',
    description: 'Dentures, dental implants, relining and urgent denture repairs with insurance coverage of up to 90% at Ariadent in Amsterdam.',
  },
  hero: {
    keepLeadWithFirstWord: true,
    title: {
      lead: 'HOW',
      text: 'TREATMENT IS COVERED BY INSURANCE',
    },
    description: 'We explain which part of the treatment is covered by basic insurance and which costs may remain your responsibility.',
    image: {
      src: '/images/insurance/hero-bg.webp',
      alt: 'Smiling patient of the Ariadent clinic',
      width: 873,
      height: 848,
    },
  },
  reimbursement: {
    title: 'REIMBURSEMENT OF COSTS',
    description: 'In the overview below, we explain the reimbursements that apply this year. Terms vary considerably between insurers, so we recommend contacting your insurance company with your treatment estimate at hand.',
    items: [
      {
        id: 'dental-denture',
        title: 'Dental denture',
        details: [
          { label: 'Basic insurance', value: '75%' },
          { label: 'Personal contribution', value: '25%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'A standard denture or first type denture is reimbursed at 75% under basic insurance. The remaining 25% is the ' },
              { text: 'personal contribution.', accent: true },
              { text: ' Depending on your policy, this amount may be partly or fully covered by supplementary insurance.' },
            ],
          },
        ],
      },
      {
        id: 'implant-denture',
        title: 'Implant-supported denture',
        details: [
          { label: 'Basic insurance', value: 'with prior authorization' },
          { label: 'Deductible', value: '€385' },
          { label: 'Personal contribution', value: '8–17%' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'Implant placement by an implantologist or oral and maxillofacial surgeon is fully reimbursed by basic insurance when prior authorization has been obtained from the insurance company.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Because the treatment is covered by basic insurance, the ' },
              { text: 'deductible', accent: true },
              { text: ' (€385) applies. See the note about the deductible.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'In most cases, implant-supported dentures are paid for under basic insurance. You must also pay the statutory personal contribution, which is a set percentage structured as follows:' },
            ],
          },
          {
            type: 'list',
            items: [
              {
                segments: [
                  { text: '10%', accent: true },
                  { text: ' — a full lower implant-supported denture,' },
                ],
              },
              {
                segments: [
                  { text: '8%', accent: true },
                  { text: ' — a full upper implant-supported denture,' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' — simultaneous fabrication of a conventional upper denture combined with a lower implant-supported denture.' },
                ],
              },
              {
                segments: [
                  { text: '17%', accent: true },
                  { text: ' — simultaneous fabrication of a conventional lower denture combined with an upper implant-supported denture.' },
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
          { label: 'Basic insurance', value: 'not covered' },
          { label: 'Supplementary insurance', value: 'depends on the policy' },
        ],
        content: [
          {
            type: 'paragraph',
            segments: [
              { text: 'The cost of a partial or framework denture is not covered by basic health insurance and may therefore only be reimbursed partly or fully through supplementary dental insurance.' },
            ],
          },
          {
            type: 'paragraph',
            segments: [
              { text: 'Coverage depends on your policy. We will be happy to discuss the options with you and prepare an estimate that you can submit to your insurance company.' },
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
              { text: 'Under basic insurance, 90% of the cost of relining a full denture without implants is reimbursed. Your ' },
              { text: 'personal contribution', accent: true },
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
              { text: '90% of the costs are reimbursed under basic insurance, while the ' },
              { text: 'deductible is', accent: true },
              { text: ' 10%.' },
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
              { text: '90% of the costs are reimbursed under basic insurance, while the ' },
              { text: 'deductible is', accent: true },
              { text: ' 10%.' },
            ],
          },
        ],
      },
    ],
  },
  appointmentCta: {
    title: 'WOULD YOU LIKE TO KNOW HOW YOUR INSURANCE COVERS TREATMENT?',
    description: 'Book an appointment — we will clarify the terms and help you prepare the necessary documents.',
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
