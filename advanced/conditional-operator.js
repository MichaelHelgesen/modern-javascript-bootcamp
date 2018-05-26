/* const myAge = 27
const message = myAge >= 18 ? 'You can vote' : 'You can not vote'
console.log(message) */

const myAge = 38
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()

console.log(message)


const team = ['Tyler', 'Porter', 'Peter', 'Niols', 'Anders']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'To many ppl on team')