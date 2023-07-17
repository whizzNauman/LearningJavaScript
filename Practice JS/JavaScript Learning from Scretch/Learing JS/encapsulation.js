//Practice of project Bank Account with using classes, constructor and function

// classs with encapsulation


class BankAccount {

	customerName;
 
	accountNumber;

	#balance = 0; // by putting '#' before we create a private property of class

										//==== V . V . Imp==//
		/*In order to make variables properly private (to achieve encapsulation), the only way is to 
		incorporate '#' in all places, where we have used our class property right after 'this' 
		keyword.*/ 

	// constructor added
	constructor (customerName, balance) {

    this.customerName = customerName;

    this.accountNumber = Date.now();

    this.#balance = balance;

	}


	// deposit function
	deposit (amount) {
		this.balance += amount;	

		}

	// withdraw function
	withdraw (amount) {
		this.#balance -= amount;
		}

	// setters
	set balance (amount) {

		if (isNaN(amount)) {
			throw new Error('Amount is not a valid input');
		}

		this.#balance = amount;

	}
	// getters
		get balance () {

		return this.#balance;

	}

}
// class for current account
class currentAccount extends BankAccount {

	transactionLimit = 3000;
    
    constructor (customerName, balance = 0) {

    	super(customerName, balance);

    }

    // private method to calculate interest

    #calculateInterest(amount) {

    	console.log('Calculating Interest.');

    }

    takeBusinessLoan (amount) {
    	// incorporated '#' to call private method 
    	this.#calculateInterest(amount);

    	console.log('Taking business loan: ', + amount);
    }
}

// creating an object nameed ahmedAccount of currentAccount class.
const ahmedAccount = new currentAccount('Ahmed', 800);

// when we set value with calling a method
// ahmedAccount.balance(5000);

// this is how we set value by using setter method in JavaScript
ahmedAccount.balance = 5000;

// this is how we get value (in parenthesis) by using getter method in JavaScript
console.log(ahmedAccount.balance);

ahmedAccount.takeBusinessLoan(5012)