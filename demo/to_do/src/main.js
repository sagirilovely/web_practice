import Vue from '../../../html_test/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
 render:createElement => createElement(App)
}).$mount('#app')
