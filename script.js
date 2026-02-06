

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

for (let i = 0; i < 5; i++) {
    playRound(humanChoice, computerChoice);
}