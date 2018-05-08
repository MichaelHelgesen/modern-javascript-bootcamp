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