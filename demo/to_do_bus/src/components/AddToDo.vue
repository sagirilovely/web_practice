<template>
<div>
    <input type="text" v-model:value="newToDo" @keydown.enter="sendNewTodo">
    <button @click="sendNewTodo">添加</button>
</div>
</template>

<script>
export default {
    name: "AddToDo",
    data(){
        return{
            newToDo:''
        }
    },
    methods:{
        sendNewTodo(){
            //触发全局数据总线的事件
            this.$bus.$emit('getNewToDo',this.newToDo);
            //清空输入框
            this.newToDo='';
        }
    }
}
</script>

<style scoped>
input{
    width: 85%;
}
</style>