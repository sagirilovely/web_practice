let {URL,URLSearchParams} =require('url')
let http=require('http')

let https=require('https')

http.createServer((request,response)=>{
    response.writeHead(200,{
        "Content-Type":"json/application;charset=utf-8",
        "access-control-allow-origin":"*"//表示可以接受任何页面的请求
    })//设置响应头
    getData((resData)=>{//执行getData函数并传入一个回调,回调的参数用于接受最终getData收集到的数据
        response.end(resData)//向客户端发送最终数据
    })

}).listen(2333,()=>{
    console.log('网址:http://localhost:2333/')
})

function getData(cb){//定义一个用于去其他服务器获取数据的函数,接受的形参是一个回调函数
    let resultData=''//用于存储数据
    https.get('https://qqlykm.cn/api/60s/index?key=zOyNSLMTQdgeacbl7ARSwWuUaF',(res)=>{
        res.on('data',(chunk)=>{//监听data类型的事件,将chunk流累加到resultData里
            resultData=resultData+chunk;
        });
        res.on('end',()=>{//监听end类型事件,一旦chunk流全部收集完毕,则调用此回调
            cb(resultData);//将最终收集的数据作为回调函数的参数,执行回调
        })
    })
}