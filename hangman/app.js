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
}).catch ((err) => {
    console.log(`Error: ${err}`)
})

// Convert getCountry to use fetch and return a promise
// Make sure getCountry still resolves with the country that matches
// Change getCountry usage to use catch


getCountry('NO').then((country) => {
    console.log(country.name)
}).catch ((err) => {
    console.log(`Error: ${err}`)
})
 


/* fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
}) */