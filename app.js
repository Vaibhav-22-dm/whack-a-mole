const square = document.querySelectorAll('.square') //An array to store all the squares.
const mole = document.querySelectorAll('.mole') //An array to store the square that contains the class 'mole'.
const timeLeft = document.querySelector('#time-left') //A variable to target the 'time-left' element which displays the time left.
let score = document.querySelector('#score') //A variable to target the 'score' element which displays the score.

let result = 0 //Varaible to store the result
let currentTime = timeLeft.textContent //Variable to store the current time left.

//Function to add the class 'mole' to a random square.
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole') //Before adding the class 'mole' to a random square, we first remove that class from all the squares.
    })
    let randomPosition = square[Math.floor(Math.random()*9)] //Variable to target a random square from the 'square' array.
    if(currentTime!=0) randomPosition.classList.add('mole') //Adding the class 'mole' to the random square.
    else{
        randomPosition = square[0] 
        randomPosition.classList.add('mole')
    } 

    //assign the id of the randomPosition  to hitPosition for us to use later
    hitPosition = randomPosition.id
}

//Adding a function called as 'id' that checks if the square clicked by the user is the same where the mole is currently present, to all the squares by looping over the 'square' array.
square.forEach(id => {
    id.addEventListener('mouseup', () => {

        //Checking if the id of the square clicked is equal to the value assigned to hitPosition.
        if(id.id === hitPosition){
            result = result + 1 //Increasing the result by one.
            score.textContent = result //Updating the score.
        }
    })
})

function moveMole() {
    let timerId = null //Initializing the 'timerId' to null.
    timerId = setInterval(randomSquare, 1000); //Running the function randomSquare for 1 second.
}

moveMole() //Rerunning the 'moveMol' function again and again till the if condition inside randomSquare function is satisfied.

//Function to update the countDown
function countDown(){
    currentTime-- //Decrementing the currentTime by one.
    timeLeft.textContent = currentTime //Updating the textContent in timeLeft.

    if(currentTime === 0){
        clearInterval(timerId) //Stopping the timerId when the countDown becomes zero.
        alert('GAME OVER! Your final score is ' + result) //Alerting the user that the game is over.
    }

}

let timerId = setInterval(countDown, 1000) //Rerunning the countDown function again and again to update the currentTime.

