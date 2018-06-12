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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(err)
})




// Convert getCountry to return a new promise
// Call getCountry and use then to print country name or the error
getCountry('NO').then((country) => {
    console.log(country)
}, (err) => {
    console.log(err)
})