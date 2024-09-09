<template>
    <button :style="'background-color:'+bkColor " @click="this.click">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: "SagiriButton",
  //需要传入的参数:
  // props:['color','click'],
  props:{
    color:{
      default:'gray'
    },
    click:{
      type:Function,
      default: function (){
        console.log(`有一个SagiriButton未传点击函数`)
      }
    }
  },
  data(){
    return{
      preColor:{
          'red':"rgb(170, 77, 61)",
          'green':"rgb(22, 133, 112)",
          'blue':"rgb(100, 147, 175)",
          'gray':"rgb(197, 187, 163)"
      },
    }
  },
  computed:{
    bkColor(){
      if (this.preColor[this.color]){
        return this.preColor[this.color];
      }else{
        return  this.preColor['gray'];
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
button {
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
  height: 50px;
  width: 120px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
}

button:hover {
  box-shadow: none;
  transition: all 100ms;
}

</style>