"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts centimeters to kilometers.
 *
 * @param {number} cm - The length in centimeters.
 * @returns {number} The length in kilometers, rounded to three decimal places.
 */
function convertCmToKm(cm) {
    var km = cm / 100000;
    return Math.round(km * 1000) / 1000;
}
exports.default = convertCmToKm;
