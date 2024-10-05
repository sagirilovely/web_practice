import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入MintUI
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//引入配置好的vuex
import store from "./store/index";


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
