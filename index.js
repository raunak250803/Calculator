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

function init(){
    outputScreen.innerText = "";
}
init();

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let val = btn.innerText;
        if (val === 'x') {
            val = '*';
        } else if (val === '÷') {
            val = '/';
        }
        outputScreen.innerText = outputScreen.innerText + val;
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

