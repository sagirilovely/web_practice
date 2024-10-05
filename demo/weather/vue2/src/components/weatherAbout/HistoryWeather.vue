<template>
    <div class="history-weather">
        <ul>
            <li v-for="(value,index) in forecast_list" :key="value.date">
                <!-- 显示周几 -->
                <span v-if="((new Date()).getDay() === (new Date(value. date)).getDay())
                &&index<2">
                    今天
                </span>
                <span v-else-if="((new Date()).getDay()-1 === (new Date(value. date)).getDay())
                &&index<2">
                    昨天
                </span>
                <span v-else >
                    {{ value. date | getWeekDay}}
                </span>
                
                <!-- 显示天气 -->
                <span>{{ value.weather }}</span>
                <!-- 显示最高温度和最低温度 -->
                 <span>{{ value. high_temperature }} 
                    {{ value. low_temperature }} </span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    name:'HistoryWeather',
    data(){
        return{

        }
    },
    computed:{
        //目前天气信息
        ...mapState(['weatherMsg']),
        //历史天气列表
        forecast_list(){
            return this.weatherMsg.forecast_list;
        },
    },
    filters:{
        getWeekDay(year_month_day){
            let day=(new Date(year_month_day)).getDay();
            let weekDays=['周日','周一','周二','周三','周四','周五','周六'];
            return weekDays[day];
        }
    }
}
</script>

<style scoped>
.history-weather{
    width: 100%;
    display: flex;
}
ul{
    width: 100%;
    display: flex;
    flex-direction: column;
}
li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70rem;
}
li>span{
    border: 1rem solid #ccc;
}
</style>