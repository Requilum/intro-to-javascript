/*------------------- Comments ---------------------*/
// Single-line comment
console.log('Comments are great'); // I only ignore words written after me!

// Multi-line comment
/* 
This is a multi-line comment.
It can span multiple lines. 
*/

/*------------------- Printing to console ---------------------*/
console.log('Hello, World!');
// Output: Hello, World!

/*------------------- Variables ---------------------*/
// Declaring a variable
let myVariable;
//let is a declaration
// myVariable is the identifyer

// Assigning a value to a variable
let name = 'John';

//changing values of variables
name = 'Jane';

// Let and Const
// The difference between let and const is that a const variable cannot be re-assigned to - you can assign data to it once, and that’s it:
let x = 25;
x = 100; // This is fine
const z = 50;

/*------------------- Naming rules ---------------------*/
/* 
- variables are case sensitive
- cannot begin with a number
- Can contain letters, digits, underscores, and dollar signs
- Cannot contain spaces
- Cannot be reserved words or keywords
 */

/*------------------- Primative Data Types ---------------------*/
/*
Primitive types are data types that are stored directly in memory. JavaScript has seven primitive data types, five of which are common and two of which are uncommon.

Here are the common primitive data types in JavaScript:

-String
-Number
-Boolean
-Undefined
-Null
*/

// String
let myString = 'Hello World';
let myOtherString = "Hello World again";
console.log(typeof myString);
// Prints: string

// Number
let myNumber = 15;
console.log(typeof myNumber);

// Boolean
let myBoolean = true;
console.log(typeof myBoolean);

// Undefined
let cohort;
console.log(cohort);
// Prints: undefined

// Null
console.log(typeof null);
// Prints: object 


/*------------------- Combining Strings ---------------------*/
let firstName = 'John';
let greeting = 'hello';

greeting = `Hello, ${firstName}!`;
console.log(greeting);
// Output: Hello, John!

//As an additional note, template literals can span multiple lines. For example:
let longString = `Hello, and welcome to the application!
Get started by logging in below!
We're happy to have you.`;
console.log(longString);

// Greeting message
let myName = 'John';
let friendName = 'Jane';

let greetingMessage = `Hello ${friendName}, and welcome to the application!
Get started by logging in below!
We're happy to have you.
From ${myName}`;
console.log(greetingMessage);

/*------------------- Dynamic vs Static ---------------------*/

// Declare a variable named data and initialize with a number
let data = 123;
console.log(typeof data);
// Reassigning a different type of data is allowed
data = 'Hello';
console.log(typeof data);


/*------------------- Weak vs Strong Typed Languages ---------------------*/
const num = 7;
const sentence = `A week is ${num} days.`;
console.log(sentence);
// Prints: A week is 7 days.


//# Error! A string and an int cannot be concatenated!
//To make this valid code, the num must be explicitly converted into a string before it can be concatenated with the other strings surrounding it:
num = 7
sentence = "A week is " + str(num) + " days." 
// This works!
print(sentence) 
// Prints: A week is 7 days.


/*------------------- Implicit and Explicit Type Conversion ---------------------*/
// Type conversion example
let numb = 15; // I'm a number
num = 'Hey!'; // Now I'm a string!

// Implicit type conversion
13 == '13';
// true!

13 === '13';
// false!

// Explicit type conversion
// Using toString() method
let numOne = 123.456;
let strOne = numOne.toString(); // "123.456"

// Using String() function
let numTwo = 123.456;
let strTwo = String(numTwo); // "123.456"

// Using toFixed() method
let numThree = 123.456;
let strThree = numThree.toFixed(2); // "123.46"

// Using parseInt() and parseFloat() functions
let strFour = '1234.567';
let numFour = parseInt(strFour); // 1234

let strFive = '1234.567';
let numFive = parseFloat(strFive); // 1234.567

// Using Number() function
let strSix = '1234.567';
let numSix = Number(strSix); // 1234.567
