    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    function updateRate() {
      var rateval = document.getElementById("rate").value;
      document.getElementById("rate_val").innerText = rateval + "%";

    }

    function compute() {
      principal = document.getElementById("principal").value;
      rate = document.getElementById("rate").value;
      years = document.getElementById("years").value;
      interest = principal * years * rate / 100;
      year = new Date().getFullYear() + parseInt(years);

      if (principal == "") {
        alert("Please enter a positive number");
        principal.focus();
      } else {
        document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
      }
    }
