let containerNode=document.querySelector('.container');
function expandCard(cardNode){
    for(let node of containerNode.children){
        node.classList.remove("expanded");
    }

cardNode.classList.add("expanded");
}
containerNode.addEventListener('click',(event)=>{
    expandCard(event.target);
})