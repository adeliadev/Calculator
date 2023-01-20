function insert(num) {
  var number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + num;
}

function clean() {
  document.getElementById("result").innerHTML = "";
}

function back() {
  var backspace = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = backspace.substring(0, backspace.length -1);
}

function calculate(){
  var calc = document.getElementById('result').innerHTML;
  if(calc){
    document.getElementById('result').innerHTML = eval(calc);
  } else {
    document.getElementById('result').innerHTML = "Nada...";
  }
}
