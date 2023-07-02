function openPlayerConfig() {
  playerConfigOverlay.style.display = 'block';
  backDropElement.style.display = 'block';
}
function closePlayerConfig(event) {
  const enteredPlayerName = document.querySelector(".form-control input");
  playerConfigOverlay.style.display = 'none';
  backDropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  console.log(enteredPlayerName);
  
  if(enteredPlayerName.value) {
    enteredPlayerName.value = ''; // ckearing input when backdrop was clicked, when cancel is clicked, it gets reset too
  }
}

function savePlayerConfig(event) { // browser give event object to all functions triggered by event listener
  event.preventDefault();
  const formData = new FormData(event.target); // event.target points at form here because of event listener
  const enteredPlayerName = formData.get('playername').trim(); // get() gives a string that I trim() -> '    ' => ''
  if(!enteredPlayerName) { // or enteredPLayer === '';
    event.target.firstElementChild.classList.add('error'); // adding error class to form control div inside form element
    erroursOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}