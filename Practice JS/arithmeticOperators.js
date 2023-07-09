/*=========Mulitline Comments=========*/
/* Arithmetic Operators in JS:
    + addition
    - subtraction
    * multiplication
    / division
*/

/* Comparision Operators in JS:
    > greater than
    < less than
    == equal
*/

/*=========Single Comments=========*/

// console.log(2 + 2);
// console.log(1 + 2 + 3 + 4 + 5);
// console.log(20 - 18);
// console.log(2 * 3);
// console.log(8 * 1);
// console.log(8 / 1);
// console.log(3 > 2);
// console.log(2 < 3);
// console.log(10 == 10);

/*========= += Operator =========*/

// The concatenation assignment operator, +=
// This operator's syntax is exactly the same as the addition assignment operator. The difference is in the data type used:

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

/*========= Task 2 =========*/

var timeRemaining = 4;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));

/*========= Task 3 =========*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2)

/*========= Task 4 =========*/

console.log(5 + 10);

/*========= Task 5 =========*/

var now = 'Now in ';
var three = 3;
var d = 'D!';
console.log(now + three + d);

/*========= Task 6 =========*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
