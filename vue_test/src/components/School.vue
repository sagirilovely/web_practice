<template>
  <div>
      <div>这里是学校组件:{{ studentName }}</div>
  </div>
</template>
<script>
export default {
    name:'School',
    data(){
        return{
            studentName:''
      }
    },
    methods: {
        getStuName(value){
            this.studentName=value;
        }
    },
    mounted(){
        this.$bus.$on('getStuName',this.getStuName);
    },
    beforeDestroy(){
        this.$bus.$off('getStuName');
    }
}
</script>
