let box=document.getElementsByClassName("box");
let content=document.getElementsByClassName("content")[0];
let changeButton=document.getElementsByClassName("change")[0];
let setBoxPosition=function (){
    for(let b of box){
        let top=Number(b.offsetTop);
        let left=Number(b.offsetLeft);
        b.style.backgroundPositionX=Number(b.style.backgroundPositionX)-left+'px';
        b.style.backgroundPositionY=Number(b.style.backgroundPositionY)-top+'px';
    }
}
setBoxPosition();
changeButton.addEventListener('click',(event)=>{
    content.classList.toggle('contentChange');
    for(let b of box){
        b.classList.toggle('boxChange');
    }
    event.target.classList.toggle("changeChange");
    setTimeout(()=>{
        event.target.classList.toggle("changeChange");
    },300)
})