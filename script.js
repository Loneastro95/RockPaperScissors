const container = document.querySelector(".container")
let gameChoice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const paper =  document.createElement("button");
const rock =  document.createElement("button");
const scissors =  document.createElement("button");
const result = document.createElement("div")
paper.textContent = "Paper";
rock.textContent = "Rock";
scissors.textContent = "Scissors";
container.append(paper, rock, scissors, result)

function getComputerChoice() {
  let randomizeChoice = gameChoice[Math.floor(Math.random() * 3)];
  return randomizeChoice;
}


function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
   
  if (computerChoice === humanChoice) {
    result.textContent = 'Draw';
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    result.textContent ="You win!";
    humanScore += 1;
  } else {
    result.textContent ="You lose!";
    computerScore += 1;
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

