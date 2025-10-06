// ===============================
// 📅 JavaScript Date & Time
// ===============================

// 👉 'Date' is a built-in object used to work with dates and times in JS.
// It stores date-time internally as milliseconds since 1 Jan 1970 (Unix Epoch).

// ------------------------------
// Example 1️⃣ : Current Date & Time
// ------------------------------
let myDate = new Date()

console.log(myDate);               
// 👉 Output: 2025-10-07T16:30:15.123Z   (ISO format → default)
// It shows time in UTC (not your local timezone)

console.log(myDate.toString());    
// 👉 Output Example: "Tue Oct 07 2025 22:00:15 GMT+0530 (India Standard Time)"
// Converts date to a human-readable full string (includes day, time, and zone)

console.log(myDate.toLocaleString()); 
// 👉 Output Example: "10/7/2025, 10:00:15 PM"
// Converts to local time & locale format (based on system region)
// Useful for UI display

console.log(myDate.toDateString());   
// 👉 Output Example: "Tue Oct 07 2025"
// Shows only date portion — no time

console.log(typeof myDate);           
// 👉 Output: "object"
// ⚠️ Dates in JS are objects, not primitive types


// ------------------------------
// Example 2️⃣ : Creating Custom Dates
// ------------------------------

// Syntax → new Date(year, monthIndex, day, hours, minutes, seconds)
// ⚠️ Note: monthIndex starts from 0 (Jan = 0, Feb = 1, ...)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); 
// 👉 Output: "Mon Jan 23 2023"

// Example with time:
let myCreatedDateTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTime.toLocaleString());
// 👉 Output: "1/23/2023, 5:03:00 AM"


// ------------------------------
// Example 3️⃣ : Date from String Formats
// ------------------------------
let fromString1 = new Date("2023-01-23")   
console.log(fromString1.toDateString());  
// 👉 Output: "Mon Jan 23 2023"
// ISO format (YYYY-MM-DD) → treated as UTC

let fromString2 = new Date("01-23-2023")   
console.log(fromString2.toDateString());  
// 👉 Output: "Mon Jan 23 2023"
// US format (MM-DD-YYYY) → treated as local time


// ------------------------------
// Example 4️⃣ : Timestamps (milliseconds since 1970)
// ------------------------------
let myTimeStamp = Date.now()
console.log(myTimeStamp);
// 👉 Output Example: 1738920405678 (milliseconds)

// Convert timestamp → date
console.log(new Date(myTimeStamp).toLocaleString());
// 👉 Output Example: "10/7/2025, 10:06:45 PM"

// Get timestamp of a specific date:
console.log(myCreatedDate.getTime());
// 👉 Output Example: 1674412200000


// ------------------------------
// Example 5️⃣ : Date Components (Getters)
// ------------------------------
let current = new Date()
console.log(current.getFullYear());  // Output: 2025
console.log(current.getMonth());     // Output: 9 (October → 9)
console.log(current.getDate());      // Output: 7
console.log(current.getDay());       // Output: 2 (0=Sun, 1=Mon, 2=Tue)
console.log(current.getHours());     // Output: current hour (0–23)
console.log(current.getMinutes());   // Output: current minutes

// ------------------------------
// Example 6️⃣ : Formatting Dates 
// ------------------------------
console.log(current.toLocaleString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}));
// 👉 Output Example: "Tuesday, 7 October 2025"
// Custom localized format


// ------------------------------
// 💬 Interview Tips
// ------------------------------
// ✅ 'Date' object in JS is mutable (you can change its values).
// ✅ Month index starts from 0 → January.
// ✅ Date.now() gives milliseconds since 1970-01-01.
// ✅ toLocaleString() is best for user-facing date/time formatting.
// ✅ Use getTime() to compare dates (as numbers).
// ✅ ISO string (YYYY-MM-DD) is the most consistent format.
  