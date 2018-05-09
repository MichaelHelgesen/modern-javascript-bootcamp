let name = '  Michael Helgesen  ';

// Length property

console.log(name.length);


// convert to upper case

console.log(name.toUpperCase())

console.log(name.toLowerCase())

// inludes methode
let password = 'abs123sfd098'
console.log(password.includes('password'))

// trim
console.log(name)
console.log(name.trim())

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

// challenge

// isValidPassword
// only true if length more than 8, and doesnt contain "passwprd"

console.log(isValidPassword('abc12dfsd3¤%'))
console.log(isValidPassword('sfsfd'))
console.log(isValidPassword('sfsfdsfsfdpassword'))


