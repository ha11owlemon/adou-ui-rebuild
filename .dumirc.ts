import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';
export default defineConfig({
  outputPath: '_site',
  base: '/adou-ui-rebuild/',
  publicPath: '/adou-ui-rebuild/',
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
    github: 'https://github.com/umijs/dumi',
    bannerConfig: {
      showBanner: true,
      bannerImgUrl: 'xx',
      bannerMobileImgUrl: 'xx',
    },
    description: '使用纯 Bootstrap 5+ 的 React 组件库',
    title: 'ADOU UI',
    actions: [
      { type: 'primary', text: '开始使用', link: '/guide' },
      { type: 'default', text: 'GitHub', link: '/guide/introduce' },
    ],
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'dumi',
            url: 'https://d.umijs.org/',
            description: '组件/文档研发工具',
            openExternal: true,
          },
          {
            title: 'Umi',
            url: 'https://umijs.org/',
            description: 'React 应用开发框架',
            openExternal: true,
          },
        ],
      },
      {
        title: '帮助',
        items: [
          {
            title: 'GitHub',
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            url: 'https://d.umijs.org/',
            openExternal: true,
          },
        ],
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            url: 'https://yuque.com',
            description: '构建你的数字花园',
            openExternal: true,
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png',
            title: 'Antv',
            url: 'https://antv.vision/',
            description: '数据可视化解决方案',
            openExternal: true,
          },
          {
            icon: 'https://www.eggjs.org/logo.svg',
            title: 'Egg',
            url: 'https://www.eggjs.org/',
            description: '企业级 Node.js 框架',
            openExternal: true,
          },
        ],
      },
    ],
    rtl: false,
    features: [
      {
        title: '更好的编译性能',
        details:
          '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度',
      },
      {
        title: '内置全文搜索',
        details:
          '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加',
      },
      {
        title: '全新主题系统',
        details:
          '为主题包增加插件、国际化等能力的支持，且参考 Docusaurus 为主题用户提供局部覆盖能力，更强更易用',
      },
      {
        title: '约定式路由增强',
        details:
          '通过拆分路由概念、简化路由配置等方式，让路由生成一改 dumi 1.x 的怪异、繁琐，更加符合直觉',
      },
      {
        title: '资产元数据 2.0',
        details:
          '在 1.x 及 JSON Schema 的基础上对资产属性定义结构进行全新设计，为资产的流通提供更多可能',
      },
      {
        title: '继续为组件研发而生',
        details:
          '提供与全新的 NPM 包研发工具 father 4 集成的脚手架，为开发者提供一站式的研发体验',
      },
    ],
  }),
});
