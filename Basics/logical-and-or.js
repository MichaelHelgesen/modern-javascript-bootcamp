let temp = 55;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside')
}



let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Only one vegan')
} else {
    console.log('Offer anything')
}