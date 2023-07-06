console.log("Hello there! Welcome to a little game..");

const playerSelection = "scISsors";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const handSignals = ["Rock", "Paper", "Scissors"];
    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];
}

function playRound(playerSelection, computerSelection) {

    const playerSelectionCap = capitalizeFirstLetter(playerSelection);
    console.log(playerSelectionCap);

    const youWin = `You win! ${playerSelectionCap} beats ${computerSelection}.`;
    const youLose = `You lose! ${computerSelection} beats ${playerSelectionCap}.`;
    const itIsTie = `Its a tie! Try again.`;


    if (playerSelectionCap === computerSelection) {
        return itIsTie;
    }

    else if (playerSelectionCap === "Paper" && computerSelection === "Rock") {
        return youWin;
    }

    else if (playerSelectionCap === "Rock" && computerSelection === "Scissors") {
        return youWin;
    }

    else if (playerSelectionCap === "Scissors" && computerSelection === "Paper") {
        return youWin;
    }

    else {
        return youLose;
    }

}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
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