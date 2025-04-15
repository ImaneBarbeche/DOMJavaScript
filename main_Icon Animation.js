function balanceScale() {
    let bIcon = document.getElementById("balanceIcon");
    bIcon.innerHTML = "&#xf24e;";
  
    setTimeout(function () {
      bIcon.innerHTML = "&#xf515;";
    }, 1000);
  
    setTimeout(function () {
      bIcon.innerHTML = "&#xf24e;";
    }, 2000);
  
    setTimeout(function () {
      bIcon.innerHTML = "&#xf516;";
    }, 3000);
  }
  balanceScale();
  setInterval(balanceScale, 4000);