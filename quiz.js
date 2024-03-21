const prompt = require('prompt-sync')();

//Program 1: Temperature Converter
let temp = prompt("Enter temperature in Fahrenheit");
console.log("The temperature,", temp, " is", (temp-32) * 5/9), "in degrees Celcius";
//Program 2: Grade Calculator
let grade = prompt("Input your grade");
if (grade > 89){
	console.log('A');
}
if (90>grade>79){
console.log("B")
}
if (80>grade>69){
console.log("C")
}
if (70>grade>59){
console.log("D")
}
else{
	console.log('F')
}
//Program 3: Leap Year Checker
let year = prompt("Enter a year");
if (year/4 %0){
    console.log("leap year")
    }
    else{
        console.log('not a leap year')
    }
//Program 4: Largest Number Finder
let num1 = prompt("Enter a first number");
let num2 = prompt("Enter a second number");
let num3 = prompt("Enter a third number");
if (num1>num2 , num1>num3){
    console.log(num1)
    }
if (num2>num1 , num2>num3){
    console.log(num2)
    }
if (num3>num1 , num3>num2){
    console.log(num3)
    }