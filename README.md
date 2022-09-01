# calculator

A simple web calculator that performs operations on numbers.

# algo

function operations(nb1, nb2)
 return result

function operate(operation)
 check if operation is valid, if not return
 invoke correct operation function
 save result as nb1
 if nextOperator exist, put it as operator and delete nextOperator
 if not delete operator
 delete nb2
 update display

function handleNumberInput(input)
 if there is not an operator yet
  add input to nb1
 if there is an operator
  add input to nb2
 update display

function handOperatorInput(input)
 if nb1 dont exist
  return
 if nb1 exist and nb2 don't exist
  store input as operator
 if nb2 exist
  store input as nextOperator
  operate
 update display

function updateDisplay(operation)
 loop through every operation element
 if element name is operator
  add element value to display between space
 add element value to display

function goBack
 if nb2 exist
  if nb2 converted to string is longer than 1
   remove last character of nb2
  if nb2 converted to string is equal to 1
   delete nb2
 else if operator exist
  delete operator
 else if nb1 exist
  if nb1 converted to string is longer than 1
   remove last character of nb1
  if nb1 converted to string is equal to 1
   nb1 equal to 0
 update display

  