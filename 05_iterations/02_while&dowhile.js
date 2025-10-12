// ⚡️ WHILE LOOP & DO-WHILE LOOP IN JAVASCRIPT ⚡️


// 🔹 WHILE LOOP
// Syntax:
// while (condition) {
//     // code block
// }

// Example 1️⃣: Simple while loop
let index = 0

// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// 💡 Explanation:
// - Pehle condition check hoti hai (index <= 10)
// - Agar true hai → code block execute hota hai
// - Har baar index +2 ho raha hai
// ✅ Output: 0, 2, 4, 6, 8, 10


// ⚙️ WHILE LOOP WITH ARRAY
let myArray = ['flash', 'batman', 'superman']

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// ✅ Output: flash, batman, superman
// 💡 Tip: Jab tak condition true hai, tab tak loop chalta rahega
// ⚠️ Agar arr++ likhna bhool gaye → infinite loop ban jayega 😅


// 🔸 DO-WHILE LOOP
// Syntax:
// do {
//    // code block
// } while (condition);

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// 💡 Difference between WHILE & DO-WHILE:
// ✅ while → pehle condition check karta hai, phir execute karta hai
// ✅ do-while → pehle execute karta hai, baad me condition check karta hai

// 👉 Matlab do-while kam se kam ek baar zarur chalega,
// chahe condition false hi kyu na ho 😎

// ✅ Output: "Score is 11"
// (kyunki condition false thi, loop bas ek baar chala)


// ⚡ Quick Recap ⚡
// ----------------------------------
// while → check first, run later 🔁
// do-while → run once, then check 🔂
// ----------------------------------
