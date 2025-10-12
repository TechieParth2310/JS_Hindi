// ⚡️ FOR...IN LOOP IN JAVASCRIPT ⚡️

// 💡 'for...in' ka use hum karte hain jab hume
// kisi object ke KEYS (properties) iterate karne hote hain 🔑


// 🔹 Example 1️⃣: Object ke saath for...in
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
}

// ✅ Yahaan 'obj' har baar ek KEY hold karega
for (const obj in myObject) {
    //console.log(obj);
}
// 👉 Output: js, cpp, rb (sirf keys print hoti hain)


// 🔹 Example 2️⃣: Object ke values access karna
for (const obj in myObject) {
    //console.log(myObject[obj]);
}
// ✅ Output: javascript, C++, ruby
// 💡 Yahan hum key ke through uski value access kar rahe hain → myObject[key]


// 🔹 Example 3️⃣: Better formatted output
for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);
}

// ✅ Output:
// js is shortcut for javascript
// cpp is shortcut for C++
// rb is shortcut for ruby

// 💬 Tip: Real-world use – jab object me key-value pairs store ho jaayein 
// (like config, language codes, etc.)


// ⚙️ FOR...IN with Arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// ✅ Output: js, rb, py, java, cpp
// 💡 for...in arrays pe bhi chalta hai, lekin yeh INDEXES deta hai
// jaise 0,1,2,... fir hum us index se value nikalte hain
// ⚠️ Tip: Arrays ke liye usually 'for...of' ya 'forEach' better hai


// ❌ FOR...IN with Map (does NOT work)
 // const map = new Map()
 // map.set('IN', "India")
 // map.set('USA', "United States of America")
 // map.set('Fr', "France")
 // map.set('IN', "India")

 // for (const key in map) {
 //     console.log(key);
 // }

 // ❌ Output: kuch nahi 😅
 // 💡 Reason: Map iterable hai, par for...in iterable objects pe kaam nahi karta
 // ✅ Use 'for...of' loop with [key, value] destructuring instead!


// 🧠 QUICK SUMMARY 🧠
// --------------------------------------
// ✅ for...in → Objects & Arrays ke indexes ke liye
// ✅ Iterates over → KEYS / property names
// ❌ Doesn't work with Maps or Sets
// 💡 Object ke values chahiye → use obj[key]
// --------------------------------------
