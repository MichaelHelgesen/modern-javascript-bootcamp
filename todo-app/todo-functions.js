// Create notes array from localStorage
const createTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodo = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const header = document.createElement('h3')
    header.textContent = `You have ${incompleteTodos.length} todos left`
    return header
}

// Get the DOM elements for an individual note
const generateToDOM = function (item) {
    const p = document.createElement('p')
        if (item.text.length > 0) {
            p.textContent = item.text 
        } else {
            p.textContent = 'Unnamed todo'
        }
    return p
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (note) {

    const searchTextMatch = note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !note.completed

    return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo, index) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (item, index) {
        document.querySelector('#todos').appendChild(generateToDOM(item))
    })
}