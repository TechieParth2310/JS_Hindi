// ===============================
// 🧩 JavaScript Arrays (Part 1)
// ===============================

// 👉 Arrays are used to store multiple values in a single variable.
// 👉 Arrays are mutable (can be changed after creation).
// 👉 They are zero-indexed (index starts from 0).

// ------------------------------
// Example 1️⃣ : Array Creation
// ------------------------------
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["parth", "xyz"]

const myArr2 = new Array(1, 2, 3, 4)   // using Array constructor
console.log(myArr[1]);  // Output: 1
// ✅ Access element by index
// ⚠️ If index doesn’t exist → undefined


// ------------------------------
// Example 2️⃣ : Basic Array Methods
// ------------------------------

myArr.push(6);   // adds element at END
myArr.push(7);   // adds another element
myArr.pop();     // removes LAST element

myArr.unshift(8); // adds element at START
myArr.shift();    // removes FIRST element

console.log(myArr);  
// Output: [0, 1, 2, 3, 4, 5, 6]
// (after performing above operations)

// 🧠 Summary of Common Mutating Methods:
// push()    → add at end
// pop()     → remove last
// unshift() → add at start
// shift()   → remove first
// ⚠️ All of these change (mutate) the original array.


// ------------------------------
// Example 3️⃣ : includes() & indexOf()
// ------------------------------
console.log(myArr.includes(5));   // Output: true
console.log(myArr.indexOf(3));    // Output: 3

// includes(value) → checks if value exists → returns true/false
// indexOf(value)  → returns index if found, else -1


// ------------------------------
// Example 4️⃣ : join()
// ------------------------------
const newArr = myArr.join();

console.log(myArr);   // Output: [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);  // Output: "0,1,2,3,4,5,6"
console.log(typeof myArr);  // Output: "object"
console.log(typeof newArr); // Output: "string"

// join() → converts array to string (comma-separated by default)
// Optional: myArr.join("-") → "0-1-2-3-4-5-6"


// ------------------------------
// Example 5️⃣ : slice() vs splice()
// ------------------------------
console.log('A', myArr); 
// A [0, 1, 2, 3, 4, 5, 6]

// slice(start, end) → returns a *copy* of selected elements (end not included)
// ❌ does NOT modify original array
const myn1 = myArr.slice(1, 3);
console.log(myn1);     // Output: [1, 2]
console.log('B', myArr); // Output: [0, 1, 2, 3, 4, 5, 6] (unchanged)

// splice(start, deleteCount) → removes or replaces elements
// ✅ modifies the original array
const myn2 = myArr.splice(1, 3);
console.log(myn2);     // Output: [1, 2, 3]
console.log('C', myArr); // Output: [0, 4, 5, 6]

// ⚡ Key Difference:
// slice() → copy (non-mutating)
// splice() → cut (mutating)


// ------------------------------
// 💬 Interview Tips
// ------------------------------
// ✅ Arrays in JS are dynamic — size can grow/shrink.
// ✅ typeof array → "object"
// ✅ To truly check array type → Array.isArray(myArr) → true
// ✅ slice() doesn’t change original, splice() does.
// ✅ join() converts array to string — useful in data formatting or output.
// ✅ push/pop are faster than unshift/shift because they don’t reindex elements.
// ✅ Arrays can hold mixed data types in JS (e.g., numbers + strings + objects).

// 🧠 Small Example:
const mixed = [1, "hello", true, { name: "parth" }]
console.log(mixed);
// Output: [1, "hello", true, { name: "parth" }]
