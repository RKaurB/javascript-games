// Create a card array - with 12 cards
// To add elements to our grid
const cardArray = [
    // Add objects to array - card options
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

// Create new, empty array - chosen cards will be pushed into the array
const cardsChosen = [];


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
        // Add event listener to card - call flipCard function if card clicked
        card.addEventListener('click', flipCard);
        // Append card to the grid display
        gridDisplay.appendChild(card);
    }
}

createBoard();

// Function to flip card when clicked
function flipCard() {
    // Test shuffled card array
    console.log(cardArray);
    // Get this card id and store in cardId
    const cardId = this.getAttribute('data-id');
    // Push card img name into cardsChosen array
    cardsChosen.push(cardArray[cardId].name);
    // Test clicked and card id
    // Pass card id into cardArray to return the img name
    console.log('clicked', cardId); 
    // console.log(cardArray[cardId].name);
    console.log(cardsChosen);
    // Add image when flipped, and assign it to the card
    this.setAttribute('src', cardArray[cardId].img);
}
