'use strict'

// Create notes array from localStorage
const createTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        []
    }
    
}

// Save todos to localStorage
const saveTodo = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const header = document.createElement('h3')
    header.classList.add('list-title')
    if (incompleteTodos.length === 1) {
        header.textContent = `You have ${incompleteTodos.length} todo left`
    } else {
        header.textContent = `You have ${incompleteTodos.length} todos left`
    }
    
    
    return header
}


// Add "list-title" class
// Pluralize (todos) unless you only have one (todo)

// Get the DOM elements for an individual note
const generateToDOM = (item) => {

    const todoDiv = document.createElement('label')
    const containerEl = document.createElement('div')
    const button = document.createElement('button')

        // setup container
        todoDiv.classList.add('list-item')
        containerEl.classList.add('list-item__container')
        todoDiv.appendChild(containerEl)

        button.textContent = 'remove'
        button.classList.add('button', 'button--text')
        button.addEventListener('click', () => {
            deleteTodo(item.id)
            saveTodo(todos)
            renderTodos(todos, filters)
        })
    
    const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.checked = item.completed
        checkbox.addEventListener('change', () => {
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
    
    containerEl.appendChild(checkbox)
    containerEl.appendChild(todoText)
    todoDiv.appendChild(button)   



    return todoDiv
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((note) => {

    const searchTextMatch = note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !note.completed
        
    return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter((todo, index) => !todo.completed)


    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((item, index) => {
            document.querySelector('#todos').appendChild(generateToDOM(item))
        })
    } else {
        const noTodos = document.createElement('p')
        noTodos.classList.add('empty-message')
        noTodos.textContent = 'No to-dos to show'
        document.querySelector("#todos").appendChild(noTodos)
    }

    
}

// Delete Todo
const deleteTodo = (id) => {
    const noteIndex = todos.findIndex((todo) => todo.id === id)
    if (noteIndex > -1) {
        todos.splice(noteIndex, 1)
    }
}

// toggleTodo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

