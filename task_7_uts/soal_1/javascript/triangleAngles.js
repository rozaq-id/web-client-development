/**
 * Calculates the third angle of a triangle when given the other two angles
 * 
 * @param {number} a - The first angle of the triangle in degrees
 * @param {number} b - The second angle of the triangle in degrees
 * @returns {number} The third angle of the triangle in degrees, based on the fact that the sum of all angles in a triangle is 180°
 */
function thirdAngle(a, b) {
    return 180 - (a + b);
}

module.exports = thirdAngle;