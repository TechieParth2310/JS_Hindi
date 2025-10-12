// ====================================================================
// 🧠 CONTROL FLOW IN JAVASCRIPT
// ====================================================================
// Control Flow = the order in which code statements are executed.
// JS normally executes top-to-bottom, but control flow statements
// allow you to make decisions (conditions, loops, switches, etc.)

// --------------------------------------------------------------------
// ✅ IF STATEMENT
// --------------------------------------------------------------------
// Executes a block of code if the condition evaluates to true.

const temperature = 41;

if (temperature === 40) {
    console.log("Temperature is exactly 40°C");
} else {
    console.log("Temperature is NOT 40°C");
}

// 🧾 Output → "Temperature is NOT 40°C"
// ------------------------------------------------------------
// Comparison Operators:
//  >  ,  <  ,  >=  ,  <=  ,  ==  ,  !=  ,  ===  ,  !==
//
// NOTE:
// - ==  compares *values* (performs type conversion)
// - === compares *values + types* (strict equality check)
//
// Example:
// 5 == "5"   ✅ true  (type converted)
// 5 === "5"  ❌ false (different types)

// --------------------------------------------------------------------
// ⚙️ IF–ELSE IF–ELSE LADDER
// --------------------------------------------------------------------
// Used when multiple conditions must be checked in sequence.
// First true block executes; others are skipped.

const balance = 1000;

if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than or equal to 1200");
}

// 🧾 Output → "Less than or equal to 1200"

// --------------------------------------------------------------------
// ⚡ SINGLE-LINE IF STATEMENT
// --------------------------------------------------------------------
// When there’s only one statement to execute, {} can be omitted.

if (balance > 500) console.log("Balance is sufficient");

// ⚠️ Avoid chaining commas in one line like below (bad readability):
// if (balance > 500) console.log("test"), console.log("test2");

// --------------------------------------------------------------------
// 🔐 BLOCK SCOPE WITH let & const
// --------------------------------------------------------------------
// Variables declared with let/const inside if-block are *block-scoped*

const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // ✅ works here
}

// console.log(power); ❌ ReferenceError: power is not defined

// Explanation:
// let/const exist only inside the block where they are defined.

// --------------------------------------------------------------------
// ⚙️ LOGICAL OPERATORS
// --------------------------------------------------------------------
// Logical AND (&&) → All conditions must be true
// Logical OR (||)  → At least one condition must be true
// Logical NOT (!)  → Negates (reverses) a boolean value

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// ✅ Using AND (&&)
if (userLoggedIn && debitCard) {
    console.log("Allow user to buy course");
}

// ✅ Using OR (||)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in successfully");
}

// 🧾 Output:
// Allow user to buy course
// User logged in successfully

// --------------------------------------------------------------------
// 🧭 SHORT-CIRCUIT BEHAVIOR
// --------------------------------------------------------------------
// && → stops when any condition is false
// || → stops when any condition is true

// Example:
console.log(true && false && "Hello"); // false (stopped early)
console.log(false || "Default");       // "Default" (first true)

// --------------------------------------------------------------------
// 🧩 TERNARY OPERATOR (Short form of if-else)
// --------------------------------------------------------------------
// Syntax: condition ? expressionIfTrue : expressionIfFalse

const age = 20;
const message = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(message); // 🧾 "You can vote"

// --------------------------------------------------------------------
// ⚡ NESTED IF CONDITIONS
// --------------------------------------------------------------------
// If-blocks can be placed inside one another for complex logic.

const username = "Parth";
const password = "12345";

if (username === "Parth") {
    if (password === "12345") {
        console.log("Login successful ✅");
    } else {
        console.log("Wrong password ❌");
    }
} else {
    console.log("Username not found ❌");
}

// 🧾 Output → "Login successful ✅"

// --------------------------------------------------------------------
// 🧠 INTERVIEW INSIGHTS
// --------------------------------------------------------------------
// 🟢 Q1: Difference between == and === ?
//  → == does type conversion before comparison
//  → === compares both type and value (strict equality)
//
// 🟢 Q2: What happens if you use var instead of let in blocks?
//  → var is function-scoped, not block-scoped.
//    It can be accessed outside the block — risky for logic errors.
//
// 🟢 Q3: How does short-circuiting improve performance?
//  → JS stops evaluating conditions once the result is determined.
//
// 🟢 Q4: What’s the best way to write compact conditional code?
//  → Use ternary operators for small conditions, but avoid nesting them.
//
// 🟢 Q5: Why is using === preferred over == ?
//  → To avoid unexpected type coercion (e.g., "0" == 0 is true).
// --------------------------------------------------------------------

// ✅ RECAP:
// - JS executes top-to-bottom unless control statements change the flow.
// - if / else / else-if → conditional branching
// - &&, ||, ! → combine logical conditions
// - ternary → compact if-else
// - let & const → block-scoped (safe inside if-blocks)
// - var → function-scoped (unsafe for modern JS)
// - === → strict equality (always use this)
// --------------------------------------------------------------------
