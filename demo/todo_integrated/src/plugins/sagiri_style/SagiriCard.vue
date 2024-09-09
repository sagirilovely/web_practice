<template>
    <div :style="'width:'+width +';height:'+height +';font-size:'+fontSize">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'SagiriCard',
  //需要传入的参数
  props:{
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
  computed:{

  },
  methods:{},
}
</script>
<style scoped>
div{
  box-shadow:
      0.5px 0.5px 12px -5px rgba(0, 0, 0, 0.234),
      1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.303),
      7px 7px 19px -5px rgba(0, 0, 0, 0.46);
  background-color: rgb(197, 187, 163);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
}
div:hover{
  box-shadow:none;
  transition: all 50ms linear;
  cursor: default;
}
</style>