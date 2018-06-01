// - Setup new "status" property with initial value of "playing" 
// Creat a method for recalculating status to "playing", "finished", of "failed".
// Call that method after a guess is processed
// Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses and see "failed".
// Refresh the browser and guess "c", "a" and "t" to see "finished"

const word1 = new Hangman('Cat', 2)
console.log(word1.getPuzzle())

const toDOM = function () {
    document.querySelector('#word-to-guess').textContent = word1.getPuzzle()
    document.querySelector('#game-over').textContent =`Remaining guesses: ${word1.guesses}`
}



toDOM()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    toDOM()
    word1.calculateStatus()
    console.log(word1.status)
})

// Hvis jeg ikke har flere guesses, så er status "failed"