import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

import hljs from 'highlight.js'

VMdEditor.use(githubTheme, {
  Hljs: hljs,
})

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

import router from './router/index'
import './router/permission'

createApp(App)
  .use(ElementPlus)
  .use(createPinia())
  .use(router)
  .use(VMdEditor)
  .use(VMdPreview)
  .mount('#app')
  
