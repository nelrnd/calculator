const add = (nb1,nb2) => Number(nb1) + Number(nb2);
const substract = (nb1,nb2) => nb1 - nb2;
const multiply = (nb1,nb2) => nb1 * nb2;
const divide = (nb1,nb2) => nb1 / nb2;

const operation = {};

function operate() {
  let result;
  switch (operation.operator) {
    case 'add':
      result = add(operation.nb1, operation.nb2);
      break;
    case 'substract':
      result = substract(operation.nb1, operation.nb2);
      break;
    case 'multiply':
      result = multiply(operation.nb1, operation.nb2);
      break;
    case 'divide':
      result = divide(operation.nb1, operation.nb2);
      break;
    default:
      console.log('can\'t handle operator');
  }
  return result;
}

const numberButtons = document.querySelectorAll('#numbers>button');
numberButtons.forEach(btn => btn.addEventListener('click', handleNbInput));
const oprtButtons = document.querySelectorAll('#operators>button');
oprtButtons.forEach(btn => btn.addEventListener('click', handleOpInput));

function handleNbInput(event) {
  let input = event.target.textContent;
  if (!operation.operator) {
    if (operation.nb1) {
      operation.nb1 += input;
    } else {
      operation.nb1 = input;
    }
  } else {
    if (operation.nb2) {
      operation.nb2 += input;
    } else {
      operation.nb2 = input;
    }
  }
  displayInput(input);
}
function handleOpInput(event) {
  let input = event.target;
  if (!operation.nb1) {
    return;
  }
  if (!operation.nb2) {
    if (operation.operator) {
      display.textContent = display.textContent.slice(0, -1);
    }
    operation.operator = input.id;
  } else {
    let result = operate();
    displayResult(result);
    operation.nb1 = result;
    operation.operator = input.id;
    delete operation.nb2;
  }
  displayInput(input.textContent);
}

const operateButton = document.querySelector('button#operate');
operateButton.addEventListener('click', () => {
  if (!checkOperation()) return; //operation not valid
  let result = operate();
  displayResult(result);
  operation.nb1 = result;
  delete operation.operator;
  delete operation.nb2;
});

function checkOperation() {
  if (operation.nb1 && operation.nb2 && operation.operator) {
    return true;
  } else {
    return false;
  }
}

const display = document.querySelector('#display');

function displayInput(input) {
  if (display.textContent === '0') {
    display.textContent = '';
  }
  display.textContent += input;
}
function displayResult(result) {
  display.textContent = result;
}