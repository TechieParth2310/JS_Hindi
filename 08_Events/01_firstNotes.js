// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ ⚡ PRO EDITION NOTES — Event Propagation + Delegation (Complete Guide)    ║
// ║ Topic: Bubbling | Capturing | stopPropagation | preventDefault | Delegate ║
// ║ Example Used: Image Gallery (ul → li → img / a)                          ║
// ║ Style: Hinglish + Practical + Console Outputs 💡                         ║
// ╚══════════════════════════════════════════════════════════════════════════╝


// 🧩 0) Quick HTML Recap
// -----------------------------------------------------------------------------
// <ul id="images">
//   <li><img id="owl" src="..." /></li>
//   <li><a id="google" href="https://google.com">Google</a></li>
// </ul>
// Goal → Understand event flow (capture → bubble) & how delegation optimizes it.


// 🧠 1) What is Event Propagation?
// -----------------------------------------------------------------------------
// Jab event trigger hota hai (e.g., click on img), wo DOM ke through travel karta hai.
//
// Phases:
// 1️⃣ Capturing Phase → Top (document) → Target tak
// 2️⃣ Target Phase    → Actual element jaha event hua
// 3️⃣ Bubbling Phase  → Target → Back to Top (reverse flow)
//
// Default: Bubbling phase (useCapture = false)


// 🪜 2) Visual Flow Diagram (Click on <img id="owl">)
// -----------------------------------------------------------------------------
// CAPTURING (true):
// document ↓
// html ↓
// body ↓
// div ↓
// ul#images ↓
// li ↓
// img#owl  ← Target
//
// BUBBLING (false):
// img#owl ↑
// li ↑
// ul#images ↑
// div ↑
// body ↑
// html ↑
// document ↑


// ⚙️ 3) addEventListener() Syntax Reminder
// -----------------------------------------------------------------------------
// element.addEventListener(eventType, callback, useCapture);
//
// - useCapture = true  → Capturing phase
// - useCapture = false → Bubbling phase (default)


// 💬 4) Example 1 — Capturing vs Bubbling Order
// -----------------------------------------------------------------------------
document.querySelector("#images").addEventListener("click", () => {
    console.log("UL (Bubbling Phase)");
}, false);

document.querySelector("#images").addEventListener("click", () => {
    console.log("UL (Capturing Phase)");
}, true);

// 🔍 Output when you click on image:
// UL (Capturing Phase)
// UL (Bubbling Phase)

// 🧠 Capturing executes first, then Bubbling.


// 🧱 5) Example 2 — Bubbling + stopPropagation()
// -----------------------------------------------------------------------------
document.getElementById("images").addEventListener("click", () => {
    console.log("Clicked Inside the UL");
}, false);

document.getElementById("owl").addEventListener("click", (e) => {
    console.log("Clicked on Owl 🦉");
    e.stopPropagation();  // 🛑 Stops event from reaching <ul>
}, false);

// 🔍 Output when clicking Owl:
// → Clicked on Owl 🦉


// 🧩 6) Example 3 — preventDefault() + stopPropagation()
// -----------------------------------------------------------------------------
document.getElementById("google").addEventListener("click", (e) => {
    console.log("Google link clicked 🌐");
    e.preventDefault();     // 🛑 Stop redirecting to Google
    e.stopPropagation();    // 🛑 Stop bubbling upward
}, false);

// 🔍 Output when clicking “Google” link:
// → Google link clicked 🌐
// (Page doesn’t redirect)


// 🧠 7) Example 4 — Event Delegation (Smart Way)
// -----------------------------------------------------------------------------
// Instead of adding click listener to every <img>, we use parent <ul>.
document.querySelector("#images").addEventListener("click", function (e) {
    console.log("Clicked element tag:", e.target.tagName);

    // Check if clicked element is IMG
    if (e.target.tagName === "IMG") {
        let removeIT = e.target.parentNode; // li element
        removeIT.remove();                  // remove() deletes it
        console.log(`${e.target.id} image removed ❌`);
    }
}, false);

// 🔍 Output when clicking any image (say “river”):
// Clicked element tag: IMG
// river image removed ❌
// (Image disappears from DOM)


// ✅ Advantages of Delegation:
// -----------------------------------------------------------------------------
// - Only one listener (parent) instead of many (each child).
// - Handles dynamically added elements automatically.
// - Improves performance, memory efficiency, and cleaner code.


// 🧠 8) e.target vs e.currentTarget
// -----------------------------------------------------------------------------
// e.target        → The element that was actually clicked (child).
// e.currentTarget → The element on which the listener is attached (parent).
document.querySelector("#images").addEventListener("click", (e) => {
    console.log("target:", e.target.id);
    console.log("currentTarget:", e.currentTarget.id);
});
// 🔍 Output when clicking Owl:
// target: owl
// currentTarget: images


// 🧰 9) Quick Recap Table
// -----------------------------------------------------------------------------
// | Concept                 | Description / Flow                   | Default |
// |--------------------------|--------------------------------------|----------|
// | Capturing Phase          | Top → Target                         | ❌ false |
// | Bubbling Phase           | Target → Top                         | ✅ true  |
// | stopPropagation()        | Stops event going further up/down    | —        |
// | preventDefault()         | Stops browser default action         | —        |
// | e.target                 | Actual clicked element               | —        |
// | e.currentTarget          | Listener’s attached element          | —        |
// | Delegation               | Parent handles child events          | —        |


// 🧩 10) Mini Quiz / Output Prediction
// -----------------------------------------------------------------------------
// Q: Click Owl → What runs?
// console.log("Clicked on Owl 🦉");
// (stopPropagation stops further flow)
//
// Q: Click Google → Redirect?
// No ❌ → because preventDefault() stopped it.
//
// Q: Click any other image?
// That <li> gets removed from DOM 🧹


// 🧠 11) Pro-Level Tips
// -----------------------------------------------------------------------------
// ✅ Default = Bubbling (false)
// ✅ true → Capturing phase
// ✅ Use stopPropagation() wisely (else debugging hell!)
// ✅ preventDefault() only for elements with default browser behavior
// ✅ Delegation = must-know interview concept 💡


// 🧠 12) Summary in One Line
// -----------------------------------------------------------------------------
// “Event Propagation is like an echo — starts from top (capture), hits target,
// then bounces back up (bubble).” 🎯
