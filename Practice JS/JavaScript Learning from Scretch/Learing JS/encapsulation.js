//Practice of project Bank Account with using classes, constructor and function

// class with inheritence and encapsulation


class BankAccount {

	customerName;
 
	accountNumber;

	#balance = 0;


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
	setBalance (amount) {

		if (isNaN(amount)) {
			throw new Error('Amount is not a valid input');
		}

		this.#balance = amount;

	}
	// getters
		getBalance () {

		return this.#balance;

	}

}
// class for current account
class currentAccount extends BankAccount {

	transactionLimit = 3000;
    
    constructor (customerName, balance = 0) {

    	super(customerName, balance);

    }

    takeBusinessLoan (amount) {

    	console.log('Taking business loan: ', + amount);
    }
}

const ahmedAccount = new currentAccount('Ahmed', 800);

ahmedAccount.setBalance(32000);

console.log(ahmedAccount.getBalance());