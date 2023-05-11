var operand1 = 0;
var operator = "";
var operand2 = 0;

 function add() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "+";
  document.getElementById("textbox").value = "";
}

function subtract() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "-";
  document.getElementById("textbox").value = "";
}

function multiply() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "*";
  document.getElementById("textbox").value = "";
}

function divide() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "/";
  document.getElementById("textbox").value = "";
}

function clearInput() {
    textbox.value="";
    result.innerText="";
}

function updateResult(result) {
   document.getElementById("result").innerText = "Result: " + result;
}

function calculate() {
   operand2 = parseFloat(document.getElementById("textbox").value);
   var result = document.getElementById("result");

   if (!isNaN(operand1)||!isNaN(operand2)){
    if (operator === "") {
      result = operator;
    }
    else {

      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }
    }
   }


   document.getElementById("textbox").value = result;
   updateResult(result);

}