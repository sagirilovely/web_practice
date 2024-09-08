<template>
<div>
    <ul>
        <li v-for="(value,index) in todo_list" :key="todo_list.id">
            <label :for="index">
                <input type="checkbox" :id="index" v-model:checked="value.isChecked" class="check">
                <span>{{value.todo}}</span>
            </label>
            <button @click="delTodo(value.id)">删除</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "ToDoList",
    data(){
        return{
            todo_list:[

            ],
            newToDo:'',
            isChecked:'',
            delButtonCondition:''
        }
    },
    methods:{
        getNewToDo(value){
            this.newToDo=value;
        },
        getAllSelectChecked(isChecked){
            this.isChecked=isChecked;
        },
        delTodo(todo_id){
            let needDelIndex=-1;
            this.todo_list.forEach((el,index)=>{
                if(el.id===todo_id){
                    needDelIndex=index;
                }
            })
            this.todo_list.splice(needDelIndex,1);
        },
        getDelButtonCondition(pressed){
            this.delButtonCondition=pressed;
        }
    },
    watch:{
        // 监测新来的todo
        newToDo:{
            deep:true,
            handler(newValue,oldValue){
                //用时间戳作为id
                let timeStr=(new Date()).getTime();
                //压入一个新的todo
                if(!(newValue.trim()==='')){
                    this.todo_list.unshift({
                        'id':timeStr,
                        'todo':newValue,
                        isChecked: false
                    })
                }
            }
        },
        //监测todo list
        todo_list:{
            deep:true,
            handler(newValue,oldValue){
                //将todo_list存入localStorage
                let todo_list_JSON=JSON.stringify(newValue);
                localStorage.setItem('todoList',todo_list_JSON);
                //当todo list变化后,统计被选中todo个数,总todo数
                //并通过全局事件总线发给DeleteToDo组件
                let count=newValue.length,checkedCount=0;
                newValue.forEach((el)=>{
                    if(el.isChecked){
                        checkedCount++;
                    }
                });
                this.$bus.$emit('getDelToDo',checkedCount,count);
            }
        },
        //监测全选按钮
        isChecked:{
            handler(newValue){
                //将每个按钮的选择状况与全选按钮同步
                this.todo_list.forEach((el)=>{
                    el.isChecked=newValue;
                })
            }
        },
        //监视删除按钮被点击状态
        delButtonCondition(newValue){
            //删除被勾选的todo
            let needDelID_list=[]
            this.todo_list.forEach((el)=>{
                if(el.isChecked){
                    needDelID_list.push(el.id);
                }
            });
            for (let i of needDelID_list){
                this.todo_list.forEach((el,index)=>{
                    if(i===el.id){
                        this.todo_list.splice(index,1);
                    }
                })
            }
        }
    },
    mounted() {
        this.$bus.$on('getNewToDo',this.getNewToDo);
        this.$bus.$on('getAllSelectChecked',this.getAllSelectChecked);
        this.$bus.$on('getDelButtonCondition',this.getDelButtonCondition);
        //从存储中拿到todo_list
        if(localStorage.getItem('todoList')){
            this.todo_list=JSON.parse(localStorage.getItem('todoList'));
        }
    },
    beforeDestroy() {
        //vc销毁前解绑全局事件总线
        this.$bus.$off('getNewToDo');
        this.$bus.$off('getAllSelectChecked');
        this.$bus.$off('getDelButtonCondition');
    }
}
</script>

<style scoped>
ul{
    width: 100%;
    display: flex;
    flex-direction: column;
}
li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1rem solid wheat;
}
li>button{
    display: none;
}
li:hover button{
    display: block;
}
.check{
    height: 20rem;
    width: 20rem;
}
</style>