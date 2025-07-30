"use strict";
//Access modifiers and Inheritance
// ...........................Access Modifiers.................................
// Access Modifiers control the visibility of properties and methods in a class:
// public → accessible from anywhere
// private → accessible only inside the class
// protected → accessible inside the class and subclasses
class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.bankFee = 50; // Can be accessed in child class
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    // Public method to access private balance
    showBalance() {
        console.log(` ${this.accountHolder}'s balance: ₹${this.balance}`);
    }
    // Public method to deposit money
    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited. New balance: ₹${this.balance}`);
    }
    // Private method (can only be used inside this class)
    applyCharges() {
        this.balance -= 100;
    }
    deductCharges() {
        this.applyCharges(); // works fine
        console.log(`₹100 deducted as bank charges.`);
    }
}
// Child class: SavingsAccount
// -------------INHERITANCE--------------
class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance) {
        super(accountHolder, balance);
    }
    // Method that uses protected member from parent
    showBankFee() {
        console.log(`Bank fee for savings account: ₹${this.bankFee}`);
    }
}
// Example Usage
const myAccount = new BankAccount("Ajay Goswami", 5000);
myAccount.showBalance(); // Allowed
myAccount.deposit(2000); // Allowed
myAccount.deductCharges(); // Allowed
// ❌ Not allowed (balance is private):
// console.log(myAccount.balance);      // Error: Property 'balance' is private
// ❌ Not allowed (private method):
// myAccount.applyCharges();            // Error
const savings = new SavingsAccount("Ajay Goswami", 7000);
savings.showBalance(); // Inherited public method
savings.showBankFee(); // Can access protected property from child
// ❌ Not allowed outside:
// console.log(savings.bankFee);        // Error: Property 'bankFee' is protected
// Public property:
console.log(` Account Holder: ${savings.accountHolder}`);
