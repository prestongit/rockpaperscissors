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


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection == computerSelection) {
        return "It's a tie!"
    } 
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

const playerSelection = 'paper'
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))


