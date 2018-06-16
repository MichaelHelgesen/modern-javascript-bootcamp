const puzzleEl = document.querySelector('#word-to-guess')
const guessesEl = document.querySelector('#remaining-guesses')
let word1 



window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word1.makeGuess(guess)
    render()
})

const render = () => {
    
    const letterSpan = (string) => {
        const newArray = string.split('')
        let newString = ''
        newArray.forEach((element, index) => {
            newString = newString + '<span>' + element + '</span>'
        });
        
        return newString
    } 

    puzzleEl.innerHTML = letterSpan(word1.puzzle)
    guessesEl.textContent = word1.statusMsg

    // Instructor code:
/*     word1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
    }) */

    // For each characther in the string, ass a span into puzzle
    // The spans text should just be the letter itself. 
    //word1.puzzle
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    word1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*  getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch ((err) => {
    console.log(`Error: ${err}`)
})
 */






// Convert getCountry to use fetch and return a promise
// Make sure getCountry still resolves with the country that matches
// Change getCountry usage to use catch


/* getCountry('NO').then((country) => {
    console.log(country.name)
}).catch ((err) => {
    console.log(`Error: ${err}`)
}) */
 


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

// Create getLocation function which takes no arguments
// Setup getLocation to make a request 
// Use getLocation to print the city, region and country information


/* getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})
 */

/* getLocation().then((data) => {
    return getCountry(data.country)
    //console.log(`Your IP is based in ${data.city}, ${data.region}, ${data.country}`)
}).then((data) => {
    console.log(data.name)
}).catch((err) => {
    console.log(err)
}) */

