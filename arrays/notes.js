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

// How the sort works.
const sortNotes = function (array) {
    notes.sort(function (item1, item2) {
        if (item1.title.toLowerCase() < item2.title.toLocaleLowerCase()) {
            return -1
        } else if (item2.title.toLowerCase() < item1.title.toLocaleLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

console.log(sortNotes())

// Bruker .find for å returnere selve objektet, ikke bare index. Kortere kode.
 const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
} 

const findNotes = function (array, query) {
    return filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isBodyMatch || isTitleMatch;
    })
}

//console.log(findNotes(notes, 'gr'))

// Finner index og deretter returnerer note med bracket notation.
/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}  */

//const note = findNote(notes, 'Exercise')

//console.log(note);

