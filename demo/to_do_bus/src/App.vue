<template>
  <div id="app">
      <AddToDo class="AddToDo"></AddToDo>
      <ToDoList class="ToDoList"></ToDoList>
      <DeleteToDo class="DeleteToDo"></DeleteToDo>
  </div>
</template>

<script>
import AddToDo from "@/components/AddToDo.vue";
import ToDoList from "@/components/ToDoList.vue";
import DeleteToDo from "@/components/DeleteToDo.vue";
export default {
  name: 'App',
  components: {
      AddToDo,
      ToDoList,
      DeleteToDo
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style: none;
}
html{
    font-size: 0.053vw;
}
body{
    display: flex;
    font-size: 32rem;
    justify-content: center;
}
#app{
    display: flex;
    flex-direction: column;
    width: 300rem;
    height: 600rem;
    justify-content: space-between;
}
button{
    background-color: crimson;
    color: white;
    font-size: 20rem;
    border: none;
    border-radius: 5rem;
}
.AddToDo,.ToDoList,.DeleteToDo{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.ToDoList{
    height: 100%;
}
</style>
