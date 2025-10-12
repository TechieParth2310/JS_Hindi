// ⚡️ FOR...OF LOOP IN JAVASCRIPT ⚡️

// 💡 for...of mainly use hota hai -> iterate karne ke liye
// Arrays, Strings, Maps (iterable objects) par kaam karta hai
// ❌ Objects ke sath directly kaam nahi karta (unpar for...in use hota hai)


// 🔹 Example 1️⃣: Array ke sath for...of
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// ✅ Output: 1, 2, 3, 4, 5
// 💡 Har iteration me 'num' variable ek value hold karta hai array ke andar se


// 🔹 Example 2️⃣: String ke sath for...of
const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// ✅ Output: H, e, l, l, o,  , w, o, r, l, d, !
// 💡 Strings iterable hote hain → har character ek ek karke milta hai


// ⚙️ MAPS IN JAVASCRIPT
// Map ek key-value pair data structure hai (object jaise but better)

const map = new Map()

// 🔸 Values add karne ke liye:
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // duplicate key -> overwrite karta hai

// console.log(map);

// ✅ Map unique keys rakhta hai (duplicate keys allowed nahi hote)
// ✅ Map remembers insertion order (jis order me add hua tha, usi me iterate hota hai)


// 🔹 Looping over a Map
for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// ✅ Output:
// IN :- India
// USA :- United States of America
// Fr :- France

// 💡 Destructuring use hua hai [key, value] -> har entry ko tod ke dono mil jaate hain
// ⚡ Shortcut: Yeh for...of Map ke liye perfect hai!


// ❌ Example: For...of with Normal Object (Not Iterable)
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ❌ Error: myObject is not iterable
// 💡 Reason: Normal JS objects iterable nahi hote for...of ke sath
// ✅ Solution: Use "for...in" or Object.entries(myObject) with for...of


// 🧠 QUICK SUMMARY 🧠
// --------------------------------------------
// ✅ for...of  → Arrays, Strings, Maps, Sets ke liye
// ❌ for...of  → Normal objects pe directly nahi chalta
// ✅ Tip → Object ke liye use karo: Object.entries(obj)
// --------------------------------------------
