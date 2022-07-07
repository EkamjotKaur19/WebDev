let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let value = " ";

function factorial(x){
    if(x==0){
        return 1;
    }
    return x*factorial(x-1);
}

for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'C'){
            value = "";
            screen.value = value;
        }

        else if(buttonText == 'sin'){
            let value2=screen.value*Math.PI/180;
            screen.value = Math.sin(value2);
        }

        else if(buttonText == 'cos'){

            let value2=screen.value*Math.PI/180;
            screen.value = Math.cos(value2);
        }

        else if(buttonText == 'tan'){
            let value2=screen.value*Math.PI/180;
            screen.value = Math.tan(value2);
        }

        else if(buttonText == 'asin'){
            const x = screen.value;
            screen.value = Math.asin(x);
        }

        else if(buttonText == 'acos'){
            const x = screen.value;
            screen.value = Math.acos(x);
        }

        else if(buttonText == 'atan'){
            const x = screen.value;
            screen.value = Math.atan(x);
        }

        else if(buttonText == '1/x'){
            const x = screen.value;
            screen.value = eval(1/x);
        }

        else if(buttonText == 'sqrt'){
            const x = screen.value;
            screen.value = Math.sqrt(x);
        }

        else if(buttonText == 'sq'){
            const x = screen.value
            screen.value = eval(x*x);
        }

        else if(buttonText == 'log'){
            const x = screen.value
            screen.value = Math.log(x);
        }

        else if(buttonText == '!'){
            const x = screen.value
            screen.value = factorial(x);
        }

        else if(buttonText == 'abs'){
            const x = screen.value
            screen.value = Math.abs(x);
        }

        else if(buttonText == 'LN10'){
            const x = screen.value
            screen.value = Math.LN10(x);
        }
        

        else {
            screen.value += buttonText;
        }

        
    })
}