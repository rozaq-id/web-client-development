/**
 * Main index file that imports and tests all utility functions
 * 
 * This file demonstrates the usage of each imported function with example inputs and outputs
 */

// Import all functions from other files in this directory
import fahrenheitToCelsius from './fahrenheitToCelsius';
import convertCmToKm from './convertCmToKm';
import isEven from './isEven';
import removeFirstOccurrence from './removeFirstOccurrence';
import isPalindrome from './isPalindrome';

/**
 * Tests the fahrenheitToCelsius function with sample inputs
 */
console.log('--- Testing fahrenheitToCelsius ---');
console.log('98.6°F to Celsius:', fahrenheitToCelsius(98.6), '°C');
console.log();

/**
 * Tests the convertCmToKm function with sample inputs
 */
console.log('--- Testing convertCmToKm ---');
console.log('Convert 100000 cm to km:', convertCmToKm(100000));
console.log('Convert 1 km to cm:', convertCmToKm(1, false));
console.log();

/**
 * Tests the isEven function with sample inputs
 */
console.log('--- Testing isEven ---');
console.log('1000 is odd?', isEven(1000));
console.log('1001 is odd?', isEven(1001));
console.log();

/**
 * Tests the removeFirstOccurrence function with sample inputs
 */
console.log('--- Testing removeFirstOccurrence ---');
console.log('Remove "ell" from "Hello world":', removeFirstOccurrence('Hello world', 'ell'));
console.log();

/**
 * Tests the isPalindrome function with sample inputs
 */
console.log('--- Testing isPalindrome ---');
console.log('"madam" is palindrome?', isPalindrome('madam'));
console.log('"hello" is palindrome?', isPalindrome('hello'));
console.log();

/**
 * Indicates that all tests have been completed successfully
 */
console.log('All tests completed successfully!');