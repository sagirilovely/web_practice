<template>
  <div>
      <button @click="sendName">发送数据</button>
  </div>
</template>
<script>
export default {
    name:'Student',
    data(){
        return{
            name:'琪亚娜'
        }
    },
    methods:{
        sendName(){
            //触发事件,将本组件的数据作为参数
            this.$bus.$emit('getStuName',this.name);
        }
    }
}
</script>
