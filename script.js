
function getComputerChoice() {
    let computerChoiceInt = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoiceInt === 1) {
        return "Rock";
    } else if (computerChoiceInt === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let computerChoice = getComputerChoice();
