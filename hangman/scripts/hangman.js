// 1 Convert "getStstusMessage" to a a custom getter for "ststusMessage"
// 2 Convert "getPuzzle" to a custom getter for "puzzle"
// 3 Change usage in app.js

class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    get statusMsg() {
    
        if (this.status === 'Playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'Finished') {
            return 'Great work! You guessed the word.'
        } else {
            return ` Nice try! The word was "${this.word.join('')}"`
        }
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guesses === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }
    }
    makeGuess(guess) {
        if (this.status === 'Playing') {
            guess = guess.toLowerCase()
        
            if (!this.guessedLetters.includes(guess)) {
                this.guessedLetters.push(guess)
            }
    
            if (!this.word.includes(guess) && this.guesses > 0) {
                this.guesses--
            }
           
            this.calculateStatus()
        }
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    

}





/* Hangman.prototype.calculateStatus = function () {
    let winning = 0
    
    if (this.guesses < 1) {
         this.status = 'Failed'
         this.guesses = 0
         document.querySelector('#remaining-guesses').textContent =`Game Over`
    } else {
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                winning ++
            } 
        })
    }
   
    if (this.word.length === winning) {
        this.status = 'Finished'
         document.querySelector('#remaining-guesses').textContent =`You Won!`
    } 
} */


    
    
    
    
    // lettersUnguessed = [] Putt inn bokstav hvis c, a, t hvis ikke guessedLetters inneholder c, a, t
    // Start: lettersUnguessed = [c, a, t]
    // Gjetter b: lettersUnguessed = [c, a, t]
    // Gjetter c: lettersUnguessed = [a, t]
/*     const lettersUnguessed = this.word.filter((letter) => {
        return !this.guessedLetters.includes(letter)
    })
    const finished = lettersUnguessed.length === 0 */

    /*     let finished = true

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {

        } else {
            finished = false
        }
    }) */






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
