# JavaScript and TypeScript Utility Functions

This project contains a collection of utility functions implemented in both JavaScript and TypeScript. The functions are designed to perform various calculations and operations that might be useful in different scenarios.

## Project Structure

```
soal_1/
├── javascript/
│   ├── areaOfRectangle.js
│   ├── circleProperties.js
│   ├── dateDifference.js
│   ├── main.js
│   ├── nameInitials.js
│   └── triangleAngles.js
└── typescript/
    ├── areaOfRectangle.ts
    ├── circleProperties.ts
    ├── dateDifference.ts
    ├── index.ts
    ├── nameInitials.ts
    └── triangleAngles.ts
```

## Utility Functions

### 1. Area of Rectangle

Calculates the area of a rectangle based on its length and width.

**TypeScript Implementation:**
```typescript
export default function areaOfRectangle(length: number, width: number): number {
    return length * width;
}
```

**JavaScript Implementation:**
```javascript
function areaOfRectangle(length, width) {
    return length * width;
}

module.exports = areaOfRectangle;
```

### 2. Circle Properties

Calculates various properties of a circle including diameter, circumference, and area.

**TypeScript Implementation:**
```typescript
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
```

**JavaScript Implementation:**
```javascript
function circleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return {
        diameter,
        circumference: parseFloat(circumference.toFixed(4)),
        area: parseFloat(area.toFixed(3))
    };
}

module.exports = circleProperties;
```

### 3. Triangle Angles

Calculates the third angle of a triangle when given the other two angles.

**TypeScript Implementation:**
```typescript
export default function thirdAngle(a: number, b: number): number {
    return 180 - (a + b);
}
```

**JavaScript Implementation:**
```javascript
function thirdAngle(a, b) {
    return 180 - (a + b);
}

module.exports = thirdAngle;
```

### 4. Date Difference

Calculates the difference in days between two dates.

**TypeScript Implementation:**
```typescript
export default function dateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
```

**JavaScript Implementation:**
```javascript
function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

module.exports = dateDifference;
```

### 5. Name Initials

Extracts initials from a full name.

**TypeScript Implementation:**
```typescript
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}
```

**JavaScript Implementation:**
```javascript
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('');
}

module.exports = { getInitials };
```

## Key Differences Between JavaScript and TypeScript Implementations

### Type Annotations

TypeScript provides type annotations that make the code more robust and help catch type-related errors during development:

- **TypeScript**: Functions have explicit parameter and return types.
  ```typescript
  function areaOfRectangle(length: number, width: number): number
  ```

- **JavaScript**: Functions rely on JSDoc comments for type documentation but no built-in type checking.
  ```javascript
  /**
   * @param {number} length
   * @param {number} width
   * @returns {number}
   */
  function areaOfRectangle(length, width)
  ```

### Module System

- **TypeScript**: Uses ES Modules system with `export` and `import`.
  ```typescript
  export default function thirdAngle(a: number, b: number): number
  ```

- **JavaScript**: Uses CommonJS module system with `module.exports` and `require()`.
  ```javascript
  module.exports = thirdAngle;
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
# Run the main.js file
node javascript/main.js
```

## Conclusion

These utility functions demonstrate how to implement common calculations and operations in both TypeScript and JavaScript. TypeScript adds type safety and better tooling support, while JavaScript offers simplicity and direct execution without compilation.

Both implementations maintain the same functionality, but TypeScript provides additional benefits for larger projects where type safety becomes more important.