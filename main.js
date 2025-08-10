
document.addEventListener('DOMContentLoaded', () => {
  let typed = new Typed('#typed', {
    strings: ['Rock','Paper','Scissors','Shoot!'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true
});

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;


const humanScoreEl = document.querySelector('.human-score');
const computerScoreEl = document.querySelector('.computer-score');

//elements in the popup window after the choice is made:

const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupTitle = document.getElementById('popup-title');
const popupMsg = document.getElementById('popup-message');
const resetBtn = document.getElementById('reset-btn');

function getComputerChoice() {
  const result = Math.floor(Math.random() * 3);
  return result === 0 ? 'paper' : result === 1 ? 'rock' : 'scissors';
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultText = "";
  let resultColor = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
    resultColor = "grey";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultText = "You won!";
    resultColor = "green";
    humanScore++;
  } else {
    resultText = "You lose!";
    resultColor = "red";
    computerScore++;
  }

  roundCount++;


  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  popupTitle.style.color = resultColor;
  popupTitle.style.fontFamily = "'Inconsolata', monospace";
  popupTitle.style.fontSize = "3rem";

  popupTitle.textContent = resultText;
  popupMsg.innerHTML = `Computer chose <strong>${computerChoice}</strong>.`;
  popup.classList.remove('hidden');

  if (roundCount === 5) {
    showFinalResult ();
    resetBtn.classList.remove("hidden");
  }

}

function showFinalResult() {
  let finalText = "";
  let finalColor = "";
  
  if (humanScore > computerScore) {
    finalText = "Victory!";
    finalColor = "green";
  } else if (computerScore > humanScore) {
    finalText = "Computer won the game!";
    finalColor = "red";
  } else {
    finalText = "It's a draw!"
    finalColor = "grey";
  }

  popupTitle.textContent = finalText;
  popupTitle.style.color = finalColor; 
  popupMsg.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
  popup.classList.add("hidden");
  resetBtn.classList.add("hidden");
}


document.getElementById('btn-1').addEventListener ('click', () => playRound('rock'));
document.getElementById('btn-2').addEventListener ('click', () => playRound('paper'));
document.getElementById('btn-3').addEventListener ('click', () => playRound('scissors'));

closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
resetBtn.addEventListener('click', resetGame);

});




