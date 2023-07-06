console.log("Hello there! Welcome to a little game..");

const playerSelection = "scISsors";
let computerSelection = getComputerChoice();

function getComputerChoice() {
    const handSignals = ["Rock", "Paper", "Scissors"];
    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];
}

function playRound(playerSelection, computerSelection) {

    const playerSelectionCap = capitalizeFirstLetter(playerSelection);
    // console.log(playerSelectionCap);

    const youWin = `You win! ${playerSelectionCap} beats ${computerSelection}.`;
    const youLose = `You lose! ${computerSelection} beats ${playerSelectionCap}.`;
    const itIsTie = `Its a tie! Try again.`;


    if (playerSelectionCap === computerSelection) {
        return 0;
    }

    else if (playerSelectionCap === "Paper" && computerSelection === "Rock") {
        return 1;
    }

    else if (playerSelectionCap === "Rock" && computerSelection === "Scissors") {
        return 1;
    }

    else if (playerSelectionCap === "Scissors" && computerSelection === "Paper") {
        return 1;
    }

    else {
        return 2;
    }

}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function game(numOfRounds) {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numOfRounds; i++) {
        computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        // console.log(score);
        if (score === 0) {
            console.log("tie");
            numOfRounds += 1;
        } else if (score === 1) {
            playerScore += 1
            console.log("win");
            console.log(playerScore);
        } else {
            computerScore += 1;
            console.log("lose");
            console.log(computerScore);
        }
    }
        
    if (playerScore > computerScore) {
        console.log(`You won the whole game! The score is ${playerScore} : ${computerScore}`);
    } else {
        console.log(`You lost and computer won! The score is ${playerScore} : ${computerScore}`);
    }
}

console.log(game(5));

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