export default function (context) {
  /**
   * 这是不同路径设置语言的设置，不需要
   */
  // const defaultLocale = app.i18n.fallbackLocale
  // // If middleware is called from hot module replacement, ignore it
  // if (isHMR) return
  // // Get locale from params
  // const locale = params.lang || defaultLocale
  // if (store.state.locales.indexOf(locale) === -1) {
  //   return error({ message: 'This page could not be found.', statusCode: 404 })
  // }
  // // Set locale
  // console.log(locale,'locale')
  // store.commit('SET_LANG', locale)
  // app.i18n.locale = store.state.locale
  // // If route is /<defaultLocale>/... -> redirect to /...
  // if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
  //   const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
  //   const re = new RegExp(toReplace)
  //   return redirect(
  //     route.fullPath.replace(re, '/')
  //   )
  // }

  /**
   * 需要首次路由根据浏览器语言来设置语言
   */
  if(!process.server){
    console.log(navigator.language,'navigator.language')
    console.log(navigator.userLanguage,'navigator.userLanguage')
  }
  console.log(context.req&&context.req.headers,'req')
  console.log(context.res&&context.res.headers,'res')

  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
