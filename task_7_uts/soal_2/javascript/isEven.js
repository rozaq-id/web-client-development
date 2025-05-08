/**
 * Takes an integer n as input and returns true if n is odd and false if n is even
 * 
 * @param {number} n - The integer to check
 * @returns {boolean} True if n is odd, false if n is even
 */
function isEven(n) {
    // Return true if n is odd, false if n is even
    return n % 2 !== 0;
}

module.exports = isEven;