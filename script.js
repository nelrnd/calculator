const operation = {
  number1: null,
  number2: null,
  operator: null,
  operatorJustSet: false,
  convertNumbers() {
    if (this.number1) this.number1 = Number(this.number1);
    if (this.number2) this.number2 = Number(this.number2);
  },
  clear() {
    this.number1 = null;
    this.number2 = null;
    this.operator = null;
  }
};

// LOGIC

const add = (number1, number2) => number1 + number2;
const substract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;
const modulo = (number1, number2) => number1 % number2;

const operate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return add(number1, number2);
    case '-': return substract(number1, number2);
    case '×': return multiply(number1, number2);
    case '÷': return divide(number1, number2);
    case '%': return modulo(number1, number2);
    default: return;
  }
};

// DOM

const buttons = document.querySelectorAll('#calculator button');
const screen = document.querySelector('.screen #text');

const populateScreen = (value) => {
  screen.innerText = value;
}

const appendToScreen = (value) => {
  populateScreen(screen.innerText + value);
}

const playClickSound = () => {
  const audio = new Audio('click-sound.mp3');
  audio.play();
}

const handleNumber = (number) => {
  if (operation.operatorJustSet) {
    populateScreen('');
    operation.operatorJustSet = false;
  }

  if (screen.innerText === '0') {
    populateScreen(number);
  } else if (screen.innerText === '-0') {
    populateScreen('-' + number);
  } else {
    appendToScreen(number);
  }
}

const handleDot = () => {
  if (screen.innerText.includes('.') === false) {
    appendToScreen('.')
  }
}

const handleOperator = (operator) => {
  if (operation.operator && operation.number1 !== Number(screen.innerText)) {
    handleEqual();
  } else {
    operation.number1 = Number(screen.innerText);
    operation.operatorJustSet = true;
  }
  operation.operator = operator;
}

const handleEqual = () => {
  if (operation.operator) {
    operation.number2 = Number(screen.innerText);
    operation.convertNumbers();

    const result = operate(operation.number1, operation.number2, operation.operator);
    operation.clear();
    operation.number1 = result;
    populateScreen(result);
  }
}

const handleClear = () => {
  operation.clear();
  populateScreen(0);
}

const handleChangeSign = () => {
  if (operation.operator && !operation.number2) {
    populateScreen('-0');
  } else if (screen.innerText[0] === '-') {
    screen.innerText = screen.innerText.slice(1);
  } else {
    screen.innerText = '-' + screen.innerText;
  }
}

const handleInput = (button) => {
  if (!button) {
    return;
  }

  const value = button.innerText;
  const type = button.dataset.type;

  if (type === 'number') {
    handleNumber(value);
  } else if (type === 'operator') {
    handleOperator(value);
  } else if (value === '.') {
    handleDot();
  } else if (value === '=') {
    handleEqual();
  } else if (value === 'AC') {
    handleClear();
  } else if (value === '+/-') {
    handleChangeSign();
  }

  playClickSound();
}

const convertKey = (key) => {
  if (key === '*' || key === 'x') {
    return '×';
  } else if (key === '/') {
    return '÷';
  } else if (key === 'Delete') {
    return 'AC'
  } else if (key === 'Enter') {
    return '=';
  } else {
    return key;
  }
}

const findButton = (key) => Array.from(buttons).find((button) => button.innerText === convertKey(key));

const animateButton = (button) => {
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 150);
}

buttons.forEach((button) => button.addEventListener('click', () => handleInput(button)));

window.addEventListener('keypress', (event) => {
  const button = findButton(event.key);
  if (button) {
    handleInput(button);
    animateButton(button);
  }
});

populateScreen(0);