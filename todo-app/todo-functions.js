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

    const todoDiv = document.createElement('div')
    const button = document.createElement('button')
        button.textContent = 'x'
        button.addEventListener('click', function () {
            deleteTodo(item.id)
            saveTodo(todos)
            renderTodos(todos, filters)
        })
    
    const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.checked = item.completed
        checkbox.addEventListener('change', function () {
            //item.completed = checkbox.checked
            toggleTodo(item.id)
            saveTodo(todos)
            renderTodos(todos, filters)
        })
    

        const todoText = document.createElement('span')

        if (item.text.length > 0) {
            todoText.textContent = item.text 
        } else {
            todoText.textContent = 'Unnamed todo'
        }
    
    todoDiv.appendChild(checkbox)
    todoDiv.appendChild(todoText)
    todoDiv.appendChild(button)   

    return todoDiv
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

// Delete Todo
const deleteTodo = function (id) {
    const noteIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (noteIndex > -1) {
        todos.splice(noteIndex, 1)
    }
}

// toggleTodo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}