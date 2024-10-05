<template>
    <div class="todayWeatherGeneral">
        <div class="left">
            <div>{{ current_temperature }}</div>
            <div>{{ current_weather }}</div>
        </div>
        <div class="right">图片</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default{
    name:'TodayWeatherGeneral',
    data(){
        return{

        }
    },
    computed:{
            //目前天气信息
            ...mapState(['weatherMsg']),
            //目前温度
            current_temperature(){
                return this.weatherMsg.current_temperature;
            },
            //目前天气
            current_weather(){
                return this.weatherMsg.current_weather;
            }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.todayWeatherGeneral{
    width: 100%;
    height: 300rem;
    display: flex;
}
.left{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.left :nth-child(1){
    display: flex;
    height: 70%;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.left :nth-child(2){
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.right{
   
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>