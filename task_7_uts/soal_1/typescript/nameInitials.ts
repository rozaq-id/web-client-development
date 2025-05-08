/**
 * Extracts and returns the initials from a full name
 * 
 * @param name - The full name to extract initials from
 * @returns A string containing the uppercase first letter of each word in the name
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}