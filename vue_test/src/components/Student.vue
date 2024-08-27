<template>
 <div>
     <div @click="aFunc">学生姓名:{{stuName}}</div>
 </div>
</template>

<script>
export default {
    name: "Student",
    data(){
      return{
          stuName:'琪亚娜'
      }
    },
    props:['addStuName'],
    methods:{
        aFunc(){
            console.log(`@@@Student 将 ${this.stuName} 传给School`);
            this.addStuName(this.stuName);
        }
    }
}

</script>
<style scoped>

</style>