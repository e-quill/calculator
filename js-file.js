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
 displayValue =  add(firstNumber,secondNumber)
}

function updateDisplay(){
  const display = document.querySelector(".display")
  display.innerText = `${displayValue}`;
}

function clearDisplay(){
  displayValue = ""
  updateDisplay()
}

function firstValue() {
  firstNumber = parseInt(displayValue)
  displayValue = "";
}

function resetValues(){
 firstNumber = null;
 secondNumber = null;
 currentOperator = null;
 displayValue = "";
}

function main(){
  const numbers = document.querySelectorAll(".number")
  const operators = document.querySelectorAll(".operator")
  const clear = document.querySelector(".clear")
  const equals = document.querySelector(".equals")

  numbers.forEach(number => {
    number.addEventListener("click", () => {
      displayValue += number.innerText;
      updateDisplay()
    })
  })

  operators.forEach(operator => {
    operator.addEventListener("click", (opr) => {
      currentOperator = opr.target.innerText;
      firstValue()
    })
  })

  clear.addEventListener("click", () => {
    clearDisplay()
  })

  equals.addEventListener("click", () => {
    secondNumber = parseInt(displayValue)
    operate(firstNumber,secondNumber,"+")
    updateDisplay()
    resetValues()
  })
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = "";

main()
