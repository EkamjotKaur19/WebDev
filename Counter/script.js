const inc = document.getElementById('Increase');
const zero = document.getElementById('Zero');
const dec = document.getElementById('Decrease');

const counter=document.getElementsByTagName('p')[0];
var number = 0;

function changeColor(number){
    var color="";
    if(number<0){
        color="red";
    }
    else if(number>0){
        color="green";
    }
    else{
        color="black";
    }
    return color;
}

inc.addEventListener("click",function(){
    number++;
    counter.innerHTML=number;
    counter.style.color=changeColor(number);
});

dec.addEventListener("click",function(){
    number--;
    counter.innerHTML=number;
    counter.style.color=changeColor(number);
});

zero.addEventListener("click",function(){
    number=0;
    counter.innerHTML=number;
    counter.style.color=changeColor(number);
});