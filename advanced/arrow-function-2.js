const add = () => {
    return arguments[0] + arguments[1]
} 

/* const add = function (a, b) {
    return arguments[0] + arguments[1]
}  */

console.log(add(11, 22, 33, 4))

const car = {
    color: 'Red',
    getSummary() {
        return `This car is ${this.color}`
    }
}

console.log(car.getSummary())