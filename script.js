// Script pour afficher l'année en cours dans le footer
document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
});

// Bouton pour remonter en haut de la page
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};

document.getElementById("backToTop").onclick = function () {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE, Edge et Opera
  document.body.focus(); // Pour éviter un bug de focus sur le bouton
};

// Script pour afficher l'email en entier
document.addEventListener("DOMContentLoaded", function () {
  var userEmail = "hello"; // Partie locale de l'email
  var domain = "mikepixel.dev"; // Domaine de l'email
  var emailContainer = document.getElementById("email-link");
  emailContainer.innerHTML =
    '<a href="mailto:' +
    userEmail +
    "@" +
    domain +
    '">' +
    userEmail +
    "@" +
    domain +
    "</a>";
  emailContainer
    .querySelector("a")
    .setAttribute("aria-label", "Envoyer un email"); // Amélioration de l'accessibilité
});
