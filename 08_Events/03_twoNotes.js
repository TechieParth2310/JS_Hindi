// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ ⚡ PRO EDITION NOTES — setTimeout(), clearTimeout(), Async Basics (v3)   ║
// ║ From: Chai Aur Code | Topic: JS Async Timers + Control Flow             ║
// ║ Style: Hinglish Explain + Clean Code Comments + Interview Ready 💬      ║
// ╚══════════════════════════════════════════════════════════════════════════╝


// 🧩 0) Code Recap
// -----------------------------------------------------------------------------
// <h1>Chai Aur Code</h1>
// <button id="stop">Stop</button>
//
// Task:
// 1️⃣ Print “Parth” after 2s (setTimeout)
// 2️⃣ Change heading text after 3s
// 3️⃣ If user clicks “Stop”, cancel that timeout (clearTimeout)


// 🧠 1) setTimeout() — Basics
// -----------------------------------------------------------------------------
// → setTimeout(func, delay_in_ms)
// Runs the provided function ONCE after the specified delay (in milliseconds).

const Myname = function () {
    console.log("Parth");
};
setTimeout(Myname, 2000);  // executes after 2 seconds

// 💬 Output (after 2s):
// Parth
//
// Note:
// - 2000 ms = 2 seconds delay
// - Function executes asynchronously (non-blocking)
// - JS moves ahead, doesn’t wait for the timeout.


// 🧩 2) DOM Update Example — Changing text with setTimeout()
// -----------------------------------------------------------------------------
const changeText = function () {
    document.querySelector('h1').innerHTML = 'Best JS Series';
};
const ChangeMe = setTimeout(changeText, 3000);

// 💬 Output (after 3s):
// The <h1> changes from “Chai Aur Code” → “Best JS Series”
//
// → changeText runs after 3 seconds delay
// → The variable “ChangeMe” stores the timeout ID (important for canceling)


// 🧠 3) clearTimeout() — Cancel a Scheduled Timer
// -----------------------------------------------------------------------------
document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(ChangeMe);
    console.log('Stopped');
});

// 💬 Output (when you click STOP before 3s):
// Stopped
//
// → The scheduled “changeText” function never runs.
// → clearTimeout() stops the timer associated with ID “ChangeMe”.


// ⚙️ 4) Understanding Timeout ID
// -----------------------------------------------------------------------------
// setTimeout() returns a numeric ID (like 1, 2, 3...) — reference to that timer.
// You can cancel it later using clearTimeout(ID).
//
// Example:
// const id = setTimeout(fn, 2000);
// clearTimeout(id); // cancels fn before it runs


// 🔁 5) Visual Flow (Timeline)
// -----------------------------------------------------------------------------
// Time → 0s    1s    2s    3s
// Action:
//       |-----|-----|-----|
//       | JS runs Myname() after 2s → prints “Parth”
//       | changeText() scheduled at 3s → changes heading
//       | If user clicks STOP before 3s → clearTimeout cancels changeText


// ⚡ 6) Interview-Level Concepts
// -----------------------------------------------------------------------------
// Q1️⃣: What is setTimeout()?
// → A Web API method that executes code once after a given delay (async behavior).

// Q2️⃣: What does setTimeout() return?
// → Returns a unique Timeout ID used to clear/cancel the scheduled function.

// Q3️⃣: How is it async if JS is single-threaded?
// → The callback (Myname/changeText) is handled by Web API → waits in queue → 
//   pushed back to Call Stack after delay when Event Loop finds Stack empty.

// Q4️⃣: Difference between setTimeout() and setInterval()?
// → setTimeout() runs once after delay.
// → setInterval() repeats execution at every interval until cleared.

// Q5️⃣: What does clearTimeout() do?
// → Cancels a scheduled timer before execution (using the ID from setTimeout).

// Q6️⃣: What happens if delay = 0 in setTimeout()?
// → Still asynchronous — callback executes after the current call stack completes.
// Example:
setTimeout(() => console.log("Timeout 0ms"), 0);
console.log("Synchronous log");
// Output: "Synchronous log" → "Timeout 0ms"


// 🧩 7) Event Loop Relation (Behind the Scenes)
// -----------------------------------------------------------------------------
// 1️⃣ setTimeout registered in Web APIs.
// 2️⃣ After delay, callback pushed to Callback Queue.
// 3️⃣ Event Loop checks if Call Stack empty → executes callback.
//
// Even if delay = 0, it waits until Stack clears.


// 🧠 8) Practical Use-Cases
// -----------------------------------------------------------------------------
// ✅ Show notifications temporarily
// ✅ Simulate loading states or delayed animations
// ✅ Schedule background checks (e.g., API polls)
// ✅ Cancel actions if user changes their mind (like STOP button above)


// ⚙️ 9) Mini Challenge (Practice)
// -----------------------------------------------------------------------------
// Modify the code so that it prints “Learning Async” every 1s and stops after 5s.
//
// Hint:
// const intervalId = setInterval(fn, 1000);
// setTimeout(() => clearInterval(intervalId), 5000);


// 🧠 10) Final Recap
// -----------------------------------------------------------------------------
// | Method         | Description                          | Control |
// |----------------|--------------------------------------|----------|
// | setTimeout()   | Runs function once after delay        | clearTimeout() |
// | setInterval()  | Runs repeatedly every interval        | clearInterval() |
// | clearTimeout() | Cancels timeout before it executes    | — |
// | Event Loop     | Executes callback when stack is free  | — |


// 🚀 11) Key Takeaway
// -----------------------------------------------------------------------------
// “setTimeout() lets JS multitask asynchronously through Web APIs,
//  and clearTimeout() gives us control to stop that task anytime.”
// 🔥 — Mastering this concept = understanding async timing in JS!
