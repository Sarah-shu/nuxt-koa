<template>
  <div class="box">
    <button>{{$t('change Lang')}}</button>
    <button>{{$t('vip.Myorder')}}</button>

    <div class="first">
      haha
      <span class="second">hehhe</span>
    </div>
    <div class="black">this is other page</div>
    <nuxt-link to="/">home</nuxt-link>
    <button>{{counter}}</button>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{done:todo.done}">{{todo.text}}</span>
      </li>
      <li>
        <input type="text" placeholder="What needs to be done?" @keyup.enter="addTodo">
      </li>
    </ul>
    <ul>
      <li v-for="item in $store.state.rootList.list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import axios from 'axios'
export default {
  head: {
    title: "other页面",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "就是一个other页面" },
      { hid: "keywords", name: "keywords", content: "hahaha,hehehe" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  data() {
    return {
      counter: this.$store.state.counter
    };
  },
  fetch({ store, params, app }) {
    // return app.$axios.get('https://api.myjson.com/bins/cpxjs').then(res=>{
    //   store.commit('setState',res.data)
    // })
    return app.$axios.$get("v1/home/home/view").then(res => {
      // store.commit('setState',res.data)
      // console.log(res)
    });
  },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle"
    })
  },
  mounted() {
    // console.log(this.$store)
  }
};
</script>
<style scoped lang="less">
.done {
  text-decoration: line-through;
}
.first {
  color: red;
  .second {
    color: green;
  }
}
</style>


