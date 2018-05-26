let todos = createTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Listen for text change.
document.querySelector("#search-notes").addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Listen for adding todo
document.querySelector('#add-notes-form').addEventListener('submit', (event) => {
    event.preventDefault()
    todos.push({
        id: uuidv4(),
        text: event.target.elements.todoToAdd.value,
        completed: false
    })
    saveTodo(todos)
    renderTodos(todos, filters)
    event.target.elements.todoToAdd.value = ''
})

// Hide complete todos
document.querySelector('#hide-completed-todos').addEventListener('change', (event) => {
    filters.hideCompleted = event.target.checked
    renderTodos(todos, filters)
})