const puzzleEl = document.querySelector('#word-to-guess')
const guessesEl = document.querySelector('#remaining-guesses')
const word1 = new Hangman('Cat', 3)

puzzleEl.textContent = word1.puzzle
guessesEl.textContent = word1.statusMsg

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    puzzleEl.textContent = word1.puzzle
    guessesEl.textContent = word1.statusMsg
})

