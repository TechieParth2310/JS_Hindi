// 🧠 Memory in JavaScript

// JS has 2 main memory types:

// 1️⃣ Stack (Primitive types)
// - Stores values directly (copy by value)
// - Fast access
// - Example:
    let x = 10;
    let y = x;  // copy of value

    let myYoutubename = "hiteshchoudhary";

    let anothername = myYoutubename;
    anothername = "chaiaurcode";

    console.log(myYoutubename);
    console.log(anothername);


// 2️⃣ Heap (Non-Primitive / Reference types)
// - Stores objects & arrays (reference by address)
// - Example1:
    let obj1 = { name: "Parth" };
    let obj2 = obj1;  // both refer to same memory

 // 🧩 Changing obj2 also changes obj1
 
 // - Example2:
    let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);




// ⚙️ Garbage Collection
// - JS automatically removes unreferenced data from memory
// - Managed by the JS engine (e.g., V8)
