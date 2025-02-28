import { defineConfig } from 'dumi'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ADOU UI',
    themes: ['dumi-theme-antd'],
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
  },
})
