<template>
<div class="footer">
    <input type="text" @keydown.enter="add_todo" v-model:value="current_add">
    <div @click="add_todo">添加待办</div>
</div>
</template>

<script>
export default {
    name: "todo_add",
    data(){
        return{
            current_add:''
        }
    },
    props:['get_todo'],
    methods:{
        add_todo(){
            this.get_todo(this.current_add);
            this.current_add='';
        }
    }
}
</script>

<style scoped>
.footer{
    display: flex;
}
</style>