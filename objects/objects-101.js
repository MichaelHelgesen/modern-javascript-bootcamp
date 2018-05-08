let myBook = {
    title: 'Ego is the enemy', 
    author: 'Ryan Holiday',
    pageCount: 226
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'The obstacle is the way'

console.log(`${myBook.title} by ${myBook.author}`);


let myPerson = {
    name: 'Mikke',
    age: 38,
    location: 'Norway'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);

myPerson.age = myPerson.age + 1;
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);
