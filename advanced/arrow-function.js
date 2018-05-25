const square = (num) => num * num

const squareLong = (num) => {
    return num * num;
}

console.log(square(5))

const people = [{
    name: 'Mikke',
    age: 38
}, {
    name: 'Per',
    age: 34
}, {
    name: 'Ane',
    age: 23
}]

const under30 = people.filter((person) => person.age < 30)



const under30Long = people.filter(function (person) {
    return person.age < 30
})
console.log(under30)