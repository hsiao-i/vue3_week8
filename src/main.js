import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// loading 效果
import Loading from 'vue-loading-overlay' // component
import 'vue-loading-overlay/dist/vue-loading.css' // style
import { date, toThousandths } from './methods/filters.js'
import $messageState from '@/methods/messageState.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
// import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// veevalidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW') // 因為語系檔沒辦法直接啟用，因此會強制預設語系為中文

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  toThousandths
}
app.config.globalProperties.$messageState = $messageState

app.use(router)
app.use(VueAxios, axios)
app.component(date)
// loading
app.component('LoadingOverlay', Loading)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
