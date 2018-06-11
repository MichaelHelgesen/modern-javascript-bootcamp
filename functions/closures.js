const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)

console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))

//Create createTipper which takes in the base tip (.15 for 15% tip)
// Set it up to return a function that takes in the bill amount
// Call createTipper to generate a few functions for different percentages
// Use the generated functions to calculate tips and print them

const createTipper = (a) => {
    return (b) => {
        return a * b
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.50)

console.log(tip15(100))
console.log(tip20(200))