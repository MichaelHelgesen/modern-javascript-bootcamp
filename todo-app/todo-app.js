let todos = []

// Setup a div for todos - OK

//Setup filters (searchText) and wire up a new filter input to change it. 
// Create a renderTodos function to render and rerender the latest filtered data.

const filters = {
    searchText: '',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')

if (todoJSON !== null) {
    todos = JSON.parse(todoJSON)
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (note) {
        /* if (!filters.hideCompleted) {
            return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
        } else {
            return note.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !note.completed
        } */

    const searchTextMatch = note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !note.completed

    return searchTextMatch && hideCompletedMatch
    })

/*     filteredTodos = filteredTodos.filter(function (note) {
        return !filters.hideCompleted || !note.completed
    }) */

    const incompleteTodos = filteredTodos.filter(function (todo, index) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const header = document.createElement('h3')
    header.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(header)

    filteredTodos.forEach(function (item, index) {
        const p = document.createElement('p')
        if (item.text.length > 0) {
            p.textContent = item.text 
        } else {
            p.textContent = 'Unnamed todo'
        }
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)


// Listen for text change.
document.querySelector("#search-notes").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Listen for adding note
document.querySelector('#add-notes-form').addEventListener('submit', function (event) {
    event.preventDefault()
    todos.push({
        text: event.target.elements.todoToAdd.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    event.target.elements.todoToAdd.value = ''
})

document.querySelector('#hide-completed-todos').addEventListener('change', function (event) {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})