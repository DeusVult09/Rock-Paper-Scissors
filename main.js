function getComputerChoice() {
const result = Math.floor(Math.random() * 3);
  if (result === 0) {
    return "paper";
  } else if (result === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}

getComputerChoice();


const input = "Please, enter your choice: 'Rock', 'Paper' or 'Scissors'";

function getHumanChoice() {
  const response = prompt(input);
  
  if (response === null) {
    alert("Game canceled!");
  } else {
    return response.toLowerCase();
  }  
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) { 
    console.log("It's a tie!");
 } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    humanScore++; 
 } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won! ${humanChoice} beat ${computerChoice}!`);
    humanScore++;
 }  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
 }  else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
 }  else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(`You lose! ${computerChoice} beat ${humanChoice}!`); 
    computerScore++;
 }  else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  } else {
    console.log("Invalid input!");
  }
   console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
   humanScore = 0;
   computerScore = 0;
  
   for (let i = 0; i < 5; i++) {
     let humanSelection = getHumanChoice();       
     let computerSelection = getComputerChoice(); 
     playRound(humanSelection, computerSelection);
   }
  
playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
     console.log('Victory!');
   } else if (computerScore > humanScore) {
     console.log('Computer won!');
   } else {
     console.log("It's a draw!")
   }
}

playGame();
  
console.log(`Your current score is: ${humanScore}`);
console.log(`Computer current score is: ${computerScore}`);