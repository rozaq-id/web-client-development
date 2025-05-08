/**
 * Converts centimeters to kilometers or vice versa
 * 
 * @param {number} value - The value to convert
 * @param {boolean} toKm - Set to true to convert cm to km, or false to convert km to cm
 * @returns {string} The converted value with appropriate unit suffix
 */
function convertCmToKm(value, toKm = true) {
    if (toKm) {
        // Convert cm to km
        return (value / 100000) + " km";
    } else {
        // Convert km to cm
        return (value * 100000) + " cm";
    }
}

module.exports = convertCmToKm;