const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}



const word1 = new Hangman('Snow', 5)

const word2 = new Hangman('Car', 10)

console.log(word1)
console.log(word2)