
function getComputerChoice() {
    let computerChoiceInt = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoiceInt === 1) {
        return "rock";
    } else if (computerChoiceInt === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// get player's choice
let playerChoice = prompt("Rock, Paper, or Scissors?");
playerChoice = playerChoice.toLowerCase();

// get computer's choice
let computerChoice = getComputerChoice();


