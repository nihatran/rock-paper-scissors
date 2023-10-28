
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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            return "It's a tie! Rock and Rock"
        } else if (computerChoice === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }        
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return "It's a tie! Paper and Paper";
        } else if (computerChoice === "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            return "It's a tie! Scissors and Scissors";
        } else if (computerChoice === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    } else {
        return "Error: Rock, Paper, or Scissors was not entered."
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        // get and display player's choice
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        playerChoice = playerChoice.toLowerCase();
        console.log("Player chose: " + playerChoice);

        // get and display computer's choice
        let computerChoice = getComputerChoice();
        console.log("Computer chose: " + computerChoice);

        // display results 
        let results = playRound(playerChoice, computerChoice);
        console.log(results);

        // keep and display score
        if (results.includes("tie")) {
            playerScore += 1;
            computerScore += 1;
        } else if (results.includes("You Win!")) {
            playerScore += 1;
        }
        else if (results.includes("You Lose!")) {
            computerScore += 1;
        }

        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + computerScore);

        console.log("*********************")
    }
    
    // determine and display final winner
    console.log("Player final score: " + playerScore);
    console.log("Computer final score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You are the final winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer is the final winner!");
    } else
        console.log("It's a tie!");
}

game();






