// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RGame Docs',
  tagline: (
  '<span style="color: #a78bfa; font-weight: bold;">RgameV</span> là một trò chơi cho phép bạn hòa mình vào một vũ trụ ảo và đóng vai trò bạn chọn, tuân theo các quy tắc tương tự như đời thực. Trở thành chính trị gia, gangster, doanh nhân, tài xế taxi, công nhân nhà máy, cảnh sát hoặc bất kỳ vai trò nào khác. Không có giới hạn, bạn tự do chọn con đường của mình và tạo nên câu chuyện riêng trong thế giới ảo này!'
  ),
  favicon: 'img/rgamelogo.png',
  // Set the production url of your site here
  url: 'https://v-rgame.github.io',
  baseUrl: '/docs/',

  organizationName: 'v-rgame',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RGame Docs',
        logo: {
          alt: 'RGame Logo',
          src: 'img/rgamelogo.png', // Đổi thành logo của anh
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Cài đặt và Cẩm nang',
          },
          {
            type: 'docSidebar',
            sidebarId: 'nghiepVuSidebar', // Cần tạo sidebar mới
            position: 'left',
            label: 'Nghề nghiệp và Tính năng',
          },
          {
            href: 'https://www.youtube.com/watch?v=aZrt3XF45Nw',
            label: 'Video Hướng dẫn',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;