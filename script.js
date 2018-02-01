document.querySelector('#guessing_range_btn').addEventListener('click', runGetRandomNumber);
document.querySelector('#form_btn_guess').addEventListener('click', submitUserGuess);
document.querySelector('#form_input').addEventListener('input', enableBtn);
document.querySelector('#form_btn_clear').addEventListener('click', clearInputField);
document.querySelector('#input_btn_reset').addEventListener('click', resetGame);

function minMax() {
  max = parseInt(document.querySelector('#user_selected_max').value);
  min  = parseInt(document.querySelector('#user_selected_min').value);
}

function getRandomNumber() {
  randomNum = Math.floor(Math.random() * (max - min +1) + min);
  enableBtn();
}

function runGetRandomNumber(event) {
  event.preventDefault();
  max = parseInt(document.querySelector('#user_selected_max').value);
  min  = parseInt(document.querySelector('#user_selected_min').value);
  getRandomNumber();
  submitGuessingRange();
}

function enableBtn() {
  if (document.querySelector('#form_input').value !== '' || document.querySelector('#user_selected_min').value !== '') {
    enableBtns();
    addEnabledStyle();
  } else {
    disableBtns();
  }
}

function enableBtns() {
  document.querySelector('#form_btn_guess').disabled = false;
  document.querySelector('#form_btn_clear').disabled = false;
  document.querySelector('#input_btn_reset').disabled = false;
}

function disableBtns() {
  document.querySelector('#form_btn_guess').disabled = true;
  document.querySelector('#form_btn_clear').disabled = true;
  document.querySelector('#input_btn_reset').disabled = true;
}

function addEnabledStyle() {
  document.querySelector('#form_btn_guess').style.backgroundColor = '#929497';
  document.querySelector('#form_btn_clear').style.backgroundColor = '#929497';
  document.querySelector('#input_btn_reset').style.backgroundColor = '#929497';
}

function submitUserGuess(event) {
  userGuess = parseInt(document.querySelector('#form_input').value);
  event.preventDefault();
  validateRange();
  displayUserGuess();
  validateGuess();    
  clearAndFocusInputField();  
}

function displayUserGuess() {
  document.querySelector('#article_user_input').innerText = parseInt(document.querySelector('#form_input').value);
}

function clearAndFocusInputField() {
  document.querySelector('#form_input').value = '';
  document.querySelector('#form_input').focus();
}

function correctGuess() {
  if (userGuess === randomNum) {
  document.querySelector('#user_feedback_top').innerText = 'BOOM';
  document.querySelector('#user_feedback_bottom').innerText = 'You nailed it, bro!';
  setTimeout(function() {levelup(); }, 2000);
}
}

function levelup() {
  min = min - 10;
  max = max + 10;
  document.querySelector('#user_feedback_top').innerText = "The new range is " + min + " to " + max;
  getRandomNumber(); 
}

function tooHigh() {
  if (document.querySelector('#form_input').value > randomNum) {
    document.querySelector('#user_feedback_top').innerText = 'That is too high.';
    numberOutOfRangeArticleStyling();
  }
}

function tooLow() {
  if (document.querySelector('#form_input').value < randomNum) {
    document.querySelector('#user_feedback_top').innerText = 'That is too low';
    numberOutOfRangeArticleStyling();
  }
}

function validateGuess() {
  correctGuess();
  tooHigh();
  tooLow();
}

function numberOutOfRangeArticleStyling() {
  document.querySelector('#user_feedback_bottom').innerText = 'Guess Again, ' + min + ' to ' + max;
  displayUserGuess();
  document.querySelector('#article_user_input').style.height = "270px";
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

function validateRange() {
  if (userGuess < min || userGuess > max) {
    alert('Choose a number from ' + min + ' to ' + max)
    displayUserGuess();
  }
}







