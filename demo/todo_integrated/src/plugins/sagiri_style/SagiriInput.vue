<template>
  <input type="text"
          v-model="finalValue"
         :style="'width:'+width +';height:'+height +';font-size:'+fontSize"
          @keydown.enter="completeInput()" @blur="completeInput()" >
</template>
<script>
export default {
  name:"SagiriInput",
  //需要传入的参数
  props:{
    stateKey:{
      required: true,
    },
    dispatchAction:{
      required: true
    },
    height:{
      required: false,
      default:'20px'
    },
    width:{
      required: false,
      default:'40px'
    },
    fontSize:{
      required: false,
      default:'16px'
    }
  },
  data(){
    return{
      finalValue: this.getRelStateValue(this.stateKey)
    }
  },
  computed:{

  },
  methods:{
    getRelStateValue(oriKey){
      let arr=oriKey.split('.');
      let path='';
      for (let p of arr){
        path=path+"['"+p+"']"
      }
      return eval(`this.$store.state${path}`)
    },
    completeInput(){
      this.$store.dispatch(this.dispatchAction,this.finalValue);
    }
  }

}
</script>
<style>
input{
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
  border-radius: 15px;
  text-align: center;
  border: none;
  transition: all 300ms ease-in-out;
}

</style>