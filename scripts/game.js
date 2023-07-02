function startNewGame() {
  //cleaning previous game progress
  gameFieldElements.forEach(field => { 
    field.textContent = ''; 
    field.classList.remove('disabled');
  })
  gameFieldElements.forEach(field => field.style.pointerEvents = 'initial');
  for (let i = 0;i<3; i++) {
    for(let l = 0; l <3; l++) {
      gameData[i][l] = 0;
    }
  }
  currentRound = 1;
  // end of resetting game progress

  if (!players[0].name || !players[1].name) {
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
  const selectedRow = selectedField.dataset.row - 1;
  //  prevention of updating selected field again
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  //  saving selected field in gameData 

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  //checking for winner
  const winnerID = checkForGameOver();
  console.log("winner issss " + winnerID);
  console.log(gameData);
  //showing a winner/draw
  if (winnerID === 1 || winnerID === 2) {
    gameOverElement.style.display = 'block';
    winnerNameElement.textContent = players[activePlayer].name;
    gameFieldElements.forEach(field => field.style.pointerEvents = 'none');
  } else if (winnerID === -1) {
    gameOverElement.style.display = 'block';
    gameOverElement.children[0].textContent = "You've made a draw!";
    gameFieldElements.forEach(field => field.style.pointerEvents = 'none');
  }

  currentRound++;
  switchPlayer();
}

// first checking if specific 3 fields are selected, then checking which player won
function checkForGameOver() {
  // checking row for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2] // 1st row fullfilled 
    ) {
      return gameData[i][0];
    }
  }
  //checking columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i] // 1st row fullfilled 
    ) {
      return gameData[0][i];
    }
  }
  // checking diagonal top to bottom
  if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
    return gameData[1][1];
  }
  // checking diagonal bottom to top
  if (gameData[0][2] > 0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][0]) {
    return gameData[2][0];
  }
  if (currentRound === 9) { return -1; }
  return 0; // if no winner 0 means no player
}