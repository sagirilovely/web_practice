let express=require('express');
let router=express.Router();
function getData(date) {
    let baseURL='https://qqlykm.cn/api/laohuangli2/get?'
    let queryStr=new URLSearchParams({
        key:'zOyNSLMTQdgeacbl7ARSwWuUaF',
        date
    })
    baseURL=baseURL+queryStr;
    return new Promise ((resolve,reject)=>{
        fetch(baseURL,{
            method:'GET',
            header:'Content-Type:application/x-www-form-urlencoded;charset:utf-8;'
        }).then(res=>res.json())
        .then((res)=>{
            resolve(res.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
router.get('/',(req,res)=>{
    let date=new Date();
    let year=date.getFullYear()
    let month=String(date.getMonth()+1);
    if(month.length<=1){
        month='0'+month
    }
    let day=date.getDate();
    date=year+'-'+month+'-'+day;
    console.log('拿'+date+'的数据');
    getData(date)
    .then((data)=>{
        console.log('!---------------------------!');
        console.log(`!!!有人想拿今日黄历!!!`);
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
