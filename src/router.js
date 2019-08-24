import Vue from 'vue'
import Router from 'vue-router'
//1:在router.js中引入组件
import Search from "./components/Search.vue"
import song from "./components/song.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Search',component: Search},
    {path: '/song',component: song}
  ]
})
