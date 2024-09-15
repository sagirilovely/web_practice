import Vue from "../../../html_test/vue";
import App from "./App.vue"
new Vue({
    el:"#app",
    components:{
        App
    },
    beforeCreate() {
        Vue.prototype.$bus=this
    },
    render:createElement => createElement(App)
})