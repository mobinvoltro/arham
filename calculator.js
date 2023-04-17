var input_box = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var resultData = "";
input_box.onkeydown = function () {
  console.log(input_box.value);
};

function UserClickButton(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input_box.value;
  expressionData = input;
  var result = eval(input);
  resultData = result;
  if(historyData.length < 20 ){
    historyData.push({ expression: expressionData, result: resultData });
  }else {
    console.log("tum say na ho pyega");
  }
 
  showLogdata();
  resultData = "";
  expressionData = "";
  input_box.value = result;
}
function ClearData() {
  input_box.value = "";
}

function showLogdata() {
  var log = document.getElementById("history_log");
  var string = "";
  for (var key in historyData) {
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<br>";
  }
  log.innerHTML = string;
}
function ClearHistory() {
    document.getElementById("history_log").innerHTML = "";
  }


  $('#calculation').keypress(function (e) {
    var key = e.which;
    let checkValues = document.getElementById("calculation").value;
    if(key == 13 && checkValues)  // the enter key code
     {
        CalculateValue();    
     }
   }); 