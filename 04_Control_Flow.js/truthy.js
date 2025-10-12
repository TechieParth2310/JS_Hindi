// ⚡️ TRUTHY & FALSY VALUES IN JS ⚡️

const userEmail = []

// 🧠 JS automatically har value ko Truthy ya Falsy treat karta hai
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// ✅ OUTPUT: "Got user email"
// 👉 Reason: [] (empty array) JS mein Truthy hota hai


// ------------------------------
// ❌ FALSY VALUES (ye sab false treat honge)
// ------------------------------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ------------------------------
// ✅ TRUTHY VALUES (ye true treat honge)
// ------------------------------
// "0", 'false', " ", [], {}, function(){}

// 💡 NOTE: JS mein "false" string bhi truthy hai 😅


// 🔍 Example: Check if array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// 👉 Output: "Array is empty" (kyunki length 0 hai)


// ⚙️ CHECK EMPTY OBJECT
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// ✅ OUTPUT: "Object is empty"
// 💡 Object.keys() ek array return karta hai -> agar uska length 0 hai = empty object


// 🔸 NULLISH COALESCING OPERATOR (??)
// Used for handling null & undefined values only
let val1;

// val1 = 5 ?? 10         // 👉 Output: 5
// val1 = null ?? 10      // 👉 Output: 10
// val1 = undefined ?? 15 // 👉 Output: 15
val1 = null ?? 10 ?? 20   // 👉 Output: 10

console.log(val1);

// 💡 Explanation:
// ?? operator pehle non-null/undefined value milte hi wahi return kar deta hai


// 🧩 TERNARY OPERATOR (Shortcut if-else)
// Syntax: condition ? valueIfTrue : valueIfFalse

const iceTeaPrice = 100

iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80")

// ❌ Condition false thi, so output: "more than 80"
// ✅ Ternary operator short conditions ke liye best hai!
 