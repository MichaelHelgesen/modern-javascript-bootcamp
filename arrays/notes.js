const notes = [{
    title: 'My next trip',
    body: 'I would want to go to Spain'
}, {
    title: 'Things to fix on the house',
    body: 'Roof, lawn, windows'
}, {
    title: 'Exercise',
    body: '5 times a week, log progress.'
}
]

/* 
console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note') */

//notes.splice(1, 1, 'This is the new second item')

/* notes[2] = 'This is now the new note 3'

notes.forEach(
    function (item, index) {
        console.log(index)
        console.log(item)
    }
)
 */

 
console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index) {
    return note.title === 'Exercise'
})

console.log(index)