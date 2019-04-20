const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Router config
  */
  router: {
    // middleware: ['i18n','auth']
    middleware: ['auth']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'hahaha,hehehe' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n',
    '~/plugins/vue-extend',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
  },
  proxy: {
    '/v1' : {
      target: 'http://iuiga-api-old.hkxwl.com',
      changeOrigin: true
    },
    '/v2' : {
      target: 'http://iuiga-api-old.hkxwl.com',
      changeOrigin: true
    },
    '/v3' : {
      target: 'http://iuiga-api-old.hkxwl.com',
      changeOrigin: true
    },
    '/api' : {
      target: 'http://iuiga-api.hkxwl.com',
      changeOrigin: true,
      pathRewrite:{//代理新接口
        '^/api':''//这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
        //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.yml$/,
        use: ['json-loader', 'yaml-loader'],
        // resourceQuery: /blockType=i18n/,
        // type: "javascript/auto",
        // loader: ["@kazupon/vue-i18n-loader", "yaml-loader"],
      })
    }
    // analyze: true
  }
}
