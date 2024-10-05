let express=require('express');
let router=express.Router();
function getData() {
    let baseURL='https://qqlykm.cn/api/history/get?';
    let queryStr=new URLSearchParams({
        key:'zOyNSLMTQdgeacbl7ARSwWuUaF'
    })
    baseURL=baseURL+queryStr
    return new Promise((resolve,reject)=>{
        fetch(baseURL,{
            methods:'GET'
        })
        .then(res=>res.json())
        .then((res)=>{
            resolve(res);
        })
        .catch((err)=>{
            reject(err)
        })  
    })
}
router.get('/',(req,res)=>{
    getData()
    .then((data)=>{
        console.log('!---------------------------!');
        console.log(`!!!有人想拿历史上的今天!!!`);
        console.log(`!!!拿到的数据是:`);
        console.log(data);
        console.log('!---------------------------!');
        res.send(JSON.stringify(data))
    })
    .catch((err)=>{
        res.send(false);
        console.log(err);
    })
})

module.exports=router;