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
            prev_display.textContent += " "+ operator+" ";
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

var whichMode = true;
var modeButton = document.querySelector('button');
var h1tag = document.querySelector('h1');
var calculatorDiv = document.querySelector('main');

modeButton.addEventListener('click',function(){
    if(whichMode){
        modeButton.classList.remove('light');
        modeButton.classList.add('dark-button');
        h1tag.classList.add('dark-h1');
        calculatorDiv.classList.add('dark-bg');
        whichMode = !whichMode;
    }
    else{
        modeButton.classList.add('light');
        h1tag.classList.remove('dark-h1');
        calculatorDiv.classList.remove('dark-bg');
        modeButton.classList.remove('dark-button');
        whichMode = !whichMode;
    }
    
});