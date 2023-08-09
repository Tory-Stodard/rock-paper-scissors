const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => playRound('Rock'));

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => playRound('Paper'));

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => playRound('Scissors'));

function playRound(playerSelection) {
  const computerSelection = getComuterSelection();
}

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randChoice = Math.floor(Math.random() * choices.length);
  return choices[randChoice];
}
