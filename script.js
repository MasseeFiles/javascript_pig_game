'use strict';
// 2 manières de selectionner un DOM element identifié par son ID :

const score0Element = document.querySelector('#score--0');
// # avant de specifier le nom de l'Id

const score1Element = document.getElementById('score--1');
// On specifie juste le nom de l'Id de l'élément

const diceImage = document.querySelector('.dice');
// selection d'un element par sa classe HTML

const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceImage.classList.add('hidden');

//Rolling dice functionality