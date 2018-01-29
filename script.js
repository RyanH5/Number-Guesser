var randomNum = Math.floor(Math.random() * 100) + 1;

document.querySelector('#form_btn_guess').addEventListener('click', submitUserGuess);
document.querySelector('#form_input').addEventListener('input', enableBtn);

document.querySelector('#form_btn_clear').addEventListener('click', clearInputField);
document.querySelector('#form_btn_reset').addEventListener('click', resetGame);


function getRandomNumber(event) {
  Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

getRandomNumber();
enableBtn();


function enableBtn() {
  if (document.getElementById('form_input').value !== '') {
    document.getElementById('form_btn_guess').disabled = false;
    document.getElementById('form_btn_clear').disabled = false;
  }
}




function submitUserGuess(event) {
  event.preventDefault();
  var userGuess = parseInt(document.getElementById('form_input').value);
  document.getElementById('article_user_input').innerText = parseInt(document.querySelector('#form_input').value);
  if (userGuess === randomNum) {
    correctGuess();
  } else {
    tooHigh();
    tooLow();
  }
  clearAndFocusInputField();
}

function clearAndFocusInputField() {
  document.getElementById('form_input').value = '';
  document.getElementById('form_input').focus();
}

function correctGuess() {
  document.getElementById('user_feedback_top').innerText = 'BOOM';
  document.getElementById('user_feedback_bottom').innerText = 'You nailed it, bro!';
}

function tooHigh() {
  if (document.querySelector('#form_input').value > randomNum) {
    document.getElementById('user_feedback_top').innerText = 'That is too high.';
    document.getElementById('user_feedback_bottom').innerText = 'Try Again.';
  }
}

function tooLow() {
  if (document.querySelector('#form_input').value < randomNum) {
    document.getElementById('user_feedback_top').innerText = 'That is too low';
    document.getElementById('user_feedback_bottom').innerText = 'Try Again.';
  }
}

function clearInputField() {
  document.getElementById('form_input').value = '';
}

function resetGame() {
  location.reload();
}



