<template>
  <div class="container">
    <div class="left">
      <div @click="openToDoToday">我的一天</div>
      <div @click="openToDoAll">全部</div>
      <div @click="openToDoImportant">重要</div>
      <div @click="openToDoCompleted">已完成</div>
      <div @click="backHome">退出{{userId}}</div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ToDoImportant from "@/pages/ToDoImportant.vue";
import ToDoAll from "@/pages/ToDoAll.vue";
import ToDoToday from "@/pages/ToDoToday.vue";
import ToDoCompleted from "@/pages/ToDoCompleted.vue";
export default {
  name:"Menu",
  components:{
    ToDoImportant,ToDoAll,ToDoToday,ToDoCompleted
  },
  data(){
    return{
      userId:this.$store.state.user.id
    }
  },
  methods:{
    getCurrentPath(){
      let pathArr=(this.$route.path).split('/');
      return (pathArr[pathArr.length-1])
    },
    backHome(){
      this.$router.replace({name:'HomePage'})
    },
    openToDoToday(){
      if(this.getCurrentPath()!=='ToDoToday'){
        this.$router.replace({name:'ToDoToday'});
      }
    },
    openToDoAll(){
      if(this.getCurrentPath()!=='ToDoAll'){
        this.$router.replace({name:'ToDoAll'});
      }
    },
    openToDoImportant(){
      if(this.getCurrentPath()!=='ToDoImportant') {
        this.$router.replace({name: 'ToDoImportant'});
      }
    },
    openToDoCompleted(){
      if(this.getCurrentPath()!=='ToDoCompleted'){
        this.$router.replace({name:'ToDoCompleted'});
      }
    }
  },
  mounted() {
    let localTodo=localStorage.getItem(this.userId+"Todos");
    console.log(localTodo)
    if(localTodo){
      localTodo=JSON.parse(localTodo)
      this.$store.dispatch('setToDos',localTodo)
    }else{
      this.$store.dispatch('setToDos',[{
        id:123,
        work:'初始化',
        isImportant:false,
        isCompleted:false,
        isChecked:false,
        idEditing:false
      }])
    }
    this.$router.replace({name:'ToDoAll'});
  }
}
</script>

<style scoped>
.container{
  display: flex;
  width: auto;
  height: 100%;
  overflow: hidden;
}
.left{
  transition: all 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  font-size: 40px;
  justify-content: space-evenly;
}
.left>div{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
  border-radius: 15px;
}
.left :nth-child(1){
  background-color: rgb(170, 77, 61);
  color: white;
}
.left :nth-child(2){
background-color: rgb(22, 133, 112);
  color: white;
}
.left :nth-child(3){
background-color: rgb(100, 147, 175);
  color: white;
}
.left :nth-child(4){
background-color: rgb(225, 161, 5);
  color: white;
}
.left :nth-child(5){
margin-top: 100px;
  border: 5px rgb(100, 147, 175) solid;
  height: 10%;
  font-size: 30px;
  color: rgb(22, 133, 112);
}
.left>div:hover{
 box-shadow: none;
  transition: all 300ms ease-in-out;
  cursor: default;
}
.right{
  transition: all 300ms ease-in-out;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>