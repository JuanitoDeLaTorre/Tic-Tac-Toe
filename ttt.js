// This is grabbing the HTML with the class of currentTurn
// As good convention, I write my variables at the top of the file

// const { add } = require("nodemon/lib/rules");

// const { add } = require("nodemon/lib/rules");

// querySelector will grab THE FIRST item it sees that matches
const currentPlayerHTML = document.querySelector('#currentTurn');
// Other options is make the HTML have an id and use document.getElementById('currentTurn');
// As good practice, COMMENT out console.log statements
// querySelectorAll will ALWAYS grab ALL of the items. This always create an array that is grabbing every item
const squares = document.querySelectorAll('.square');
const reset = document.querySelector(".reset")
const check = document.querySelector(".check")
const xWins = document.querySelector(".xWins")
const xDOM = document.querySelector(".X")
const oDOM = document.querySelector(".O")

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
console.log(squareValues)


let xWinsCount = 0;
let oWinsCount = 0;


// Initialize player
let player;

//function to check if an array is all the same (taken from: https://dev.to/rajnishkatharotiya/function-to-check-if-all-records-are-equal-in-array-javascript-3mo3#:~:text=Javascript%20Useful%20Snippets%20%E2%80%94%20allEqual(),allEqual%20%3D%20arr%20%3D%3E%20arr.)
const allEqual = arr => arr.every(val => val === arr[0]);


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
        
        if(!squares[i].innerText){
            if(player === 'X') {
                squares[i].innerHTML = "X";
                player = "O";
            } else {
                squares[i].innerHTML = "O";
                player = "X";
            }
            updateSquareValues();
            checkDone();
            updateTurnOnDOM();
        }
        
    })
}

reset.addEventListener("click",resetBoard)

// check.addEventListener("click",()=> {
//     // console.log(tl.innerText)
//     // console.log(mc.innerText)
//     // console.log(br.innerText)
//     updateSquareValues();
//     checkDone()
//     if(tl.innerText === "X" && mc.innerText === "X" && br.innerText === "X") {
//         xWins.innerText = "X has 1 wins"
//     }
    
// })

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

function resetBoard() {
    squares.forEach((square)=> {
        square.innerHTML = ""
    })
    squareValues[0][0] = "";
    squareValues[0][1] = "";
    squareValues[0][2] = "";
    squareValues[1][0] = "";
    squareValues[1][1] = "";
    squareValues[1][2] = "";
    squareValues[2][0] = "";
    squareValues[2][1] = "";
    squareValues[2][2] = "";
}



function checkDone (arr) {
    console.log("CHECKING!")

    //check rows
    for(let i = 0; i < squareValues.length;i++){

        if (allEqual(squareValues[i]) && !squareValues[i].includes('')){
            // console.log(squareValues[i].includes(''))
            console.log("found a winning row of type " + squareValues[i][0])
            addWins(squareValues[i][0])
            resetBoard();
            return;
        }
    }

    //check columns
    for(let i = 0; i < squareValues.length;i++){
        let checkArray = []
        for(let j = 0; j < squareValues[i].length;j++){
            checkArray.push(squareValues[j][i])
        }
        if(allEqual(checkArray) && !checkArray.includes('')) {
            console.log("found a winning column of type "+ checkArray[0])
            addWins(checkArray[0])
            resetBoard()
            return;
        }
    }

    //check diagonal
    let checkValue = '';
    if((allEqual([tl.innerText, mc.innerText, br.innerText]) && ![tl.innerText, mc.innerText, br.innerText].includes('')|| allEqual([tr.innerText,mc.innerText,bl.innerText]) && ![tr.innerText,mc.innerText,bl.innerText].includes(''))){
        addWins(mc.innerText);
        resetBoard()
        return;
    }
}

function addWins(type) {
    if(type === "X") {
        xWinsCount++
        xDOM.innerText = xWinsCount
    } else {
        oWinsCount++
        oDOM.innerText = oWinsCount 
    }
}

// squares.forEach(square => {
//     square.addEventListener('click', () => {
//         console.log("Listening");
//     })
// })