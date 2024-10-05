let express = require("express");
let router = express.Router();
function getData(dream) {
    let baseURL = "https://qqlykm.cn/api/zgjm/get?";
    let queryStr = new URLSearchParams({
        key: "zOyNSLMTQdgeacbl7ARSwWuUaF",
        keywords:dream,
    });
    baseURL = baseURL + queryStr;
    return new Promise((resolve,reject)=>{
        fetch(baseURL,{
            method:"GET",
            header:'application/json'
        }).then(res=>res.json())
        .then((res)=>{
            resolve(res.data);
        })
        .catch((err)=>{
            reject(err);
        })
    })
}
router.get("/", (req, res) => {
    let dream=req.query.dream;
    getData(dream)
    .then((data)=>{
        console.log('!---------------------------!');
        console.log(`!!!有人想拿梦的解析!!!`);
        console.log(`!!!拿到的数据是:`);
        console.log(data);
        console.log('!---------------------------!');
        res.send(JSON.stringify(data))
    })

});

module.exports = router;
