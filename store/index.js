let { locale } = require("~/config/constant.js");
let cookie = require('cookie');
export const state = () => ({
  counter: 0,
  rootList: [],
  locales: ["en", "zh"],
  locale: locale,
  navigatorLocale: false
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  setState(state, data) {
    state.rootList = data;
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};

export const actions = {
  nuxtServerInit({ commit },{req}) {
    const cookies = cookie.parse(req.headers.cookie || "")
    const loc = cookies['locale'] || locale
    commit("SET_LANG", loc)
  }
};
