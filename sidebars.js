// @ts-check

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Sidebar cho "Cài đặt và Cẩm nang"
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tải và cài đặt',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
      ],
    },
    {
      type: 'category', 
      label: 'Cẩm nang tân thủ',
      items: [
        'tutorial-extras/huong-dan-bat-dau',
        'tutorial-extras/di-chuyen-va-phuong-tien',
        'tutorial-extras/tai-chinh-va-cong-viec',
        'tutorial-extras/che-tao-va-ky-nang',
        'tutorial-extras/nong-trai-va-chieu-dai',
        'tutorial-extras/ky-nang-ban-va-hoan-thanh',
      ],
    },
  ],

  // Sidebar cho "Nghề nghiệp và Tính năng" - HIỂN THỊ THẲNG CÂU CÁ
  nghiepVuSidebar: [
    {
      type: 'category',
      label: 'Nghề Nghiệp',
      items: [
        'nghiep-vu-va-tinh-nang/cau-ca',
        'nghiep-vu-va-tinh-nang/dao-quang',
        'nghiep-vu-va-tinh-nang/dau-khi',
        'nghiep-vu-va-tinh-nang/nong-dan',
      ],
    },
  ],
};

export default sidebars;