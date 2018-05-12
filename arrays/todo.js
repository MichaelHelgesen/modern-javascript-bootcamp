// convert strings to objects
    // Prop: text, completed
const todos = [{
    text: 'Clean the house',
    completed: false
}, {
    text: 'Program',
    completed: true
}, {
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Work out',
    completed: false
}, {
    text: 'Write a blog post',
    completed: true
}]


const sortTodos = function (array) {
    array.sort(function (item1, item2) {
        if (!item1.completed) {
            return 1
        }
    })
}

sortTodos(todos)
console.log(todos)

// My solution. It does not work, because it always deletes 
/* const deleteToDo = function (array, searchText) {
    let indexOfSearch;
    array.find(function (todo, index) {
        if (todo.text.toLowerCase() === searchText.toLowerCase()) {
            indexOfSearch = index;
       } 
       
    })
    todos.splice(indexOfSearch, 1)
}   */

// Instructor code:
 const deleteToDo = function (array, searchText) {
    const index = array.findIndex(function (todo) {
        return todo.text.toLowerCase() === searchText.toLowerCase();
    })
    if (index > -1) {
        array.splice(index, 1)
    }
} 

const getThingsToDo = function (array) {
    return filteredToDos = array.filter(function (todo, index) {
        return !todo.completed
    })
}

//console.log(getThingsToDo(todos))

//deleteToDo(todos, 'Work out')
//console.log(todos)
