"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing utility functions from other modules
var fahrenheitToCelsius_1 = require("./fahrenheitToCelsius");
var convertCmToKm_1 = require("./convertCmToKm");
var isEven_1 = require("./isEven");
var removeFirstOccurrence_1 = require("./removeFirstOccurrence");
var isPalindrome_1 = require("./isPalindrome");
// Convert 70°F to Celsius and log the result
var fahrenheit = 70;
var celcius = (0, fahrenheitToCelsius_1.default)(fahrenheit);
console.log("".concat(fahrenheit, "\u00B0F is equal to ").concat(celcius, "\u00B0C"));
// Convert 100000 cm to kilometers and log the result
var cm = 100000;
var kilometer = (0, convertCmToKm_1.default)(cm);
console.log("100000 cm is equal to ".concat(kilometer, " km"));
// Check if numbers 1000 and 1001 are even and log the results
var number1 = 1000;
var number2 = 1001;
console.log("".concat(number1, " is even: ").concat((0, isEven_1.default)(number1)));
console.log("".concat(number2, " is even: ").concat((0, isEven_1.default)(number2)));
// Remove the first occurrence of "ell" from "Hello, world" and log the result
var text1 = "Hello, world";
var searchString = "ell";
console.log("\"".concat(text1, "\" remove \"").concat(searchString, "\": \"").concat((0, removeFirstOccurrence_1.default)(text1, searchString), "\""));
// Check if "madam" is a palindrome and log the result
var text2 = "madam";
var text3 = "hello";
console.log("\"".concat(text2, "\" is palindrome: ").concat((0, isPalindrome_1.default)(text2)));
console.log("\"".concat(text3, "\" is palindrome: ").concat((0, isPalindrome_1.default)(text3)));
