
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
            return "It's a tie! Rock ties with Rock"
        } else if (computerChoice === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }        
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return "It's a tie! Paper ties with Paper";
        } else if (computerChoice === "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "scissors") {
            return "It's a tie! Scissors ties with Scissors";
        } else if (computerChoice === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    } else {
        return "Error: Rock, Paper, or Scissors was not entered."
    }
}

function gameResults(results, playerScore, computerScore, playerImage, computerImage) {
    let resultsContainer = document.querySelector(".results-container");
    let playerPoints = document.querySelector(".player-score");
    let computerPoints = document.querySelector(".computer-score");
    let playerCard = document.querySelector(".player-card");
    let computerCard = document.querySelector(".computer-card");

    resultsContainer.textContent = results;
    playerPoints.textContent = ("Player: " + playerScore);
    computerPoints.textContent = ("Computer: " + computerScore);
    playerCard.appendChild(playerImage);
    computerCard.appendChild(computerImage);

    if (playerScore === 5) {
        resultsContainer.textContent = "You are the Final Winner!";
        resultsContainer.style.color = "gold";
        return true;
    } else if (computerScore === 5) {
        resultsContainer.textContent = "The Computer is the Final Winner"
        resultsContainer.style.color = "gold";
        return true;
    } else {
        return false;
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    let buttons = document.querySelectorAll("button");
    let playerImage = document.querySelector("#player")
    let computerImage = document.querySelector("#computer")
        
    let gameOver = false;

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (gameOver === false) {
                let playerChoice = e.currentTarget.id;
                console.log("Player chose: " + playerChoice);
                    
                let computerChoice = getComputerChoice();
                console.log("Computer chose: " + computerChoice);
        
                if(playerChoice.includes("rock")) {
                    playerImage.src = "rock.png";
                } else if (playerChoice.includes("paper")) {
                    playerImage.src = "paper.png";
                } else {
                    playerImage.src = "scissors.png";
                }
        
                if(computerChoice.includes("rock")) {
                    computerImage.src = "rock.png";
                } else if (computerChoice.includes("paper")) {
                    computerImage.src = "paper.png";
                } else {
                    computerImage.src = "scissors.png";
                }
        
                let results = playRound(playerChoice, computerChoice);
                if (results.includes("tie")) {
                    playerScore += 0;
                    computerScore += 0;
                } else if (results.includes("You Win!")) {
                    playerScore += 1;
    
                }
                else if (results.includes("You Lose!")) {
                    computerScore += 1;
                }
    
                gameOver = gameResults(results, playerScore, computerScore, playerImage, computerImage);
            }
        });
    });
}


game();
