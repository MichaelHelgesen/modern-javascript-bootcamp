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

// Setup a div for todos - OK

//Setup filters (searchText) and wire up a new filter input to change it. 
// Create a renderTodos function to render and rerender the latest filtered data.

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (note) {
        return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo, index) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const header = document.createElement('h3')
    header.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(header)

    filteredTodos.forEach(function (item, index) {
        const p = document.createElement('p')
        p.textContent = item.text
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
    renderTodos(todos, filters)
    event.target.elements.todoToAdd.value = ''
})