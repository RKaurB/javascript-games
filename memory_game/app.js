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
    }
]

// Test original cardArray
// console.log(cardArray);

// Sort cardArray elements randomly
cardArray.sort(() => 0.5 - Math.random());

// Test randomly sorted cardArray
// console.log(cardArray);
