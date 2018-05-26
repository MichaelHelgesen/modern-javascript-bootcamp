const titleElement = document.querySelector('#note-title')
const bodyText = document.querySelector('#note-text')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const updatedSpan = document.querySelector('#last-edited')
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyText.value = note.body
updatedSpan.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyText.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updatedSpan.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyText.value = note.body
        updatedSpan.textContent = generateLastEdited(note.updatedAt)
    }

    
})