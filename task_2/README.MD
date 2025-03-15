# Functions Documentation

The project demonstrates the implementation of several utility functions:

- Temperature conversion (Fahrenheit to Celsius)
- Distance conversion (Centimeters to Kilometers)
- Number parity checking (Even/Odd)
- String manipulation (Removing substring occurrence)
- Palindrome checking

## Function Documentation

### 1. Fahrenheit to Celsius Conversion

**Function:** `fahrenheitToCelsius(fahrenheit)`

**Description:** Converts a temperature from Fahrenheit to Celsius.

**Parameters:**
- `fahrenheit` (Number): The temperature value in Fahrenheit

**Returns:** The temperature in Celsius, rounded to three decimal places.

**Example:**
```javascript
fahrenheitToCelsius(70); // Returns 21.111
```

### 2. Centimeters to Kilometers Conversion

**Function:** `convertCmToKm(cm)`

**Description:** Converts a length from centimeters to kilometers.

**Parameters:**
- `cm` (Number): The length in centimeters

**Returns:** The length in kilometers, rounded to three decimal places.

**Example:**
```javascript
convertCmToKm(100000); // Returns 1
```

### 3. Even Number Check

**Function:** `isEven(n)`

**Description:** Determines whether a number is even.

**Parameters:**
- `n` (Number): The number to check

**Returns:** Boolean value indicating if the number is even (true) or odd (false).

**Example:**
```javascript
isEven(1000); // Returns true
isEven(1001); // Returns false
```

### 4. Remove First Occurrence

**Function:** `removeFirstOccurrence(text, searchString)`

**Description:** Removes the first occurrence of a specified substring from a text.

**Parameters:**
- `text` (String): The original text
- `searchString` (String): The substring to be removed

**Returns:** The text with the first occurrence of the substring removed.

**Example:**
```javascript
removeFirstOccurrence("Hello, world", "ell"); // Returns "Ho, world"
```

### 5. Palindrome Check

**Function:** `isPalindrome(str)`

**Description:** Checks if a given string is a palindrome (reads the same backward as forward).

**Parameters:**
- `str` (String): The string to check

**Returns:** Boolean value indicating if the string is a palindrome (true) or not (false).

**Example:**
```javascript
isPalindrome("madam"); // Returns true
isPalindrome("hello"); // Returns false
```