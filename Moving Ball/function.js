let ball = document.getElementById('circle');
let move=10;
window.addEventListener('load',()=>{
ball.style.position='absolute';
ball.style.left =0;
ball.style.top =0;
});
window.addEventListener('keyup',(event)=>{
    var left=parseInt(ball.style.left);
    var top = parseInt(ball.style.top);
     if(event.key==='ArrowLeft')
    {        
        if(left >0)
        ball.style.left = left -move +'px';   
        
    }
    else if(event.key==='ArrowRight'){
        ball.style.left =left  +move +'px';   
    }
    else if(event.key==='ArrowUp'){
        if(top >0)
        ball.style.top = top -move +'px';   
    }
    else if(event.key==='ArrowDown'){
        ball.style.top = top +move +'px';   
    }
});