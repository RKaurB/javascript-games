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
 
// Take the possible choices, and for each possible choice (button), add event listener to listen out for a click
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   // Get the target id (i.e. whether id="rock", "paper", or "scissors") and store in userChoice variable
   userChoice = e.target.id;
   // Assign userChoice to userChoiceDisplay
   userChoiceDisplay.innerHTML = userChoice;
   // Call generateComputerChoice function
   generateComputerChoice();
}))

// Create generateComputerChoice function
function generateComputerChoice() {
    // Generate a random whole number between 1-3
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    // Test random number generator
    // console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
