let computerScore = 0;
let playerScore = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(computerSelection, playerSelection));
  }

  console.log(
    `Computer score = ${computerScore}, Player score = ${playerScore}`
  );
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getPlayerChoice() {
  const playerChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();
  switch (playerChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return playerChoice;
    default:
      return getPlayerChoice();
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === "rock" && playerSelection === "paper") {
    playerScore++;
    return "You win this round! Paper beats rock.";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    return "You loose this round! Rock beats scissors";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerScore++;
    return "You win this round! Scissors beats paper";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    return "You loose this round! Paper beats rock";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerScore++;
    return "You win this round! Rock beats scissors";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    return "You loose this round! Scissors beats paper";
  } else {
    return `Its a tie! We both chose ${playerSelection}`;
  }
}
