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
      break;
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

const digits = document.querySelectorAll('[data-type="digit"]');
const operators = document.querySelectorAll('[data-type="operator"]');
const equal = document.getElementById('equal');
const output = document.getElementById('output');

function updateNumber(digit) {
  let number = getCurrentNumber();
  number = Number((number || 0) + digit);
  if (operator) {
    number2 = number;
  } else {
    number1 = number;
  }
}

function display() {
  output.innerText = getCurrentNumber();
}

function handleDigit(event) {
  const digit = event.target.innerText;
  updateNumber(digit);
  display();
}

function handleOperator(event) {
  if (operator) {
    handleEqual();
  }
  operator = event.target.innerText;
}

function handleEqual() {
  const result = operate(number1, number2, operator);
  if (!result) {
    return;
  }
  clear();
  number1 = result;
  display();
}

digits.forEach((elem) => elem.addEventListener('click', handleDigit));
operators.forEach((elem) => elem.addEventListener('click', handleOperator));
equal.addEventListener('click', handleEqual);