const btns = document.querySelectorAll(".btn");
const outputScreen = document.querySelector(".screen");
const clearbtn = document.querySelector(".clear");
const equal = document.querySelector(".btEqual");

function init() {
    outputScreen.innerText = "";
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let val = btn.innerText;

        if (val === 'x') {
            val = '*';
        } else if (val === '÷') {
            val = '/';
        }

        let currentText = outputScreen.innerText;

        if (['+', '-', '*', '/'].includes(val) && ['+', '-', '*', '/'].includes(currentText.slice(-1))) {
            return; 
        }

        if (currentText === '' && ['+', '-', '*', '/'].includes(val)) {
            return; 
        }

        outputScreen.innerText += val;
    });
});

function formatNumber(number) {
    if (Number.isInteger(number)) {
        outputScreen.innerText = number;
    } else {
        outputScreen.innerText = parseFloat(number.toFixed(4));
    }
}

equal.addEventListener('click', () => {
    try {
        
        let result = eval(outputScreen.innerText);

        
        formatNumber(result);
    } catch (error) {
        
        outputScreen.innerText = "Error";
    }
});

clearbtn.addEventListener('click', () => {
    init();
});
