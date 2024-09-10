import Vue from 'vue'
import App from './App.vue'
//导入SagiriStyle插件并安装
import Sagiri_style from "@/plugins/sagiri_style";
Vue.use(Sagiri_style);
//导入store并安装
import store from "./store/index";
//导入路由并安装
import VueRouter from "vue-router";
Vue.use(VueRouter)
import router from "@/router";

Vue.config.productionTip = false

new Vue({
  el:"#App",
  store,
  router,
  render: h => h(App),
})
