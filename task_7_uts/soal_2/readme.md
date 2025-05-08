# JavaScript and TypeScript Utility Functions

This project contains a collection of utility functions implemented in both JavaScript and TypeScript. The functions are designed to perform various calculations and string operations that might be useful in different scenarios.

## Project Structure

```
soal_2/
├── javascript/
│   ├── convertCmToKm.js
│   ├── fahrenheitToCelsius.js
│   ├── index.js
│   ├── isEven.js
│   ├── isPalindrome.js
│   └── removeFirstOccurrence.js
└── typescript/
    ├── convertCmToKm.ts
    ├── fahrenheitToCelsius.ts
    ├── index.ts
    ├── isEven.ts
    ├── isPalindrome.ts
    └── removeFirstOccurrence.ts
```

## Utility Functions

### 1. Fahrenheit to Celsius Converter

Converts a temperature value from Fahrenheit to Celsius.

**TypeScript Implementation:**
```typescript
export default function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}
```

**JavaScript Implementation:**
```javascript
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

module.exports = fahrenheitToCelsius;
```

### 2. Centimeter to Kilometer Converter

Converts measurements between centimeters and kilometers.

**TypeScript Implementation:**
```typescript
export default function convertCmToKm(value: number, toKm: boolean = true): string {
    if (toKm) {
        // Convert cm to km
        return (value / 100000) + " km";
    } else {
        // Convert km to cm
        return (value * 100000) + " cm";
    }
}
```

**JavaScript Implementation:**
```javascript
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
```

### 3. Check if Number is Even or Odd

Takes an integer n as input and returns true if n is odd and false if n is even.

**TypeScript Implementation:**
```typescript
export default function isEven(n: number): boolean {
    // Return true if n is odd, false if n is even
    return n % 2 !== 0;
}
```

**JavaScript Implementation:**
```javascript
function isEven(n) {
    // Return true if n is odd, false if n is even
    return n % 2 !== 0;
}

module.exports = isEven;
```

### 4. Remove First Occurrence of String

Removes the first occurrence of a search string from a string.

**TypeScript Implementation:**
```typescript
export default function removeFirstOccurrence(str: string, searchStr: string): string {
    const index = str.indexOf(searchStr);
    if (index === -1) {
        return str; // Return original string if search string not found
    }
    
    return str.substring(0, index) + str.substring(index + searchStr.length);
}
```

**JavaScript Implementation:**
```javascript
function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index === -1) {
        return str; // Return original string if search string not found
    }
    
    return str.substring(0, index) + str.substring(index + searchStr.length);
}

module.exports = removeFirstOccurrence;
```

### 5. Check if String is Palindrome

Checks whether a string is a palindrome or not.

**TypeScript Implementation:**
```typescript
export default function isPalindrome(str: string): boolean {
    // Remove spaces and convert to lowercase for more accurate comparison
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    
    // Compare the string with its reverse
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}
```

**JavaScript Implementation:**
```javascript
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for more accurate comparison
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    
    // Compare the string with its reverse
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

module.exports = isPalindrome;
```

## Key Differences Between JavaScript and TypeScript Implementations

### Type Annotations

TypeScript provides type annotations that make the code more robust and help catch type-related errors during development:

- **TypeScript**: Functions have explicit parameter and return types.
  ```typescript
  function fahrenheitToCelsius(fahrenheit: number): number
  ```

- **JavaScript**: Functions rely on JSDoc comments for type documentation but no built-in type checking.
  ```javascript
  /**
   * @param {number} fahrenheit
   * @returns {number}
   */
  function fahrenheitToCelsius(fahrenheit)
  ```

### Module System

- **TypeScript**: Uses ES Modules system with `export` and `import`.
  ```typescript
  export default function isPalindrome(str: string): boolean
  ```

- **JavaScript**: Uses CommonJS module system with `module.exports` and `require()`.
  ```javascript
  module.exports = isPalindrome;
  ```

## Running the Code

### TypeScript

To run the TypeScript code, you'll need to compile it first:

```bash
# Install TypeScript if you haven't already
npm install -g typescript

# Compile TypeScript files
tsc

# Run the compiled JavaScript
node typescript/index.js
```

### JavaScript

The JavaScript code can be run directly:

```bash
# Run the index.js file
node javascript/index.js
```

## Example Outputs

- Fahrenheit to Celsius: 32°F → 0°C
- Centimeter to Kilometer: 100000 cm → "1 km"
- Even/Odd Check: 1000 → isEven: false; 1001 → isEven: true
- Remove First Occurrence: "Hello world" with "ell" removed → "Ho world"
- Palindrome Check: "madam" → isPalindrome: true

## Conclusion

These utility functions demonstrate how to implement common calculations and string operations in both TypeScript and JavaScript. TypeScript adds type safety and better tooling support, while JavaScript offers simplicity and direct execution without compilation.

Both implementations maintain the same functionality, but TypeScript provides additional benefits for larger projects where type safety becomes more important.