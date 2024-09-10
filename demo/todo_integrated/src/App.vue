<template>
 <div class="app">
   <HomePage v-show="$route.path==='/'"></HomePage>
   <router-view></router-view>
 </div>
</template>
<script>
import HomePage from "@/components/HomePage.vue";
import Menu from "@/pages/Menu.vue";
export  default {
  name:"App",
  components:{
    HomePage,Menu
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
.app{
  height: 100%;
}
</style>