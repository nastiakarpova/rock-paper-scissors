console.log("Hello there! Welcome to a little game..");

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const handSignals = ["rock", "paper", "scissors"];
    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];
}

console.log(computerSelection);