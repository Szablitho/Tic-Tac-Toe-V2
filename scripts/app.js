const playerConfigOverlay = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const formElement = document.querySelector('form');
const erroursOutputElement= document.querySelector("#config-errors");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");

editPlayer1Btn.addEventListener("click",openPlayerConfig);
editPlayer2Btn.addEventListener("click",openPlayerConfig);

cancelConfigBtn.addEventListener("click",closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig); // when form is submited, this function will fire up. can be attached to submit button and replace submission but in this project, I want to keep submission of form and handle it in JS