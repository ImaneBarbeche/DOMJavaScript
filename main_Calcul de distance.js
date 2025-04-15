let villes = ["Bordeaux", "Nantes", "Lyon", "Marseille", "Monptellier", "Paris", "Rennes", "Strasbourg"];
let distance = [950, 850, 450, 800, 1000, 460, 840, 0];

// Fonction pour trouver les villes atteignables
function villesAtteignables(distanceParcourue) {
    let result = [];
    for (let i = 0; i < distance.length; i++) {
        if (distance[i] <= distanceParcourue) {
            result.push(villes[i]);
        }
    }
    return result;
}

// Attendre que le DOM soit prêt
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const input = document.getElementById("check-distance");

    // Création d'un élément pour afficher les résultats
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    input.parentNode.appendChild(resultDiv);

    btn.addEventListener("click", function () {
        const value = parseInt(input.value);

        // Nettoyer l'affichage précédent
        resultDiv.innerHTML = "";

        if (!isNaN(value) && value >= 0) {
            const result = villesAtteignables(value);
            if (result.length > 0) {
                resultDiv.innerHTML = `<p>Villes atteignables : ${result.join(", ")}</p>`;
            } else {
                resultDiv.innerHTML = "<p>Aucune ville atteignable avec cette distance.</p>";
            }
        } else {
            resultDiv.innerHTML = "<p style='color:red;'>Veuillez entrer une distance valide.</p>";
        }
    });
});
