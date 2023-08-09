const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => playRound('Rock'));

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => playRound('Paper'));

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => playRound('Scissors'));

function playRound(playerSelection) {
  const computerSelection = getComputerSelection();
  if (playerSelection === computerSelection) {
    updateResults(playerSelection, computerSelection, 'Tie round!');
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    updateResults(playerSelection, computerSelection, 'You win this round!');
  } else {
    updateResults(playerSelection, computerSelection, 'You loose this round!');
  }
}

function getComputerSelection() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randChoice = Math.floor(Math.random() * choices.length);
  return choices[randChoice];
}

function updateResults(playerSelection, computerSelection, roundResult) {
  const resultsDiv = document.querySelector('#results');
  resultsDiv.textContent = `Player Chose: ${playerSelection} | Computer Chose: ${computerSelection} | ${roundResult}`;
}
