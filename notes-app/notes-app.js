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




// DOM

// Query and remove
/* const p = document.querySelector('p')
p.remove() */

// Query all and remove.
const ps = document.querySelectorAll('p');





ps.forEach(function (p) {
    //console.log(p.textContent)
    p.textContent = 'Hello'
})


// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Paragraph from javascript.'
document.querySelector('body').appendChild(newParagraph)