/*JavaScript DOM Manipulation*/

// 1 - Get getElementById
	/*psudo:
	keyword variable name = htmlDocument.domMethod(html id given in html doc)*/

	// const heading = document.getElementById('dom');
	// console.log(heading);

// 2 - Get getElementsByTagName
	/*console output:
		in the console, following lines display the array of h3 mentioned in html doc*/
		// const heading = document.getElementsByTagName('h3');
		// console.log(heading); // displays array collection of elements tag
		// console.log(heading[1]); // displays element of index 1

// 3 - Get ElementsByClassName
	/*console output:
	While giving two classes with the same name the output shows two object of two classes*/
		// const heading = document.getElementsByClassName('dom');
		// console.log(heading); // displays array collection of elements class
		// console.log(heading[0]); // displays element of index 0

// 4 - querySelector
	/*console output:
		The above method takes the objects like we call in CSS i.e. classes with . and Id with #
		to get output of elements of classes objects in console*/
		// const heading = document.querySelector('#dom');
		// const heading = document.querySelector('.dom');
		// console.log(heading); // displays array collection of classes

// 5 - querySelectorAll
	/*The above method takes the objects like we call in CSS i.e. classes with . and Id with #
		to get output of NodeList / (collection) elements of classes objects in console*/

		// const heading = document.querySelectorAll('.dom');
		// console.log(heading); // displays NodeList / collection of classes

										//.Traverse.DOM

		// 1 - ParentNode property
		/*Above property is to access the parentNode by getting child element*/

		// const heading = document.querySelector('.dom');
		// const bodyarea = heading.parentNode;
		// console.log(bodyarea);

		// 2 - chileNodes property
		/*Above property is to access the chileNode by getting parent element*/

		// const heading = document.querySelector('.bodyarea');
		// const childern = heading.childNodes;
		// console.log(childern);

		// 3 - nextElementSibling property
		/*Above property is to access the nextElementSibling by getting class name*/

		// const heading = document.querySelector('.dom');
		// const sib = heading.nextElementSibling;
		// console.log(sib);	

		// 4 - previousElementSibling property
		// /*Above property is to access the nextElementSibling by getting class tag*/

		// const heading = document.querySelector('h2');
		// const previousSibling = heading.previousElementSibling; 
		// console.log(previousSibling);

										//.Manipulation.DOM

		// 1 - basic manipulatation

		// const heading = document.querySelector('.dom');
		// heading.innerHTML = 'Hello IndexWorld'	// Replaced the text in .dom class
		// heading.style.color = 'red';			// changes the color of text in .dom class
		// heading.style.fontSize = '50px';		// changes the size of text in .dom class
		// heading.classList.add('Orange');		// added new class after .dom class
		// heading.classList.remove('dom');		// removes class after .dom class

		// 2 - Advance manipulatation

		// Create elements
		
		// const heading = document.createElement('h5');
		//to have a view in console of above line
		// console.log(heading);
		// heading.innerHTML = 'JavaScript is Awsome';
		// console.log(heading);
		// const parent = document.querySelector('.dom');
		// parent.appendChild(heading); // append child is to add element after any element
		/*console.long is displaying h5 tag in console successfully, however to make it part of DOM we
		will use innerHTML and set it to string we want to add into it*/

						//Do understand the following method later

		// const subHeading = document.createElement('h2');
		// subheading.innerHTML = 'Web div';
		// heading.insertAdjacentElement('afterend',subheading);
		// console.log(subHeading);

		// heading.insertAdjecentElement('beforebegin','.dom')


										// DOM Events

		// Event
		// const forButton = document.querySelector('#btn');	// we get btn by mentioning Id
		// const heading = document.querySelector('#dom');		// we get dom class by mentioning Id

		// forButton.addEventListener('click', function(event){
		// 	heading.style.color = 'green';
		// 	heading.style.fontSize = '30px'
		// 	console.log('Button clicked', event);
		// });


										// JS OOP Practice

		// Bank Account with OOP
		
		// Creating constructor
		function BankAccount(customerName, balance = 0){
			this.customerName = customerName;
			this.accountNumber = Date.now();
			this.balance = balance;

		// we can add methods to constructors too 
			
		/*Adding following methods into constructors is not optimized way in real life
		projects, to achieve optimized way would come after inheritance concept*/
			
			// Deposit method added	
			this.deposit = function(amount){
				// body...
				this.balance += amount;
			};
			// Withdraw method added
			this.withdraw = (amount) => {
				// body...
				this.balance -= amount;
			};
		}
	/*	// Creating new objects
		const customer1 = new BankAccount('Ahmed', 1000);
		const customer2 = new BankAccount('Nauman', 1300);

		// Displaying objects in browser's console
		console.log(customer1);
		console.log(customer2);

		//called deposit method
		customer1.deposit(1500);
		console.log('New Balance of Ahmed is: ' + customer1.balance);

		//called withdrawal method
		customer2.withdraw(300);
		console.log('New Balance of Nauman is: ' + customer2.balance); */

		/*Here we will use DOM to create object of bank account*/
		// Created arry to store accounts
		const accounts = [];
		// Get DOM values and stored into a variable to manipulate them
		const accountForm = document.querySelector('#acForm');
		const cName = document.querySelector('#customerName');
		const balance = document.querySelector('#balance');
		// Added event to form
		accountForm.addEventListener('submit', (e) => {
			// To prevent refreshing page
			e.preventDefault();
			
			/*Following we store dynamically customer details into accounts[] (array). 
			The + sign is to convert string into number*/
			const account = new BankAccount(cName.value, +balance.value);
			// To add accounts into array
			accounts.push(account);
			// To view work into console
			console.log(accounts);
		});