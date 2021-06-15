// quand j'appuie sur lancer le dé affiche un resultat aléatoire entre 1 et 6
const dice = document.querySelector('.dice');

document.querySelector('#roll').addEventListener('click', (e) => {
    dice.classList.add('roll');
    setTimeout(() => {dice.classList.remove('roll')}, 250);
    document.querySelector('#img-dice').src='ressources/'+Math.ceil(Math.random()*6)+'.png';
})
