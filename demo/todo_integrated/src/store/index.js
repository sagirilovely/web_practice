//vuex配置
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    actions:{
        setTemporaryInputValue(context,value){
            context.commit('SETTEMPORARYINPUTVALUE',value);
        },
        setuserId(context,value){
            context.commit('SETUSERID',value);
        },
        setuserPW(context,value){
            context.commit('SETUSERPW',value);
        },
        setToDos(context,value){
            //更新veux的数据
            context.commit("SETTODOS",value);
            //更新本地存储的数据
            let JSONtodoList=value;
            JSON.stringify(JSONtodoList);
            localStorage.setItem(context.state.user.id+'Todos',JSON.stringify(JSONtodoList))
        }
    },
    mutations:{
        SETTEMPORARYINPUTVALUE(state,value){
            state.temporaryInputValue=value;
        },
        SETUSERID(state,value){
            state.user.id=value;
        },
        SETUSERPW(state,value){
            state.user.password=value;
        },
        SETTODOS(state,value){
            state.todos=value;
        }
    },
    state:{
        temporaryInputValue:'',
        user:{
            id:'',
            password:'',
        },
        todos:[]
    }
})