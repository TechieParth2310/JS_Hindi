// ===============================
// 🧩 JavaScript Arrays (Part 2)
// ===============================

// ------------------------------
// 1️⃣ Concatenation (Merging Arrays)
// ------------------------------
const marvelheros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// ❌ Using push() with an array inside adds the entire array as one element
// marvelheros.push(dc_heros);
// console.log(marvelheros);   // ["thor","Ironman","spiderman",["superman","flash","batman"]]
// console.log(marvelheros[3][1]); // "flash"

// ✅ Proper way: concat() or spread operator (...)
const allheros = marvelheros.concat(dc_heros);
console.log(allheros);
// Output: ["thor","Ironman","spiderman","superman","flash","batman"]

// ✅ Spread Operator (Modern & Preferred)
const all_new_heros = [...marvelheros, ...dc_heros];
console.log(all_new_heros);
// Output: ["thor","Ironman","spiderman","superman","flash","batman"]

// ⚡ Interview Tip:
// concat() returns a new array → does not modify originals
// spread (...) is more flexible and used widely in modern JS


// ------------------------------
// 2️⃣ flat() Method
// ------------------------------
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1,2,3,4,5,6,7,8,9,10]

// flat(depth) → flattens nested arrays
// use Infinity for deeply nested arrays
// does not mutate the original array


// ------------------------------
// 3️⃣ Array.isArray()
// ------------------------------
console.log(Array.isArray("Parth"));   // false
console.log(Array.isArray([1, 2, 3])); // true
// ✅ Checks if the given value is an actual array
// typeof [] → "object" (so use Array.isArray() instead)


// ------------------------------
// 4️⃣ Array.from()
// ------------------------------
console.log(Array.from("Parth"));
// Output: ["P","a","r","t","h"]

console.log(Array.from({ name: "hitesh" }));
// Output: [] → interesting
// ⚠️ Objects are not directly iterable, so from() needs an iterable or array-like object
// Example: Array.from({ length: 3 }, (_, i) => i) → [0,1,2]


// ------------------------------
// 5️⃣ Array.of()
// ------------------------------
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]

// ✅ Array.of() creates a new array from given individual elements
// ⚡ Difference: new Array(3) → empty array of length 3
//                Array.of(3) → [3]


// ------------------------------
// 💡 BONUS: Array.from() vs Array.of()
// ------------------------------
// Array.from() → converts iterable or array-like object to array
// Array.of()   → creates array from arguments (no iteration needed)


// ------------------------------
// ⚙️ Quick Revision Summary
// ------------------------------
// concat()     → merges arrays, returns new array
// ...spread    → modern way to merge arrays
// flat()       → flattens nested arrays
// isArray()    → checks if a variable is an array
// from()       → converts iterable to array
// of()         → creates array from elements
// push/pop     → add/remove from end
// unshift/shift→ add/remove from start
// slice()      → copy (non-mutating)
// splice()     → cut/modify (mutating)
// join()       → convert to string
// includes()   → check value existence
// indexOf()    → find element index
// ✅ Arrays are objects internally → typeof [] === "object"
// ✅ Always use Array.isArray() to check array type
