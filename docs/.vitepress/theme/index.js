import DefaultTheme from 'vitepress/theme'
import './global.scss'
import './custom.scss'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import 'gitalk/dist/gitalk.css'
import MyComment from '../../components/my-comment.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('comment', MyComment)
  }
}
