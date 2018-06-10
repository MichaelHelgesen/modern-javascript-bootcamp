 const getPuzzle = (callback) => {
    
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        callback(undefined, data.puzzle)
    } else if (e.target.readyState === 4) {
        callback('An error', undefined)
    } 
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()
}
 

const getCountry = (countryCode, callback) => {
    const requestCountries = new XMLHttpRequest()

    requestCountries.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country.name)
        } else if (e.target.readyState === 4) {
            callback('An error', undefined)
        } 
    })

    requestCountries.open('GET', 'https://restcountries.eu/rest/v2/all')
    requestCountries.send()

}
 