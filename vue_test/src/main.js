import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//导入并安装VueRouter
import VueRouter from "vue-router";
Vue.use(VueRouter)
//导入配置好的router
import router from "./router/index"


new Vue({
  router,//配置一个router项
  render: h => h(App),
}).$mount('#app')
