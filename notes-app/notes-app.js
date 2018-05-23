let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// Create note
document.querySelector('#create-note').addEventListener('click', function(e) {
    const id = uuidv4()
    
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`/edit.html#${id}`)
    //location.assign('/edit.html#' + notes[notes.length-1].id)

})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})



const now = new Date()

const timeStamp = now.getTime()

const myDate = new Date(timeStamp)

console.log(myDate.getFullYear())

/* console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth() + 1}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hours: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`) */