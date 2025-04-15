let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 4000);
});