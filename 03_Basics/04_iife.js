// =================== 1️⃣ IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ===================

// 🔹 Named IIFE
(function chai(){
    // This function runs immediately after definition
    console.log(`DB CONNECTED`);
})();

// 🧾 OUTPUT:
// DB CONNECTED

// Insight & Interview Tips:
// - IIFE executes immediately after creation
// - Named IIFE name ('chai') is local to the function itself, not accessible outside
// - Q: Can you call 'chai()' outside this IIFE? 
// - A: ❌ No, because the function name exists only inside IIFE scope
// - Use case: isolate variables, avoid polluting global scope

// 🔹 Arrow function IIFE with parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// 🧾 OUTPUT:
// DB CONNECTED TWO hitesh

// Insight & Interview Tips:
// - Arrow functions can also be used as IIFE
// - Parameters can be passed immediately
// - Common use: initializing code, setup tasks, connecting to DB, configuration
// - Q: Difference between normal IIFE and arrow IIFE?
// - A: Arrow IIFE cannot have its own 'this'; normal IIFE can
// - Both achieve immediate execution and scope isolation
