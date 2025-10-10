// ===============================================
// 🔥 JAVASCRIPT FUNCTIONS — DETAILED EXPLANATION
// ===============================================

// =================== BASIC FUNCTION DEFINITION ===================

// ✅ Function Declaration (Basic Syntax)
function sayMyName() {
  // function ke andar likha code tabhi chalega jab function call hoga
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()   // Function call

// 🧾 Output:
// H
// I
// T
// E
// S
// H

// 📘 Explanation:
// - Function ko define karne se code memory me store hota hai
// - Lekin wo tabhi execute hota hai jab hum usse call karte hain
// - sayMyName() call karne par andar ka code run hota hai

// =================== FUNCTION WITH PARAMETERS ===================

// Function parameters → input values jise hum function ke andar use kar sakte hain
// Arguments → actual values jo hum call time pe dete hain

// Pehle version (only console):
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// ❌ Problem: sirf print karta hai, return nahi karta (value ko reuse nahi kar sakte)

// ✅ Better version with return statement:
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result   // Option 1: store in variable and return later
  return number1 + number2; // Option 2: directly return the result
}

const result = addTwoNumbers(3, 5);
// console.log("Result:", result);

// 🧾 Output:
// Result: 8

// 📘 Explanation:
// - Jab function me `return` use karte hain, value function ke bahar bhej di jaati hai
// - Return ke baad koi bhi code execute nahi hota function ke andar

// =================== DEFAULT PARAMETERS ===================

function loginUserMessage(username = "sam") {
  // Agar koi username pass nahi hua, to default value "sam" use hogi
  if (!username) {
    // agar empty ya undefined hua
    console.log("Please enter a username");
    return; // return se function execution stop ho jaata hai
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// 🧾 Output: hitesh just logged in

// console.log(loginUserMessage());
// 🧾 Output: sam just logged in (default value use hui)

// Agar koi username pass nahi hua, aur koi condition nahi huyi waha pe toh uska answer return main aayega undefined.

// =================== REST OPERATOR (...) ===================

// 🔹 Rest operator (`...variableName`) multiple arguments ko ek single array me collect karta hai.
// 🔹 Ye mostly tab use hota hai jab hume function me unknown number of arguments handle karne ho.

// 🔸 Example 1: Jab hum fixed parameters ke saath rest operator use karte hain
function calculateCartPrice(val1, val2, ...num1) {
  // val1 aur val2 me sirf first 2 arguments jaayenge
  // ...num1 me remaining arguments ek array ke form me collect ho jaayenge
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// 🧾 Output:
// [500, 2000]

// 📘 Explanation:
// Step by step:
// ➤ call hua calculateCartPrice(200, 400, 500, 2000)
// ➤ val1 = 200
// ➤ val2 = 400
// ➤ num1 = [500, 2000]
// ➤ function return karega num1, jo ek array hai containing [500, 2000]

// 🔸 Example 2: Agar function ke saare parameters hi rest operator se liye gaye hain
function calculateCartPriceAll(...num1) {
  // Yaha koi fixed parameter nahi hai, saare arguments array ke andar chale jaayenge
  return num1;
}

// console.log(calculateCartPriceAll(200, 400, 500, 2000));
// 🧾 Output:
// [200, 400, 500, 2000]

// 📘 Explanation:
// ➤ Is baar function ke andar koi alag variable nahi hai (val1, val2, etc.)
// ➤ Saare arguments ...num1 me array ke form me store ho jaate hain
// ➤ return karega [200, 400, 500, 2000]

// ✅ Real-life example: Shopping cart total nikalna
function calculateTotal(...prices) {
  // prices = [200, 400, 100, 300]
  let total = 0;

  // loop through each value in the array
  for (let price of prices) {
    total += price;
  }

  return total;
}

// console.log(calculateTotal(200, 400, 100, 300));
// 🧾 Output:
// 1000

// 📘 Explanation:
// ➤ Saare prices ek array me collect hue: [200, 400, 100, 300]
// ➤ Loop chala aur sabka sum kiya → 200 + 400 + 100 + 300 = 1000
// ➤ Return hua total = 1000

// =================== FUNCTION WITH OBJECT PARAMETERS ===================

const user = {
  username: "hitesh",
  prices: 199,
};

// Function jo object ko argument ke form me leta hai:
function handleObject(anyobject) {
  // Template literals se string me variables embed kar sakte hain
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
// 🧾 Output (agar user pass karein):
// Username is hitesh and price is undefined ❌ (kyunki key "prices" thi, "price" nahi)

// ✅ Correct way:
handleObject({
  username: "sam",
  price: 399,
});

// 🧾 Output:
// Username is sam and price is 399

// 📘 Explanation:
// - Object parameter ka naam matter nahi karta (sirf structure same hona chahiye)
// - Missing property par output `undefined` aata hai

// =================== FUNCTION WITH ARRAY PARAMETERS ===================

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  // Array indexing 0-based hoti hai → getArray[1] = second element
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// 🧾 Output:
// 400

console.log(returnSecondValue([200, 400, 500, 1000]));
// 🧾 Output:
// 400

// 📘 Explanation:
// - Array function me directly pass kar sakte hain
// - Function ke andar usse normal array ki tarah access karte hain
// - return getArray[1] → array ka 2nd value return karega

// ===============================================
// 🧠 SUMMARY OF CONCEPTS:
// ===============================================
//
// 1️⃣ Function Declaration → `function name(){}`
// 2️⃣ Parameters vs Arguments → placeholders vs actual values
// 3️⃣ Return Statement → function se value ko bahar bhejna
// 4️⃣ Default Parameters → default values dena in case of missing argument
// 5️⃣ Rest Operator (...) → multiple arguments ko ek array me collect karna
// 6️⃣ Passing Objects to Functions → destructuring ya direct access se use karna
// 7️⃣ Passing Arrays to Functions → normal indexing se elements lena
// 8️⃣ `undefined` → tab milta hai jab property ya parameter missing ho
// 9️⃣ Template Literals → `${}` syntax se strings me variables likhna easily
//
// ===============================================
