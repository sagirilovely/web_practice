<template>
 <div>
    <SagiriButton color="red">删除所选</SagiriButton>
   <br><br>
   <SagiriCard height="40px" width="400px" fontSize="30px">33</SagiriCard>
   <br><br>
   <SagiriInput dispatchAction="setTemporaryInputValue" state-key="temporaryInputValue" width="200px" height="30px"
   ></SagiriInput>

   <div>{{$store.state.temporaryInputValue}}</div>
 </div>
</template>
<script>
export  default {
  name:"App",
  components:{

  },
  data(){
    return{

    }
  },
  computed:{

  },
  methods:{

  }
}
</script>
<style>

</style>