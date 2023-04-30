let display = document.querySelector('.display');
let clearButton = document.querySelector('.clear');

function addValue(value){
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}
