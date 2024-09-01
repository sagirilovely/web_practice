<template>
  <div>
      <h1>GitHub用户搜索</h1>
      <div class="container">
          <input type="text" v-model:value="keyWord" @keydown.enter="searchUsers">
          <button @click="searchUsers">搜索</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Search",
    data(){
        return{
            keyWord:'',
            baseUrl:'http://localhost:8080/search/users?q=',
            info:{
                usersList:[],
                errStatus:''
            }
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('changeLoading');
            fetch(this.baseUrl+this.keyWord)
                .then(res=>{
                    if(res.ok){return res.json()}
                    else {
                        return Promise.reject({
                            'status':res.status,
                            'statusText':res.statusText
                        })
                    }
                })
                .then(res=>{
                    this.info.usersList=res.items
                })
                .catch(err=>{
                   this.errStatus=err.status
            })
        }

    },
    watch:{
        info:{
            deep:true,
            handler(newValue,oldValue){
                this.$bus.$emit('getInfo',newValue)
            }
        }
    }
}
</script>

<style scoped>
h1{
    color: gray;
}
.container{
    display: flex;
    align-items: center;
}
input{
    width: 500px;
    height: 30px;
}
button{
    background-color: cornflowerblue;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: #f9e8de;
    font-size: 30px;
}
</style>