/**
 * Takes an integer n as input and returns true if n is odd and false if n is even
 * 
 * @param n - The integer to check
 * @returns True if n is odd, false if n is even
 */
export default function isEven(n: number): boolean {
    // Return true if n is odd, false if n is even
    return n % 2 !== 0;
}