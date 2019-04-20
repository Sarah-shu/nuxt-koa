import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
let en = require('json-loader!yaml-loader!~/assets/locales/en.yml')
let zh = require('json-loader!yaml-loader!~/assets/locales/zh-CN.yml')
en=JSON.parse(en.split('=')[1])
zh=JSON.parse(zh.split('=')[1])
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': en,
      'zh': zh
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
