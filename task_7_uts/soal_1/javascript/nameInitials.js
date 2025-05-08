/**
 * Extracts and returns the initials from a full name
 * 
 * @param {string} name - The full name to extract initials from
 * @returns {string} A string containing the uppercase first letter of each word in the name
 */
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}

module.exports = getInitials;