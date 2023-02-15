// This is grabbing the HTML with the class of currentTurn
// As good convention, I write my variables at the top of the file
// querySelector will grab THE FIRST item it sees that matches
const currentPlayerHTML = document.querySelector('#currentTurn');
// Other options is make the HTML have an id and use document.getElementById('currentTurn');
// As good practice, COMMENT out console.log statements
// querySelectorAll will ALWAYS grab ALL of the items. This always create an array that is grabbing every item
const squares = document.querySelectorAll('.square');
const reset = document.querySelector(".reset")
const check = document.querySelector(".check")
const xWins = document.querySelector(".xWins")

//select all block ID's
let tl = document.querySelector("#tl")
let tc = document.querySelector("#tc")
let tr = document.querySelector("#tr")
let ml = document.querySelector("#ml")
let mc = document.querySelector("#mc")
let mr = document.querySelector("#mr")
let bl = document.querySelector("#bl")
let bc = document.querySelector("#bc")
let br = document.querySelector("#br")

let squareValues = [[tl.innerText,tc.innerText,tr.innerText],[ml.innerText,mc.innerText,mr.innerText],[bl.innerText,bc.innerText,br.innerText]]




// Initialize player
let player;

// Half the time randomly make player X and half the time make player O
if(Math.random() > 0.5) {player = 'X'}
else {player = "O"};



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

reset.addEventListener("click",()=> {
    squares.forEach((square)=> {
        square.innerHTML = ""
    })
})

check.addEventListener("click",()=> {
    // console.log(tl.innerText)
    // console.log(mc.innerText)
    // console.log(br.innerText)
    if(tl.innerText === "X" && mc.innerText === "X" && br.innerText === "X") {
        xWins.innerText = "X has 1 wins"
    }
    updateSquareValues();
})

function updateSquareValues() {
    squareValues[0][0] = tl.innerText;
    squareValues[0][1] = tc.innerText;
    squareValues[0][2] = tr.innerText;
    squareValues[1][0] = ml.innerText;
    squareValues[1][1] = mc.innerText;
    squareValues[1][2] = mr.innerText;
    squareValues[2][0] = bl.innerText;
    squareValues[2][1] = bc.innerText;
    squareValues[2][2] = br.innerText;
    console.log(squareValues)
}

// squares.forEach(square => {
//     square.addEventListener('click', () => {
//         console.log("Listening");
//     })
// })