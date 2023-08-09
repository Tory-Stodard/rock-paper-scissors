let playerScore = 0;
let computerScore = 0;

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
    updateScore('player');
    updateResults(playerSelection, computerSelection, 'You win this round!');
  } else {
    updateScore('computer');
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

function updateScore(winner) {
  const playerScoreDiv = document.querySelector('#player-score');
  const computerScoreDiv = document.querySelector('#computer-score');
  switch (winner) {
    case 'player':
      playerScore++;
      playerScoreDiv.textContent = `Player Score: ${playerScore}`;
      break;
    case 'computer':
      computerScore++;
      computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
      break;
  }
}
