console.log("Hello there! Welcome to a little game..");

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const handSignals = ["Rock", "Paper", "Scissors"];
    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];
}

function playRound(playerSelection, computerSelection) {

    const youWin = `You win! ${playerSelection} beats ${computerSelection}.`;
    const youLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
    const itIsTie = `Its a tie! Try again.`;


    if (playerSelection === computerSelection) {
        return itIsTie;
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return youWin;
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return youWin;
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return youWin;
    }

    else {
        return youLose;
    }

}

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// console.log(playRoundAlternative(playerSelection, computerSelection));



// function playRoundAlternative(playerSelection, computerSelection) {

//     const youWin = `You win! ${playerSelection} beats ${computerSelection}.`;
//     const youLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
//     const itIsTie = `Its a tie! Try again.`;

//     return (playerSelection === computerSelection) ? itIsTie
//         : (playerSelection === "paper" && computerSelection === "rock") ? youWin
//         : (playerSelection === "rock" && computerSelection === "scissors") ? youWin
//         : (playerSelection === "scissors" && computerSelection === "paper") ? youWin
//         : youLose;
// }