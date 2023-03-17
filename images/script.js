'use strict';
const rollDice = document.querySelector('.btn--roll');
const rollHold = document.querySelector('.btn--hold');
const rollnew = document.querySelector('.btn--new');
let score1 = document.querySelector('#current--1');
let score2 = document.querySelector('#current--2');
let image = document.querySelector('.dice');

let currentScore = 0;
let activePlayer = 0;
const roll = function () {
  //get dice number
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  image.src = `dice-${dice}.png`;
  //add score to player score
  currentScore += dice;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //change the player
  if (dice === 1) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 0 : 1;
  }
};

rollDice.addEventListener('click', roll);
