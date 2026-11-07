export const getGoogleTags = () => ({
  script: [
    {
      key: 'google-tag-manager',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KPM8WMJK');`,
      tagPosition: 'head',
    },
    {
      key: 'google-analytics-src',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-MZ8RLVKRB1',
      async: true,
      tagPosition: 'head',
    },
    {
      key: 'google-ads-src',
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-982665486',
      async: true,
      tagPosition: 'head',
    },
    {
      key: 'google-analytics',
      innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MZ8RLVKRB1');
        gtag('config', 'AW-982665486');`,
      tagPosition: 'head',
    },
  ],
  noscript: [
    {
      key: 'google-tag-manager-noscript',
      innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPM8WMJK" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
      tagPosition: 'bodyOpen',
    },
  ],
})
