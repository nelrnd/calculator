const add = (nb1,nb2) => nb1 + nb2;
const substract = (nb1,nb2) => nb1 - nb2;
const multiply = (nb1,nb2) => nb1 * nb2;
const divide = (nb1,nb2) => nb1 / nb2;

const operation = {};

function checkCurrent() {
  if (operation.nb2) {
    return 'nb2';
  } else if (operation.operator) {
    return 'operator';
  } else {
    return 'nb1';
  }
}

const operateButton = document.querySelector('button#operate');
operateButton.addEventListener('click', operate);

function operate() {
  if (!checkIfOperationValid()) {
    return;
  }
  let nb1 = Number(operation.nb1);
  let nb2 = Number(operation.nb2);
  let op = convertOpToString(operation.operator);
  let result;
  switch(op) {
    case 'add':
      result = add(nb1, nb2);
      break;
    case 'substract':
      result = substract(nb1, nb2);
      break;
    case 'multiply':
      result = multiply(nb1, nb2);
      break;
    case 'divide':
      if (nb2 == '0') return;
      result = divide(nb1, nb2);
      break;
  }
  result = Math.round((result + Number.EPSILON) * 100) / 100;
  operation.nb1 = result;
  if (operation.nextOperator) {
    operation.operator = operation.nextOperator;
    delete operation.nextOperator;
  } else {
    delete operation.operator;
  }
  delete operation.nb2;
  updateDisplay();
}

function checkIfOperationValid() {
  return (operation.nb1 && operation.nb2 && operation.operator) ? true : false;
}

function convertOpToString(op) {
  switch (op) {
    case '+':
      return 'add';
    case '-':
      return 'substract';
    case 'x':
      return 'multiply';
    case '÷':
      return 'divide';
  }
}

const numberButtons = document.querySelectorAll('#numbers>button:not(:last-child)');
numberButtons.forEach(btn => btn.addEventListener('click', event => handleNumberInput(event.target.textContent)));

function handleNumberInput(nb) {
  if (!operation.operator) {
    (operation.nb1) ? operation.nb1 += nb : (nb === '0') ? operation.nb1 = 0 : operation.nb1 = nb;
  } else {
    (operation.nb2) ? operation.nb2 += nb : operation.nb2 = nb;
  }
  updateDisplay();
}
const dotButton = document.querySelector('button#dot')
dotButton.addEventListener('click', handleDotInput);

function handleDotInput() {
  if (operation[checkCurrent()] && operation[checkCurrent()].toString().includes('.')) {
    return;
  }
  if (checkCurrent() === 'nb1') {
    operation.nb1 ? operation.nb1 += '.' : operation.nb1 = '0.';
  } else if (checkCurrent() === 'nb2' || checkCurrent() === 'operator') {
    operation.nb2 ? operation.nb2 += '.' : operation.nb2 = '0.';
  }
  updateDisplay();
}

const operatorButtons = document.querySelectorAll('#operators>button');
operatorButtons.forEach(btn => btn.addEventListener('click', event => handleOperatorInput(event.target.textContent)));

function handleOperatorInput(op) {
  if (!operation.nb1) {
    return;
  }
  if (operation.nb1 && !operation.nb2) {
    operation.operator = op;
    updateDisplay();
  }
  if (operation.nb2) {
    operation.nextOperator = op;
    operate();
  }
}

const display = document.querySelector('#display');

function updateDisplay() {
  display.textContent = '';
  for (let key in operation) {
    if (key === 'operator') {
      display.textContent += ' ' + operation[key] + ' ';
    } else {
      display.textContent += operation[key];
    }
  }
  if (display.textContent === '') {
    display.textContent = '0';
  }
}

const clearButton = document.querySelector('button#clear');
clearButton.addEventListener('click', clear);

function clear() {
  for (let key in operation) {
    delete operation[key];
  }
  updateDisplay();
}

const backspaceButton = document.querySelector('button#back');
backspaceButton.addEventListener('click', goBack);

function goBack() {
  let c = checkCurrent();
  if (c === 'operator') {
    delete operation.operator;
  } else if (operation[c] && operation[c].toString().replace('-','').length === 1) {
    delete operation[c];
  } else if (operation[c] && operation[c].toString().replace('-','').length > 1) {
    operation[c] = operation[c].toString().slice(0, -1);
  }
  updateDisplay();
}

const posNegButton = document.querySelector('button#pos-neg');
posNegButton.addEventListener('click', switchPositiveNegative);

function switchPositiveNegative() {
  if (checkCurrent() === 'nb1' && !operation.nb1) {
    return;
  } else if (checkCurrent() === 'nb1' || checkCurrent() === 'nb2') {
    operation[checkCurrent()] = -(operation[checkCurrent()]);
  }
  updateDisplay();
}

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
  let key = event.key;
  key = convertKbInput(key);
  if (!isNaN(key) && key !== ' ') {
    handleNumberInput(key);
  } else if (key === '.') {
    handleDotInput();
  } else if ('+-x÷'.includes(key)) {
    handleOperatorInput(key);
  } else if (key === 'Enter') {
    operate();
  } else if (key === 'Backspace') {
    goBack();
  }
}

function convertKbInput(key) {
  switch (key) {
    case '*':
      return 'x';
    case '/':
      return '÷';
    default:
      return key;
  }
}