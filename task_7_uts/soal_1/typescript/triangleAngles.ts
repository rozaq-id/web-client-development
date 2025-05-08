/**
 * Calculates the third angle of a triangle when given the other two angles
 * 
 * @param a - The first angle of the triangle in degrees
 * @param b - The second angle of the triangle in degrees
 * @returns The third angle of the triangle in degrees, based on the fact that the sum of all angles in a triangle is 180°
 */
export default function thirdAngle(a: number, b: number): number {
    return 180 - (a + b);
}