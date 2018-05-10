const todos = [
    'Clean the house',
    'Walk the dog',
    'Work out',
    'Program',
    'Write a blog post'
]

todos.splice(2, 1)
todos.push('Wash the car')
todos.shift()


console.log(
    `You have ${todos.length} todos`
)

todos.forEach(
    function(item, index) {
        console.log(`${index + 1}. ${item}`) 
    }
)

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]  
    console.log(`${num}. ${todo}`) 
}