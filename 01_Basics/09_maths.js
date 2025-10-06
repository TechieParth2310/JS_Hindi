// ===============================
// 🧮 Math Object in JavaScript
// ===============================

// 👉 Math is a built-in object that provides mathematical operations
// ❌ You cannot use it with 'new Math()' (it's not a constructor)
// ✅ Use it directly like Math.methodName()

// ------------------------------
// 1️⃣ Math.abs()
// ------------------------------
console.log(Math.abs(-7));  // Output: 7
// 🔹 Returns the absolute (positive) value
// ⚠️ Math.abs('abc') → NaN
// ⚠️ Math.abs(-0) → 0

// ------------------------------
// 2️⃣ Math.round() / Math.ceil() / Math.floor() / Math.trunc()
// ------------------------------
console.log(Math.round(4.6));  // 5  → rounds to nearest integer
console.log(Math.ceil(4.1));   // 5  → always rounds UP
console.log(Math.floor(4.9));  // 4  → always rounds DOWN
console.log(Math.trunc(4.9));  // 4  → removes decimal part (no rounding)

// ⚡ Interview Tip:
// Math.floor(-4.3) → -5  (rounds downwards)
// Math.trunc(-4.3) → -4  (just cuts off decimal)

// ------------------------------
// 3️⃣ Math.min() & Math.max()
// ------------------------------
console.log(Math.min(2, 5, -10, 9)); // -10
console.log(Math.max(2, 5, -10, 9)); // 9
// 🔹 Finds smallest / largest number from the list

// ------------------------------
// 4️⃣ Math.random()
// ------------------------------
console.log(Math.random());         // 0 to <1
console.log(Math.random() * 10);    // 0 to <10
console.log(Math.floor(Math.random() * 10) + 1);  // 1 to 10

// ⚡ Formula for range (min → max)
// Math.floor(Math.random() * (max - min + 1)) + min
// Example: random between 20 and 30
console.log(Math.floor(Math.random() * (30 - 20 + 1)) + 20);

// ------------------------------
// 5️⃣ Math.pow() & Math.sqrt()
// ------------------------------
console.log(Math.pow(2, 3));  // 8 → 2 raised to 3
console.log(Math.sqrt(25));   // 5 → square root

// ------------------------------
// 6️⃣ Math.PI & Math.E
// ------------------------------
console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045 (Euler’s number)

// ------------------------------
// 7️⃣ Math.sign()
// ------------------------------
console.log(Math.sign(5));   // 1
console.log(Math.sign(-5));  // -1
console.log(Math.sign(0));   // 0
// 🔹 Returns the sign of a number

// ------------------------------
// 8️⃣ Math.cbrt() & Math.log10()
// ------------------------------
console.log(Math.cbrt(27));    // 3 → cube root
console.log(Math.log10(100));  // 2 → base 10 logarithm

// ------------------------------
// ✅ Quick Summary (for revision at end)
// ------------------------------
// abs()     → Absolute value
// round()   → Nearest integer
// ceil()    → Always up
// floor()   → Always down
// trunc()   → Removes decimals
// min()/max() → Smallest/largest
// random()  → Random 0 to 1
// pow()     → Power
// sqrt()    → Square root
// sign()    → Sign (-1, 0, 1)
// PI, E     → Constants
// cbrt(), log10() → Cube root & log base 10



// ===============================
// 🎲 Math.random() in JavaScript
// ===============================

// Math.random() → generates a random number between 0 (inclusive) and 1 (exclusive)
// Example outputs: 0.1234, 0.8745, etc.

console.log(Math.random());  
// Output: 0.xxxxx (always less than 1)


// ------------------------------
// Multiply to scale the range
// ------------------------------
console.log((Math.random() * 10) + 1);  
// 👉 This gives random numbers between 1 and 11 (not including 11)
// Formula = (Math.random() * range) + start


// ------------------------------
// Floor to get whole numbers
// ------------------------------
console.log(Math.floor(Math.random() * 10) + 1);  
// Output: integer between 1 and 10
// Math.floor() removes the decimal part to give whole number


// ------------------------------
// Generating a random number between min and max
// ------------------------------
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// 🔹 Formula Explanation:
// Math.random() → gives 0 to <1
// (max - min + 1) → defines total range size
// + min → shifts starting point to min
//
// Example Output: any integer between 10 and 20 (both included)


// ------------------------------
// 🧠 Interview Tip:
// ------------------------------
// Q: Why do we add "+1" in (max - min + 1)?
// A: Because Math.random() never reaches 1, 
//    so "+1" ensures the upper limit (max) can appear.
//
// Q: How to get a random float (decimal)?
// A: Just remove Math.floor() → Math.random() * (max - min) + min
//
// Q: Is Math.random() truly random?
// A: No, it’s pseudo-random (algorithm-generated).
//    For cryptographic randomness, use crypto.getRandomValues() instead.
