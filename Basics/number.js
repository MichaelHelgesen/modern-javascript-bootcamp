let age = 38;

let dogYears = (age + 1) / 7;

console.log(dogYears);

let studentScore = 41;
let maxScore = 100;

/* 
let percent = (studentScore / maxScore) * 100;
*/

var toPercent = function (total, max) {
    return ((total / max) * 100) + "%";
};

console.log(toPercent(studentScore, maxScore));