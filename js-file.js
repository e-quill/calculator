function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function operate(firstNumber,secondNumber,operator){
 return add(firstNumber,secondNumber)
}

function updateDisplay(){
  const display = document.querySelector(".display")
  display.innerText = `${displayValue}`;
}

function main(){
  const buttons = document.querySelectorAll(".button")
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      displayValue += button.innerText
      updateDisplay()
    })
  })
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "";

main()
