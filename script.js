let gameChoice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomizeChoice = gameChoice[Math.floor(Math.random() * 3)];
  return randomizeChoice;
}

function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors:");
  if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
    console.log("You chose " + userInput);
    return userInput;
  } else {
    console.log("Error! Invalid choice, try again!");
    return null;
  }
}

function playRound(computerChoice, humanChoice) {
   
  if (computerChoice === humanChoice) {
    console.log("Draw");
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    console.log("You win!");
    humanScore += 1;
  } else {
    console.log("You lose!");
    computerScore += 1;
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function game() {
    for (let i = 1; i < 6; i++){
    const computerChoice = getComputerChoice();
     const humanChoice = getHumanChoice();

  if (humanChoice !== null) {
    playRound(computerChoice, humanChoice);
  } else {
    console.log("Round skipped due to invalid human choice.");
  }
  
}
}

game();
