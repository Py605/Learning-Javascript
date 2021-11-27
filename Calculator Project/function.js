var buttons = document.getElementsByClassName("button");
var display = document.getElementById("current-display");
var prev_display = document.getElementById("previous-display");

//
var operand1 = 0;
var operand2 = null;
var operator = null;
var flag=true;
function isOperator(value){
    return value=='+' || value=='-' || value=='*' || value=='/';
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        var text = display.textContent.trim();
        if(flag===false){
            prev_display.textContent=text;
            flag=true;
        }       
        if(isOperator(value)){
            operator=value;
            operand1=parseFloat(text);
            display.textContent="";
            prev_display.textContent+=operator;
        }else if(value=='ac'){
            display.textContent="";
            prev_display.textContent="";
        }
        else if(value=="sign"){
            operand1=parseFloat(text);
            operand1=-1 * operand1;           
            display.textContent=operand1;
        }
        else if(value=='.'){
            if(text.length && !text.includes('.')){
                display.textContent=text+"."
                prev_display.textContent+=".";
            }
        }
        else if(value=='%'){
            operand1=parseFloat(text);
            operand1=operand1/100;
            display.textContent=operand1;
        }
        else if(value=='='){
            operand2= parseFloat(text);
            var result=eval(operand1+' '+operator+' '+operand2);
            if(result){
                display.textContent=result;
                operand1=result;
                operand2=null;
                operator=null; 
                flag=false;               
            }
        }
        else{
            display.textContent += value;
            prev_display.textContent+=value;
        }
    });
}
