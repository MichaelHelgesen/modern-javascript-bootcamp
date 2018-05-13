const account = {
    name: 'Mikke',
    expenses: [],
    income: [],
    addExpense: function (expense, amount) {
        //account.expenses.unshift({ It's better to use ".this"
        this.expenses.push({
            description: expense,
            amount: amount
        })
    },
    addIncome: function (income, amount) {
        this.income.push({
            description: income,
            amount: amount
        })
    },
    getAccountSummary: function () {
       /*  let expenses = 0
        let income = 0 */
        
       /*  this.expenses.forEach(function (item, index) {
            expenses = expenses + item.amount
        }) */

        const expenses = this.expenses.reduce(function (acc, expense) {
            return acc + expense.amount
        }, 0)

        const income = this.income.reduce(function (acc, income) {
            return acc + income.amount
        }, 0)

      /*   this.income.forEach(function (item, index) {
            income = income + item.amount
        })  */ 


/*         const typeOf = function (type, value) {
            type.forEach(function (item, index) {
                if (type === account.expenses) {
                    expenses = expenses + item.amount
                } else {
                    income = income + item.amount
                }               
            })
        }

        typeOf(account.expenses)
        typeOf(account.income)  */

        return `${this.name} has a balance of $${income - expenses}. ${income} in income. $${expenses} in expenses.` 
    }
}

// OK: 1. add an income array to the account
// OK: 2. addIncome - description - amount
// 3. Tweak getAccount summary - income - expenses
// 4. Mikke has a balance of $10. $100 in income. $90 in expenses.


// Expense 1. description 2. amount
// add expense - description, amount (new object)
account.addExpense('Rent', 950)
account.addExpense('Beer', 100)
account.addIncome('Job', 1000)

// getAccountSummary - total up all expenses - Mikke has kr 1200 in expenses
console.log(account)
console.log(account.getAccountSummary())
