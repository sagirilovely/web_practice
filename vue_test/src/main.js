import Vue from 'vue'
import App from './App.vue'


new Vue({
    el:"#app",
    components:{
        App
    },
    beforeCreate(){
            //安装全局事件总线
            Vue.prototype.$bus=this;
            //就是给Vue的原型上挂一个bus属性,该属性的类型为vm
            //使其可以使用$on $off $emit方法
    },
    render:createElement => createElement(App)
})
