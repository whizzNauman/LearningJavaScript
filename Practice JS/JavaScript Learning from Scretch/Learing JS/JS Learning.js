//Practice of project Bank Account with using classes, constructor and function

// class

class BankAccount {

	customerName;

	accountNumber;

	balance = 0;


	// constructor added
	constructor (customerName, balance) {

    this.customerName = customerName;

    this.accountNumber = Date.now();

    this.balance = balance;

	}


	// deposit function
	deposit (amount) {
		this.balance += amount;	

		}

	// withdraw function
	withdraw (amount) {
		this.balance -= amount;
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
// class for saving account
class savingAccount extends BankAccount {

	transactionLimit = 1500;
    
    constructor (customerName, balance = 0) {

    	super(customerName, balance);

    }

    takePersonnalLoan (amount) {

    	console.log('Taking personal loan: ', + amount);
    }
}

	const ahmedAccount = new savingAccount('Ahmed', 50);

	const akifAccount = new currentAccount('Akif', 200);

	ahmedAccount.takePersonnalLoan(3000);

	akifAccount.takeBusinessLoan(5000)

	console.log(ahmedAccount);

	console.log(akifAccount);

	ahmedAccount.deposit(100)

	console.log(ahmedAccount);


	akifAccount.withdraw(140)

	console.log(akifAccount);




// //Constructor

// function BankAccount(customerName, balance = 0){

// 	this.customerName = customerName;

// 	this.accountNumber = Date.now();

// 	this.balance = balance;

// 	// Deposit function
// 	this.deposit = function (amount){

// 		this.balance += amount;

// 	}
// 	// Withdraw function
// 	this.withdraw = (amount) => {

// 	this.balance -= amount;
// 	}

// }

// // Following console base interation with objects and methods

// // const customer1 = new BankAccount("Nauman", 5000);
// // const customer2 = new BankAccount("Feena");
// // console.log(customer1);
// // console.log(customer2);
// // customer2.deposit(500);
// // customer1.withdraw(500);
// // console.log(customer1);
// // console.log(customer2);

// // ========================================================================

// // To store account details in memory we have created an array

// const accounts = [];

// // Account creation block

// const accountForm = document.querySelector('#bankAccount');

// const cmName = document.querySelector('#customerName');

// const balance = document.querySelector('#balance');

// // Deposit block

// const depositForm = document.querySelector('#depositForm');

// const accountNumber = document.querySelector('#acNumber');

// const amount = document.querySelector('#amount');

// // Withdraw block

// const withdrawForm = document.querySelector('#withdrawForm');

// const acNumber = document.querySelector('#wNumber');

// const withdrawlAmount = document.querySelector('#wAmount');


// accountForm.addEventListener('submit', (e) => {
	
// 	e.preventDefault();

// 	//Following line to store dynamically account details in an account variable
// 	const account = new BankAccount(cmName.value, +balance.value);
	
// 	//Since we use push method to add data in an array
// 	accounts.push(account);
	
// 	console.log(account);


// });

// depositForm.addEventListener('submit', (e) => {

// 	e.preventDefault();

// 	/*
// 	The following line is very imp wherein we call find method on our array,
// 	applied a check on account if the user entered value is equal to the value of account number 
// 	availabe in array, added "+" sign to satisfy the "===" condtition by converting string 
// 	into integer.
// 	*/
// 	const account = accounts.find(

// 		(account) => account.accountNumber === +accountNumber.value);
	
// 	// Then called a deposit method on our above variable (account)
// 	account.deposit(+amount.value);


// 	console.log(accounts);

// });

// withdrawForm.addEventListener('submit', (e) => {

// 	e.preventDefault();

// 	/*
// 	The following line is very imp wherein we call find method on our array,
// 	applied a check on account if the user entered value is equal to the value of account number 
// 	availabe in array, added "+" sign to satisfy the "===" condtition by converting string 
// 	into integer.
// 	*/

// 	const account = accounts.find(

// 		(account) => account.accountNumber === +acNumber.value);

// 	// Then called a deposit method on our above variable (foundAccount)
// 	account.withdraw(+withdrawlAmount.value);

// 	console.log(accounts);

// });