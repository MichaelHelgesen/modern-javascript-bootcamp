const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['f', 'a', 'l']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

   this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
   })

   return puzzle
   
    
    
/*     printWord = []
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            printWord.push(letter)
        } else if (letter === ' ') {
            printWord.push(' ')
        } else {
            printWord.push('*')
        }
    })
    return printWord.join('')  */
}

const word1 = new Hangman('Snow fall', 5)

const word2 = new Hangman('Cat', 10)

console.log(word1)
console.log(word2)

console.log(word1.getPuzzle())


