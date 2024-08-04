//大水杯结点
let superCupNode=document.getElementsByClassName('superCup')[0];
//小水杯结点列表
let pettyCupsNodes=document.getElementsByClassName('pettyCup');
//包裹小水杯们的那个ul的结点
let pettyCupUlNode=document.querySelectorAll('.pettyCups>ul')[0];
let topBlankNode=document.getElementsByClassName('topBlank')[0];
let bottomWaterNode=document.getElementsByClassName('bottomWater')[0];
//传入百分比，修改大水杯的颜色比例和字
function changeSuperCup(proportionNum){
    proportionNum=String(proportionNum);
    //修改比例
    bottomWaterNode.style.flexBasis=proportionNum+'%';
    topBlankNode.style.height='0';
    topBlankNode.innerText=String(100-parseInt(proportionNum))+'%';
    bottomWaterNode.innerText=proportionNum+'%';
}
//传入百分比，修改小水杯状态
function changePettyCups(proportionNum){
    for(let i=0;i<pettyCupsNodes.length;i++){
        if(Number(pettyCupsNodes[i].getAttribute('data-waterProportion'))<=Number(proportionNum)){
            pettyCupsNodes[i].style.backgroundColor='rgb(106, 179, 248)';
            pettyCupsNodes[i].style.color='white';
        }else{
            pettyCupsNodes[i].style.backgroundColor='white';
            pettyCupsNodes[i].style.color='rgb(20, 79, 198)';
        }
    }
}
pettyCupUlNode.addEventListener('click',(event)=>{
    let RealProportionNum=event.target.getAttribute('data-waterProportion');
   RealProportionNum=parseInt(RealProportionNum);
   changeSuperCup(RealProportionNum);
   changePettyCups(RealProportionNum);
})


