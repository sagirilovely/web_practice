let express = require("express");
let router = express.Router();
function getLocation(IPadress) {
    return new Promise((resolve,reject)=>{
        let baseURL=`https://qqlykm.cn/api/free/ip/get?`;
        let searchStr=new URLSearchParams({
            key: "zOyNSLMTQdgeacbl7ARSwWuUaF",
			ip:IPadress,
        }).toString()
        baseURL=baseURL+searchStr;
        fetch(baseURL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{return res.json()})
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
router.get('/',(req,res,next)=>{
    let IPadress=req.ip;
    let finalIP=IPadress.split(':')
    finalIP=finalIP[finalIP.length-1]
    console.log('客户端ip地址为 ：'+finalIP);
    getLocation(finalIP)
    .then((data)=>{
        console.log('!---------------------------!');
        console.log(`!!!有人想拿${finalIP}的地理位置!!!`);
        console.log(`!!!拿到的数据是:`);
        console.log(data);
        console.log('!---------------------------!');
        let location=data.data.location;
        let finalLocation=''
        for(let l of location){
            if(l===' '){
                break;
            }else{
                finalLocation+=l;
            }
        }
        res.send(JSON.stringify(finalLocation));
    })
    .catch((err)=>{
        res.send(false);
        console.log(err);
    })
})

module.exports = router;