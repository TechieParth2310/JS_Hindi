// ===============================
// 🧠 JavaScript Numbers & Maths
// ===============================

// Numbers in JS can be written in two ways:
// 1️⃣ Primitive type (just a value)
// 2️⃣ Object type (using 'new Number()')

// ------------------------------
// Example 1: Primitive Number
// ------------------------------
const score = 400
console.log(score);   // Output: 400
// 👉 Simple number literal (primitive type)
// JS automatically treats it as type 'number'

// ------------------------------
// Example 2: Number Object
// ------------------------------
const balance = new Number(100)
console.log(balance); 
// Output: [Number: 100]
// 👉 Creates a Number object (not primitive).
// Comes with built-in methods like toString(), toFixed(), etc.

// ------------------------------
// Example 3: toString() Method
// ------------------------------
console.log(balance.toString().length);  
// Output: 3
// 👉 toString() converts number → string "100"
// 👉 .length gives number of characters in the string

// ------------------------------
// Example 4: toFixed() Method
// ------------------------------
console.log(balance.toFixed(1));  
// Output: "100.0"
// 👉 toFixed(n) formats number to 'n' decimal places
// Returns a STRING (used often for currency or fixed precision)


// ===============================
// 🎯 Number Methods (Precision & Locale)
// ===============================

// ------------------------------
// Example 1: toPrecision()
// ------------------------------

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));  
// Output: "123.9"

// 👉 toPrecision(n) controls the *total number of significant digits* (not decimals).
//    It returns a STRING representation with n total meaningful digits.
//
// 📘 Example Breakdown:
//    123.8966 → toPrecision(4) → "123.9"
//    Here, total 4 digits are counted: 1, 2, 3, and 9
//
// 👉 toPrecision(2) → "1.2e+2"  (exponential notation for large numbers)
// 👉 toPrecision(6) → "123.897" (adds one extra digit of precision)
//
// 💬 Interview Tip:
// Q: What’s the difference between toFixed() and toPrecision()?
// A: 
//   - toFixed() → fixes number of digits *after decimal*
//   - toPrecision() → fixes *total significant digits*
//   - Both return STRINGs, not numbers.


// ------------------------------
// Example 2: toLocaleString()
// ------------------------------

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  
// Output: "10,00,000"

// 👉 toLocaleString(locale) converts number into a region-based format.
//
// 'en-IN' → Indian numbering system (lakh, crore style)
// 'en-US' → Western system (thousand, million)
//
// Example:
//    1000000.toLocaleString('en-US') → "1,000,000"
//    1000000.toLocaleString('en-IN') → "10,00,000"
//
// 💬 Interview Tip:
// Q: Why use toLocaleString() instead of manual formatting?
// A: It automatically adapts number formatting for currency or region
//    based on locale — best practice for international apps.
