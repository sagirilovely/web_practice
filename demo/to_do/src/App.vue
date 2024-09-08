<template>
   <div class="container">
      <todo_count class="header" :count="todo_count"></todo_count>
      <todo_list class="todoList" :new_todo="current_add" :get_count="get_count"></todo_list>
      <todo_add class="footer" :get_todo="get_todo"></todo_add>
   </div>
</template>

<script>
import todo_add from "@/components/todo_add.vue";
import todo_list from "@/components/todo_list.vue";
import todo_count from "@/components/todo_count.vue";
export default {
    name:'App',
    components:{
        todo_list,
        todo_count,
        todo_add
    },
    data(){
        return{
           current_add:'',
           todo_count:0
        }
    },
   methods:{
      get_todo(value){
         this.current_add=value;
      },
      get_count(value){
         this.todo_count=value;
      }
   }
}
</script>

<style>
*{
    margin: 0;
    padding:0;
}
ul,ol,li{
    list-style: none;
}
html{
    font-size: 0.13333vw;
    height: 100%;
}
body{
   font-size: 40rem;
   height: 100%;
   background-color: #f9e8de;
   font-family: "Microsoft YaHei UI";
}
.container{
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   justify-content: space-between;
}
.header{
   height: 270rem;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   color:#a9432a;
   margin: 30rem;
}
.todoList{
   flex-basis: 100%;
   display: flex;
   overflow: auto;
}
.footer{
   height:170rem;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
}
</style>