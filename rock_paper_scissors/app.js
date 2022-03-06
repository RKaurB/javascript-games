// Select the span elements by ID
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
// Use query selector for all butttons
const possibleChoices = document.querySelectorAll('button');
// Declare global userChoice variable
let userChoice;
// Declare global computerChoice variable
let computerChoice;
// Declare global result variable
let result;
 
// Take the possible choices, and for each possible choice (button), add event listener to listen out for a click
// When user choice button clicked...
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   // Get the target id (i.e. whether id="rock", "paper", or "scissors") and store in userChoice variable
   userChoice = e.target.id;
   // Assign userChoice to userChoiceDisplay
   userChoiceDisplay.innerHTML = userChoice;
   // Call generateComputerChoice function
   generateComputerChoice();
   // Call getResult function
   getResult();
}))

// Create function to randomly generate and display computer choice
function generateComputerChoice() {
    // Generate a random whole number between 1-3
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    // Test random number generator
    // console.log(randomNumber);
    // Assign 'rock', 'paper', or 'scissors' to computerChoice, based on randomly generated number
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    // Display computer choice
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Create function to display result
function getResult() {
    if (computerChoice === userChoice) {
        // If computer and user choice are the same
        // Store the message 'it's a draw!' in result
        result = "it's a draw!";
    } 
    else if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock')) {
        // Else, if user choice beats computer choice
        // Store the message 'you win!' in result
        result = "you win!";
    }
    else if ((computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper') || (computerChoice === 'rock' && userChoice === 'scissors')) {
        // Else if computer choice beats user choice
        // Store the message 'you lose!' in result
        result = "you lose!";
    }
    // Display result
    resultDisplay.innerHTML = result;
    console.log(result);
}
