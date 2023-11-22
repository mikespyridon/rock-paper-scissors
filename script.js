const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

let computerScore = 0;
let playerScore = 0;
const MAX_SCORE = 5;

let gameOver = false;

const playerScoreDiv = document.querySelector('.player-score')
const computerScoreDiv = document.querySelector('.computer-score')

const div = document.querySelector('.result-info');

function playAgain() {
  computerScore = 0;
  playerScore = 0;
  gameOver = false;
  div.textContent = "";
  playerScoreDiv = 0;
  computerScoreDiv = 0;
}

rockBtn.addEventListener('click', () => {
  if (!gameOver) {
    let result = playRound(rockBtn.value, getComputerChoice());
    if (result === "player") {
      playerScore += 1;
      playerScoreDiv.textContent = playerScore;
    } else if (result === "computer") {
      computerScore += 1;
      computerScoreDiv.textContent = computerScore;
    }

    if (computerScore === MAX_SCORE || playerScore === MAX_SCORE) {
      gameOver = true;
      computerScore = 0;
      playerScore = 0;
      const div = document.querySelector('.result-info');
      div.textContent = "Game Over!";
    }
  }
});

paperBtn.addEventListener('click', () => {
  if (!gameOver) {
    let result = playRound(rockBtn.value, getComputerChoice());
    if (result === "player") {
      playerScore += 1;
      playerScoreDiv.textContent = playerScore;
    } else if (result === "computer") {
      computerScore += 1;
      computerScoreDiv.textContent = computerScore;
    }

    if (computerScore === MAX_SCORE || playerScore === MAX_SCORE) {
      gameOver = true;
      computerScore = 0;
      playerScore = 0;
      const div = document.querySelector('.result-info');
      div.textContent = "Game Over!";
    }
  }
});

scissorsBtn.addEventListener('click', () => {
  if (!gameOver) {
    let result = playRound(scissorsBtn.value, getComputerChoice());
    if (result === "player") {
      playerScore += 1;
      playerScoreDiv.textContent = playerScore;
    } else if (result === "computer") {
      computerScore += 1;
      computerScoreDiv.textContent = computerScore;
    }

    if (computerScore === MAX_SCORE || playerScore === MAX_SCORE) {
      gameOver = true;
      computerScore = 0;
      playerScore = 0;
      const div = document.querySelector('.result-info');
      div.textContent = "Game Over!";
    }
  }
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerChoice, computerChoice) {
  let winner;

  if (playerChoice === "rock" && computerChoice === "rock") {
    const div = document.querySelector('.result-info');
    div.textContent = "It's a tie!";
    console.log("It's a tie!");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    winner = "computer";
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    winner = "player"
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`;
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }

  if (playerChoice === "paper" && computerChoice === "paper") {
    const div = document.querySelector('.result-info');
    div.textContent = "It's a tie!";
    console.log("It's a tie!");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    winner = "computer";
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`;
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    winner = "player";
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`;
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }

  if (playerChoice === "scissors" && computerChoice === "scissors") {
    const div = document.querySelector('.result-info');
    div.textContent = "It's a tie!";
    console.log("It's a tie!");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    winner = "computer";
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`;
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. The computer wins!`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    winner = "player";
    const div = document.querySelector('.result-info');
    div.textContent = `The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`;
    console.log(`The computer selected ${computerChoice} and you selected ${playerChoice}. You win!`);
  }
  return winner;
}

// if (computerScore === 5 || playerScore === 5) {
//   if (computerScore === 5) {
//     const div = document.querySelector('.result-info');
//     div.textContent = 'The Computer wins!';
//   } else {
//     const div = document.querySelector('.result-info');
//     div.textContent = 'You win!';
//   }
// }






// function game() {
//   let computerScore = 0;
//   let playerScore = 0;

//   for (let i = 1; i <= 5; i += 1) {
//     let computerSelection = getComputerChoice();
//     let playerSelection = prompt('Please selection your choice: "rock", "paper" or "scissors"').toLowerCase();

//     let winner = playRound(playerSelection, computerSelection);

    
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
