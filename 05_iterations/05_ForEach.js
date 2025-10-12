// ⚡️ forEach() LOOP IN JAVASCRIPT ⚡️

// 💡 forEach ek ARRAY method hai — 
// har element ke liye ek baar function execute karta hai 🔁
// (sirf arrays ke liye kaam karta hai — objects/maps ke liye nahi)


// 🔹 Example 1️⃣: Basic forEach with anonymous function
const coding = ["js", "ruby", "python", "java", "cpp"]

coding.forEach(function (val) {
   //console.log(val);
})

// ✅ Output: js, ruby, python, java, cpp
// 💡 Har element ek-ek karke 'val' me aata hai


// 🔹 Example 2️⃣: Arrow function ke sath (shorter syntax)
coding.forEach((item) => {
   //console.log(item)
})

// ✅ Same output: js, ruby, python, java, cpp
// 💬 Arrow function se code clean aur compact lagta hai 😎


// 🔹 Example 3️⃣: Existing function ko forEach me pass karna
function printMe(item) {
   //console.log(item);
}

//coding.forEach(printMe);

// 💡 forEach apne aap har element ko 'printMe' function me bhej deta hai
// ✅ Output: js, ruby, python, java, cpp


// 🔹 Example 4️⃣: Accessing item, index & array together
coding.forEach((item, index, arr) => {
   //console.log(item, index, arr);
})

// ✅ Output format:
// js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ...
// 💡 Yeh 3 parameters optional hain → (item, index, array)


// ⚙️ Practical Example: Array of Objects
const myCoding = [
    {
        languageName : "java",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    } 
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);  
})

// ✅ Output: js, py, cpp
// 💡 item yahan har object ko represent karta hai
// aur hum uski property 'languageFileName' access kar rahe hain


// 🧠 QUICK NOTES 🧠
// -------------------------------------------------
// ✅ forEach() → sirf arrays ke liye hota hai
// ✅ koi "return" nahi deta (always undefined)
// ✅ generally use hota hai: printing, small ops, or iterating
// ✅ parameters: (item, index, array)
// ❌ loop break ya continue yahan nahi chalta
// -------------------------------------------------

// 💡 Tip: Agar data transform karna ho (naya array banana hai)
// toh 'map()' use kar → wo values return karta hai 🔥
