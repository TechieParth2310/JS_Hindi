"use strict"; // treat all JS code as a newer version

// alert(3+3) // we are using nodejs and not the browser so it won't run

let name ="Parth" //string
let age = 22. // number
let isLoggedIn = false // boolean

// null => standalone value;
// undefined
//symbol => unique

// These above all are the primitive datatypes.

// object

console.log(typeof undefined) // => returns undefined only as a datatype 
console.log(typeof null) // => returns object as a datatype // imp Interview Q

// 🧠 JavaScript Data Types

// 1️⃣ Primitive (immutable, stored by value)
    // String     → "Hello"
    // Number     → 42, 3.14
    // Boolean    → true / false
    // Null       → intentional empty value
    // Undefined  → variable declared but not assigned
    // Symbol     → unique identifier (ES6)
    // BigInt     → large integers (ES2020)

// 2️⃣ Non-Primitive / Reference (stored by reference)
    // Object     → { key: "value" }
    // Array      → [1, 2, 3]
    // Function   → function() {}

// 🧩 typeof operator examples:
    // typeof "Hi"        → "string"
    // typeof null        → "object" (bug in JS)
    // typeof undefined   → "undefined"
    // typeof []          → "object"
    // typeof function(){}→ "function"
