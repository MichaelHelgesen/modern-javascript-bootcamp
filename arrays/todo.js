// convert strings to objects
    // Prop: text, completed
const todos = [{
    text: 'Clean the house',
    completed: 'yes'
}, {
    text: 'Program',
    completed: 'yes'
}, {
    text: 'Walk the dog',
    completed: 'yes'
}, {
    text: 'Work out',
    completed: 'yes'
}, {
    text: 'Write a blog post',
    completed: 'yes'
}]


// My solution:
const deleteToDo = function (array, searchText) {
    let indexOfSearch;
    array.find(function (todo, index) {
        if (todo.text.toLowerCase() === searchText.toLowerCase()) {
            indexOfSearch = index;
       } 
       
    })
    todos.splice(indexOfSearch, 1)
}  
// Instructor code:
/* const deleteToDo = function (array, searchText) {
    const index = array.findIndex(function (todo) {
        return todo.text.toLowerCase() === searchText.toLowerCase();
    })
    if (index > -1) {
        array.splice(index, 1)
    }
} */


deleteToDo(todos, 'Work out')
console.log(todos)
