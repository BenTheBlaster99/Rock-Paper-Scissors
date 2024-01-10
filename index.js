function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)] 
    return choices;
}
function plays(playerSelection, computerChoice) {
    const validSelection = ['Rock', 'ROCK', 'RocK'];
   
    if (!validSelection.includes(playerSelection)) {
        console.log('Invalid selection. please choose Rockk, Paper, scissors');
        return;
    }
    if (computerChoice === 'Paper') {
        console.log(`You lose ! Paper beats rock`);
    } else if (computerChoice === 'Scissors') {
        console.log('You win!');
    } else if (computerChoice === 'Rock') {
        console.log('Draw!');
    }    
}
function plays(playerSelection, computerChoice) {
    const validSelection = ['Paper'];
    const computerChoice = getComputerChoice();
    if (!validSelection.includes(playerSelection)) {
        console.log('Invalid selection. please choose Rockk, Paper, scissors');
        return;
    }
    if (computerChoice === 'Paper') {
        console.log(`Draw`);
    } else if (computerChoice === 'Scissors') {
        console.log('You lose!');
    } else if (computerChoice === 'Rock') {
        console.log('you WIN!');
    }    
}
function plays(playerSelection, computerChoice) {
    const validSelection = ['Scissors'];
    const computerChoice = getComputerChoice();
    if (!validSelection.includes(playerSelection)) {
        console.log('Invalid selection. please choose Rockk, Paper, scissors');
        return;
    }
    if (computerChoice === 'Paper') {
        console.log(`You Win ! Scissors cuts papers`);
    } else if (computerChoice === 'Scissors') {
        console.log('You win!');
    } else if (computerChoice === 'Rock') {
        console.log('YOU LOSE HAHA!');
    }    
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your selection:');
        const computerSelection = getComputerChoice();
        plays(playerSelection,computerSelection);
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
plays(playerSelection, computerSelection);
game();

///////////////////




function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function plays(playerSelection, computerChoice) {
    const validSelection = ['Rock', 'Paper', 'Scissors'];
    if (validSelection.includes(playerSelection)) {
        console.log('invalid selection, please choose something');
        return;
    }
    console.log(`player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerChoice}`);

    if (computerChoice === 'Paper' && playerSelection === 'Rock') {
        console.log('You lose! Paper beats Rock.');
    } else if (computerChoice === 'Scissors' && playerSelection === 'Paper') {
        console.log('You lose! Scissors cut Paper.');
    } else if (computerChoice === 'Rock' && playerSelection === 'Scissors') {
        console.log('You lose! Rock beats Scissors.');
    } else if (computerChoice === playerSelection) {
        console.log('Its a draw!');
    } else {
        console.log('You Win');
    }

}

function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('enter your selection:');
        const computerSelection = getComputerChoice();
        plays(playerSelection, computerSelection);
    }
}
game()