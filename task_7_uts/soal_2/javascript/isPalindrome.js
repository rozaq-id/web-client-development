/**
 * Checks whether a string is a palindrome or not
 * 
 * @param {string} str - The string to check
 * @returns {boolean} True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for more accurate comparison
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    
    // Compare the string with its reverse
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

module.exports = isPalindrome;