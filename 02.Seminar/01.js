class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.#balance += amount;
    }
    get balance() {
        return this.#balance;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
    }
    constructor(balance) {
        if (balance < 0) {
            throw new Error('Invalid balance');
        }
        this.#balance = balance;
    }
}

const account = new BankAccount(500);
console.log(account.balance);

account.deposit(200);
console.log(account.balance);

account.withdraw(1100);
console.log(account.balance);
