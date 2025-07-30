// POLYMORPHISM in TypeScript

/*
Abstract Class:
Provides a blueprint. Child classes must implement the abstract method.

Polymorphism means the same method (pay) behaves differently based on the object type (CreditCard, UPI, PayPal).
It is achieved using an abstract class and method overriding.
*/

abstract class PaymentMethod {
  abstract pay(amount: number): void;
}

// CreditCard class
class CreditCard extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

// UPI class
class UPI extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

// PayPal class
class PayPal extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using PayPal`);
  }
}

// Example Usage

function processPayment(method: PaymentMethod, amount: number): void {
  method.pay(amount); // Calls the correct version based on object type
}

const credit = new CreditCard();
const upi = new UPI();
const paypal = new PayPal();

processPayment(credit, 5000); // CreditCard version
processPayment(upi, 1200); // UPI version
processPayment(paypal, 3000); // PayPal version
