// working with static methods in JavaScript

class User {

	constructor (name, age, income) {

		this.name = name;

		this.age = age;

		this.income = income;
	}


	static compareByAge (user1, user2) {

		return user1.age - user2.age;

	}

	static compareByIncome (user1, user2) {

		return user1.income - user2.income;

	}

}

	const user1 = new User('Ahmed', 40, 35000);

	const user2 = new User('Chichi', 30, 40000);

	const user3 = new User('Azmat', 60, 70000);


	const users = [user1, user2, user3];

	users.sort(User.compareByAge);
	users.sort(User.compareByIncome);

	console.log(users);