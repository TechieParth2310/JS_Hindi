// ⚡️ MAP() METHOD IN JAVASCRIPT ⚡️

// 💡 map() bhi ek ARRAY method hai jo har element par ek function run karta hai
// aur ek NEW array return karta hai — transformed values ke saath 🧠

// ❌ Unlike forEach(), map() hamesha ek naya array return karta hai (important!)

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🔹 Example 1️⃣: Simple map()
// const NewNums = MyNums.map((num) => { return num + 10 })
// console.log(NewNums);

// ✅ Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// 💡 Explanation: Har number me +10 add hua aur ek NEW array bana


// ⚙️ Example 2️⃣: Method Chaining with map() & filter()
// Chaining = multiple array methods ko ek saath link karna 🔗

const NewNums = MyNums
                .map((num) => num * 10)   // Step 1: har number *10
                .map((num) => num + 1)    // Step 2: har number me +1
                .filter((num) => {        // Step 3: sirf wo numbers rakho jo 50 se bade hain
                    return num > 50
                })

console.log(NewNums);

// 🧾 Step-by-Step Working:
// MyNums = [1,2,3,4,5,6,7,8,9,10]
// Step 1 → [10,20,30,40,50,60,70,80,90,100]
// Step 2 → [11,21,31,41,51,61,71,81,91,101]
// Step 3 → filter(num > 50)
// ✅ Output → [51, 61, 71, 81, 91, 101]

// 💡 map() har step pe naya array return karta hai, 
// isliye chaining possible hoti hai (like a pipeline)


// 🧠 QUICK SUMMARY 🧠
// ------------------------------------------------------
// ✅ map() → har element ko transform karta hai aur naya array return karta hai
// ✅ filter() → condition-based elements ko select karta hai
// ✅ Chaining → ek method ka output dusre method ka input
// ✅ Original array → unchanged (safe)
// ------------------------------------------------------

// 💬 Real-life Example:
// Prices array: [100,200,300]
// map() → Apply discount (price * 0.9)
// filter() → Sirf wo prices rakho jo >150 hain
// Output → [180, 270]
