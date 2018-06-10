const puzzleEl = document.querySelector('#word-to-guess')
const guessesEl = document.querySelector('#remaining-guesses')
const word1 = new Hangman('Cat', 3)

puzzleEl.textContent = word1.puzzle
guessesEl.textContent = word1.statusMsg

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    puzzleEl.textContent = word1.puzzle
    guessesEl.textContent = word1.statusMsg
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})




// Create a new function for getting country details
// Call it with two arguments: country code, the callback function
// Make the HTTP request and call the callback with country information
// Use the callback to print the country name
getCountry('NO', (error, name) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(name)
    }
})