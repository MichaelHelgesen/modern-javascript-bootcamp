const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
}

Hangman.prototype.guessedLetters = function () {
    let letters = ['f', 'b', 's']
}

const word1 = new Hangman('Snow', 5)

const word2 = new Hangman('Cat', 10)

console.log(word1)
console.log(word2)

console.log(word1.guessedLetters())


