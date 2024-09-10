<template>
<div class="container">
  <div class="inputDiv" @mouseenter="changeidWidth" @mouseleave="changeidWidth">账号:<SagiriInput
                         dispatch-action="setuserId"
                         state-key="user.id"
                         :width="idWidth"
                          height="30px"
  ></SagiriInput></div>
  <div class="inputDiv" @mouseenter="changepwWidth" @mouseleave="changepwWidth">密码:<SagiriInput
                          dispatch-action="setuserPW"
                         state-key="user.password"
                         :width="pwWidth"
                         height="30px"
  ></SagiriInput></div>
  <div class="buttonDiv"><SagiriButton :color="buttonColor" :click="login">{{buttonText}}</SagiriButton></div>
</div>
</template>

<script>
export default {
  name:'HomePage',
  data(){
    return{
      idWidth:'70%',
      pwWidth:'70%',
      buttonColor:'blue',
      buttonText:'登录'
    }
  },
  methods:{
    changeidWidth(){
      if(this.idWidth==='80%'){
        this.idWidth='70%';
      }else{
        this.idWidth='80%';
      }
    },
    changepwWidth(){
      if(this.pwWidth==='80%'){
        this.pwWidth='70%';
      }else{
        this.pwWidth='80%';
      }
    },
    login(){
      //通过store中的user拿到storage中存储的数据
       let nowUserId=this.$store.state.user.id;
       let nowUserPW=this.$store.state.user.password;
       let localStorageId=nowUserId
       let localStoragePW=localStorage.getItem(nowUserId);
      //若拿到的是空值,说明是新用户,则新增一项用户,并跳转第二页
      if(!localStoragePW  && !(nowUserId.trim()==='')){
        localStorage.setItem(nowUserId,nowUserPW);
      }else if(nowUserId.trim()===''){
        this.buttonColor='red';this.buttonText='账号为空';
        setTimeout(()=>{
          this.buttonColor='blue';this.buttonText='登录';
        },800)
      }else if(localStoragePW!==nowUserPW){
        //对比store中的用户名和密码,若不一致就改变按钮颜色
        this.buttonColor='red';this.buttonText='密码错误';
        setTimeout(()=>{
          this.buttonColor='blue';this.buttonText='登录';
        },800)
      }else if(nowUserId===localStorageId && nowUserPW===localStoragePW){
        //若一致,则跳到第二页
        this.$router.replace({
          name:'Menu'
        })
      }



    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.inputDiv{
  display: flex;
  width: 16%;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
}
.buttonDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>