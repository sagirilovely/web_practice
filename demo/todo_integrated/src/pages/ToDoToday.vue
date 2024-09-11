<template>
  <div id="todoAll">
    <ul class="top">
      <li v-for="(value,index) in todoList" :key="value.id" v-show="!(value.isCompleted) && isToday(value.id)">
        <div class="todosAndButton">
          <div class="left">
            <input type="checkbox" :checked="value.isChecked" @click="checked($event,value.id)" class="checkbox" >
            <div v-show="!(value.isEditing)">{{value.work}}</div>
            <input type="text" v-show="value.isEditing"
                   v-model:value="value.work"
                   @keydown.enter="startEdit($event,value.id)">
          </div>
          <div class="right">
            <button @click="startEdit($event,value.id)" class="green">{{ value.isEditing?'完成':'编辑' }}</button>
            <button :style="value.isImportant?'background-color:rgb(225, 161, 5);':'background-color:rgb(100, 147, 175);'"
                    @click="setImportant($event,value.id)">重要</button>
            <button @click="delTodo($event,value.id)" class="red">删除</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="bottom">
      <div class="addNew">
        <input type="text" v-model:value="newTodo" @keydown.enter="addNewTodo">
        <button @click="addNewTodo" class="add">+</button>
      </div>
      <div class="delTodos">
        <div>已选择{{CheckedSum}}/{{todoListShowingSum}}</div>

        <button @click="delCheckedTodos" class="red">删除</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "ToDoToday",
  data(){
    return{
      todoList:this.$store.state.todos,
      userId:this.$store.state.user.id,
      newTodo:''
    }
  },
  computed:{
    //统计被选中的总数
    CheckedSum(){
      let sum=0;
      this.todoList.forEach((value)=>{
        if(value.isChecked===true){
          sum++;
        }
      })
      return sum;
    },
    //目前页面上的todo总数
    todoListShowingSum(){
      let sum=0;
      this.todoList.forEach((value)=>{
        if(value.isCompleted===false){
          sum++
        }
      })
      return sum;
    }
  },
  methods:{
    //开始编辑或编辑完成
    startEdit(event,todoId){
      //更改isEditing属性
      this.todoList.forEach((value, index, array)=>{
        if(value.id===todoId){
          value.isEditing=!value.isEditing;
        }
      })
      this.todoList = [...this.todoList]; // 触发 Vue 的 reactivity 系统
    },
    //删除单个todo
    delTodo(event,todoId){
      this.todoList.forEach((value, index, array)=>{
        if(todoId===value.id){
          value.isCompleted=true;
          value.isChecked=false;
        }
      })
      this.todoList = [...this.todoList];
    },
    //添加一个新的todo
    addNewTodo(){
      if(!(this.newTodo.trim()==='')){
        let time=(new Date()).getTime()
        this.todoList.push({
          id:time,
          work:this.newTodo,
          isImportant:false,
          isCompleted:false,
          isChecked:false,
          idEditing:false
        })
        this.newTodo=''
      }
      this.todoList = [...this.todoList];
    },
    //被选中后修改isChecked
    checked(event,checkedId){
      this.todoList.forEach((value)=>{
        if(value.id===checkedId){
          value.isChecked=!value.isChecked;
        }
      })
      this.todoList = [...this.todoList];
    },
    //删除所选todo
    delCheckedTodos(){
      this.todoList.forEach((value)=>{
        if(value.isChecked===true){
          value.isCompleted=true;
          value.isChecked=false;
        }
      })
      this.todoList = [...this.todoList];
    },
    //传入id,计算与当前时间差,小于24h返回true,反之false
    isToday(todoId){
      let time=(new Date()).getTime()-todoId;
      time=time/60/60/1000;
      return time < 24;
    },
    setImportant(event,todoId){
      let isIm=false;
      this.todoList.forEach((value)=>{
        if(value.id===todoId){
          value.isImportant=!value.isImportant;
          isIm=value.isImportant;
        }
      })
    }
  },
  watch:{
    todoList:{
      deep:true,
      handler(newValue,oldValue){
        this.$store.dispatch('setToDos',this.todoList);
      }
    }
  }

}
</script>

<style scoped>
ul,li {
  list-style: none;
}
*{
  margin: 0;
  padding: 0;
  color: rgb(100, 147, 175);
  font-size: large;
}
button{
  height: 50px;
  width: 100px;
  border-radius: 10px;
  margin: 5px;
  color: white;
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
}
button:hover{
  box-shadow: none;
  transition: all 200ms ease-in-out;
}
#todoAll{
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.top{
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  align-items: center;
  overflow: auto;
}
.bottom{
  display: flex;
  width: 80%;
  flex-direction: column;
  height: 150px;
  align-items: center;
  justify-content: space-evenly;
}
li{
  display: flex;
  width: 100%;
  height: 75px;
}
.todosAndButton{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.left,.right{
  display: flex;
  margin:10px;
  align-items: center;
}
.left{
  width: 80%;
}
.left>div{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 80%;
  color: white;
  background-color: rgb(100, 147, 175);
  border-radius: 10px;
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
}
input{
  margin-left: 10px;
  margin-right: 10px;
  width: 80%;
  height: 70%;
  text-align: center;
  color: rgb(170, 77, 61);
  font-size: large;
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
}
.checkbox{
  margin: 2px;
  width: 20px;
  height: 20px;
}
.addNew,.delTodos{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.delTodos>div{
  margin-left: 20px;
}
.red{
  background-color: rgb(170, 77, 61);
}
.green{
  background-color: rgb(22, 133, 112);
}
.add{
  height: 60px;
  width: 60px;
  background-color: rgb(100, 147, 175);
  border-radius: 30px;
  text-align: center;
  line-height: 60px;
}
</style>