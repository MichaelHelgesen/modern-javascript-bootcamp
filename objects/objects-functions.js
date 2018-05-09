let myBook = {
    title: 'Ego is the enemy', 
    author: 'Ryan Holiday',
    pageCount: 226
}

let otherBook = {
    title: 'Your best year ever', 
    author: 'Hyatt',
    pageCount: 300
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} long`
    }
    
}

let bookSummary = getSummary(myBook);
let otherBooksummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);


var tempConverter = function (farenheit) {
    return {
        celsius: (farenheit - 32) * (5 / 9),
        farenheit: farenheit,
        kelvin: (farenheit + 459.67) * (5 / 9)
    }
}

let temp = tempConverter(68);

console.log(temp);