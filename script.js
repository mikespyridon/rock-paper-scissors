const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
  playRound(rockBtn.value, getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound(paperBtn.value, getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound(scissorsBtn.value, getComputerChoice());
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerChoice, computerChoice) {
  let winner;

  if (playerChoice === "rock" && computerChoice === "rock") {
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    winner = "player"
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }

  if (playerChoice === "paper" && computerChoice === "paper") {
    console.log("It's a tie!");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    winner = "player";
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }

  if (playerChoice === "scissors" && computerChoice === "sissors") {
    console.log("It's a tie!");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    winner = "player";
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }
  return winner;
}


// function game() {
//   let computerScore = 0;
//   let playerScore = 0;

//   for (let i = 1; i <= 5; i += 1) {
//     let computerSelection = getComputerChoice();
//     let playerSelection = prompt('Please selection your choice: "rock", "paper" or "scissors"').toLowerCase();

//     let winner = playRound(playerSelection, computerSelection);

//     if (winner === "computer") {
//       computerScore += 1;
//     } else {
//       playerScore += 1;
//     }
//   }

//   if (computerScore > playerScore) {
//     console.log(`The computer wins with a score of ${computerScore} to ${playerScore}`);
//   } else if (playerScore > computerScore) {
//     console.log(`You win with a score of ${playerScore} to ${computerScore}`);
//   } else {
//     console.log('It\'s a tie!');
//   }
// }

// game()
