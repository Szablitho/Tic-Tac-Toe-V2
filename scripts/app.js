let editedPlayer = 0; // ID
let activePlayer = 0; // for turn logic
let currentRound = 1;
let activePlayerNameEl = document.getElementById('active-player-name');
const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const formElement = document.querySelector('form');
const erroursOutputElement = document.querySelector("#config-errors");
const gameAreaElement = document.getElementById("active-game");
const winnerNameElement = document.getElementById("winner-name");
const gameOverElement = document.getElementById("game-over");

const startNewGameBtn = document.getElementById('start-game-btn');
const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig); // when form is submited, this function will fire up. can be attached to submit button and replace submission but in this project, I want to keep submission of form and handle it in JS
startNewGameBtn.addEventListener("click", startNewGame)
// gameFieldElements.forEach(gameFieldElement => { gameFieldElement.addEventListener("click", selectGameField);})
for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}