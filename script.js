document.querySelector('#form_btn_guess').addEventListener('click', submitGuess);
// document.querySelector('#form_btn_clear').addEventListener('click', clearInputField);
// document.querySelector('#form_btn_reset').addEventListener('click', resetGame);


function getRandomNumber(e) {
  e.preventDefaults();
  var randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

function submitGuess(e) {
  e.preventDefaults();
  getRandomNumber();
  // if (form_input.value === )
}

function tooHigh() {

}

function tooLow() {

}