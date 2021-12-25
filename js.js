var range = document.getElementById("intrestRate");
var bubble = document.getElementById("bubble");
var A = range.value;
var amount = document.getElementById("amount");

range.addEventListener("input", () => {
  setBubble(range, bubble);
});


function setBubble(range, bubble) {
  A = range.value;
  bubble.innerHTML = A + "%";
}

var select = document.getElementById('NoYears');
var option = select.options[select.selectedIndex].value;

function change() {
  select = document.getElementById('NoYears');
  option = select.options[select.selectedIndex].value;
  amount = document.getElementById("amount")
}

var button = document.getElementById("submit");
button.onclick = function myFunction() {
if(amount.value==""){
alert("Please enter a number");
amount.focus();
}
else{
  document.getElementById("deposit").value = "If you deposit " + amount.value;
  document.getElementById("rate").value = "At intrest rate of " + A + "%";
  document.getElementById("recive").value = "You recive an amount of " + ((parseInt(amount.value) * parseInt(A) / 100 * option) + parseInt(amount.value));
  document.getElementById("year").value = "in the year " + (parseInt(option) + 2021);
  }

}
