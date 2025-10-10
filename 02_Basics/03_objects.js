// ===============================
// 🧠 JavaScript Objects (Part 1)
// ===============================

// ------------------------------
// 1️⃣  Object Creation Methods
// ------------------------------

// 🔹 Singleton object → created using Object.create()
const singletonObj = Object.create({})  
// (rarely used directly in basic code) 
// agar constructor se bana toh hi object singleton banega.

// 🔹 Object literal → most common way
const mySym = Symbol("key1")   // Symbol → unique identifier key

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  // key with space → must use quotes 
    [mySym]: "mykey1",                // computed property using Symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// ------------------------------
// 2️⃣  Accessing Object Properties
// ------------------------------

// ✅ Dot notation
// console.log(JsUser.email);   // "hitesh@google.com"

// ✅ Bracket notation (used when key has spaces or variables)
// console.log(JsUser["email"]);        // "hitesh@google.com"
// console.log(JsUser["full name"]);    // "Hitesh Choudhary"

// ✅ Accessing Symbol key value
// console.log(JsUser[mySym]);          // "mykey1"


// ------------------------------
// 3️⃣  Modifying Object Properties
// ------------------------------
JsUser.email = "hitesh@chatgpt.com"  
// updates the email successfully

// Object.freeze(JsUser)
// ❄️ After freezing → object becomes immutable
// JsUser.email = "hitesh@microsoft.com" → will NOT change

JsUser.email = "hitesh@microsoft.com"  // works because we commented out freeze()
// console.log(JsUser);


// ------------------------------
// 4️⃣  Adding Methods to Objects
// ------------------------------
JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// 🧠 'this' → refers to the object itself
// It allows methods to access properties within the same object

console.log(JsUser.greeting());     // Output: Hello JS user
console.log(JsUser.greetingTwo());  // Output: Hello JS user, Hitesh
// ⚠️ Note: console.log prints 'undefined' after each because the functions return nothing


// ------------------------------
// 💡 Important Notes & Interview Tips
// ------------------------------
// ✅ Objects in JS store key–value pairs.
// ✅ Keys are converted to strings internally (except for Symbol).
// ✅ Symbol keys are unique and not enumerable by default.
// ✅ Access with dot or bracket; bracket is required for keys with spaces.
// ✅ Object.freeze() → makes the object immutable (no further changes).
// ✅ Methods inside objects use 'this' to refer to the same object.
// ✅ You can dynamically add new properties/methods at any time.
// ✅ typeof JsUser → "object"
// ✅ Arrays & Functions are also types of objects in JS.
// ✅ Symbol properties are often used for private or unique identifiers.
