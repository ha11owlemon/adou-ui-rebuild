import { defineConfig } from 'dumi'
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig'
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: defineThemeConfig({
    name: 'ADOU UI',
    nav: {
      mode: 'override',
      value: [
        {
          title: '指南',
          link: '/guide',
          activePath: '/guide',
        },
        {
          title: '组件',
          link: '/components/button',
          activePath: '/components/button',
        },
      ],
    },
    bannerConfig: {
      showBanner: true,
      bannerImgUrl: 'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ',
    },
    description: '测试测试',
    title: 'ADOU UI',
  }),
})
