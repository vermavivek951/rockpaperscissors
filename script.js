function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3)+ 1;
    if(randomNum === 1)
        return "rock";
    if(randomNum === 2)
        return "paper";
    if(randomNum === 3)
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    
    setImage(playerSelection , computerSelection);

    if(playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        return `Its a tie! ${playerSelection} tied to ${computerSelection}`;
    }

    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "paper" && computerSelection === "paper") {
        return `Its a tie! ${playerSelection} tied to ${computerSelection}`;
    }

    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return `Its a tie! ${playerSelection} tied to ${computerSelection}`;
    }
    
}

function roundResult(playerSelection , computerSelection) {
    let result = playRound(playerSelection ,computerSelection);
    const div = document.querySelector("#results");
    div.textContent = result;
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click" , () => roundResult("rock" , computerPlay()));

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener("click" , () => roundResult("paper" , computerPlay()));

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener("click" , () => roundResult("scissors" , computerPlay()));

const youSelected = document.getElementById('youSelected');
const computerSelected = document.getElementById('computerSelected');


function selectImage(elementSelected) {
    if(elementSelected === 'rock') {        
        return './Images/rockIcon.png';
    }

    else if(elementSelected === 'paper') {
        return './Images/paper.png';
    }
    
    else if(elementSelected === 'scissors') {
        return './Images/scissorsIcon.png';
    }
}

function setImage(yourSelectedElement , computerSelectedElement) {
    yourSourceImage = selectImage(yourSelectedElement);
    computerSourceImage = selectImage(computerSelectedElement);

    youSelected.src = `${yourSourceImage}`;
    computerSelected.src = `${computerSourceImage}`;
    
    console.log(`youSelected.src === ${youSelected.src} , computerSelected.src = ${computerSelected.src}`);
}