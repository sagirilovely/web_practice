<template>
<div>
    <label for="selectAll">
        <input type="checkbox" id="selectAll"
        v-model:checked="isChecked" class="check">全选
    </label>
    <span>{{checkedCount}}/{{count}}</span>
    <button @click="delAllTodo">删除所选</button>
</div>
</template>

<script>
export default {
    name: "DeleteToDo",
    data(){
        return{
            isChecked:false,
            checkedCount:0,
            count:0,
        }
    },
    methods:{
        //从ToDoList组件拿到被选中todo个数,总todo数
        getDelToDo(checkedCount,count){
            this.checkedCount=checkedCount;
            this.count=count;
        },
        //删除被选中的todo
        delAllTodo(){
            this.$bus.$emit('getDelButtonCondition',(new Date()).getTime())
        }
    },
    watch:{
        //监视全选按钮的状态
        isChecked:{
            handler(newValue){
                //给ToDoList传输全选按钮状态
                this.$bus.$emit('getAllSelectChecked',newValue);
            }
        }
    },
    mounted() {
        this.$bus.$on('getDelToDo',this.getDelToDo);
    },
    beforeDestroy() {
        this.$bus.$off('getDelToDo');
    }
}
</script>

<style scoped>
.check{
    height: 20rem;
    width: 20rem;
}
</style>