/*const button = document.getElementById('satisfying-button');

button.addEventListener('click', () => {
  // Change le texte
  button.textContent = 'Wow ✨ Satisfaisant !';

  // Ajoute la classe pour l'animation
  button.classList.add('animated');

  // Enlève la classe après l'animation (0.6s correspond à l'animation définie dans CSS)
  setTimeout(() => {
    button.classList.remove('animated');
    button.textContent = 'Clique-moi ✨'; // Remet le texte initial
  }, 2000); // 2 secondes avant le retour du texte initial
});*/

/*const button = document.getElementById('satisfying-button');

button.addEventListener('click', () => {
  // Change le texte
  button.textContent = 'Wow ✨ Satisfaisant !';
  
  // Ajoute une classe pour déclencher l'animation
  button.classList.add('clicked-animation');

  // Supprime la classe après l'animation (1s)
  setTimeout(() => {
    button.classList.remove('clicked-animation');
    button.textContent = 'Clique-moi ✨'; // Rétablit le texte d'origine
  }, 2000); // Durée totale (texte + animation)
});*/

const button = document.getElementById('satisfying-button');
button.addEventListener('click', () => {
  button.textContent = 'Wow ✨ Satisfying !';
  setTimeout(() => {
    button.textContent = 'Click-me ✨';
  }, 2000); // Le texte revient après 2 secondes
});
