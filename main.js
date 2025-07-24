
function getComputerChoice(num) {
const result = Math.floor(Math.random() * num);
  if (result === 0) {
    console.log('Paper');
  } else if (result === 1) {
    console.log('Rock');
  } else {
    console.log('Scissors');
  }
}

console.log(getComputerChoice(3));


const input = ("Please, enter your choice: 'Rock', 'Paper' or 'Scissors'"); 

function getHumanChoice() {
    return prompt(input).toLowerCase();
}

getHumanChoice();


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) { 
    console.log("It's a tie!");
 } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won! Rock beats scissors!");
    humanScore++; 
 } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won! Scissors beat paper!");
    humanScore++;
 }  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper beats rock!");
    humanScore++;
 }  else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats scissors!");
    computerScore++;
 }  else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beat paper!"); 
    computerScore++;
 }  else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock!");
    computerScore++;
  } else {
    console.log("Invalid input!");
  }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);


playRound(humanSelection, computerSelection);



