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

// You have to 2 todos left (p element)
const incompleteTodos = todos.filter(function (todo, index) {
    return !todo.completed
})

const header = document.createElement('h3')
header.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(header)

// Add a P for each todo above (use text value)
todos.forEach(function (item, index) {
    const p = document.createElement('p')
    p.textContent = item.text
    document.querySelector('body').appendChild(p)
})

// Listen for new todo creation
document.querySelector('#add-note').addEventListener('click', function() {
    console.log('hello')
})

// Listen for text change.
document.querySelector("#add-note-field").addEventListener('input', function (e) {
    console.log(e.target.value)
})

/* const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph, index) {
    if (paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})
 */