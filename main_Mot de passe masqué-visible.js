const input = document.getElementById('input');
const display = document.getElementById('display');
const checkbox = document.getElementById('checkbox') ;

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // Si la case est cochée, afficher le mot de passe
      input.type = 'text';
    } else {
      // Sinon, masquer le mot de passe
      input.type = 'password';
    }
  });

console.log(input.type);