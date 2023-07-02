function startNewGame() {
  if(!players[0].name || !players[1].name) {
    alert("Please set custom player names for both players");
    return;
  }
  gameAreaElement.style.display = "block";
  activePlayerNameEl.textContent = players[activePlayer].name;
}
function switchPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  // if(activePlayer === 0) {
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }
  activePlayerNameEl.textContent = players[activePlayer].name;
}
function selectGameField(event) {
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row -1;
//  prevention of updating selected field again
  if(gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  //  saving selected field in gameData 

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  switchPlayer();
}