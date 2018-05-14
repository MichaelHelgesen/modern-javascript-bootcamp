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


document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
    
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

