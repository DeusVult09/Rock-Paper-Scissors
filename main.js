
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


const humanScore = 0;
const ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
  if input === 'rocks'  &&  getComputerChoice === 'Paper' {
    console.log('You lost! Paper beats Rock');
  }
}





