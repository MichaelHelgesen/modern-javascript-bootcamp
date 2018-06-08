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

//MAking a HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error')
    } 
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()


// MAke a new request for all of the countries
// Parse the responseText to get back the array of objects
// Find your country object by it's country code
// Print the full country name

const countryCode = "NO"
const requestCountries = new XMLHttpRequest()

requestCountries.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.alpha2Code === countryCode)
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('An error')
    } 
})

requestCountries.open('GET', 'https://restcountries.eu/rest/v2/all')
requestCountries.send()