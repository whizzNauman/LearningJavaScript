//Practice of project Bank Account with using classes, constructor and function

// class based bank account with partial encapsulation

class BankAccount {

	#customerName;
 
	accountNumber;

	balance = 0;


	// constructor added
	constructor (customerName, balance) {

	this.#customerName = customerName;

	this.accountNumber = Date.now();

	this.balance = balance;

	}
	// Deposit function
	deposit (amount) {

		this.balance += amount;

	}

	// Withdraw function
	withdraw (amount) {

		this.balance -= amount;
	}

}

const accounts = [];

// Account creation block

const accountForm = document.querySelector('#bankAccount');

const cmName = document.querySelector('#customerName');

const blnce = document.querySelector('#balance');

// Deposit block

const depositForm = document.querySelector('#depositForm');

const accountNumber = document.querySelector('#acNumber');

const amount = document.querySelector('#amount');

// Withdraw block

const withdrawForm = document.querySelector('#withdrawForm');

const acNumber = document.querySelector('#wNumber');

const withdrawlAmount = document.querySelector('#wAmount');


accountForm.addEventListener('submit', (e) => {
	
	e.preventDefault();

	//Following line to store dynamically account details in an account variable
	const account = new BankAccount(cmName.value, +blnce.value);
	
	//Since we use push method to add data into an array
	accounts.push(account);
	
	console.log(account);
	


});

depositForm.addEventListener('submit', (e) => {

	e.preventDefault();

	/*
	The following line is very imp wherein we call find method on our array,
	applied a check on account if the user entered value is equal to the value of account number 
	availabe in array, added "+" sign to satisfy the "===" condtition by converting string 
	into integer.
	*/
	const account = accounts.find(

		(account) => account.accountNumber === +accountNumber.value);
	
	// Then called a deposit method on our above variable (account)
	account.deposit(+amount.value);


	console.log(accounts);

});

withdrawForm.addEventListener('submit', (e) => {

	e.preventDefault();

	/*
	The following line is very imp wherein we call find method on our array,
	applied a check on account if the user entered value is equal to the value of account number 
	availabe in array, added "+" sign to satisfy the "===" condtition by converting string 
	into integer.
	*/

	const account = accounts.find(

		(account) => account.accountNumber === +acNumber.value);

	// Then called a deposit method on our above variable (foundAccount)
	account.withdraw(+withdrawlAmount.value);

	console.log(accounts);
});





//======================================== Notes ==========================================//

// In object-oriented programming, classes are used to define blueprints for creating objects that

// share common characteristics and behavior. The class definition serves as a template, and objects 

// are instances created based on that template. In JavaScript, classes were introduced with ES6 to 

// provide a more structured and syntactically convenient way to work with object-oriented concepts.

//===Here's why we typically don't use an array block (or any other data storage) inside the class:===/

// 1 - Separation of Concerns: Classes are mainly intended to define the structure and behavior of objects, 

// not to store data. In an object-oriented design, it's generally better to keep data and behavior 

// separated. Data storage, such as arrays, should typically be handled outside the class as part of 

// the application's global state.

// 2 - Reusability: Keeping data storage outside the class allows you to reuse the class for different 

// contexts or scenarios. For example, you might want to use the same BankAccount class to handle multiple

// instances of bank accounts with different data stored in different arrays or data structures.

// 3 - Encapsulation: Encapsulation is one of the core principles of object-oriented programming. 

// It refers to the concept of bundling data (attributes) and methods (behavior) that operate on the 

// data within a single unit (the class). By keeping the array outside the class, you are maintaining a 

// clear boundary between the internal state (properties) of the class and external data.

// Regarding placing lines of code after the accounts array outside the class, it's because those 

// lines are not part of the class definition; they are part of the application logic that uses the class.

// The class definition defines the blueprint for objects, and anything that interacts with the objects or 

// utilizes them should be outside the class.

// In the provided example, const accounts = []; is a global array that stores instances of the 

// BankAccount class. It should be accessible to other parts of the application, not confined within 

// the class. The subsequent event listeners and the associated logic are part of the application's 

// interaction with the BankAccount objects and should also be placed outside the class.

// Overall, keeping data and application logic outside the class allows for better separation of concerns, 

// more flexibility, and adherence to object-oriented design principles. It's a recommended practice when 

// working with classes in JavaScript or any other object-oriented programming language.