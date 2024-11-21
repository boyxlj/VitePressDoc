import DefaultTheme from 'vitepress/theme'
import './global.scss'
import './custom.scss'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import 'gitalk/dist/gitalk.css'
import MyComment from '../../components/my-comment.vue'

import {
  ShareButton,
  HomeUnderline,
  baiduAnalytics,
  trackPageview
} from '@theojs/lumen'
import { h } from 'vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('comment', MyComment)
    app.component('Home', HomeUnderline)
    baiduAnalytics({ baiduId: '5d52966365315a337b13b2d89e0ff044' })
    if (typeof window !== 'undefined') {
      trackPageview('5d52966365315a337b13b2d89e0ff044', window.location.href)
    }
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(ShareButton)
    })
  }
}
