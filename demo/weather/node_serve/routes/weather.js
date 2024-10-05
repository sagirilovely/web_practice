let express = require("express");
let router = express.Router();

function getWeather(city) {
	return new Promise((resolve, reject) => {
		let baseURL = `https://qqlykm.cn/api/weather/get?`;
		let searchStr = new URLSearchParams({
			key: "zOyNSLMTQdgeacbl7ARSwWuUaF",
			city,
		}).toString();
		let searchURL = baseURL + searchStr;
		fetch(searchURL, {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => {
                resolve(res.json())
			})
			.catch((err) => {
				reject(err);
			});
	});
}

router.get("/", (req, res, next) => {
	getWeather(req.query.city)
    .then((data)=>{
        console.log('!---------------------------!');
        console.log(`!!!有人想拿${req.query.city}的天气!!!`);
        console.log(`!!!拿到的数据是:`);
        console.log(data);
        console.log('!---------------------------!');
        res.send(JSON.stringify(data));
    })
    .catch((err)=>{
        res.send(false);
        console.log(err);
    })
});

module.exports = router;
