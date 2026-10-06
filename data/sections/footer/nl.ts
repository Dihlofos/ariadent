export default {
  type: 'footer',
  title: 'Neem contact met ons op',
  contacts: [
    {
      label: 'Vragen over inschrijving',
      email: 'name@mail.ru',
    },
    {
      label: 'Persvragen',
      email: 'pressame@mail.ru',
    },
  ],
  info: {
    text: 'Wil je media-accreditatie voor het evenement aanvragen? Stuur ons dan een e-mail met de volgende gegevens:',
    items: [
      'De naam van het mediakanaal en het programma, en de geplande publicatiedatum;',
      'De volledige namen en telefoonnummers van de correspondent en alle leden van de filmploeg.',
    ],
  },
  docs: [
    { href: '/docs/policy.pdf', label: 'Privacyverklaring' },
    { href: '/docs/reject.pdf', label: 'Afstandsverklaring voor deelnemers' },
    { href: '/docs/reject_child.pdf', label: 'Toestemmingsverklaring voor ouder of voogd van een kind' },
  ],
}
