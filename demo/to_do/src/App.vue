<template>
   <div>
      <todo_count :count="todo_count"></todo_count>
      <todo_list :new_todo="current_add" :get_count="get_count"></todo_list>
      <todo_add :get_todo="get_todo"></todo_add>
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
}
body{
   font-size: 40rem;
}
</style>