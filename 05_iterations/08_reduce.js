// ⚡️ REDUCE() METHOD IN JAVASCRIPT ⚡️

// 💡 reduce() ek array method hai jo saare elements ko combine karke
// ek single output (value) return karta hai 🧠

// ✅ Mostly use hota hai:
// 👉 Total nikalne ke liye (sum, price, quantity, etc.)
// 👉 Aggregation, average, products, etc.

// Syntax:
// array.reduce( (accumulator, currentValue) => { ... }, initialValue )

const myNums = [1, 2, 3];

// 🔹 Example 1️⃣: Using normal function
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc + currval;
// }, 3)
// console.log(myTotal);

// 🧠 Explanation:
// acc = accumulator (pichla result hold karta hai)
// currval = current element
// initial value = 3 (start point)

// Step-by-step (agar initial value = 3):
// 1️⃣ acc=3, currval=1 → return 4
// 2️⃣ acc=4, currval=2 → return 6
// 3️⃣ acc=6, currval=3 → return 9
// ✅ Final Output → 9


// 🔹 Example 2️⃣: Short form using arrow function
const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal);

// ✅ Output: 6
// 💡 Kyunki 0 se start kiya, aur (1+2+3 = 6)


// ⚙️ REAL-LIFE EXAMPLE: Shopping Cart 🛒
const shoppingCart = [
    { itemName: "js course",         price: 2999 },
    { itemName: "py course",         price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 }
];

// 🔸 Using reduce() to calculate total price
const TotalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(TotalPrice);

// ✅ Output: 22996
// 💡 Explanation:
// acc starts from 0
// step by step add hoti jaati hain prices of all items
// Final total = 2999 + 999 + 5999 + 12999 = 22996 🧾


// 🧠 QUICK SUMMARY 🧠
// -----------------------------------------------------
// ✅ reduce() → ek single value return karta hai (after looping all)
// ✅ 1st parameter: callback (acc, curr)
// ✅ 2nd parameter: initial value (start point)
// ✅ Use-cases → totals, sums, averages, flatten arrays, etc.
// ✅ Non-destructive → original array change nahi hota
// -----------------------------------------------------

// 💡 Tip:
// Agar initial value nahi doge, reduce() first element ko acc maan lega.
// Lekin safe code ke liye hamesha initial value dena best practice hai 🚀
