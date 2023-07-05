console.log("Hello there! Welcome to a little game..");

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const handSignals = ["rock", "paper", "scissors"];
    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Its a tie! Try again.`);
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }

}

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));