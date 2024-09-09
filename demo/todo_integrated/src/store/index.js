//vuex配置
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    actions:{
        setTemporaryInputValue(context,value){
            context.commit('SETTEMPORARYINPUTVALUE',value);
        }
    },
    mutations:{
        SETTEMPORARYINPUTVALUE(state,value){
            state.temporaryInputValue=value;
        }
    },
    state:{
        temporaryInputValue:''
    }
})