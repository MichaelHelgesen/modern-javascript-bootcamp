let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5)
console.log(result)

// default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText= getScoreText(undefined, 100);
console.log(scoreText);


function getTip (totalBill, tipPercent = .2) {
   let tipTotal = totalBill * tipPercent
   let tip100 = tipPercent * 100
   return `A ${tip100}% tip on $${totalBill} would be $${tipTotal}`
}

let tip = getTip(100, .25);

console.log(tip);
