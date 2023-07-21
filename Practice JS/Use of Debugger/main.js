
debugger;

var ali = { firstName: 
'ali',

say_hi: function (firstName) {

alert("Greetings " + firstName + ", you are talking to " + this.firstName + "!");
	}

}
debugger;

var some_ref = ali.say_hi;
debugger;
some_ref("Sabir");


// What I have learned from above code has been discussed with Mr. Sohaib Ashfaq on 20-07-23.

/*
> In above code an important rule of declaring a varible has been overlooked as 

variable firstname has been declared not with camel case or any other legal represantaiton suggested 
by JS.

> Since, say_hi is a function of object ali and has a 'this' keyword concatinated in 

it's body. Which doesn't have a globle scope and display 'undifined' in the output. So when we call

by assigning object's property to a variable (some_ref), by passing an argument 'sabir', the function

only shows first name (sabir) right after the string Greetings but does not shows value in concatinated

part of the statement.

*/