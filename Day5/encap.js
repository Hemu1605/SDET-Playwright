class BankAccount {
    #balance = 0; // private variable | Access modifier
 
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
 
    getBalance() {
        return this.#balance;
    }
}
 
const AryanAccount = new BankAccount();
AryanAccount.deposit(1000);
AryanAccount.withdraw(200);
// AryanAccount.balance = 10000;
console.log(`Final Balance: ₹${AryanAccount.getBalance()}`);
 
const PriyaAccount = new BankAccount();
PriyaAccount.deposit(500);
PriyaAccount.withdraw(1000);
console.log(`Final Balance: ₹${PriyaAccount.getBalance()}`);

//////////////////////
// Example
/////////////////////

class Student {
    #marks = 0; // private variable

    setMarks(marks) {
        if (marks >= 0 && marks <= 100) {
            this.#marks = marks;
        } else {
            console.log("Marks should be between 0 and 100.");
        }
    }

    getMarks() {
        return this.#marks;
    }
}

const student1 = new Student();

student1.setMarks(85);

console.log("Student Marks:", student1.getMarks());

// Direct access is not allowed
// console.log(student1.#marks);



// Output
// Student Marks: 85