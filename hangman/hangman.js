// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
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

Hangman.prototype.guess = function () {
    console.log(arguments)
    
    for (i = 0; i < arguments.length; i++) {
        this.guessedLetters.push(arguments[i])

        if (!this.word.includes(arguments[i])) {
            this.guesses -= 1
        }
    }
    
    //var args = Array.prototype.slice.call(arguments);
    //this.guessedLetters.push(args)
}

const word1 = new Hangman('Cat', 2)
// Guess c, t, z
word1.guess('c', 't', 'z')
console.log(word1.getPuzzle()) // c*t
// Print remaining guesses
console.log(`Remaining guesses: ${word1.guesses}`)
console.log(word1.guessedLetters)

const word2 = new Hangman('New Jersey', 4)
// Guess w
word2.guess('w')
console.log(word2.getPuzzle()) // **w ******
console.log(`Remaining guesses: ${word2.guesses}`)


