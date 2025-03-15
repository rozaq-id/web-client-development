"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts Fahrenheit to Celsius.
 *
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} The temperature in Celsius, rounded to three decimal places.
 */
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return Math.round(celsius * 1000) / 1000;
}
exports.default = fahrenheitToCelsius;
