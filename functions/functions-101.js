// Function - input, code, output

let greetUser = function () {
    console.log('Welcome user!')
} 

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

let convertFerenheitToCelcius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

let celsius = convertFerenheitToCelcius(68);

console.log(celsius)