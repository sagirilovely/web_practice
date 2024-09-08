<template>
<div>
    <input type="text" @keydown.enter="add_todo" v-model:value="current_add">
    <div class="addBUT" @click="add_todo">+</div>
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
            if(this.current_add.trim()!==''){
                this.get_todo(this.current_add);
            }
            this.current_add='';
        }
    }
}
</script>

<style scoped>
input{
    width: 80%;
    height: 85%;
    border: none;
    border-radius: 10rem;
    box-shadow: 5rem 5rem 5rem 1rem gray;
    font-size: 45rem;
    transition: all 0.2s ease-in-out;
}
input:focus{
    outline:none;
    box-shadow: 2rem 2rem 3rem 1rem gray;
}
.addBUT{
    width: 100rem;
    height: 100rem;
    border: solid #a84229 1px;
    background-color: #a84229;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 70rem;
    font-weight: lighter;
    border-radius: 50rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 5rem 5rem 5rem 1rem gray;
}
.addBUT:hover {
    box-shadow: 2rem 2rem 3rem 1rem gray;
    cursor: default;
}
</style>