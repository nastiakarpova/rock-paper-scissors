console.log("Hello there! Welcome to a little game..");

const handSignals = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {

    const chosenSignal = Math.floor(Math.random() * 3);
    return handSignals[chosenSignal];

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 0;
    }

    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
    }

    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 1;
    }

    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
    }

    else {
        return 2;
    }

}

function writeScore (playerSelection, computerSelection, score) {

    if (score === 1) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (score === 2) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (score === 0) {
        return `It's a tie! Try again.`;
    }

}

function capitalizeFirstLetter(word) {

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}

function game(numOfRounds) {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numOfRounds; i++) {

        let playerSelection = getPlayerChoice();

        if (!(handSignals.includes(playerSelection))) {
            alert ("You must choose from the three options. Please, try again.");
            playerSelection = getPlayerChoice();
        }

        let computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);

        if (score === 0) {
            numOfRounds += 1;
        } else if (score === 1) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log(playerScore, " : ", computerScore);
        console.log(writeScore(playerSelection, computerSelection, score));

    }
        
    if (playerScore > computerScore) {
        console.log(`You won the whole game! The score is ${playerScore} : ${computerScore}`);
    } else {
        console.log(`You lost and computer won! The score is ${playerScore} : ${computerScore}`);
    }

}

function getPlayerChoice() {

    let playerSelection = prompt("Type your choice: Rock, Paper, Scissors");
    playerSelection = capitalizeFirstLetter(playerSelection);

    return playerSelection;

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