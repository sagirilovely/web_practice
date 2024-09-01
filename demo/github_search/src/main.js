import Vue from "vue";
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