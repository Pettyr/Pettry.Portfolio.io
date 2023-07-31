let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
const generateTarget =() => {
 return Math.floor(Math.random()*10)
} 
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let x = Math.abs(humanGuess - secretTarget)
    let y = Math.abs(computerGuess - secretTarget)
    if (x<=y) {
        return true
    } else if (x>y) {
        return false
    } 
}
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++
    }
    else if (winner === 'computer') {
        computerScore++
    }
}
const advanceRound = () => {
        currentRoundNumber++
}


