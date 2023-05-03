function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let winCounter = 0;
let loseCounter = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' ) {
        winCounter+= 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection == computerSelection) {
        return "It's a tie!"
    } 
    else {
        loseCounter+= 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}


let playerSelection
const computerSelection = getComputerChoice();

function playGame() {

    for (i=0; i<5; i++) {
        playerSelection = window.prompt("Rock, paper, or scissors?")

        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection))
        
    }
    return `The score is ${winCounter} to ${loseCounter}`

    winCounter = 0;
    loseCounter = 0;
}