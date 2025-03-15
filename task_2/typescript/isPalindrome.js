"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the cleaned string
    var reversedStr = cleanStr.split('').reverse().join('');
    // Check if the original cleaned string is the same as the reversed string
    return cleanStr === reversedStr;
}
exports.default = isPalindrome;
