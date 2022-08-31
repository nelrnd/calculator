function add(nb1, nb2) {
  return Number(nb1) + Number(nb2);
}
function substract(nb1, nb2) {
  return nb1 - nb2;
}
function multiply(nb1, nb2) {
  return nb1 * nb2;
}
function divide(nb1, nb2) {
  return (nb1 / nb2).toFixed(2);
}

function operate(nb1, nb2, operator) {
  let result;
  switch (operator) {
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
      result = divide(nb1, nb2);
      break;
    default:
      console.log('can\'t handle operator');
  }
  return result;
}
