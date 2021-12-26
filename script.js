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

      if (principal <= 0) {
        alert("Please enter a positive number");
        principal.focus();
      } else {
        document.getElementById("result").innerHTML = "If you deposit \<mark> " + principal + "\</mark>,\<br\>at an interest rate of \<mark>" + rate + "%\</mark>\<br\>You will receive an amount of \<mark>" + interest + ",\</mark>\<br\>in the year \<mark>" + year + "\<br\>"
      }
    }
