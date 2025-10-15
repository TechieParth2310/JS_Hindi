// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ ⚡ PRO EDITION NOTES — Async JavaScript Fundamentals + Interview Qs       ║
// ║ By: chai aur code  |  Style: Hinglish + Visual + Code-ready format ⚙️    ║
// ║ Topics: Event Loop, Call Stack, Web APIs, Promises, Async/Await          ║
// ╚══════════════════════════════════════════════════════════════════════════╝


// 🧩 0) Core Understanding
// -----------------------------------------------------------------------------
// → JavaScript is:
//     ↳ Synchronous
//     ↳ Single-threaded  (Default Behavior)
//
// Meaning → Ek time pe ek hi line execute hoti hai.
// Execution Context: executes ONE line at a time.

console.log(1);
console.log(2);
// Output: 1 → 2  (Each waits for the previous one)


// 💡 CALL STACK + MEMORY HEAP
// -----------------------------------------------------------------------------
// CALL STACK → Manages execution order (LIFO)
// MEMORY HEAP → Stores objects & variables
//
// JS Engine (like Chrome’s V8) = CALL STACK + HEAP
// Synchronous code runs directly on this engine.


// 🧠 1) Blocking vs Non-Blocking Code
// -----------------------------------------------------------------------------
// 🔸 Blocking Code → Stops further execution until complete.
// 🔸 Non-Blocking Code → Does not stop; moves ahead & continues after async task.

const fs = require('fs');

// Blocking (Sync)
const data = fs.readFileSync('file.txt');
console.log('File read complete (sync)');

// Non-Blocking (Async)
fs.readFile('file.txt', (err, data) => {
  console.log('File read complete (async)');
});
console.log('Program continues...');

// Output Order:
// Blocking  → waits for file read
// Non-blocking → prints “Program continues...” first


// 🧩 2) Event Loop System 🌀
// -----------------------------------------------------------------------------
// Components:
// 1️⃣ Call Stack (JS Engine executes sync code)
// 2️⃣ Web APIs (Browser features like setTimeout, fetch, DOM events)
// 3️⃣ Callback Queue (Macrotask queue — timeouts, intervals)
// 4️⃣ Microtask Queue (Promises, MutationObservers — High Priority)
// 5️⃣ Event Loop (connects queues to stack)


// ⚙️ Flow Example
// -----------------------------------------------------------------------------
console.log('Start');

setTimeout(() => console.log('Timeout callback'), 0);

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('End');

// Output:
// Start
// End
// Promise resolved
// Timeout callback
//
// Why?
// - Promise (Microtask Queue) runs before Timeout (Callback Queue)


// 🧩 3) ASCII Diagram (Mental Map)
// -----------------------------------------------------------------------------
//
// ┌───────────────┐     ┌──────────────────────────────┐
// │  JS Engine    │     │         Web APIs             │
// │ ┌───────────┐ │     │ setTimeout  fetch  DOM APIs  │
// │ │ CallStack │ │────▶│ register callbacks           │
// │ └───────────┘ │     └──────────────────────────────┘
// └───────────────┘
//        ▲
//        │  Event Loop 🌀
//        ▼
// ┌──────────────────────────────┐
// │ Microtask Queue (Promise) 🔥 │
// │ Callback Queue (Timeouts) ⚪ │
// └──────────────────────────────┘


// 🧠 4) async / await Example
// -----------------------------------------------------------------------------
async function getData() {
  console.log("Fetching data...");

  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  console.log("Data received ✅");
  return data;
}

getData();
console.log("Outside async function");

// Output:
// Fetching data...
// Outside async function
// Data received ✅
//
// → JS continues executing (non-blocking), await pauses only inside async func.


// 🧩 5) Queue Priorities
// -----------------------------------------------------------------------------
// | Queue Type        | Examples                  | Priority |
// |--------------------|---------------------------|-----------|
// | Microtask Queue    | Promises, MutationObserver | 🔥 High  |
// | Callback Queue     | setTimeout, setInterval    | ⚪ Normal |
// | Rendering Queue    | UI updates                | ⚪ Normal |


// 🧠 6) Complete Flow Summary
// -----------------------------------------------------------------------------
// 1️⃣ JS executes synchronous code in Call Stack.
// 2️⃣ Async tasks → Web APIs handle them.
// 3️⃣ After completion → Callbacks → appropriate Queues.
// 4️⃣ Event Loop monitors Stack; if empty → runs queued callbacks.
// 5️⃣ Microtasks (Promises) always run before Macrotasks (Timeouts).


// 🧩 7) Common Async Functions in JS
// -----------------------------------------------------------------------------
// 🔹 setTimeout()
// 🔹 setInterval()
// 🔹 fetch()
// 🔹 Promises
// 🔹 async / await
// 🔹 Event listeners


// 💡 8) Real Example — Execution Order Test
// -----------------------------------------------------------------------------
console.log("A");

setTimeout(() => console.log("B (timeout)"), 0);

Promise.resolve().then(() => console.log("C (promise)"));

console.log("D");

// Output Order: A → D → C → B
// Reason: Promise (microtask) executes before Timeout (macrotask)


// 🚀 9) Key Takeaways
// -----------------------------------------------------------------------------
// ✅ JS is Single-threaded but Non-blocking.
// ✅ Web APIs + Queues + Event Loop enable Async behavior.
// ✅ Promises & async/await simplify async flow.
// ✅ Microtask Queue executes before Callback Queue.
// ✅ Blocking code freezes UI → avoid in front-end.


// 🧠 10) Interview Questions + Answers (🔥 Must Know)
// -----------------------------------------------------------------------------


// Q1️⃣: Why is JavaScript called single-threaded?
// -----------------------------------------------------------------------------
// → Because it has only ONE call stack (executes one line at a time).
// Even though it handles async tasks, actual execution happens sequentially.


// Q2️⃣: What makes JavaScript non-blocking then?
// -----------------------------------------------------------------------------
// → The Browser (or Node.js) provides Web APIs that handle async operations.
//   Once completed, callbacks are queued and executed later by the Event Loop.


// Q3️⃣: What is Event Loop?
// -----------------------------------------------------------------------------
// → Mechanism that continuously checks if the call stack is empty.
//   If yes → pushes the next callback from microtask or callback queue into the stack.


// Q4️⃣: Difference between Call Stack & Callback Queue?
// -----------------------------------------------------------------------------
// → Call Stack executes functions line-by-line (LIFO).
// → Callback Queue holds async callbacks waiting for execution (FIFO).


// Q5️⃣: What is the difference between Microtask Queue & Macrotask Queue?
// -----------------------------------------------------------------------------
// → Microtask Queue (higher priority): Promises, MutationObservers.
// → Macrotask Queue: setTimeout, setInterval, setImmediate (Node).
// Event Loop always executes all microtasks before moving to macrotasks.


// Q6️⃣: What is the output of this code?
// -----------------------------------------------------------------------------
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
// Output: 1 → 4 → 3 → 2
// (Promise executes before Timeout)


// Q7️⃣: How does async/await work internally?
// -----------------------------------------------------------------------------
// → async/await is syntactic sugar over Promises.
// → await pauses function execution until the Promise resolves (non-blocking).


// Q8️⃣: Can JS execute multiple async functions truly in parallel?
// -----------------------------------------------------------------------------
// → Not in a single thread. Async tasks are managed concurrently by the environment
//   (like browser or Node), not parallelly in the JS thread itself.


// Q9️⃣: What is the difference between synchronous & asynchronous code?
// -----------------------------------------------------------------------------
// → Sync: Each operation waits for the previous to finish.
// → Async: Operations run independently without blocking the main thread.


// Q🔟: Explain the flow when `setTimeout` and `Promise` both are used.
// -----------------------------------------------------------------------------
// → Promise → Microtask Queue → executes first.
// → setTimeout → Callback Queue → executes later.


// Q11️⃣: What happens if microtasks keep adding themselves endlessly?
// -----------------------------------------------------------------------------
// → Event Loop starvation — callback queue never gets a chance.
// (This can freeze the UI or block timers.)


// Q12️⃣: What’s the role of Web APIs in JS?
// -----------------------------------------------------------------------------
// → Web APIs handle async tasks like AJAX, timers, DOM events.
//   Once finished, they pass callbacks to queues (not executed in JS engine directly).


// 🧰 Bonus Interview Hack
// -----------------------------------------------------------------------------
// 🔹 In browser → Web APIs handle async tasks.
// 🔹 In Node.js → Libuv handles async tasks (similar model).


// ⚡ 11) Mnemonic Trick
// -----------------------------------------------------------------------------
// “🌊 JS Async Flow = Stack → Web API → Queue → Loop → Stack again”

// 💬 Sync = Straight Line
// 💬 Async = Detour but returns later 🚗


// 🧩 12) Final Takeaway
// -----------------------------------------------------------------------------
// JS = Synchronous + Single-threaded by design
// Async power comes from Event Loop architecture
// Promises + async/await make async code clean & readable
// Understanding Event Loop = MASTERING JavaScript ⚔️
