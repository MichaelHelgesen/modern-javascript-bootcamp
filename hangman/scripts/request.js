const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }

   }

/* const getPuzzleOld = (wordCount) => {
     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
         if (response.status === 200) {
             return response.json()
         } else {
             throw new Error('Unable to get puzzle')
         }
     }).then((data) => {
            return data.puzzle
        })

    } */
 
// Convert getCountry to an async function that uses await
// convert getLocation to use an async function that uses await    

    const getCountry = async (countryCode) => {
        const response = await fetch('https://restcountries.eu/rest/v2/all', {})
        
        if (response.status === 200) {
            const data = await response.json()
            return country = data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('Unable to fetch data')
        }
    }

/*     const getCountryOld = (countryCode) => {
        return fetch('https://restcountries.eu/rest/v2/all', {}).then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Unable to fetch data')
            }
        }).then((data) => {
            return country = data.find((country) => country.alpha2Code === countryCode)
        })
    } */

/* const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const requestCountries = new XMLHttpRequest()

    requestCountries.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country.name)
        } else if (e.target.readyState === 4) {
            reject('An error')
        } 
    })

    requestCountries.open('GET', 'https://restcountries.eu/rest/v2/all')
    requestCountries.send()

}) */
 


const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}


const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=5e5395b4175cd4', {})

    if (response.status === 200) {
        const data = await response.json()
        return data
    }
 }

/* const getLocationOld = () => {
   return fetch('http://ipinfo.io/json?token=5e5395b4175cd4', {}).then((response) => {
       if (response.status === 200) {
           return response.json()
       } else {
           throw new Error ('Unable to fetch data')
       }
   })
} */