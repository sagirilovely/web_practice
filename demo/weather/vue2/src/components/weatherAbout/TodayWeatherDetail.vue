<template>
    <div class="todayWeatherDetail">
        <div><span>空气</span><span>{{ quality_level }}</span></div>
        <div><span>风向</span><span>{{ wind_direction }}</span></div>
        <div><span>风速</span><span>{{ wind_level }}</span></div>
        <div><span>最高温度</span><span>{{ today_high_temperature }}</span></div>
        <div><span>最低温度</span><span>{{ today_low_temperature }}</span></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'TodayWeatherDetail',
    data() {
        return {

        }
    },
    computed: {
        //目前天气信息
        ...mapState(['weatherMsg']),
        //空气质量
        quality_level() {
            return this.weatherMsg.quality_level;
        },
        //风向
        wind_direction() {
            return this.weatherMsg.wind_direction;
        },
        //风速
        wind_level() {
            return this.weatherMsg.wind_level;
        },
        //最高气温
        today_high_temperature() {
            return this.weatherMsg.today_high_temperature;
        },
        //最低气温
        today_low_temperature() {
            return this.weatherMsg.today_low_temperature;
        }
    }
}
</script>

<style scoped>
.todayWeatherDetail{
    width: 100%;
    height: 300rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.todayWeatherDetail>div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48%;
    width: 30%;
    flex-direction: column;
}
</style>