import { defineConfig } from 'vitepress'
import tailwind from 'tailwindcss'
import timeline from 'vitepress-markdown-timeline'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { sidebarArr } from './config/sidebar'
import { navbarArr } from './config/navbar'

export default defineConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/logo1.png' }]],
  title: 'Promise',
  description: 'Hello Promise',
  themeConfig: {
    siteTitle: 'Promise',
    logo: '/logo1.png',
    nav: navbarArr,
    sidebar: sidebarArr,
    socialLinks: [{ icon: 'github', link: 'https://github.com/boyxlj' }],
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    footer: {
      message: 'Copyright © 2024 helloxlj.top All Rights Reserved',
      copyright:
        '<a target="_blank" href="https://beian.miit.gov.cn/">津ICP备2021007424号</a>'
    },
    lightModeSwitchTitle: '切换明亮主题',
    darkModeSwitchTitle: '切换黑暗主题',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    cleanUrls: true,
    outline: { label: '页面导航' },
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
  markdown: {
    config: (md) => {
      md.use(timeline)
      md.use(vitepressDemoPlugin)
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind({
            config: 'tailwind.config.js',
            cssPaths: ['./src/index.html', './**/*.md']
          })
        ]
      }
    }
  }
})
