let number1;
let number2;
let operator;

// Logic functions

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
      return 'incorrect operator'
  }
}