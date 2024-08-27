<template>
<div>
    <ul>
        <li  v-for="(value,key) in wait_done" :key="value.id"
        @click="remove_done(value.id)">
            {{value.do}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "todo_list",
    data(){
        return{
            wait_done:[
            ],
        }
    },
    props:['new_todo','get_count'],
    methods:{
        //删除做完事项
        remove_done(done_id){
            let remove_index=0;
            this.wait_done.forEach((element,index)=>{
                 if(done_id===element.id){
                     remove_index=index;
                 }
            })
            this.wait_done.splice(remove_index,1);
        }
    },
    watch:{
        wait_done:{
            deep:true,
            handler(newValue,oldValue){
                //将data的数据存入localStorage
                localStorage.setItem('todo_list', JSON.stringify(newValue));
                //返回统计数据
                this.get_count(this.wait_done.length);
            }
        },
        new_todo:{
            deep:true,
            handler(newValue,oldValue){
                let id_from_time=(new Date()).getTime();
                this.wait_done.unshift({id:id_from_time,do:newValue});
            }
        }
    },
    mounted() {
        //从localStorage获取数据
        let todo_list_str=localStorage.getItem('todo_list');
        if(todo_list_str){
            this.wait_done=JSON.parse(todo_list_str);
        }

        //返回统计数据
        this.get_count(this.wait_done.length);
    }
}
</script>

<style scoped>

</style>