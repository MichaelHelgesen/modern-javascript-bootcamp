// students score, total possible score
// 15/20 -> you got a C (75%)!

const totalScore = function (studentScore, maxScore = 100) {
    
    if (typeof studentScore !== 'number' || typeof maxScore !== 'number') {
        throw Error('You must enter a number')
    }

    const percent = (studentScore / maxScore) * 100;
    
        let letterGrade = ''
    
        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }
    
        return `You got a ${letterGrade} (${percent}%)!`


}




try {
    const score = totalScore(15, 100);
    console.log(score);
} catch (e) {
    console.log(e.message)
}