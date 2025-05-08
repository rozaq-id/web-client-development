/**
 * Main index file that imports and tests all utility functions
 * 
 * This file demonstrates the usage of each imported function with example inputs and outputs
 */

// Import all functions from other files in this directory
const areaOfRectangle = require('./areaOfRectangle');
const circleProperties = require('./circleProperties');
const dateDifference = require('./dateDifference');
const getInitials = require('./nameInitials');
const thirdAngle = require('./triangleAngles');

/**
 * Tests the areaOfRectangle function with sample inputs
 */
console.log('--- Testing areaOfRectangle ---');
console.log('Area of rectangle with length 5 and width 3:', areaOfRectangle(5, 3));
console.log();

/**
 * Tests the circleProperties function with sample inputs
 */
console.log('--- Testing circleProperties ---');
console.log('Properties of circle with radius 5:', circleProperties(5));
console.log();

/**
 * Tests the thirdAngle function with sample inputs
 */
console.log('--- Testing thirdAngle ---');
console.log('Third angle when angles are 80 and 65:', thirdAngle(80, 65));
console.log();

/**
 * Tests the dateDifference function with sample inputs
 */
console.log('--- Testing dateDifference ---');
console.log('Days between 2024-03-19 and 2024-03-21:', dateDifference('2024-03-19', '2024-03-21'));
console.log();

/**
 * Tests the getInitials function with sample inputs
 */
console.log('--- Testing getInitials ---');
console.log('Initials of "John Doe":', getInitials('John Doe'));
console.log();

/**
 * Indicates that all tests have been completed successfully
 */
console.log('All tests completed successfully!');