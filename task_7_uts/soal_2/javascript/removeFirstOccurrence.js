/**
 * Removes the first occurrence of a search string from a string
 * 
 * @param {string} str - The original string
 * @param {string} searchStr - The substring to remove
 * @returns {string} The string with the first occurrence of the search string removed
 */
function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index === -1) {
        return str; // Return original string if search string not found
    }
    
    return str.substring(0, index) + str.substring(index + searchStr.length);
}

module.exports = removeFirstOccurrence;