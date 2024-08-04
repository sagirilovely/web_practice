ListArr=['JS','Python','C#','C++','Java'];
let contentElement=document.getElementById('content')
for(let n of ListArr){
    let newNode1=document.createElement('li');
    let newNode2=document.createElement('button');

    newNode1.innerHTML=`${n}`;
    newNode2.innerText="delete";
    function deleteSelfLiNode(){
        newNode1.parentNode.removeChild(newNode1);
    }
    newNode2.addEventListener('click',deleteSelfLiNode);
    contentElement.appendChild(newNode1);
    newNode1.appendChild(newNode2);
}