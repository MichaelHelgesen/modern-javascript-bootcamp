// Display the puzzle to the browser instead of the console
// Display the guesses left to the browser instead of the console
// Separate the Hangman definition from the rest of the app (use app.js)
const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['k']
    this.status = 'playing'
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

  Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
        if (!this.word.includes(guess) && this.guesses > 0) {
                this.guesses--
        }
    }
}  

Hangman.prototype.calculateStatus = function () {
    const word = this.word
    if (this.guesses < 1) {
         this.status = 'Failed'
         this.guesses = 0
         document.querySelector('#remaining-guesses').textContent =`Game Over`
    }
}

/*  Hangman.prototype.guess = function () {
    
    for (i = 0; i < arguments.length; i++) {
        if (!this.guessedLetters.includes(arguments[i].toLowerCase())) {
            this.guessedLetters.push(arguments[i].toLowerCase())
        }
        
        if (!this.word.includes(arguments[i])) {
            this.guesses -= 1
        }
    }
    
}   */