// Create a card array - with 12 cards
// To add elements to our grid
const cardArray = [
    // Add objects to array
    {
        name: 'acorn',
        img: 'images/fries.png'
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
        img: 'images/fries.png'
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
        card.setAttribute('src', 'images/color.png');
        // Test loop
        // console.log(card, i);
        // Add unique id to each card
        card.setAttribute('data-id', i);
        // Test loop
        // console.log(card, i);
        // Append card to the grid display
        gridDisplay.appendChild(card);
    }
}

createBoard();
