window.onload = function () {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("res").value = "";
};

function add() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a + b;
  document.getElementById("res").innerHTML = "Result: " + res;
}
function sub() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a - b;
  document.getElementById("res").innerHTML = "Result: " + res;
}
function mul() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a * b;
  document.getElementById("res").innerHTML = "Result: " + res;
}
function divi() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a / b;
  document.getElementById("res").innerHTML = "Result: " + res;
}
