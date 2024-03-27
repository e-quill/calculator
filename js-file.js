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
      displayValue =  divide(firstNumber,secondNumber)
      break;
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
  firstNumber = parseInt(displayValue)
  displayValue = "";
}

function resetValues(){
 firstNumber = null;
 secondNumber = null;
 currentOperator = null;
 displayValue = "";
 operatorCount = null;
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
      if (operatorCount > 0) {
        secondNumber = parseInt(displayValue)
        operate(firstNumber,secondNumber,currentOperator)
        updateDisplay()
      } 
      currentOperator = opr.target.innerText;
      firstValue()
      operatorCount++
    })
  })

  clear.addEventListener("click", () => {
    clearDisplay()
    resetValues()
  })

  equals.addEventListener("click", () => {
    secondNumber = parseInt(displayValue)
    operate(firstNumber,secondNumber,currentOperator)
    updateDisplay()
    resetValues()
  })
}

let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let displayValue = "";
let operatorCount = 0;

main()
