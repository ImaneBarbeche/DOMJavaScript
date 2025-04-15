// Déclaration des variables pour récupérer les éléments HTML
var myBtn = document.getElementById('btn');
var result = document.getElementById('result');

// Fonction PileOuFace
function PileOuFace() {
    // Générer un nombre aléatoire et retourner "Pile" ou "Face"
    return Math.random() < 0.5 ? 'Pile' : 'Face';
}

// Ajout d'un écouteur d'évènement sur le bouton
myBtn.addEventListener('click', function() {
    // Appeler la fonction PileOuFace et afficher le résultat
    var resultat = PileOuFace();
    result.textContent = 'Résultat : ' + resultat;

    // Afficher le résultat dans la console
    console.log('Résultat dans la console :', resultat);
});