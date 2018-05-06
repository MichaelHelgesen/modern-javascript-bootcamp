let varOne = 'varOne';

// Global scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if (true) {
        let varFour = "varFour";
    }
}

if (true) {
    let varThree = "varThree";
}

console.log(varTwo);