let myAccount = {
    name: 'Mikke',
    expenses: 0,
    income: 900
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

// addIncome(account, income)
let addIncome = function (account, income) {
    account.income = account.income + income;
};

// resetAccount(account)
let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

//getAccountSummary(account)
let getAccountSummary = function (account) {
    let exp = account.expenses;
    let inc = account.income;
    let balance = inc - exp;
    return `Account for ${account.name} has $${balance}. $${inc} in income. $${exp} in expence`
}

// addIncome
// addExpence
// addExpence
// getAccountSummary
// resetAccount
// getAccountSummary

addIncome(myAccount, 500);
addExpense(myAccount, 50);
addExpense(myAccount, 50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
//console.log(myAccount);