<template>
    <div class="NowLocation">
        <div>{{location}}</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default{
    name:'NowLocation',
    data(){
        return{

        }
    },
    computed:{
        //从store中拿到目前地址
        ...mapState(['location'])
    }
}
</script>

<style scoped>
.NowLocation{
    height: 80rem;
    width: 100%;
    display: flex;
    justify-content: left;
}
.NowLocation :nth-child(1){
    padding-left: 20rem;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: default;
}
</style>