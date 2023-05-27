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
const plays = document.querySelector('.plays');

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' ) {
        winCounter+= 1;
        plays.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection == computerSelection) {
        plays.textContent =  "It's a tie!"
    } 
    else {
        loseCounter+= 1;
        plays.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

let winCounter = 0;
let loseCounter = 0;

const scorecall = document.querySelector('.scorecall');


let playerSelection
const computerSelection = getComputerChoice();

function playGame(playerSelection) {

    for (i=0; i<1; i++) {
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection))
        
    }
    scorecall.textContent = `${winCounter} - ${loseCounter}`
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playGame("rock")
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playGame("paper")
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playGame("scissors")
});

