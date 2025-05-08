/**
 * Removes the first occurrence of a search string from a string
 * 
 * @param str - The original string
 * @param searchStr - The substring to remove
 * @returns The string with the first occurrence of the search string removed
 */
export default function removeFirstOccurrence(str: string, searchStr: string): string {
    const index = str.indexOf(searchStr);
    if (index === -1) {
        return str; // Return original string if search string not found
    }
    
    return str.substring(0, index) + str.substring(index + searchStr.length);
}