

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
    console.log(word1.status)
})

