'use strict';
// 2 manières de selectionner un DOM element identifié par son ID :

const score0Element = document.querySelector('#score--0');
// # avant de specifier le nom de l'Id

const score1Element = document.getElementById('score--1');
// On specifie juste le nom de l'Id de l'élément

const diceImage = document.querySelector('.dice');
// selection d'un element par sa classe HTML

let current0El = document.getElementById('current--0');
let current1El = document.getElementById(' current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceImage.classList.add('hidden');

const scores = [0, 0]; //scores totaux - !currentScore
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    console.log('Clicked!');

    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore = currentScore + dice;
        current0El.textContent = currentScore;
    } else {


    }



});


