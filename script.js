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

const digitBtns = document.querySelectorAll('[data-type="digit"]');
const operatorBtns = document.querySelectorAll('[data-type="operator"]');
const dotBtn = document.getElementById('dot');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const output = document.getElementById('output');

function updateNumber(digit) {
  let number = getCurrentNumber();
  number = number === '0' ? digit : (number || '') + digit;

  if (number.length > 10) {
    return;
  }

  if (operator) {
    number2 = number;
  } else {
    number1 = number;
  }
}

function display(value) {
  output.innerText = value || getCurrentNumber();
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

function handleDot() {
  const currentNumber = getCurrentNumber().toString();
  if (currentNumber.includes('.') || currentNumber.length > 10) {
    return;
  }
  if (operator) {
    number2 += '.';
  } else {
    number1 += '.';
  }
  display();
}

function handleEqual() {
  number1 = Number(number1);
  number2 = Number(number2);
  const result = operate(number1, number2, operator);
  if (!result) {
    return;
  }
  clear();
  number1 = result;
  display();
}

function handleClear() {
  clear();
  display('0');
}

digitBtns.forEach((elem) => elem.addEventListener('click', handleDigit));
operatorBtns.forEach((elem) => elem.addEventListener('click', handleOperator));
dotBtn.addEventListener('click', handleDot);
equalBtn.addEventListener('click', handleEqual);
clearBtn.addEventListener('click', handleClear);

display('0')