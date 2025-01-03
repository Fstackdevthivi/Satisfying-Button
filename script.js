const button = document.getElementById('satisfying-button');
button.addEventListener('click', () => {
  button.textContent = 'Wow ✨ Satisfying !';
  setTimeout(() => {
    button.textContent = 'Click-me ✨';
  }, 2000); // Le texte revient après 2 secondes
});
