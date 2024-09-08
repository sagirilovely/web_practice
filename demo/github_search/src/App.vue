<template>
  <div class="app">
      <Search class="search"></Search>
      <Show class="show"></Show>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Show from "@/components/Show.vue";
export default {
    name:'App',
    components:{
      Search, Show
    },
    data(){
        return{

        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.app{
    margin: 50px auto 0 auto;
    height: 100%;
    width: 1500px;
}
.search{
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.show{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>