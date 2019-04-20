// import Vue from 'vue'
// import axios from 'axios'

// // 配置请求默认参数,注意content-type默认json，不用多次配置
// const $http = axios.create({
//   // baseUrl: 'http://iuigaapi.sgshop.club',
//   timeout: 30000,
//   headers: {
//     'Authorization':'Bearer 926447d15c1bd88e1c48825647bfb7041ef0f5de',
//     'Cache-Control':'no-cache',
//     'platform':5,
//   }
// });
// Vue.prototype.$http=$http;

// const http = axios.create({
//   timeout: 30000,
//   headers: {
//     'Authorization':'Bearer 926447d15c1bd88e1c48825647bfb7041ef0f5de',
//     'Cache-Control':'no-store, no-cache, must-revalidate',
//     'Access-Control-Max-Age':0,
//     'platform':5,
//     'iuiga-webpc': 'IUIGAPCTRUE'
//   }
// });

// Vue.prototype.http=http;


export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log(config)
    // console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('error',error)
    if (code === 400) {
      redirect('/400')
    }
  })
  $axios.setHeader('Authorization','Bearer 926447d15c1bd88e1c48825647bfb7041ef0f5de')
  $axios.setHeader('Cache-Control','no-store, no-cache, must-revalidate')
  $axios.setHeader('Access-Control-Max-Age',0)
  $axios.setHeader('platform',5)
  $axios.setHeader('iuiga-webpc','IUIGAPCTRUE')
}
