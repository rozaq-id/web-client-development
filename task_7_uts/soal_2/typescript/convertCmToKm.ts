/**
 * Converts centimeters to kilometers or vice versa
 * 
 * @param value - The value to convert
 * @param toKm - Set to true to convert cm to km, or false to convert km to cm
 * @returns The converted value with appropriate unit suffix
 */
export default function convertCmToKm(value: number, toKm: boolean = true): string {
    if (toKm) {
        // Convert cm to km
        return (value / 100000) + " km";
    } else {
        // Convert km to cm
        return (value * 100000) + " cm";
    }
}