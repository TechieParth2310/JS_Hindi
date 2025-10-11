// Memory phase...
// Execution phase...

// -------------------------------------------------------------
// 🧠 HOW JAVASCRIPT EXECUTES CODE + CALL STACK
// -------------------------------------------------------------

// 👉 Step 1: Every JS code runs inside a JS Engine (like V8 in Chrome)
// Engine has two main parts:
//   1. Memory (Heap) — stores variables and function definitions
//   2. Call Stack — manages execution order of code

// -------------------------------------------------------------
// ⚙️  STEP 2: GLOBAL EXECUTION CONTEXT (GEC)
// -------------------------------------------------------------
// Whenever you run a JS file, a Global Execution Context (GEC) is created.
// It has 2 phases:
//   A. Memory Creation Phase (also called Hoisting Phase)
//   B. Execution Phase

// Example code:
var num = 2;
function square(n) {
    return n * n;
}
var result = square(num);

// -------------------------------------------------------------
// 🧩 MEMORY CREATION PHASE
// -------------------------------------------------------------
// JS scans the code before executing and allocates memory:
// - Variables are set to "undefined"
// - Function definitions are stored entirely

// Internally memory looks like this:
// num     -> undefined
// square  -> function code (its entire body)
// result  -> undefined

// -------------------------------------------------------------
// 🚀 EXECUTION PHASE
// -------------------------------------------------------------
// JS now executes the code line by line.
// - Assign values to variables
// - When a function is called, a NEW execution context is created for it

// Execution flow:
// 1️⃣ num = 2
// 2️⃣ result = square(num)  → function call → new context created
// 3️⃣ inside square(): n = 2 → return 4
// 4️⃣ function finishes → context removed
// 5️⃣ final result = 4

// -------------------------------------------------------------
// ⚡ TYPES OF EXECUTION CONTEXTS
// -------------------------------------------------------------
// 1. Global Execution Context (default, created once)
// 2. Function Execution Context (created on each function call)
// 3. Eval Execution Context (rarely used, from eval())

// -------------------------------------------------------------
// 🔁 CALL STACK (Execution Stack)
// -------------------------------------------------------------
// Call Stack is a data structure (LIFO - Last In, First Out)
// It keeps track of all execution contexts.

// Example:
function one() {
    console.log("Inside One");
    two();
}

function two() {
    console.log("Inside Two");
}

one();
console.log("End");

// -------------------------------------------------------------
// Step-by-step working:
// -------------------------------------------------------------
// 1️⃣ GEC is created → pushed to call stack
// 2️⃣ one() is called → new Function Execution Context created → pushed
// 3️⃣ inside one(), two() is called → another Execution Context created → pushed
// 4️⃣ two() finishes → popped from stack
// 5️⃣ one() finishes → popped from stack
// 6️⃣ finally GEC popped → stack becomes empty

// Visual representation:
// CALL STACK (Top → Bottom)
// | two()  |   ← currently executing
// | one()  |
// | GEC    |

// After two() completes:
// | one()  |
// | GEC    |

// After one() completes:
// | GEC    |

// After program ends:
// (empty stack)

// -------------------------------------------------------------
// 📦 IMPORTANT POINTS
// -------------------------------------------------------------
// ✅ JavaScript is single-threaded (only one call stack)
// ✅ Executes synchronously by default (one line at a time)
// ✅ Async code (setTimeout, fetch, etc.) handled by Event Loop + Web APIs
// ✅ When call stack is empty, event loop pushes pending callbacks to it

// -------------------------------------------------------------
// 🧭 QUICK MINI EXAMPLE
// -------------------------------------------------------------
function sayHi() {
    console.log("Hi");
}
function greet() {
    sayHi();
    console.log("Hello");
}
greet();

// Output:
// Hi
// Hello

// Stack Flow:
// Push GEC
// Push greet()
// Push sayHi()
// Pop sayHi()
// Pop greet()
// Pop GEC (Program ends)

// -------------------------------------------------------------
// 💡 RECAP
// -------------------------------------------------------------
// 🧠 Execution Context = environment where JS runs
// 📦 Memory Phase = variables/functions allocated
// ⚙️ Execution Phase = line-by-line execution
// 📚 Call Stack = manages active execution contexts
// ⚡ Single Threaded = executes one thing at a time
// -------------------------------------------------------------
