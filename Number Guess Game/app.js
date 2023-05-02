/*
 GAME FUNCTION
 - PALYER GUESS A NUMBER...NUMBER MUST BE BETWEEN THE MIN AND MAX VALUE SET
 - PLAYERS IS ENTITLED A CERTAIN NUMBER OF GUESSES
 - NOTIFY PLAYER OF GUESSES LEFT
 - NOTIFY THE PLAYER OF THE CORRECT NUMBER IF PLAYER LOST
 - LET PLAYER TO CHOOSE TO PLAY AGAIN   
*/


// GAME VALUES(MIN and MAX)
let min = 1,
    max = 10,

    winningNum = getWinningNum(min,max)
    guessesLeft = 3;


   
    // UI ELements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),  
      Message = document.querySelector('.message');


    
// Assignr Min and Max value to UI
minNum.textContent = min
maxNum.textContent = max

// Play Again event Listner
game.addEventListener('click', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

// Add Event Listner to submit button
guessBtn.addEventListener('mousedown', function(){
    let guess = parseInt(guessInput.value)

    // Validate INput
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter a number between ${min} and ${max}`,'red')
    }

    // Check to see if it is the winning number
    if(guess === winningNum){
        // GAme Over You won

        GameOver(true,`${winningNum} is correct. You Won`)

       
    } else {
        // Number of guesses left
        guessesLeft -= 1

        if(guessesLeft === 0){
            // Game Over User Lost
            GameOver(false,`You are out of guessess..You lost. The correct number was ${winningNum}`)
        } else {
            guessInput.style.borderColor = 'red'

            //Clear input
            guessInput.value = '';

            // Game continues - answer wrong
            setMessage(`You are left with ${guessesLeft} guesses more`,'red')

        }
    }
})

// Game Over
function GameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red' // tenary operation works the same as the if else condition

     // Disable the input
     guessInput.disabled = true
     // Change the border to green or red based on the answet
     guessInput.style.borderColor = color

     // Set text color
     Message.style.color = color

     setMessage(msg)

     // Play again
     guessBtn.value = 'Play Again'
     guessBtn.className += 'play-again'
}

// Get winning Number
function getWinningNum(min, max){
   return (Math.floor(Math.random() * 10 + 1))
    // you can use this to get the random values from 1 to 10 since Math.random gives only 0 -1 * (max - min + 1)+min)
}

// setMessage
function setMessage(msg,color){
    Message.style.color = color
    Message.textContent = msg;
}