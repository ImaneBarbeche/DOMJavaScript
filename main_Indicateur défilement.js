window.onscroll = function () {
    // 1. Combien de pixels on a scrollé
    let windowScroll = document.documentElement.scrollTop;
  
    // 2. Hauteur totale de la page - hauteur visible
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    // 3. Calcul du pourcentage de scroll
    let scrolled = (windowScroll / height) * 100;
  
    // 4. On applique ça à la largeur de la barre
    document.getElementById("bar").style.width = scrolled + "%";
  };
  