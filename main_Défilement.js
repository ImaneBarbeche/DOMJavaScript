document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 240) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-56px";
      }
    });
  });
  