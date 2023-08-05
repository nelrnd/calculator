
/*
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

function handleDigit(digit) {
  updateNumber(digit);
  display();
}

function handleOperator(oprt) {
  if (operator) {
    handleEqual();
  }
  operator = oprt;
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

function animateClick(elem) {
  elem.classList.add('active');
  setTimeout(() => {
    elem.classList.remove('active');
  }, 200);
}

function playClickSound() {
  const audio = new Audio('click-sound.mp3');
  audio.play();
}

function findSymbolFromKey(key) {
  if (key === '*' || key === 'x') {
    return '×';
  } else if (key === '/') {
    return '÷';
  } else if (key === 'Enter') {
    return '=';
  } else if (key === 'Delete') {
    return 'AC';
  } else {
    return key;
  }
}

function findBtnFromSymbol(symbol) {
  const allBtns = [...digitBtns, ...operatorBtns, dotBtn, equalBtn, clearBtn];
  const btn = allBtns.find((btn) => btn.innerText === symbol);
  return btn;
}

function handleKeyPress(event) {
  const key = event.key;
  const symbol = findSymbolFromKey(key);
  const btn = findBtnFromSymbol(symbol);

  if (btn) {
    playClickSound();
    animateClick(btn);
  }
}

function handleBtnClick(event) {
  const btn = event.target;
  const type = btn.dataset.type;
  const symbol = btn.innerText;

  if (type === 'digit') {
    updateNumber(symbol);
  } else if (type === 'operator') {
    if (operator) {
      equal
    }
  }

  playClickSound();
}

digitBtns.forEach((elem) => elem.addEventListener('click', (event) => handleDigit(event.target.innerText)));
operatorBtns.forEach((elem) => elem.addEventListener('click', (event) => handleOperator(event.target.innerText)));
dotBtn.addEventListener('click', handleDot);
equalBtn.addEventListener('click', handleEqual);
clearBtn.addEventListener('click', handleClear);

//const buttons = document.querySelectorAll('#calculator button');
buttons.forEach((btn) => btn.addEventListener('click', handleBtnClick));
window.addEventListener('keypress', handleKeyPress);

/*
window.addEventListener('keydown', (event) => {
  const key = event.key;
  const digits = Array.from(digitBtns).map((elem) => elem.innerText);
  const operators = ['+', '-', '×', '÷', '*', 'x', '/'];

  playClickSound();
  
  if (digits.includes(key)) {
    handleDigit(key);
    const btn = Array.from(digitBtns).find((elem) => elem.innerText === key);
    animateClick(btn);
  } else if (key === '.') {
    handleDot();
    animateClick(dotBtn);
  } else if (operators.includes(key)) {
    handleOperator(key);
    let btn = Array.from(operatorBtns).find((elem) => elem.innerText === key);
    if (key === '*' || key === 'x') {
      btn = Array.from(operatorBtns).find((elem) => elem.innerText === '×');
    } else if (key === '/') {
      btn = Array.from(operatorBtns).find((elem) => elem.innerText === '÷');
    }
    animateClick(btn);
  } else if (key === 'Delete') {
    handleClear();
    animateClick(clearBtn);
  } else if (key === 'Enter' || key === '=') {
    handleEqual();
    animateClick(equalBtn);
  }
})

display('0')








function display(value) {
  output.innerText = value || getCurrentNumber();
}

function updateNumber(value) {

  if (!operator) {
    number1 = (number1 || '') + value;
  } else {
    number2 = (number2 || '') + value;
  }
}


*/

// LOGIC
/*
const operation = { number1: null, operator: null, number2: null };

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

function getCurrentNumber() {
  return !operation.operator ? operation.number1 : operation.number2;
}

function appendToCurrentNumber(value) {
  if (!operation.operator) {
    operation.number1 = (operation.number1 || '') + value; 
  } else {
    operation.number2 = (operation.number1 || '') + value;
  }
}

function clear() {
  operation.number1 = null;
  operation.operator = null;
  operation.number2 = null;
}

function appendNumber(value) {
  let updatedNumber = (getCurrentNumber() || '') ;

}

// DOM

const output = document.getElementById('output');
const buttons = document.querySelectorAll('#calculator button');

function display(value) {
  output.innerText = value || getCurrentNumber();
}

function handleButtonClick(event) {
  const btn = event.target;
  const type = btn.dataset.type;
  const symbol = btn.innerText;

  if (type === 'digit') {
    handleDigit(symbol);
  } else if (type === 'operator') {
    handleOperator(symbol);
  }
}

function handleDigit(digit) {
  const currentNumber = getCurrentNumber();

  if (typeof currentNumber === 'srting' && currentNumber.length >= 10) {
    return;
  }

  appendToCurrentNumber(digit);
  display();
}

function handleOperator(operator) {
  if (operation.operator) {
    const { number1, number2, operator } = operation;
    const result = operate(Number(number1), Number(number2), operator);
    operation.number1 = result;
    clear();
    display();
  }
  operation.operator = operator;
}

buttons.forEach((btn) => btn.addEventListener('click', handleButtonClick));



function handleOperator(operator) {
  operation.operator = operator;
}










display('0');
*/


// LOGIC

let number1;
let number2;
let operator;

function add(numbers) { return numbers.reduce((prev, curr) => prev + curr) }
function substract(numbers) { return numbers.reduce((prev, curr) => prev - curr) }
function multiply(numbers) { return numbers.reduce((prev, curr) => prev * curr) }
function divide(numbers) { return numbers.reduce((prev, curr) => prev / curr) }

function operate(numbers, operator) {
  switch (operator) {
    case '+': return add(numbers);
    case '-': return substract(numbers);
    case '×': return multiply(numbers);
    case '÷': return divide(numbers);
    default: return;
  }
}

function clear() {
  number1 = null;
  number2 = null;
  operator = null;
}

// DOM

let displayValue = '0';
const buttons = document.querySelectorAll('#calculator button');
const output = document.getElementById('output');

function handleButtonClick(event) {
  const btn = event.target;
  const symbol = btn.innerText;
  const type = btn.dataset.type;

  if (type === 'digit') {
    handleDigit(symbol);
  } else if (type === 'operator') {
    handleOperator(symbol);
  } else if (symbol === '.') {
    handleDot();
  } else if (symbol === '=') {
    handleEqual();
  } else if (symbol === 'AC') {
    handleClear();
  } else {
    console.error('Unknown input')
  }
}

function handleDigit(digit) {
  if (displayValue.length >= 10) {
    return;
  }
  displayValue = displayValue === '0' ? digit : displayValue + digit;
  display();
}

function handleOperator(oprt) {
  if (operator && displayValue !== '0') {
    handleEqual();
  } else {
    number1 = Number(displayValue);
  }
  operator = oprt;
  displayValue = '0';
}

function handleDot() {
  if (displayValue.length >= 10 || displayValue.includes('.')) {
    return;
  }
  displayValue += '.';
  display();
}

function handleClear() {
  displayValue = '0';
  clear();
  display();
}

function handleEqual() {
  if (!number1 || !operator) {
    return;
  }
  number2 = Number(displayValue);
  const result = operate([number1, number2], operator);
  clear();
  number1 = result;
  displayValue = number1;
  display();
}

function display() {
  output.innerText = displayValue;
}

buttons.forEach((btn) => btn.addEventListener('click', handleButtonClick));

display();