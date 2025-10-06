// 🧠 Example: String Basics & Immutability in JavaScript

const naam = "parth";
const repocount = 50;

// ❌ Outdated way (string concatenation)
// console.log(name + repocount + " value");

// ✅ Modern & cleaner way using Template Literals
console.log(`Hello, my name is ${naam} and my repo count is ${repocount}`);

// -------------------------------------------------------

// Creating a String object using the String constructor
const gamename = new String('PARTHKFC');

// Logging the entire string object
console.log(gamename);           // [String: 'PARTHKFC']

// Accessing a character using index
console.log(gamename[0]);        // 'P'

// Getting string length
console.log(gamename.length);    // 8

// Convert string to lowercase
console.log(gamename.toLowerCase()); // 'parthkfc'

// -------------------------------------------------------
// 🧩 Important Concept: String Immutability

// Even though we used toLowerCase(), 
// the original 'gamename' string is NOT changed.
console.log(gamename);           // Still 'PARTHKFC'

// -------------------------------------------------------
// 🎯 Interview Question:
// Q: Why doesn’t toLowerCase() change the original string value in JavaScript?

// ✅ Answer:
// Because strings in JavaScript are *primitive* and *immutable*.
// This means their value cannot be changed once created.

// When we call a method like toLowerCase():
// 1️⃣ JavaScript creates a new string with the modified value.
// 2️⃣ Returns that new string.
// 3️⃣ The original string remains unchanged because primitives are immutable.

// Example to show this behavior:
const lowerCaseName = gamename.toLowerCase();
console.log(lowerCaseName);  // 'parthkfc'
console.log(gamename);       // Still 'PARTHKFC'

// 💡 Bonus Tip:
// Even though 'new String()' creates a String object wrapper, 
// it still represents an immutable string value inside.
// All string methods like toUpperCase(), slice(), trim(), etc., 
// return *new* strings — they never modify the original.


// 🧠 Top 10 Must-Know String Methods in JavaScript

const str = "  Hello JavaScript!  ";
const name = "Parth";

// -------------------------------------------------------
// 1️⃣ length
console.log(str.length);   
// ➡️ 20 (counts all characters including spaces)

// -------------------------------------------------------
// 2️⃣ trim()
console.log(str.trim());   
// ➡️ "Hello JavaScript!" (removes spaces from both ends)

// -------------------------------------------------------
// 3️⃣ toUpperCase() / toLowerCase()
console.log(name.toUpperCase());  
// ➡️ "PARTH"
console.log(name.toLowerCase());  
// ➡️ "parth"

// -------------------------------------------------------
// 4️⃣ includes()
console.log(str.includes("Java"));  
// ➡️ true (checks if substring exists)

// -------------------------------------------------------
// 5️⃣ indexOf()
console.log(str.indexOf("J"));  
// ➡️ 8 (returns first index of character/word)

// -------------------------------------------------------
// 6️⃣ slice(start, end)
console.log(str.slice(2, 7));  
// ➡️ "Hello" (extracts substring from index 2 to 6)
// we can give value in negative also to start from back....

// -------------------------------------------------------
// 7️⃣ replace(old, new)
console.log(str.replace("JavaScript", "JS"));  
// ➡️ "  Hello JS!  " (replaces first match)

// -------------------------------------------------------
// 8️⃣ split(separator)
console.log(str.trim().split(" "));  
// ➡️ ["Hello", "JavaScript!"] (splits into array)

// -------------------------------------------------------
// 9️⃣ concat()
console.log(name.concat(" loves JS"));  
// ➡️ "Parth loves JS" (joins strings together)

// -------------------------------------------------------
// 🔟 template literals (not a method, but essential!)
console.log(`My name is ${name} and I code in ${"JavaScript"}`);
// ➡️ "My name is Parth and I code in JavaScript"

// -------------------------------------------------------
// ⚠️ Note: Strings are immutable
let game = "CODER";
game.toLowerCase();
console.log(game);  
// ➡️ Still "CODER" — toLowerCase() returns a new string


// Mini Interview Line:

// “String methods in JavaScript never modify the original string 
// because strings are immutable. Each method returns a new string instead.”