function add() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  if(num1 === "" || num2 === "")
  {
    alert("No value");
    return;
  }
  num1 = parseFloat(num1);
  num2= parseFloat(num2);
  var result = num1 + num2;
  document.getElementById('result').innerHTML = "Result: " + result;
}
function subtract() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  if(num1 === "" || num2 === "")
  {
    alert("No value");
    return;
  }
  num1 = parseFloat(num1);
  num2= parseFloat(num2);
  var result = num1 - num2;
  document.getElementById('result').innerHTML = "Result: " + result;
}
function multiply()
{
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById("num2").value;
    if(num1 === "" || num2 === "")
    {
        alert("No value");
        return;
    }
    num1 = parseFloat(num1);
    num2= parseFloat(num2);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = "Result : "+result;
}
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if(num1 === "" || num2 === "")
    {
        alert("No value");
        return;
    }
    num1 = parseFloat(num1);
    num2= parseFloat(num2);
    if (num2 === 0) {
      alert("Arithmetic Exception!");
      document.getElementById('result').innerHTML = "Cannot divide by zero";
      clearAll();
    } else {
      var result = num1 / num2;
      document.getElementById('result').innerHTML = "Result: " + result;
    }
}
function clearAll()
{
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerHTML = "";
}