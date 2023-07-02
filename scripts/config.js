function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backDropElement.style.display = 'block';
}
function closePlayerConfig(event) {
  const enteredPlayerName = document.querySelector("#playername");
  playerConfigOverlay.style.display = 'none';
  backDropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  enteredPlayerName.value = ''; // clearing input when backdrop was clicked, when cancel is clicked, it gets reset too
erroursOutputElement.textContent = '';
}

function savePlayerConfig(event) { // browser give event object to all functions triggered by event listener
  event.preventDefault();
  const formData = new FormData(event.target); // event.target points at form here because of event listener
  const enteredPlayerName = formData.get('playername').trim(); // get() gives a string that I trim() -> '    ' => ''
  if (!enteredPlayerName) { // or enteredPLayer === '';
    event.target.firstElementChild.classList.add('error'); // adding error class to form control div inside form element
    erroursOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  // after getting correct name, saving player data and displaying in, ID got taken from dataset on clicked button in openConfig() function
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName; // editedPlayers -> 1 or 2 hence substractring

  closePlayerConfig();
}