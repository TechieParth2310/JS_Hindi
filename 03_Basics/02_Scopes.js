// =================== SCOPE & FUNCTION EXECUTION ===================

// var c = 300   // (var ka scope function-level hota hai, isliye wo globally accessible hota)

// Global scope variable (accessible outside if-block also)
let a = 300;

if (true) {
  // Block scope variables (accessible only inside this block)
  let a = 10;
  const b = 20;

  // console.log("INNER: ", a);
  // OUTPUT: INNER: 10
}

// console.log(a); // OUTPUT: 300 (outer 'a' unaffected by inner block's 'a')
// console.log(b); // ❌ ERROR: b is not defined (b block ke andar hi accessible tha)
// console.log(c); // agar var c = 300 uncomment karte toh OUTPUT: 300

// =================== FUNCTION NESTING & LEXICAL SCOPE ===================

function one() {
  const username = "hitesh";

  // Inner function -> two() is inside one()
  function two() {
    const website = "youtube";
    // Inner function can access variables of parent function (lexical scope)
    console.log(username); // OUTPUT: hitesh
  }

  // console.log(website); // ❌ ERROR: website is not defined (only inside two())

  two(); // calling inner function
}

// one(); // Uncomment this to see OUTPUT: hitesh

// =================== NESTED IF BLOCKS (Block Scope Example) ===================

if (true) {
  const username = "hitesh";

  if (username === "hitesh") {
    const website = " youtube";
    // username + website dono accessible yaha tak (same block chain)
    // console.log(username + website);
    // OUTPUT: hitesh youtube
  }

  // console.log(website); // ❌ ERROR: website is not defined (inner block ke bahar access nahi)
}

// console.log(username); // ❌ ERROR: username is not defined (if-block ke bahar access nahi)

// =================== FUNCTION HOISTING ===================

// Function hoisting ka matlab hai: function declarations are moved to the top of their scope during compilation.
// Isliye hum function declaration ko define hone se pehle bhi call kar sakte hain.

console.log(addone(5));
// OUTPUT: 6
// Reason: 'addone' ek function declaration hai — hoisting ke wajah se use pehle call kar sakte hain.

function addone(num) {
  return num + 1;
}

// =================== FUNCTION EXPRESSION (Not Hoisted) ===================

// Function expressions ko variable me assign kiya jata hai.
// Ye hoist nahi hote, kyunki variable 'const' ya 'let' se declare hota hai.

addTwo(5); // ❌ ERROR: Cannot access 'addTwo' before initialization
// Reason: addTwo ek function expression hai — hoist nahi hota.

const addTwo = function (num) {
  return num + 2;
};
