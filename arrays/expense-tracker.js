const account = {
    name: 'Mikke',
    expenses: [],
    addExpense: function (expense, amount) {
        //account.expenses.unshift({ It's better to use ".this"
        this.expenses.push({
            description: expense,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let total = 0
        this.expenses.forEach(function (item, index) {
            total = total + item.amount
        })
        return `${this.name} has $${total} in expenses.` 
    }
}


// Expense 1. description 2. amount
// add expense - description, amount (new object)
account.addExpense('Rent', 950)
account.addExpense('Beer', 100)
account.addExpense('PC', 10000)

console.log(account.expenses)

// getAccountSummary - total up all expenses - Mikke has kr 1200 in expenses
console.log(account.getAccountSummary())