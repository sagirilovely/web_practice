import Vue from "vue";
//引入并安装vuex
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		//用于开屏时更新地理位置
		updateLocation(context) {
			//向后端发送请求,后端将返回地址
			function getLoacation() {
				return new Promise((resolve, reject) => {
					fetch("http://8.219.164.50:2233/api/location")
						.then((res) => res.json())
						.then((res) => {
							resolve(res);
						})
						.catch((err) => {
							reject(err);
						});
				});
			}
			getLoacation()
				.then((data) => {
					context.commit("UPDATELOCATION", data);
				})
				.catch((err) => {
					console.log(err);
					context.commit("UPDATELOCATION", "网络错误");
				});
		},
        //当用户自己选择一个地理位置后则调用此函数,修改地理位置,并触发天气查询
        changeLocation(context,city){
            context.commit("UPDATELOCATION", city);
        }
	},
	mutations: {
		//更新地理位置
		UPDATELOCATION(state, city) {
			state.location = city;
            //定义一个查询天气的函数,根据新的地理位置修改需要查询的天气
            function queryWeather(city) {
                fetch(`http://8.219.164.50:2233/api/weather?city=${city}`)
                .then(res=>res.json())
                .then((res)=>{
                    state.weatherMsg=res.data;
                })
                .catch((err)=>{
                    console.log(err);
                    state.weatherMsg='获取天气失败'
                })
            }
            queryWeather(city);
		},
	},
	state: {
		location: "正在获取地理位置...",
        weatherMsg:''
	},
});
