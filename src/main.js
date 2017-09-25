// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"

// 全局安装路由(让任何组件都可以使用路由)
Vue.use(VueRouter);

// 分别导入4个组件
import Home from './pages/Home'
import Sort from './pages/Sort'
import Cart from './pages/Cart'
import Mine from './pages/Mine'

// 配置路由规则
const routes = [
  {path:"",component:Home},
  {path:'/home',component:Home},
  {path:'/sort',component:Sort},
  {path:'/cart',component:Cart},
  {path:'/mine',component:Mine}
]

// 创建路由实例
const router = new VueRouter({
  // 路由规则
  routes
})

// 去掉控制台警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  // 将路由实例挂载到vue上
  router
})
