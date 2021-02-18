//connect "Guess" button to "random" function 
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer() {
  //get number typed in by user and covert to an integer 
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  //generate random number 
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt(randomNumber)
  
  //compare the numbers 
  if (userGuess == randomNumber) {
    document.getElementById('answer').innerHTML = "You got it right!"
  }
  
}