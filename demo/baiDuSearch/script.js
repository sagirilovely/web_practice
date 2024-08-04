let date;
function getDate(res){
    date=res;
}
function getRes(search){//输入关键词,返回热搜对象
    let bodyNode=document.getElementsByTagName('body');
    let scriptNode=document.createElement('script');
    scriptNode.setAttribute('src',`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=60236&wd=${search}&req=2&bs=%E7%99%BE%E5%BA%A6&csor=2&pwd=%E7%99%BE%E5%BA%A6&sugmode=2&hot_launch=0&cb=getDate&_=1721052034323`);
    bodyNode[0].appendChild(scriptNode);
    scriptNode.onload=function (){
        scriptNode.remove();
    }
    return date;
}
function render(inputValue,renderNode){
    let keyList=getRes(inputValue).g
    if (inputValue.length===0){
        renderNode.innerHTML=``;
    }
    renderNode.innerHTML=``;
    for(let keyword of keyList){
        renderNode.innerHTML=renderNode.innerHTML+`<li>${keyword['q']}</li>`
    }
}
let searchInputNode=document.getElementById('searchInput');
let keyWordsListNode=document.querySelector('.bottom>ul')

searchInputNode.addEventListener('input',(event)=>{
    let func=(function (){
        let timer;//不需要定义在全局变量中,防止污染
        return function (){
            clearTimeout(timer);
            timer= setTimeout(()=>{
                render(event.target.value,keyWordsListNode);
            },500);
        }
    })();
    func();
})



