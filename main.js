let computerScore = 0;
let playerScore = 0;

alert(
  "Welcome to Rock, Paper, Scissors! \nThis games output is displayed in the console. Press shift + ctrl + j to open the console \nWe'll play 5 rounds. I'll keep track of the score \nClick ok to begin!"
);

game();

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(computerSelection, playerSelection));
  }

  const finalScore = `Computer score = ${computerScore}, Player score = ${playerScore}`;
  if (playerScore < computerScore) {
    console.log("You Loose " + finalScore);
  } else if (playerScore > computerScore) {
    console.log("You Win! " + finalScore);
  } else {
    console.log("Tie Game! " + finalScore);
  }

  playAgain();
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

function playAgain() {
  const answer = prompt(
    "Would you like to play again? Enter Yes or No."
  ).toLowerCase();
  switch (answer) {
    case "yes":
    case "y":
      location.reload();
      break;
    default:
      alert("Thank for playing!");
      break;
  }
}
