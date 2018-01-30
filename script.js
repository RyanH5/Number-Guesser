document.querySelector('#guessing_range_btn').addEventListener('click', getRandomNumber);
document.querySelector('#form_btn_guess').addEventListener('click', submitUserGuess);
document.querySelector('#form_input').addEventListener('input', enableBtn);
document.querySelector('#form_btn_clear').addEventListener('click', clearInputField);
document.querySelector('#input_btn_reset').addEventListener('click', resetGame);
// document.querySelector('#user_selected_min').addEventListener('input', createNewMin);
// document.querySelector('#user_selected_max').addEventListener('input', createNewMax);
document.querySelector('#guessing_range_btn').addEventListener('click', submitGuessingRange)

function getRandomNumber(event) {
  event.preventDefault();
  max = parseInt(document.querySelector('#user_selected_max').value);
  min  = parseInt(document.querySelector('#user_selected_min').value);
  randomNum = Math.floor(Math.random() * (max - min) + 1);
  console.log(randomNum);
  enableBtn();
}

function enableBtn() {
  if (document.querySelector('#form_input').value !== '') {
    document.querySelector('#form_btn_guess').disabled = false;
    document.querySelector('#form_btn_clear').disabled = false;
    document.querySelector('#input_btn_reset').disabled = false;
  }
}

function submitUserGuess(event) {
  event.preventDefault();
  var userGuess = parseInt(document.querySelector('#form_input').value);
  document.querySelector('#article_user_input').innerText = parseInt(document.querySelector('#form_input').value);
  console.log(randomNum);
  if (userGuess === randomNum) {    
    correctGuess();
  } else {
    tooHigh();
    tooLow();
  }
  clearAndFocusInputField();
}

function clearAndFocusInputField() {
  document.querySelector('#form_input').value = '';
  document.querySelector('#form_input').focus();
}

function correctGuess() {
  document.querySelector('#user_feedback_top').innerText = 'BOOM';
  document.querySelector('#user_feedback_bottom').innerText = 'You nailed it, bro!';
}

function tooHigh() {
  if (document.querySelector('#form_input').value > randomNum) {
    document.querySelector('#user_feedback_top').innerText = 'That is too high.';
    document.querySelector('#user_feedback_bottom').innerText = 'Try Again.';
  }
}

function tooLow() {
  if (document.querySelector('#form_input').value < randomNum) {
    document.querySelector('#user_feedback_top').innerText = 'That is too low';
    document.querySelector('#user_feedback_bottom').innerText = 'Try Again.';
  }
}

function clearInputField() {
  event.preventDefault();
  document.querySelector('#form_input').value = '';
}

function resetGame() {
    location.reload();
}

function createNewMin() {
  document.querySelector('#displayed_min').innerText = parseInt(document.querySelector('#user_selected_min').value);
}

function createNewMax() {
  document.querySelector('#displayed_max').innerText = parseInt(document.querySelector('#user_selected_max').value);
}

function submitGuessingRange() {
  createNewMin();
  createNewMax();
}



