<template>
    <div>
        <div>学校名称:{{name}}</div>
        <Student :addStuName="addStuName"></Student>
    </div>
</template>

<script>
  import Student from "@/components/Student.vue";
  export default {
      name:'School',
      components:{
          Student
      },
      data(){
          return{
              name:'圣芙蕾雅学园',
              stuNameList:[]
          }
      },
      methods:{
          addStuName(stuName){
              this.stuNameList.push(stuName);
              console.log(`@@@School接受到了${stuName} 并更新列表:`);
              for(let l of this.stuNameList){
                  console.log(l);
              }
          }
      }
  }
</script>
