/**
 * Checks whether a string is a palindrome or not
 * 
 * @param str - The string to check
 * @returns True if the string is a palindrome, false otherwise
 */
export default function isPalindrome(str: string): boolean {
    // Remove spaces and convert to lowercase for more accurate comparison
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    
    // Compare the string with its reverse
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}