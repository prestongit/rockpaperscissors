//Picks a random number for the computer's pick.


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

//create a query selector for the play-by-play h1 element on index.html.
const plays = document.querySelector('.plays');


//Function that plays one round of rps, it also updates the DOM with the play by play.

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

//Initializes the score keeping variables.

let winCounter = 0;
let loseCounter = 0;


//create a query selector for updating the score on the DOM.

const scorecall = document.querySelector('.scorecall');


//Calls the playRound function, updates the score to the DOM using the scorecall query selector, and resets the win/lose counters when a score of 5 is reached.

function playGame(playerSelection) {

    for (i=0; i<1; i++) {
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection))
        
    }
    scorecall.textContent = `${winCounter} - ${loseCounter}`

    if(winCounter == 5) {
        plays.textContent = 'You win the game!'
        winCounter =0;
        loseCounter=0;
    }
    if(loseCounter == 5) {
        plays.textContent = 'You lose the game!'
        winCounter =0;
        loseCounter=0;
    }
}

//creates the functionality of the 3 button choices.

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

