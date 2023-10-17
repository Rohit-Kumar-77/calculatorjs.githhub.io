function add() {
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);
  let result = num1 + num2;

  document.getElementById("Result").value = result;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function subtract() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var result = num1 - num2;

  document.getElementById("Result").value = result;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function multiply() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var result = num1 * num2;

  document.getElementById("Result").value = result;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function divide() {
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var result = num1 / num2;

  document.getElementById("Result").value = result;

  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
