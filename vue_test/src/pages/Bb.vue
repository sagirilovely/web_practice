<template>
<div>
    <div class="left">
        <router-link to="/Bb/BbCc">切换到BbCc组件</router-link>
        <router-link to="/Bb/BbDd">切换到BbDd组件</router-link>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import BbCc from "./BbCc.vue"
import BbDd from "./BbDd.vue"
export default {
    name: "Bb",
    components:{
        BbCc,BbDd
    }
}
</script>

<style scoped>
.left ,.right{
    position: relative;
    float: left;
    width: 100px;
    height: 500px;
    background-color:rosybrown;
    color: wheat;
}
.right{
    background-color: darkgreen;
}
.left *{
    display: block;
    width: 100%;
    height: 200px;
}
</style>