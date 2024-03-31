const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');

let fontSize = 2;

let messages = [
  'Buenos tal vez te equivoscaste',
  'te doy otra oportunidad',
  'una mas',
  'te volviste a equivocar',
  'Mira, el otro botón es más bonito'
];

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);

  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
  setTimeout(() => {
    window.location.href = 'https://www.youtube.com/watch?v=QuxQnR4uTG4';
  }, 4000); // Redirigir después de 4 segundos (4000 milisegundos)
});
