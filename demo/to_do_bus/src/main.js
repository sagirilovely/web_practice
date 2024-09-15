import Vue from '../../../html_test/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
 el:'#app',
 components:{
  App
 },
  beforeCreate() {
  //全局事件总线
   Vue.prototype.$bus=this;
  },
  //渲染页面
  render:createElement => createElement(App)
})
