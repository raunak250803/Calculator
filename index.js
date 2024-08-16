const one = document.querySelector(".bt1");
const two = document.querySelector(".bt2");
const three = document.querySelector(".bt3");
const four = document.querySelector(".bt4");
const five = document.querySelector(".bt5");
const six = document.querySelector(".bt6");
const seven = document.querySelector(".bt7");
const eight = document.querySelector(".bt8");
const nine = document.querySelector(".bt9");
const zero = document.querySelector(".bt0");
const dot = document.querySelector(".btDot");
const equal = document.querySelector(".btEqual");
const outputScreen = document.querySelector(".screen");
const btns = document.querySelectorAll(".btn");
const clearbtn = document.querySelector(".clear");


let plusCount = 0;
let subCount = 0;
let mulCount = 0;
let divCount = 0;
let dotCount = 0;

function init(){
    outputScreen.innerText = "";
    plusCount = 0;
    subCount = 0;
    mulCount = 0;
    divCount = 0;
    dotCount = 0;
}
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if(event.target.innerText === '+' && plusCount === 0){
            let val = btn.innerText;
            outputScreen.innerText = outputScreen.innerText + val;
            plusCount = plusCount + 1;
        }
        else if (event.target.innerText === '-' && subCount === 0){
            let val = btn.innerText;
            outputScreen.innerText = outputScreen.innerText + val;
            subCount = subCount + 1;
        }
        else if (event.target.innerText >='0' && event.target.innerText <='9'){
            let val = btn.innerText;
            outputScreen.innerText = outputScreen.innerText + val;
        }
        else if (event.target.innerText === 'x' && mulCount === 0){
            let val = '*';
            outputScreen.innerText = outputScreen.innerText + val;
            mulCount = mulCount + 1;
        }
        else if (event.target.innerText === '÷' && divCount === 0){
            let val = '/';
            outputScreen.innerText = outputScreen.innerText + val;
            divCount = divCount + 1;
        }
        else if (event.target.innerText === '.' && dotCount === 0){
            let val = event.target.innerText;
            outputScreen.innerText = outputScreen.innerText + val;
            dotCount = dotCount + 1;
        }
    })
})
function formatNumber(number) {
    if (Number.isInteger(number)) {
        outputScreen.innerText =  number;
    } else {
        outputScreen.innerText = parseFloat(number.toFixed(4));
    }
}
equal.addEventListener('click', ()=>{
    ans = eval(outputScreen.innerText);
    formatNumber(ans)
})
clearbtn.addEventListener('click', () => {
    init();
})

