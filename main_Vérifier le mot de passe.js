let password = document.getElementById("password");
let checkPassword = document.getElementById("check-password");
let alert = document.getElementById("message");



checkPassword.addEventListener('keyup', () => {
  // Vérifier si les deux mots de passe correspondent
 if (checkPassword.value === password.value) {
   // Si les mots de passe correspondent
   alert.innerHTML = "Les mots de passe correspondent !";
   alert.style.color = "green";
 } else {
   // Si les mots de passe ne correspondent pas
   alert.innerHTML = "Les mots de passe ne correspondent pas.";
   alert.style.color = "red";
 }
});


