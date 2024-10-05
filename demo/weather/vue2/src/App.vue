<template>
  <div id="app" :class="backGroundColor">
    <NowLocation id="NowLocation"></NowLocation>
    <TodayWeatherGeneral id="TodayWeatherGeneral"></TodayWeatherGeneral>
    <TodayWeatherDetail id="TodayWeatherDetail"></TodayWeatherDetail>
    <HistoryWeather id="HistoryWeather"></HistoryWeather>
  </div>
</template>

<script>
import NowLocation from './components/weatherAbout/NowLocation.vue'
import TodayWeatherGeneral from './components/weatherAbout/TodayWeatherGeneral.vue'
import TodayWeatherDetail from './components/weatherAbout/TodayWeatherDetail.vue'
import HistoryWeather from './components/weatherAbout/HistoryWeather.vue';
export default {
  name: 'App',
  components: {
    NowLocation,
    TodayWeatherGeneral,
    TodayWeatherDetail,
    HistoryWeather
  },
  data(){
    return{
      backGroundColor:'nightColor'
    }
  },
  mounted(){
    (()=>{
      //晚上和白天切换背景色
    let hour = new Date().getHours();
    if(hour>=6&&hour<18){
      this.backGroundColor = 'dayTimeColor';
    }else{
      this.backGroundColor = 'nightColor';
    }
    })();
    (()=>{
      //开屏调用store中的函数更新地址
      this.$store.dispatch('updateLocation')
    })()
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
html{
  font-size: 0.13333vw;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
li,ul{
  list-style: none;
}
body{
  font-size: 40rem;
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: 'Misans','Microsoft YaHei', sans-serif;
  color: white;
}

.nightColor{
  background-color: rgba(55, 64, 111, 0.8);
}
.dayTimeColor{
  background-color: rgba(3, 164, 242,0.8);
}
#app,#NowLocation,#TodayWeatherGeneral,#TodayWeatherDetail,#HistoryWeather{
  border: 1rem solid red;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
}
#app{
  flex-direction: column;
}

</style>
