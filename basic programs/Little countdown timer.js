var count =15;
function timer(){
    if(count==0){
        console.log("Time's up!!");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}
var id = setInterval(timer,100);
