

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



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const resultDiv = document.querySelector('.result');
    const scoreDiv = document.querySelector('.score');
    const finalResultDiv = document.querySelector('.final-result');
    finalResultDiv.textContent = ``;
    resultDiv.textContent = ``;
    if (humanChoice === computerChoice) {
        resultDiv.textContent += `It's a tie!`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDiv.textContent += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultDiv.textContent += `Computer wins! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
    if (humanScore === 5) {
        finalResultDiv.textContent = `Congratulations! You won the game!`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        finalResultDiv.textContent = `Sorry! Computer won the game!`;
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.className;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
