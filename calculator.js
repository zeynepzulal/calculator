const display = document.getElementById("field");
const keys = document.querySelector("tumTuslar");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

uptadeDisplay();
function uptadeDisplay() {
    display.value = displayValue;
}

keys.addEventListener("click", function(e) {
    const element = e.target;
    const value = element.value;

    switch(value){
        case "+":
        case "-":
        case "/":
        case "*":
        case "=":
            handleOperator(value);
            break;
        case ".":
            inputDecimal();
        case "clear":
            clear();
            break;
        default:
            inputNumber(element.value);
    }
    uptadeDisplay();
});

function handleOperator(nextOperator);{
    const value = parseFloat(displayValue);

    if(firstValue === null){
    firstValue = value;
    }

    else if(operator){
        const result = calculate (firstValue , value , operator);

        displayValue = String(result);
        firstValue = result;
    }
    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}





function calculate(first,second,operator){
    if(operator === "+"){
        return first + second;
    }
    else if (operator === "-"){
        return first - second;
    }
    else if (operator === "*"){
        return first * second;
    }
    else if (operator === "/"){
        return first / second;
    }
    return second;
}

function inputNumber(num){
    if(waitingForSeconValue){
        displayValue = num;
        waitingForSecondValue = false;
    }
    else{
        displayValue = displayValue === "0" ? num: displayValue + num;
    }
    console.log(displayValue,firstValue,operator,waitingForSecondValue);
}



function inputDecimal(){
    if(!displayValue.includes(".")){
        displayValue += ".";
    }
}

function clear(){
    displayValue ="0";
}