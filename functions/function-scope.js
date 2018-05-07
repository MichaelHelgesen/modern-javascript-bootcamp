// Global scope (convertFarenheitToCelsius, celsius)
    // Local scope (farenheit, celsius)

let convertFerenheitToCelcius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

let celsius = convertFerenheitToCelcius(68);

console.log(celsius)