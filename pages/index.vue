<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="number in list">{{number|currencyRate($store.state.locale)}}</li>
      </ul>
      <button @click="changLang('en')">{{$t('change Lang')}}</button>
      <button @click="changLang('zh')">{{$t('vip.Myorder')}}</button>
      <div>{{data}}</div>
      <Button type="primary" @click="vueInject">Primary</Button>
      <nuxt-link to="/otherpage">to otherpage</nuxt-link>
      <h1 class="title">
        <!-- {{data}} -->
      </h1>
      <h2 class="subtitle">My ace Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
// import data from '~/assetes/locales/en.yml'

export default {
  components: {
    Logo
  },
  async asyncData({ app }) {
    let data = await app.$axios.$get("v1/home/home/view");

    // app.ctxInjectedFun('ctx!') //服务器端输出
    // app.$myInjectedFunction('ctx!')
    return { data: data.data };
  },
  data() {
    return {
      list:[
        1,54,34,23,76,23
      ]
    }
  },
  methods: {
    changLang(locale) {
      this.$store.commit("SET_LANG", locale);
      this.$i18n.locale = this.$store.state.locale;
      document.cookie = "locale="+locale
    },
    getData() {
      this.$axios.get("v1/home/home/view").then(res => {
        console.log(res);
      });
    },
    vueInject() {
      this.$myInjectedFun("你好啊！");
      this.$myInjectedFunction("vue");
    }
  },
  mounted() {
    // const data = require('json-loader!yaml-loader!~/assets/locales/en.yml')
    // const data = require('~/assets/locales/en.yml')
    // console.log(data)
    this.getData()
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
