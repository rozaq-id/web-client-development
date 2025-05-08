/**
 * Calculates the difference in days between two dates
 * 
 * @param date1 - The first date in string format (e.g., 'YYYY-MM-DD')
 * @param date2 - The second date in string format (e.g., 'YYYY-MM-DD')
 * @returns The number of days between the two dates (always positive)
 */
export default function dateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}