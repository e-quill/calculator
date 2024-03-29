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
  return (a / b).toFixed(2);
}

function operate(firstNumber,secondNumber,currentOperator){
 
  switch (currentOperator){
    case "+":
      displayValue =  add(firstNumber,secondNumber)
      break;
    case "-":
      displayValue =  subtract(firstNumber,secondNumber)
      break;
    case "×":
      displayValue =  multiply(firstNumber,secondNumber)
      break;
    case "÷":
      if (secondNumber == 0){
        displayValue = "Error"
      } else {
        displayValue =  divide(firstNumber,secondNumber)
      break;
      }
  }
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
  if (displayValue.includes(".")) {
    firstNumber = parseFloat(displayValue)
  } else {
    firstNumber = parseInt(displayValue)
  }
  displayValue = "";
}

function resetValues(){
 firstNumber = null;
 secondNumber = null;
 currentOperator = null;
//  displayValue = "";
 operatorCount = null;
 decimalCount = 0;
}

function main(){
  const numbers = document.querySelectorAll(".number")
  const operators = document.querySelectorAll(".operator")
  const clear = document.querySelector(".clear")
  const equals = document.querySelector(".equals")
  const decimal = document.querySelector(".decimal")

  numbers.forEach(number => {
    number.addEventListener("click", () => {
      displayValue += number.innerText;
      updateDisplay()
    })
  })

  operators.forEach(operator => {
    operator.addEventListener("click", (opr) => {
      if (operatorCount > 0) {
        if (displayValue.includes(".")){
          secondNumber = parseFloat(displayValue)
          operate(firstNumber,secondNumber,currentOperator)
          updateDisplay()
        } else {
          secondNumber = parseInt(displayValue)
          operate(firstNumber,secondNumber,currentOperator)
          updateDisplay()
        }
      } 
      decimal.disabled = false;
      currentOperator = opr.target.innerText;
      firstValue()
      operatorCount++
    })
  })

  clear.addEventListener("click", () => {
    clearDisplay()
    resetValues()
    decimal.disabled = false
  })

  equals.addEventListener("click", () => {
    if (displayValue.includes(".")) {
      secondNumber = parseFloat(displayValue)
    } else {
      secondNumber = parseInt(displayValue)
    }
    operate(firstNumber,secondNumber,currentOperator)
    updateDisplay()
    resetValues()
  })

  decimal.addEventListener("click", () => {

    decimalCount++

    if (decimalCount > 0){
      decimal.disabled = true;
    } 

    displayValue += decimal.innerText;
    updateDisplay()
  })
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = "";
let operatorCount = 0;
let decimalCount = 0;

main()
