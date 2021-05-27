module.exports = {
  title: 'TurtleQueue',
  tagline: 'Cross platform messaging SDK',
  url: 'https://turtlequeue.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'turtlequeue',
  projectName: 'turtlequeue',
  themeConfig: {
    navbar: {
      title: 'TurtleQueue',
      logo: {
        alt: 'TurtleQueue Logo',
        src: 'img/favicon.png',
        srcDark: 'img/favicon_light.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/turtlequeue/',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'pricing/',
          activeBasePath: 'pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'contact/',
          activeBasePath: 'contact',
          label: 'Contact Us',
          position: 'left',
        },

      ],
    },
    algolia: {
      apiKey: '6b1e594d7532affa1fcdc8b93a89a20f',
      indexName: 'turtlequeue',
      contextualSearch: true,
      searchParameters: {},
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Docs source',
      //         to: 'docs/',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/turtlequeue',
      //       }
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       }
      //     ],
      //   },
      // ],
      copyright: ` Build by turtles for turtles with🍷in London </br> Copyright © 2019-${new Date().getFullYear()} TurtleQueue, Ltd.`,
    },
    image: 'img/logo_black.png',
    announcementBar: {
      id: 'support_us',
      content:
      'Public Beta. We are preparing for GA S2 of 2021.',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/turtlequeue/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/turtlequeue/blog/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
