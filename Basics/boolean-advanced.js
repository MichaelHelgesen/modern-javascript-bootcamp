let isAccountLocked = false;
let userRole = "user";


if (isAccountLocked) {
    console.log('Is account locked');
} else if (userRole === 'admin') {
    console.log('Welcome admin');
} else {
    console.log('Welcome');
}

let temp = 0;

if (temp <= 0) {
    console.log("It's freezing outside!")
} else if (temp >= 20) {
    console.log("It's hot outside")
} else {
    console.log("It's nice to go outside")
}