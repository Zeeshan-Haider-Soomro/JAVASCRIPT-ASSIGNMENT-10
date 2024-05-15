// QUESTION 01)Write a program that takes a positive integer from user & display the following in your browser.

// let num = 3.4512;
let roundedValue = Math.round(num)

// // a. number
document.write(`number: ${num} <br/>`)

// // b. round off value of the number
document.write(`round off value: ${roundedValue}<br/>`)


// // c. floor value of the number
let floorValue = Math.floor(num)
document.write(`floor value: ${floorValue} <br/>`)

// // d. ceil value of the number
let ceilValue = Math.ceil(num)
document.write(`ceil value: ${ceilValue}`)

// QUESTION 02)Write a program that takes a negative floating point number from user & display the following in your browser.

let num = -3.4512;
let roundedValue = Math.round(num)

// // a. number
document.write(`number: ${num} <br/>`)

// // b. round off value of the number
document.write(`round off value: ${roundedValue}<br/>`)


// // c. floor value of the number
let floorValue = Math.floor(num)
document.write(`floor value: ${floorValue} <br/>`)

// // d. ceil value of the number
let ceilValue = Math.ceil(num)
document.write(`ceil value: ${ceilValue}`)

// QUESTION 03)Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let num = +prompt("Enter any number to get absolute value");
document.write(Math.abs(num))

// QUESTION 04)Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

let randomDiceValue = Math.ceil(Math.random() * 6)
document.write(`random dice value: ${randomDiceValue}`)

// QUESTION 05)Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

let game = ["head", "tail"];
let randomNumber = Math.floor(Math.random() * game.length)
document.write(`${randomNumber} <br/>`)
let randomToss = game[Math.floor(Math.random() * game.length)]
document.write(`random coin value: ${randomToss}`)

// // 2nd method

let game = ["head", "tail"];
let gen = Math.random() * game.length;
let convertToFloor = Math.floor(gen);
document.write(`${convertToFloor}<br>`);
let gettingGame = game[convertToFloor];
document.write(`Random Coin Value : ${gettingGame}`);

// QUESTION 06)Write a program that shows a random number between 1 and 100 in your browser.

let randomNumber = Math.ceil(Math.random() * 100)
document.write(`random number between 1 and 100: ${randomNumber}`)

// QUESTION 07)Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:

// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let userWeight = prompt("Enter your weight in kilograms")
document.write(`The weight of user is ${userWeight}`)

// QUESTION 08)Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

let askUser = +prompt("Enter a number")
let randomNumber = Math.ceil(Math.random() * 10)
if(randomNumber === askUser){
    alert("Congrations")
}
else{
    alert("Try Again")
}








