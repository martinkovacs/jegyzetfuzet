// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jegyzetfüzet',
  url: 'https://jegyzetfuzet.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  noIndex: true,
  favicon: 'img/favicon.ico',
  organizationName: 'martinkovacs', // Usually your GitHub org/user name.
  projectName: 'jegyzetfuzet', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: '',
        logo: {
          src: 'img/logo.svg',
        },
        items: [
          {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Jegyzetek',
          },
          {
          href: 'https://bit.ly/jegyzetfuzetdrive',
          label: 'Letöltés',
          position: 'left',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      gtag: {
        trackingID: 'G-5ZM312LW52',
        anonymizeIP: false
      },
      plugins: ['@docusaurus/plugin-google-gtag']
    }),
};

module.exports = config;
