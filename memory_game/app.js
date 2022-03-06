// Create a card array - with 12 cards
// To add elements to our grid
const cardArray = [
    // Add objects to array - card options
    {
        name: 'acorn',
        img: 'images/acorn.png'
    },
    {
        name: 'earth',
        img: 'images/earth.png'
    },
    {
        name: 'ladybug',
        img: 'images/ladybug.png'
    },
    {
        name: 'mushroom',
        img: 'images/mushroom.png'
    },
    {
        name: 'rain',
        img: 'images/rain.png'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
        name: 'acorn',
        img: 'images/acorn.png'
    },
    {
        name: 'earth',
        img: 'images/earth.png'
    },
    {
        name: 'ladybug',
        img: 'images/ladybug.png'
    },
    {
        name: 'mushroom',
        img: 'images/mushroom.png'
    },
    {
        name: 'rain',
        img: 'images/rain.png'
    },
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    },
    {
        name: 'rainbow',
        img: 'images/rainbow.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    },
    {
        name: 'rainbow',
        img: 'images/rainbow.png'
    }
]

// Test original cardArray
// console.log(cardArray);

// Sort cardArray elements randomly
cardArray.sort(() => 0.5 - Math.random());

// Test randomly sorted cardArray
// console.log(cardArray);

// Use querySelector to search for the grid id and save into gridDisplay
const gridDisplay = document.querySelector('#grid');

// Create new, empty array - chosen cards will be pushed into the array
let cardsChosen = [];

// Create another empty array for chosen card id's
let cardsChosenIds = [];

// Create empty array for how many matches 
const cardsWon = [];

// Test gridDisplay
// console.log(gridDisplay);

// Function to create the grid board
function createBoard () {
    // For each item in cardArray, create an image element
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        // Test loop
        // console.log(card, i);
        // Once created, add an image to it
        // Set the source attribute to the image, and blank card
        card.setAttribute('src', 'images/color-abstract.png');
        // Test loop
        // console.log(card, i);
        // Add unique id to each card
        card.setAttribute('data-id', i);
        // Test loop
        // console.log(card, i);
        // Add event listener to card - call flipCard function if card clicked
        card.addEventListener('click', flipCard);
        // Append card to the grid display
        gridDisplay.appendChild(card);
    }
}
createBoard();

// Function to check for match
function checkMatch() {
    // Get every single card image on the grid and save in cards variable
    const cards = document.querySelectorAll('#grid img')
    // Test all cards
    console.log(cards);
    // Test checking for match
    // console.log("check for match!");
    // If first card image chosen is same as second card image chosen
    if (cardsChosen[0] == cardsChosen[1]) {
        // Alert says match
        alert("It's a match!");
        // Go into all the cards in our document, and pass in the chosen id's first and second item - then assign the blank (white) background to those cards if a match
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
        // Remove event listener to stop listening out for clicks - i.e. remove ability to click on the cards
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        // Push in the matched contents of cardsChosen array
        // Records how many cards won, i.e. how many matches
        cardsWon.push(cardsChosen);
    }
    // Then empty cardsChosen and cardsChosenIds arrays, to start process again
    cardsChosen = [];
    cardsChosenIds = [];
}

// Function to flip card when clicked
function flipCard() {
    // Test shuffled card array
    console.log(cardArray);
    // Get this card id and store in cardId
    const cardId = this.getAttribute('data-id');
    // Push card img name into cardsChosen array
    cardsChosen.push(cardArray[cardId].name);
    // Push card id into the chosen ids
    cardsChosenIds.push(cardId);
    // Test clicked and card id
    // Pass card id into cardArray to return the img name
    // console.log('clicked', cardId); 
    // console.log(cardArray[cardId].name);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    // Add image when flipped, and assign it to the card
    this.setAttribute('src', cardArray[cardId].img);
    // If two cards in cardsChosen array
    if (cardsChosen.length === 2) {
        // Call checkMatch function after 500ms has passed
        setTimeout(checkMatch, 500);
        // Check for a match
    }
}
