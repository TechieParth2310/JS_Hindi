// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ ⚡ PRO EDITION NOTES — setInterval() & clearInterval() (Start / Stop)    ║
// ║ Topic: Repeating Async Functions + DOM Control                          ║
// ║ Style: Hinglish + Interview-Level + VS Code-Friendly                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝


// 🧩 0) HTML Setup
// -----------------------------------------------------------------------------
// <h1>Chai Aur JavaScript</h1>
// <button id="start">Start</button>
// <button id="stop">Stop</button>
//
// Goal:
// 1️⃣ “Start” → show current time every 1 second.
// 2️⃣ “Stop”  → stop the timer immediately.


// 🧠 1) Core Logic — Correct, Clean Version
// -----------------------------------------------------------------------------
let intervalId; // stores timer reference (so we can stop it later)

const sayTime = function (str) {
    const date = new Date();
    console.log(str, date.toLocaleTimeString());
};

// ▶ START button — begin timer
document.querySelector('#start').addEventListener('click', () => {
    if (!intervalId) {                               // prevents double start
        intervalId = setInterval(sayTime, 1000, '⏱ Time:');
        console.log('✅ Timer Started');
    }
});

// ⛔ STOP button — stop timer
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);                       // stop running interval
    intervalId = null;                               // reset for reuse
    console.log('🛑 Timer Stopped');
});


// 🧩 2) Understanding setInterval()
// -----------------------------------------------------------------------------
// setInterval(callback, delay, ...args)
// → Repeats the callback after every “delay” ms.
//
// Returns → a numeric ID (e.g., 1, 2, 3…)
// Store it in a variable to later stop it via clearInterval(ID).

// Example:
// const id = setInterval(fn, 1000);
// clearInterval(id);  // stops that interval


// 💬 Output Example (every second):
// ⏱ Time: 10:43:21 PM
// ⏱ Time: 10:43:22 PM
// ⏱ Time: 10:43:23 PM
// ... (continues until STOP is clicked)


// 🧱 3) Behind the Scenes (Event Loop View)
// -----------------------------------------------------------------------------
//
// 1️⃣ setInterval() → registered in Web API environment.
// 2️⃣ Every 1000 ms → callback pushed to Callback Queue.
// 3️⃣ Event Loop → sends callback to Call Stack when free.
// 4️⃣ sayTime() executes → logs time.
// 5️⃣ Repeats until clearInterval() is called.
//
// STOP → clearInterval() → removes timer from Web API → no more callbacks.


// ⚙️ 4) Difference: setTimeout() vs setInterval()
// -----------------------------------------------------------------------------
// | Function        | Behavior                       | Stop Method          |
// |-----------------|---------------------------------|----------------------|
// | setTimeout()    | Executes once after delay       | clearTimeout(id)     |
// | setInterval()   | Repeats after each delay cycle  | clearInterval(id)    |


// 🧠 5) Common Mistakes & Fixes
// -----------------------------------------------------------------------------
// ❌ Mistake:  sayTime;   // only references, doesn’t run
// ✅ Fix:      setInterval(sayTime, 1000, 'Hi');
//
// ❌ Mistake:  IntervalId();  // not a function
// ✅ Fix:      clearInterval(IntervalId);  // correct usage
//
// ❌ Forgetting to store ID → can’t stop timer
// ✅ Always save:  let id = setInterval(...);


// 🔁 6) Typical Flow Timeline
// -----------------------------------------------------------------------------
// Time → 0s    1s    2s    3s ...
// Action: start → console logs each second
// User clicks STOP → interval cleared → no further logs


// ⚡ 7) Interview Qs + Answers
// -----------------------------------------------------------------------------
// Q1️⃣: What is setInterval()?  
// → Executes a function repeatedly after a fixed delay (async).
//
// Q2️⃣: What does it return?  
// → A unique numeric ID used to stop the interval.
//
// Q3️⃣: How to stop it?  
// → Use clearInterval(ID).
//
// Q4️⃣: Is it part of JS Engine?  
// → ❌ No, it’s a Web API feature (handled by browser or Node runtime).
//
// Q5️⃣: If “Start” is clicked twice?  
// → Two intervals start unless prevented — hence use `if (!intervalId)` check.
//
// Q6️⃣: Does setInterval guarantee exact timing?  
// → No, if main thread is busy, callback may be delayed (JS is single-threaded).


// 🧰 8) Real-World Use Cases
// -----------------------------------------------------------------------------
// ✅ Digital clocks ⏰
// ✅ Auto-refresh or live counters
// ✅ Periodic API polling
// ✅ Progress bar updates


// 🧠 9) Final Recap
// -----------------------------------------------------------------------------
// ✅ setInterval()  → schedules repeating async task
// ✅ clearInterval() → stops that task
// ✅ Use global variable to manage the timer
// ✅ Works via Web API + Event Loop system
// ✅ Clean control = Start / Stop pattern


// 🚀 10) One-Line Summary
// -----------------------------------------------------------------------------
// “setInterval() keeps ticking like a heartbeat 💓 —
//  and clearInterval() is your Stop button ✋.”
