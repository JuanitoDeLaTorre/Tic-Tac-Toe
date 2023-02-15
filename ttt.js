// This is grabbing the HTML with the class of currentTurn
// As good convention, I write my variables at the top of the file
// querySelector will grab THE FIRST item it sees that matches
const currentPlayerHTML = document.querySelector('#currentTurn');
// Other options is make the HTML have an id and use document.getElementById('currentTurn');
// As good practice, COMMENT out console.log statements
console.log(currentPlayerHTML);
// querySelectorAll will ALWAYS grab ALL of the items. This always create an array that is grabbing every item
const squares = document.querySelectorAll('.square');
console.log(squares);
// Initialize player
let player;

// Half the time randomly make player X and half the time make player O
if(Math.random() > 0.5) {player = 'X'}
else {player = "O"};

console.log(player);


// I put my functions in this spot 
// Write a function to change the DOM so I know whose turn it is
function updateTurnOnDOM() {
    currentPlayerHTML.innerHTML = `It is ${player}'s turn`;
    // Return is only needed if at some point I need the VALUE of what this function does
    return;
}
updateTurnOnDOM();

// I put my event listeners at the bottom https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        if(player === 'X') {
            squares[i].innerHTML = "X";
            player = "O";
        } else {
            squares[i].innerHTML = "O";
            player = "X";
        }
        updateTurnOnDOM();
    })
}

// squares.forEach(square => {
//     square.addEventListener('click', () => {
//         console.log("Listening");
//     })
// })