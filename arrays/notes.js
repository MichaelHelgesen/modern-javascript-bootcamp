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

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

/* 
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

const note = findNote(notes, 'things to fix on the house')

console.log(note);

