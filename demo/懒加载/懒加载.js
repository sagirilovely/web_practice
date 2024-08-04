let contentArr=['111','222','333','444','555','666','777','888'];

let content=document.getElementById('content');
let ul=document.createElement('ul');
content.appendChild(ul);
function addListInUl(Arr){
    for(let c of Arr){
        let list=document.createElement('li');
        list.innerHTML=`${c}`;
        ul.appendChild(list);
    }
}

addListInUl(contentArr);


document.onscroll=(event)=>{
    let contentHeight=content.offsetHeight;
    let listLastScroll=parseInt(String(document.documentElement.scrollTop));
    let documentHeight=document.documentElement.clientHeight;
    if ((contentHeight-documentHeight)<=listLastScroll+2){
        console.log(contentHeight-documentHeight,listLastScroll+2);
        setTimeout(()=>{addListInUl(contentArr)},1000);
    }
}