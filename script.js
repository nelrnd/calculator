// Logic

let number1;
let number2;
let operator;

function add(number1, number2) {
  return number1 + number2
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2
}

function operate(number1, number2, operator) {
  switch (operator) {
    case '+':
      return add(number1, number2);
    case '-':
      return substract(number1, number2);
    case '×':
      return multiply(number1, number2);
    case '÷':
      return divide(number1, number2);
    default:
      return 'incorrect operator';
  }
}

function clear() {
  number1 = null;
  number2 = null;
  operator = null;
}

function getCurrentNumber() {
  return operator ? number2 : number1;
}

// DOM

const output = document.getElementById('output');
const numberButtons = document.querySelectorAll('button.digit');
const operatorsButtons = document.querySelectorAll('button.operator');
const operateButton = document.querySelector('button.operate');

function updateNumber(digit) {
  if (operator) {
    if (number2) {
      number2 = Number(number2 + digit);
    } else {
      number2 = Number(digit);
    }
  } else {
    if (number1) {
      number1 = Number(number1 + digit);
    } else {
      number1 = Number(digit);
    }
  }
}

function displayCurrentNumber() {
  const number = getCurrentNumber();
  output.innerText = number;
}

function handleNumberInput(event) {
  const digit = event.target.innerText;
  updateNumber(digit);
  displayCurrentNumber();
}

function handleOperatorInput(event) {
  operator = event.target.innerText;
}

function handleOperate() {
  if (!number2) {
    return;
  }
  const result = operate(number1, number2, operator);
  console.log(number1, ' ', number2)
  console.log(typeof result)
  clear();
  number1 = result;
  displayCurrentNumber();
}

numberButtons.forEach((btn) => btn.addEventListener('click', handleNumberInput));
operatorsButtons.forEach((btn) => btn.addEventListener('click', handleOperatorInput));
operateButton.addEventListener('click', handleOperate);