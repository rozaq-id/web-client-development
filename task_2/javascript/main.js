// Importing utility functions from other modules
import fahrenheitToCelsius from "./fahrenheitToCelsius.js";
import convertCmToKm from "./convertCmToKm.js";
import isEven from "./isEven.js";
import removeFirstOccurrence from "./removeFirstOccurrence.js";
import isPalindrome from "./isPalindrome.js";

// Convert 70°F to Celsius and log the result
const fahrenheit = 70;
const celcius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${celcius}°C`);

// Convert 100000 cm to kilometers and log the result
const cm = 100000;
const kilometer = convertCmToKm(cm);
console.log(`100000 cm is equal to ${kilometer} km`);

// Check if numbers 1000 and 1001 are even and log the results
const number1 = 1000;
const number2 = 1001;
console.log(`${number1} is even: ${isEven(number1)}`);
console.log(`${number2} is even: ${isEven(number2)}`);

// Remove the first occurrence of "ell" from "Hello, world" and log the result
const text1 = "Hello, world";
const searchString = "ell";
console.log(`"${text1}" remove "${searchString}": "${removeFirstOccurrence(text1, searchString)}"`);

// Check if "madam" is a palindrome and log the result
const text2 = "madam";
const text3 = "hello";
console.log(`"${text2}" is palindrome: ${isPalindrome(text2)}`);
console.log(`"${text3}" is palindrome: ${isPalindrome(text3)}`);
