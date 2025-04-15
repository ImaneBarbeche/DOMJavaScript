const title = document.getElementById("title");
const left = document.querySelector('.image-wrapper.left');
const right = document.querySelector('.image-wrapper.right');

let compteur = 0;

function changeContent() {
  compteur++;

  if (compteur === 1) {
    // Texte à gauche = on le fait disparaître
    title.style.opacity = 0;
    left.style.display = 'block';
    right.style.display = 'none';
  } else if (compteur === 2) {
    title.textContent = "Bienvenue à droite";
    title.style.opacity = 1;
    left.style.display = 'none';
    right.style.display = 'block';
  } else if (compteur === 3) {
    title.style.opacity = 0;
    title.textContent = "Caché à gauche encore";
    left.style.display = 'block';
    right.style.display = 'none';
  } else {
    title.textContent = "Retour à droite !";
    title.style.opacity = 1;
    left.style.display = 'none';
    right.style.display = 'block';
    compteur = 0; // reset pour boucler
  }
}

setInterval(changeContent, 3000);
