/**
 * Calculates properties of a circle based on the radius
 * 
 * @param radius - The radius of the circle
 * @returns An object containing the diameter, circumference (rounded to 4 decimal places), 
 *          and area (rounded to 3 decimal places) of the circle
 */
export default function circleProperties(radius: number) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return {
        diameter,
        circumference: parseFloat(circumference.toFixed(4)),
        area: parseFloat(area.toFixed(3))
    };
}