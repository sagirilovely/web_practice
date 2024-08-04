//createNodeDrag(draggedNode):传入的元素成为一个可以鼠标按住拖拽的元素
function createNodeDrag(draggedNode){
    function draggedFlowMouse(){
        document.onmousemove=(event)=>{
            let mouseX=event.clientX;
            let mouseY=event.clientY;
            let draggedWidth =window.getComputedStyle(draggedNode).width;
            let  draggedHeight=window.getComputedStyle(draggedNode).height;
            let leftNum=mouseX-parseInt(draggedWidth)/2;
            let topNum=mouseY-parseInt(draggedHeight)/2;
            if(leftNum<0){
                leftNum=0;
            }
            if (topNum<0){
                topNum=0;
            }
            if((window.innerWidth-mouseX)<=(parseInt(draggedWidth)/2)){
                leftNum=window.innerWidth-parseInt(draggedWidth)-1;
            }
            if((window.innerHeight-mouseY)<=(parseInt(draggedHeight)/2)){
                topNum=window.innerHeight-parseInt(draggedHeight)-1;
            }
            draggedNode.style.left=leftNum+'px';
            draggedNode.style.top=topNum+'px';

        }
    }
//当在方块内按下鼠标时,调用draggedFlowMouse,使document绑定了mousemove监听事件
    draggedNode.addEventListener('mousedown',draggedFlowMouse);
//当松开鼠标时,应该给document解绑.而不是给方块解绑
//因为给方块解绑,只是解除了draggedNode与draggedFlowMouse的绑定
//而在按下时,调用调用draggedFlowMouse时使document绑定的mousemove监听事件却没有解绑
    draggedNode.addEventListener('mouseup',()=>{
        document.onmousemove=null;
    });
}